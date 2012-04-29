<!-- Controls for HTML Form Generator -->
<div class="modal hide">
	<div class="modal-header"></div>
	<div class="modal-body">
		<div class="field-options"></div>
		<div class="field-preview"></div>
		<div class="control-group">
			<label class="control-label">Source code</label>
			<div class="controls">
				<textarea class="field-source input-xlarge" name="field-source" rows="15"></textarea>
			</div>
		</div>
	</div>
	<dic class="modal-footer">
		<div class="form-actions">
			<button class="btn btn-primary">Save</button>
			<button class="btn" data-dismiss="modal">Abbrechen</button>
	</div>
</div>
<legend>Add Widget</legend>
<div class="control-group">
	<label>Text fields</label>
	<div class="row">
		<button class="span2 btn btn-primary" data-template="input_text">Input [type=text]</button>
		<button class="span2 btn btn-primary" data-template="input_number">Input number</button>
		<button class="span2 btn btn-primary" data-template="input_password">Input password</button>
	</div>
</div>
<div class="control-group">
	<label>Checkboxes & radio buttons</label>
	<div class="row">
		<button class="span3 btn btn-primary" data-template="input_checkbox">Checkbox</button>
		<button class="span3 btn btn-primary" data-template="input_radio">Radio button</button>
	</div>
</div>
<div class="control-group">
	<label>Groups of Checkboxes & radio buttons</label>
	<div class="row">
		<button class="span3 btn btn-primary" data-template="group_checkbox">Checkbox group</button>
		<button class="span3 btn btn-primary" data-template="group_radio">Radio button group</button>
	</div>
</div>
<div class="control-group">
	<label>Selectboxes</label>
	<div class="row">
		<button class="span3 btn btn-primary" data-template="select">Selectbox</button>
		<button class="span3 btn btn-primary" data-template="select_multiple">Multiple Selectbox</button>
	</div>
</div>
<div class="control-group">
	<label>Others</label>
	<div class="row">
		<button class="span3 btn btn-primary" data-template="textarea">Textarea</button>
		<button class="span3 btn btn-primary" data-template="textarea_tinymce">TinyMCE (just kidding)</button>
	</div>
</div>
<div class="control-group">
	<label>Bootstrap specific</label>
	<div class="row">
		<button class="span3 btn btn-primary" data-template="button">Button</button>
		<button class="span3 btn btn-primary" data-template="button_group">Button group</button>
	</div>
</div>