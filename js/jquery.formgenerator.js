(function($) {
	$.fn.formgenerator = function(options) {
		var version = "0.4",
			opts = $.extend({
				'fileext'	: '.tpl',
				'generator'	: 'generator.tpl',
				'path'		: './templates',
				'theme'		: 'bootstrap',
				/**
				 * List of tokens
				 * optional value: markup if token is missing
				 */
				'tokens'	: [
					"TEXT_LABEL",
					"FIELD_NAME",
					"FIELD_ID",
					"FIELD_VALUE",
					"FIELD_PLACEHOLDER",
					"FIELD_REQUIRED",
					"PATTERN",
					"TEXT_REQUIRED",
					"TEXT_INVALID"
				],
				// Logging verbosity
				'verbose'	: true
			}, options);

		return this.each(function() {
			var $this 		= $(this),
				$form 		= $(this.form),
				fileext		= opts.fileext ? opts.fileext : ".tpl",
				generator	= opts.generator,
				path 		= opts.path,
				theme 		= opts.theme,
				tokens		= opts.tokens,
				baseurl		= path + "/" + theme + "/";

			if (!($form || $form.length))
				$form = $this;

			function log(msg) {
				if (!window.console || opts.verbose === false)
					return;
				
				if (typeof msg !== "string")
					console.dir(msg);
				else
					console.log(msg);
			}

			function getTemplate(template, callback) {
				log("getTemplate() called with argument: " + template);

				// Get Template Contents
				$.get(baseurl + template + fileext + "?rand=" + Math.random(), function(data, textStatus) {
					log("getTemplate() callback returned");
					log("data: " + data)
					log("textStatus: " + textStatus);
					if (!data)
						return alert("Template " + template + "could not be loaded! Error was: " + textStatus);

					if (typeof callback === "function")
						return callback(data);
				});
			}

			function startConfigurator(html) {
				// Insert generator html
				if (typeof html !== "undefined")
					$this.prepend(html);

				var $configurator = $this.find(".formgenerator-configurator");

				// Sync source code to hidden textarea for whatever reason
				$configurator.find(".field-source-encoded").on("change", function() {
					$configurator.find(".field-source").val($(this).val());
				});
				$configurator.find(".field-source").on("change", function() {
					$configurator.find(".field-source-cache").val($(this).val());
				});

				// Bind button clicks
				$("button[data-template]").on("click", function() {
					var button_text = $(this).text(),
						template = $(this).attr("data-template");
					log("Event Button clicked: " + button_text);
					log("Template: " + template);
					getTemplate(template, function(data, textStatus) {
						log("$configurator: " + $configurator.length);
						$configurator.fadeOut('fast', function() {
							var $preview = $configurator.find(".field-preview"),
								$source  = $configurator.find(".field-source")
								$cache   = $configurator.find(".field-source-cache");

							$configurator.find("legend").eq(0).html('Configure ' + button_text);
							$preview.html(data);
							$source.val(data);
							$cache.val(data);

							// Change events for token replacement
							var x = 0;
							for (x; x < tokens.length; x ++) {
								var processTemplate = (function(tokens, x) {
									return function() {
										var template = $source.val();
										log("Replace '" + tokens[x] + "' with '" + $(this).val() + "'");
										template = template.replace(tokens[x], $(this).val());
										log("Processed template: " + template);
										$preview.html(template);
									}
								})(tokens, x);
								var saveTemplate = function() {
									$source.val($preview.html());
									$cache.val($preview.html());
								}
								log("Bind events to: " + '[name="' + tokens[x] + '"]');
								$configurator.find('[name="' + tokens[x] + '"]').on("click", saveTemplate);
								$configurator.find('[name="' + tokens[x] + '"]').on("blur", saveTemplate);
								$configurator.find('[name="' + tokens[x] + '"]').on("keyup", processTemplate);
							}

							$configurator.fadeIn('fast');
						});
					});
					return false;
				});
			}

			(function init() {
				log("init() called");
				// Build generator from template
				$.get(baseurl + generator, function(data, textStatus) {
					log("init() callback returned");
					log("data: " + data);
					log("textStatus: " + textStatus);
					if (!data)
						return alert("Generator could not be loaded! Error was: " + textStatus);

					// Setup
					startConfigurator(data);
				});
			})();
		});
	}

	$(function() {
		$(".formgenerator").formgenerator();
	});
}(window.jQuery));