// fix 路由切换时弹窗不消失的 bug
export default {
	mounted () {
        let listener = () => {
            this.show = false;
        }
        window.addEventListener('hashchange', listener);
        window.addEventListener('popstate', listener);
        window.addEventListener('pagehide', listener);
	}
}