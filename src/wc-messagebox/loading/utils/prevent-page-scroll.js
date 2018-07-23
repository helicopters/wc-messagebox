let  preventPageScroll = e => {
	return e.preventDefault();
};

export default {
	prevent () {
		document.addEventListener('touchmove', preventPageScroll, false);
	},
	recover () {
		document.removeEventListener('touchmove', preventPageScroll, false);
	}	
}
