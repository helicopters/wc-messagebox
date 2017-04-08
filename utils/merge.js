export default (src, target) =>{
	for (let key in target) {
		src[key] = target[key] ? target[key] : src[key];
	}
}