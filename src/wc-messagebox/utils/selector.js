export default selector => {
	// return document.querySelectorAll(selector);
	let selectors = document.querySelectorAll(selector);
	return selectors[selectors.length - 1];
}