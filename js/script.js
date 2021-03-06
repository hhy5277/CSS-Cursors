var CSSCursors = CSSCursors || {};

window.onload = function() { 
	CSSCursors.loadCursors();
}

/**
 * Cursor Store
 *
 * Encapsules the different cursor properties in CSS along with browser that support the property
 * in an array of JSON.
 *
 * an entry needs 'name' property to get displayed, other properties are optional if no  value for browser 
 * is set the browser will be indicated as not supported.
 */

CSSCursors.cursors = [
	'{ "name" : "auto", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "default", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "none", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "pointer", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "progress", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "help", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "text", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "cell", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "crosshair", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "alias", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "context-menu", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "vertical-text", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 0, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "copy", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "move", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "no-drop", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 0, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "not-allowed", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 0, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "all-scroll", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 0, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "col-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 0, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "row-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 0, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "nesw-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "nwse-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "n-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "e-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "s-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "w-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "ns-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "ew-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "ne-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "nw-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "sw-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "se-resize", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "wait", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 1, "edge" : 1}',
	'{ "name" : "grab", "chrome" : 0, "firefox" : 1, "safari":0, "opera" : 1, "internet-explorer" : 0, "edge" : 0}',
	'{ "name" : "grabbing", "chrome" : 0, "firefox" : 1, "safari":0, "opera" : 1, "internet-explorer" : 0, "edge" : 0}',
	'{ "name" : "zoom-in", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 0, "edge" : 1}',
	'{ "name" : "zoom-out", "chrome" : 1, "firefox" : 1, "safari":1, "opera" : 1, "internet-explorer" : 0, "edge" : 1}'
];

/**
 * Cursor Loader
 *
 * Called on page load, parses the Array, extract data and transfer to createNode to make an entry.
 * returned node is appended to the div.
 */
CSSCursors.loadCursors = function() {
	var cursorItems = document.getElementById("cursorItems");
	var loadingContainer = document.getElementById("loading-container");
	loadingContainer.parentElement.removeChild(loadingContainer);
	var sizeOfcursorItems = CSSCursors.cursors.length;
	var end = 0;
	for ( var cursor in CSSCursors.cursors ) {
		if ( (sizeOfcursorItems-1 ) == cursor) {
			end = 1;
		}
		cursorItems.appendChild(CSSCursors.createNode(CSSCursors.cursors[cursor], cursor, end));
	}
}

/**
 * Creates New Node
 *
 * Cretes new node for a property and sets the cursor value to it.
 */
CSSCursors.createNode = function(cursorData, counter, end ) {
	var cursorData =  JSON.parse(cursorData);
	if ( cursorData['name'] ) {
		var newCursorNode = document.createElement("div");
		var browserSupport = ''; 	// Initilize to null
		if ( end == 1 ) {
			newCursorNode.setAttribute("class", "grid column small-4 end");
		} else {
			newCursorNode.setAttribute("class", "grid column small-4");
		}

		if ( cursorData['chrome']  )  {
			browserSupport += '<li class="active"><i class="fa fa-chrome"></i></li>';
		} else {
			browserSupport += '<li ><i class="fa fa-chrome"></i></li>';
		}

		if ( cursorData['firefox']  )  {
			browserSupport += '<li class="active"><i class="fa fa-firefox"></i></li>';
		} else {
			browserSupport += '<li ><i class="fa fa-firefox"></i></li>';
		}

		if ( cursorData['safari']  )  {
			browserSupport += '<li class="active"><i class="fa fa-safari"></i></li>';
		} else {
			browserSupport += '<li ><i class="fa fa-safari"></i></li>';
		}

		if ( cursorData['opera']  )  {
			browserSupport += '<li class="active"><i class="fa fa-opera"></i></li>';
		} else {
			browserSupport += '<li ><i class="fa fa-opera"></i></li>';
		}

		if ( cursorData['internet-explorer']  )  {
			browserSupport += '<li class="active"><i class="fa fa-internet-explorer"></i></li>';
		} else {
			browserSupport += '<li ><i class="fa fa-internet-explorer"></i></li>';
		}

		if ( cursorData['edge']  )  {
			browserSupport += '<li class="active"><i class="fa fa-edge"></i></li>';
		} else {
			browserSupport += '<li ><i class="fa fa-edge"></i></li>';
		}

		cursorStyle = 'cursor: -moz-'+ cursorData['name'] +'; cursor: -webkit-'+ cursorData['name'] +'; cursor:'+ cursorData['name'] +';';

		newCursorNode.innerHTML = '<div class="description-wrap" data-clipboard-action="copy" data-clipboard-target=".cursor' + counter + '" style="' + cursorStyle + '" ><div class="description"><div class="holder">Cursor : ' + cursorData['name']   + '</div><div class="toCopy cursor' + counter + '">' + cursorStyle + '</div></div></div> <ul class="browserSupport">' + browserSupport + '</ul>';
		return newCursorNode;

	} else {
		return 0;
	}
	
}
