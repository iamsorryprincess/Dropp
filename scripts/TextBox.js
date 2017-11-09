window.onload = function() {
	
	function TextBox(options) {
		let field = options.field;
		let hint = options.hint;
		field.onfocus = focusOn;
		field.onblur = focusOff;

		function focusOn() {
			hint.classList.add("contact__hint_active");
		}

		function focusOff() {
			if (field.value === "") hint.classList.remove("contact__hint_active");
		}
	}

	var nameTextBox = new TextBox({field: document.getElementsByClassName("contact__text-field")[0],
								hint: document.getElementsByClassName("contact__hint")[0]});
	var emailTextBox = new TextBox({field: document.getElementsByClassName("contact__text-field")[1],
								hint: document.getElementsByClassName("contact__hint")[1]});
	var messageTextBox = new TextBox({field: document.getElementsByClassName("contact__text-field")[2],
								hint: document.getElementsByClassName("contact__hint")[2]});
};