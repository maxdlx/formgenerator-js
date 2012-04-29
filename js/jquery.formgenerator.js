(function($) {
	$.fn.formgenerator = function(options) {
		var version = "0.3",
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
					"TEXTLABEL",
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
					if (!data)
						return alert("Generator could not be loaded! Error was: " + textStatus);

					$this.prepend(data);
					$modal = $this.find(".modal"),

					// Bind generator functions
					$("button[data-template]").on("click", function() {
						var button_text = $(this).text(),
							template = $(this).attr("data-template");
						log("Event Button clicked: " + button_text);
						log("Template: " + template);
						getTemplate(template, function(data, textStatus) {
							$modal.find(".modal-header").html('<h3>New ' + button_text + '</h3>');
							$modal.find(".modal-body .field-preview").html(data);
							$modal.find(".modal-body .field-source").val(data);
							$modal.modal("show");
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