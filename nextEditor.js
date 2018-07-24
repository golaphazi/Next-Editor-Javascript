
/*Set font */
var fontArrya = ["Times New Roman", "Consolas", "Tahoma", "Monospace", "Cursive", "Sans-Serif", "Calibri", "Arial"];
var fontHthl = document.getElementById('fontChanger');
for(fon = 0; fon < fontArrya.length; fon++){
	fontHthl.innerHTML += "<option value='"+fontArrya[fon]+"'> "+fontArrya[fon]+" </option>";
}

/** for font Family **/
var fonts = document.querySelectorAll("select#fontChanger > option");
for(var face = 0; face < fonts.length; face++){
	fonts[face].style.fontFamily = fonts[face].value;
}


/*set font size*/
var fontSiz = document.getElementById('fontSizeChanger');
for(var siz = 1; siz < 10; siz++){
	fontSiz.innerHTML += "<option value='"+siz+"'> "+siz+" </option>";
}

/*set font heading*/
var fontHead = document.getElementById('headingChanger');
for(var head = 1; head < 7; head++){
	fontHead.innerHTML += "<option value='h"+head+"'> H"+head+" </option>";
}

/** for iframe js**/
window.addEventListener("load", function(){
	var editor = theNEXTeditor.document;
	editor.designMode = "on";
	
	//pasteTextAreaData();
	
	/*For bold text*/
	boldButton.addEventListener("click", function(){
		editor.execCommand("Bold", false, null);
	}, false);
	
	/*For italic text*/
	italicButton.addEventListener("click", function(){
		editor.execCommand("Italic", false, null);
	}, false);
	
	/*Text underline*/
	underlineButton.addEventListener("click", function(){
		editor.execCommand("Underline", false, null);
	},false);
	
	/*Text left*/
	leftButton.addEventListener("click", function(){
		editor.execCommand("JustifyLeft", false, null);
	},false);
	
	/*Text Center*/
	centerButton.addEventListener("click", function(){
		editor.execCommand("JustifyCenter", false, null);
	},false);
	
	/*Text Right*/
	rightButton.addEventListener("click", function(){
		editor.execCommand("JustifyRight", false, null);
	},false);
	
	/*For super lavel text*/
	supButton.addEventListener("click", function(){
		editor.execCommand("Superscript", false, null);
	}, false);
	
	
	/*For sub lavel text*/
	subButton.addEventListener("click", function(){
		editor.execCommand("Subscript", false, null);
	}, false);
	
	
	/*For strikeButton text*/
	strikeButton.addEventListener("click", function(){
		editor.execCommand("Strikethrough", false, null);
	}, false);
	
	/*For Order list text*/
	orderedListButton.addEventListener("click", function(){
		editor.execCommand("InsertOrderedList", false, "newOL", + Math.round(Math.random() * 1000));
	}, false);
	
	/*For Un Order list text*/
	unorderedListButton.addEventListener("click", function(){
		editor.execCommand("InsertUnorderedList", false, "newUL", + Math.round(Math.random() * 1000));
	}, false);
	
	
	/*color text*/
	fontColorButton.addEventListener("change", function(event){
		editor.execCommand("ForeColor", false, event.target.value);
	}, false);
	
	/*back color text*/
	highlightButton.addEventListener("change", function(event){
		editor.execCommand("BackColor", false, event.target.value);
	}, false);
	
	/*For font family change*/
	fontChanger.addEventListener("change", function(event){
		editor.execCommand("FontName", false, event.target.value);
	}, false);
	
	/*For font size change*/
	fontSizeChanger.addEventListener("change", function(event){
		editor.execCommand("FontSize", false, event.target.value);
	}, false);
	
	/** For create link*/
	linkButton.addEventListener("click", function(){
		var url = prompt("Enter a URL", "http://");
		editor.execCommand("CreateLink", false, url);
	}, false);
	
	/*For unlick */
	unLinkButton.addEventListener("click", function(){
		editor.execCommand("Unlink", false, null);
	}, false);
	
	/*For undo button */
	undoButton.addEventListener("click", function(){
		editor.execCommand("undo", false, null);
	}, false);
	
	/*For redo button */
	redoButton.addEventListener("click", function(){
		editor.execCommand("redo", false, null);
	}, false);
	
	/*For Delete */
	deleteButton.addEventListener("click", function(){
		editor.execCommand("delete", false, null);
	}, false);
	
	/*For Paragraph */
	paragraphButton.addEventListener("click", function(){
		editor.execCommand("insertParagraph", false, null);
	}, false);
	
	/*For copy button*/
	copyButton.addEventListener("click", function(event){
		event.preventDefault();
		editor.execCommand("copy");
	}, false);
	
	/*For paste button*/
	pasteButton.addEventListener("click", function(){
		editor.execCommand("paste", false, null);
	}, false);
	
	/*For image button*/
	imageButton.addEventListener("click", function(){
		var url = prompt("Enter a image URL", "http://");
		editor.execCommand("insertImage", false, url);
	}, false);
	
	/*For image button*/
	fileButton.addEventListener("click", function(event){
		editor.execCommand("insertInputFileUpload", false, event.target.value);
	}, false);
	
	/*For Paragraph */
	headingChanger.addEventListener("click", function(event){
		editor.execCommand("heading", false, event.target.value);
	}, false);
	
	/*For Increace Text Size */
	increaseButton.addEventListener("click", function(){
		editor.execCommand("increaseFontSize", false, "");
	}, false);
	
	idecreaseButton.addEventListener("click", function(){
		editor.execCommand("decreaseFontSize", false, "");
	}, false);
	
	
	
}, false);

/*********** text area paste data*******/
function pasteTextAreaData(){
	var textArea = document.getElementById('repaly');
	window.frames['theNEXTeditor'].document.body.innerHTML = textArea.value;
}

theNEXTeditor.addEventListener("keyup", function(){
	copyTextArea();
}, false);

theNEXTeditor.addEventListener("mouseout", function(){
	copyTextArea();
}, false);

theNEXTeditor.addEventListener("click", function(){
	copyTextArea();
}, false);

function copyTextArea(){
	var textArea = document.getElementById('repaly');
	textArea.innerHTML = window.frames['theNEXTeditor'].document.body.innerHTML;
}
