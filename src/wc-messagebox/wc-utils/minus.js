// 小数的减法
// minus(0.2, 0.1) => 0.1

export default (src, target, base = 1000000) => {
	let _src = src * base;
	let _target = target * base;
	return (_src - _target) / base;
}
