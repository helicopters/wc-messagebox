export default {
	bind (el) {

		/* 这个做寻找的时候的标记量 */
		el.classList.add('wc-messagebox__popup---');

		/* init */
		el.classList.add('wc-messagebox__popup-transition---');
		el.classList.add('wc-messagebox__popup-diff---');

		/* 移除以触发变化*/
		setTimeout(()=>{
			el.classList.remove('wc-messagebox__popup-diff---');
		}, 50)
	}
}
