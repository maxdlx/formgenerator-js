(function($) {
	$.fn.formgenerator = function(options) {
		var version = "0.2",
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
					"FIELDNAME",
					"FIELDVALUE",
					"FIELDREQUIED",
					"PATTERN",
					"TEXTREQUIRED",
					"TEXTINVALID"
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
				$.get(baseurl + template + fileext, function(data, textStatus) {
					log("getTemplate() callback returned");
					log("data: " + data)
					log("textStatus: " + textStatus);
					if (!data)
						return alert("Template " + template + "could not be loaded! Error was: " + textStatus);

					if (typeof callback === "function")
						return callback(data);
				});
			}

			(function init() {
				log("init() called");
				// Build generator from template
				$.get(baseurl + generator, function(data, textStatus) {
					log("init() callback returned");
					log("data: " + data);
					log("textStatus: " + textStatus);

					if (data)
						$this.prepend(data);
					else
						return alert("Generator could not be loaded! Error was: " + textStatus);

					// Bind generator functions
					$("button[data-template]").on("click", function() {
						var template = $(this).attr("data-template");
						log("Event click: " + this.innerHTML);
						log("Template: " + template);
						getTemplate(template, function(data, textStatus) {
							$form.append(data);
						});
						return false;
					});
				});
			})();
		});
	}

	$(function() {
		$(".formgenerator").formgenerator();
	});
}(window.jQuery));