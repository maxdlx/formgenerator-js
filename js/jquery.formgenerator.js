(function($) {
	$.fn.formgenerator = function(options) {
		var version = "0.5",
			opts = $.extend({
				'fileext'	: '.tpl',
				'generator'	: 'generator.tpl',
				'path'		: './templates',
				'theme'		: 'bootstrap',
				'verbose'	: true	// false turns off logging
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

			function processTemplate(template, data) {
				log("processTemplate() called");
				log("data: ");
				log(data);
				var x,
					html = "",
					$template = $(template);
				for (x in data) {
					if (data.hasOwnProperty(x)) {
						if (data[x]) {
							if (x === "label") {
								$template.find("label.control-label").html(data[x]);
								continue;
							}
							if (x === "id")
								$template.find("label.control-label").attr("for", data[x]);
							$template.find("input, select, textarea").attr(x, data[x]);
						}
					}
				}
				html = $template.html();
				log("processTemplate() returns with: ");
				log(html);
				return html;
			}

			function getTemplateData($configurator) {
				var val,
					name,
					templateData = {};
				log("getTemplateData() called");
				$configurator.find('[name^="var-"]').each(function() {
					var $this = $(this);
					val = $this.is(':checkbox') ? $this.prop('checked') : $this.val();
					name = this.name.replace(/^var\-/, '');
					templateData[name] = val;
				});
				log("templateData: ");
				log(templateData);
				return templateData;
			}

			function startConfigurator(html) {
				// Insert generator html
				if (typeof html !== "undefined")
					$this.prepend(html);

				var $configurator = $this.find(".formgenerator-configurator");

				// Bind button clicks
				$("button[data-template]").on("click", function() {
					var button_text = $(this).text(),
						template = $(this).attr("data-template");
					log("Event Button clicked: " + button_text);
					log("Template: " + template);
					getTemplate(template, function(template, textStatus) {
						log("$configurator: " + !!$configurator.length);
						$configurator.fadeOut('fast', function() {
							var $preview = $configurator.find(".field-preview"),
								$source  = $configurator.find(".field-source");

							$configurator.find("legend").eq(0).html('Configure ' + button_text);
							// Update preview and source view
							function updateCallback() {
								log("updateCallback() called");
								var processedTemplate = processTemplate(template, getTemplateData($configurator));
								$source.val(processedTemplate);
								$preview.html(processedTemplate);
							}
							updateCallback();
							// Bind events on keyup, click, etc. to update preview and source view
							$configurator.find('[name^="var-"]').on("keyup", updateCallback);
							$configurator.find('[name^="var-"]').on("click", updateCallback);
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