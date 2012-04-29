(function($) {
	$.fn.formgenerator = function(options) {
		var version = "0.1",
			opts = $.extend({
				'verbose'	: false
			}, options);

		return this.each(function() {
			var $this = $(this),
					dragElement,
					dropElement;

			function log(msg) {
				if (! window.console) 
					return;
				
				if (typeof msg !== "string")
					console.dir(msg);
				else
					console.log(msg);
			}

			(function init() {
				// Test for Drag & Drop compatability
				var testresult = (function() {
						var div = document.createElement('div');
						return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
				})();
				log("testresult: " + testresult);
				if (!testresult)
					return alert('Browser does not support drag & drop! Can not continue.');

				// Bind drag events
				$("[draggable]", $this).each(function() {
					log("draggable: " + this.nodeName);
					$(this).on("dragstart", function(e) {
						log("Event dragstart: " + this.nodeName);
						return handleDragStart.apply(this, [e]);
					});
					$(this).on("drag", function() {
						if (opts.verbose)
							log("Event drag: " + this.nodeName);
					});
					$(this).on("dragenter", function() {
						log("Event dragenter: " + this.nodeName);
					});
					$(this).on("dragleave", function() {
						log("Event dragleave: " + this.nodeName);
					});
					$(this).on("dragend", function() {
						log("Event dragend: " + this.nodeName);
					});
				});
				// Bind drop events
				$("form[droppable]").each(function() {
					$(this).on("dragover", function(e) {
						dropElement = this;
						log("Event dragover: " + this.nodeName);
						log("dropElement: " + this);
						return handleDragOver.apply(this, [e]);
					});
					$(this).on("drop", function(e) {
						log("Event drop: " + this.nodeName);
						return handleDrop.apply(this, [e]);
					});
				});
			})();

			function handleDragStart(e) {
				var e = e.originalEvent ? e.originalEvent : e;
				log("handleDragStart() called with parameter:");
				log(e);
				dragElement = this;
				log("dragElement: " + this);
				log(e.dataTransfer);
				e.dataTransfer.effectAllowed = 'copy';
				e.dataTransfer.setData('text/html', this.innerHTML);
			}
			
			function handleDragOver(e) {
				var e = e.originalEvent ? e.originalEvent : e;
				if (e.preventDefault)
					e.preventDefault(); // Necessary. Allows us to drop.

				e.dataTransfer.dropEffect = 'copyMove';

				return false;
			}

			function handleDrop(e) {
				var e = e.originalEvent ? e.originalEvent : e;
				log("handleDrop() called with parameter:");
				log(e);
				if (e.stopPropagation)
					e.stopPropagation();

				$(this).append(e.dataTransfer.getData('text/html'));

				return false;
			}
		});
	}

	$(function() {
		$(".formgenerator").formgenerator();
	});
}(window.jQuery));