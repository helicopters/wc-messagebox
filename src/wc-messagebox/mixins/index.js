// fix 路由切换时弹窗不消失的 bug
export default {
	mounted () {
        let listener = () => {
            this.show = false;
        }
        window.addEventListener('hashchange', listener);
        window.addEventListener('popstate', listener);
        window.addEventListener('pagehide', listener);

        // fix 滚动穿透bug
        setTimeout(function(){
	        let mask = document.querySelector('.wc-messagebox');
	        let pop = document.querySelector('.wc-messagebox-popup');

	        let preventScroll = e => e.preventDefault();
            // toast 是没有 mast 和 pop 的
            if (mask && pop) {
                mask.addEventListener('touchmove', preventScroll, false);
                pop.addEventListener('touchmove', preventScroll, false);                
            }
        },200);
	}
}