<textarea id="repaly" style="display:none;" name="message_replay"></textarea>
<html>
<head>
<title>Next Editor </title>
<link rel="stylesheet" href="nextEditor.css" type="text/css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
	<div id="textEditor">
		<div id="theRibbon">
			<button id="boldButton" title="Bold"> <b>B</b> </button>
			<button id="italicButton" title="Italic"> <em>I</em> </button>
			<button id="underlineButton" title="Underline"> <u>U</u> </button>
			<button id="supButton" title="Superscript"> X<sup>2</sup> </button>
			<button id="subButton" title="Subscript"> X<sub>2</sub> </button>
			<button id="strikeButton" title="Strikethrough"> <s>abc</s></button>
			<button id="leftButton" title="Left Align"> <i class="fa fa-align-left"></i></button>
			<button id="centerButton" title="Center Align"> <i class="fa fa-align-center"></i></button>
			<button id="rightButton" title="Right Align"> <i class="fa fa-align-right"></i></button>
			<button id="orderedListButton" title="Number List"> <i class="fa fa-list-ol"></i></button>
			<button id="unorderedListButton" title="Bulleted List"> <i class="fa fa-list-ul"></i></button>
			<input type="color" id="fontColorButton" title="Change Font Color"/>
			<input type="color" id="highlightButton" title="Highlight Text"/>
			<select id="fontChanger">				
			</select>
			<select id="fontSizeChanger">
				<option>Size</option>				
			</select>
			
			<button id="undoButton" title="Undo the previous action"> &larr; </button>
			<button id="redoButton" title="Redo"> &rarr; </button>
			
		</div>
		<div id="theRibbon_bottom">
			<button id="deleteButton" title="Delete"> <i class="fa fa-trash"></i> </button>
			<button id="paragraphButton" title="Paregraph"> P </button>
			<button id="copyButton" title="Copy"> <i class="fa fa-copy"></i> </button>
			<button id="pasteButton" title="Paste"> <i class="fa fa-paste"></i> </button>
			<button id="imageButton" title="Insert Image"> <i class="fa fa-image"></i> </button>
			<button id="fileButton" title="File Upload"> <i class="fa fa-file"></i> </button>
			<select id="headingChanger">
				<option>Heading</option>
			</select>
			<button id="linkButton" title="Create Link"> <i class="fa fa-link"></i> </button>
			<button id="unLinkButton" title="Remove Link"> <i class="fa fa-chain-broken"></i> </button>
			
			<button id="increaseButton" title="Increase Font Size"> <i class="fa fa-plus"></i> </button>
			<button id="idecreaseButton" title="Decrease Font Size"> <i class="fa fa-minus"></i> </button>
		</div>
		
		<div id="richTextArea">
			<iframe id="theNEXTeditor" name="theNEXTeditor" frameborder="0"></iframe>
		</div>
		
	</div>

<script type="text/javascript" src="nextEditor.js"></script>
</body>
</html>
