<!-- Markup for HTML Form Generator -->
<div class="row">
	<div class="span6">
		<form class="formgenerator-controls form-horizontal" action="javascript:;" novalidate>
			<fieldset>
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
			</fieldset>
		</form>
	</div>
	<div class="span6">
		<form class="formgenerator-configurator hide form-horizontal" action="javascript:;" novalidate>
			<fieldset>
				<legend>&nbsp;</legend>
				<div class="control-group form-inline">
					<div class="row">
						<div class="span6 well-small">
							<input class="input-mini" type="text" name="var-name" placeholder="name=&quot;&quot;">
							<input class="input-mini" type="text" name="var-id" placeholder="id=&quot;&quot;">
						</div>
						<div class="span6 well-small">
							<input class="input-mini" type="text" name="var-label" placeholder="Label text" rel="">
							<input class="input-mini" type="text" name="var-value" placeholder="value=&quot;&quot;">
							<input class="input-mini" type="text" name="var-placeholder" placeholder="placeholder=&quot;&quot;">
							<label class="checkbox"><input type="checkbox" name="var-required" value="1"> required</label>
							<input class="input-mini" type="text" name="var-pattern" value="" placeholder="pattern=&quot;&quot;">
						</div>
					</div>
					<div class="row">
						<div class="span6 well-small">
							<input class="span3" type="text" name="var-data-required" value="" placeholder="data-required=&quot;&quot;">
							<input class="span3" type="text" name="var-data-invalid" value="" placeholder="data-invalid=&quot;&quot;">
						</div>
					</div>
				</div>
			</fieldset>
			<fieldset>
				<div class="well-small">
					<legend>Preview</legend>
					<div class="field-preview"></div>
				</div>
			</fieldset>
			<fieldset>
				<div class="well-small">
					<legend>Source</legend>
					<pre><textarea class="field-source span6" name="field-source" rows="10"></textarea></pre>
					<textarea class="field-source-cache hide" name="field-source-encoded"></textarea>
				</div>
			</fieldset>
		</form>
		<form class="formgenerator-output form-horizontal" action="javascript:;" novalidate>
			<fieldset>
				<legend>Output</legend>
				<div class="control-group">
					<label class="control-label">Example</label>
					<div class="controls">
						<input type="text" name="example" value="" placeholder="Example Input [type=text]">
					</div>
				</div>
	 			<div class="form-actions">
	 				<input class="btn btn-primary btn-right" type="submit" value="Show Source">
	 			</div>
			</fieldset>
		</form>
	</div>
</div>