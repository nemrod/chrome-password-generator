function save_options() {
	var select = document.getElementById('stylesheet');
	var stylesheet = select.children[select.selectedIndex].value;
	localStorage['pwgen_stylesheet'] = stylesheet;

	var status = document.getElementById('status');
	status.innerHTML = 'Saved';
	setTimeout(function() {
		status.innerHTML = 'Save';
	}, 750);
}

function restore_options() {
	var stylesheet = localStorage['pwgen_stylesheet'];
	if (!stylesheet)
		return;
	var select = document.getElementById('stylesheet');
	for(var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
		if (child.value == stylesheet) {
			child.selected = 'true';
			break;
		}
	}
}

function initialize() {
    restore_options();
    document.getElementById('status').addEventListener('click', save_options);
}

window.addEventListener('load', initialize);
