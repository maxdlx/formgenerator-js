
<div class="control-group">
<label for="up_login" class="control-label">Benutzername</label>
<div class="controls">
	<input name="up_login" id="up_login" type="text" value="maxdlx" required data-required="Bitte geben Sie einen Benutzernamen ein.">
	</div>
</div>
<div class="control-group">
	<label for="up_email" class="control-label">Ihre E-Mail Adresse</label>
	<div class="controls">
		<input name="up_email" id="up_email" type="email" value="ch@koeln.de" required data-invalid="Bitte überprüfen Sie Ihre Email-Adresse.">
	</div>
</div>
<div class="control-group">
	<label for="up_website" class="control-label">Website</label>
	<div class="controls">
		<input name="up_website" id="up_website" type="url" value="http://www.maxdlx.de" required data-invalid="Bitte überprüfen Sie die Webaddresse.">
	</div>
</div>
<div class="control-group">
	<label for="up_minmax" class="control-label">Min/Maxlength</label>
	<div class="controls">
		<input name="up_minmax" id="up_minmax" type="text" value="test567" maxlength="7" minlength="5" data-invalid="Bitte geben Sie 5-7 Zeichen ein.">
	</div>
</div>
<div class="control-group">
	<label for="up_number" class="control-label">Min/Max number</label>
	<div class="controls">
		<input name="up_number" id="up_number" type="number" value="2" max="10" min="2" required data-invalid="Bitte geben Sie eine Zahl zwischen 2 und 10 ein.">
	</div>
</div>
<div class="control-group">
	<label for="up_passwort" class="control-label">Passwort</label>
	<div class="controls">
		<input name="up_passwort" id="up_passwort" type="password" value="******" required minlength="6" maxlength="20" data-invalid="Bitte geben Sie ein gültiges Passwort (6-20 Zeichen) ein.">
	</div>
</div>
<div class="control-group">
	<label for="up_passwort2" class="control-label">Passwort wiederholen</label>
	<div class="controls">
		<input name="up_passwort2" id="up_passwort2" type="password" value="******" required minlength="6" maxlength="20" rel="up_passwort" data-invalid="Keine Übereinstimmung! Bitte wiederholen Sie das Passwort.">
	</div>
</div>
<div class="control-group">
	<label for="up_checkbox" class="control-label">Checkbox</label>
	<div class="controls">
		<input name="up_checkbox" id="up_checkbox" type="checkbox" value="1" required data-required="Check all checkboxes!" checked="checked">
	</div>
</div>
<div class="control-group">
	<label for="up_checkboxes" class="control-label">Multiple checkboxes</label>
	<div class="controls">
		<input type="hidden" name="up_checkboxes" required data-required="Check all checkboxes!">
		<label class="checkbox inline"><input name="up_checkboxes" id="up_checkbox2" type="checkbox" value="1"> 1</label>
		<label class="checkbox inline"><input name="up_checkboxes" id="up_checkbox2" type="checkbox" value="2"> 2</label>
		<label class="checkbox inline"><input name="up_checkboxes" id="up_checkbox3" type="checkbox" value="3"> 3</label>
	</div>
</div>
<div class="control-group">
	<label for="up_radios" class="control-label">Radio buttons</label>
	<div class="controls">
		<input type="hidden" name="up_radios" required>
		<label class="radio inline"><input name="up_radios" type="radio" value="1"> Eins</label>
		<label class="radio inline"><input name="up_radios" type="radio" value="2"> Zwei</label>
		<label class="radio inline"><input name="up_radios" type="radio" value="3"> Drei</label>
	</div>
</div>
<div class="control-group">
	<label for="up_selectbox" class="control-label">Dropdown</label>
	<div class="controls">
		<select name="up_selectbox" required>
			<option></option>
			<option value="1" selected="selected">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
		</select>
	</div>
</div>