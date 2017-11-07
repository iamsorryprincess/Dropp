window.onload = function(){
	
	function TextBox(options){
		let field = options.field;
		let text = options.text;
		field.onfocus = focusOn;
		field.onblur = focusOff;

		function focusOn(){
			text.style.top = "1px";
		}

		function focusOff(){
			if (field.value === "") text.style.top = "22px";
		}
	}

	var nameTextBox = new TextBox({field: document.getElementsByClassName("text-box__field")[0],
								text: document.getElementsByClassName("text-box__text")[0]});
	var emailTextBox = new TextBox({field: document.getElementsByClassName("text-box__field")[1],
								text: document.getElementsByClassName("text-box__text")[1]});
	var messageTextBox = new TextBox({field: document.getElementsByClassName("text-box__field")[2],
								text: document.getElementsByClassName("text-box__text")[2]});
};