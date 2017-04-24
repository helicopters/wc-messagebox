/*
	在实际使用中有时 就是不想要标题, 如果按照以前的方式, 那么
	需要传入: title: ' ', 这样不舒服
	所以增加一个判断: 只要用户配置存在某个字段且不等于 undefined, 那么就使用
	用户提供的字段值
*/
var isExists = val => {
	if (typeof val !== 'undefined') {
		return true;
	}
	return false;
}

export default (src, target) =>{
	for (let key in target) {
		src[key] = isExists(target[key]) ? target[key] : src[key];
	}
}