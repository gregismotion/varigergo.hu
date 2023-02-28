function isVisible(element, className) {
	if (element) {
		return element.className.includes(className);
	} else {
		console.log("isVisible: Non-existent element!")
	}
}

function isVisibleByName(name, className) {
	let element = document.getElementById(name);
	if (element) {
		return element.className.includes(className);
	} else {
		console.log("isPopupVisible: Element " + name + " does not exist!")
		return false;
	}
}

function toggleClass(element, className) {
	if (element) {
		element.className = isVisible(element, className) ? element.className.replace(" " + className, "") : element.className + " " + className;
		return isVisible(element, className);
	} else {
		console.log("toggleClass: Non-existent element!");
		return false;
	}
}

function togglePopupClass(popup) {
	return toggleClass(popup, "popup-visible");
}
function toggleScroll() {
	return toggleClass(document.documentElement, "no-scroll");
}

function togglePopup(name) {
	if (name) {
		toggleScroll();
		togglePopupClass(document.getElementById(name))
	} else {
		console.log("showPopup: You need to provide a name!");
	}
}

var isPopupShot = false;
document.addEventListener('mouseout', e => {
    if (!e.toElement && !e.relatedTarget && !isPopupShot && !isVisibleByName('popup-newsletter', "popup-visible")) {
	togglePopup("popup-newsletter");
	isPopupShot = true;
    }
});

