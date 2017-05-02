// fix 路由切换时弹窗不消失的 bug
export default {
	mounted () {
		let vm = this;
        window.addEventListener('hashchange', function() {
        	vm.show = false;
        }, false);
        window.addEventListener('popstate', function(){
            vm.show = false;
        }, false);
        window.addEventListener('pagehide', function(){
            vm.show = false;
        }, false);
	}
}