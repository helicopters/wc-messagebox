// 暂时的, 以后有更好的方法再做修改
export default {
	mounted () {
		let vm = this;
        window.addEventListener('hashchange', function(e) {
        	console.log('trigger hashchange');
        	vm.show = false;
        }, false);
        window.onpopstate = function(){
        	console.log('trigger popstate');
           	vm.show = false;
        }
        window.onpagehide = function(){
        	console.log('trigger pagehide');
            vm.show = false;
        }
	}
}