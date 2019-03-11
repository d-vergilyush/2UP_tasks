
window.addEventListener('DOMContentLoaded', function () {
	console.log('%c%s', 'color: #C12525; font: 1.1rem Tahoma;', `Часть 1:`);
	// Задание 1.1:
	function returnFirstArgument(argument) {
		return argument;
	}
	console.log('%c%s', 'color: #4CC25D; font: 0.9rem Tahoma;', `Задание 1:`);
	console.log(returnFirstArgument('я - аргумент'));
	
	//______________________________________________________

	// Задание 1.2:
	// function sumWithDefaults(a, b) {
	// 	if (b === undefined) {
	// 		b = 100;
	// 	}
	// 	return a + b;
	// }

	// function sumWithDefaults(a, b) {
	// 	b = b || 100;
	// 	return a + b;
	// }

	function sumWithDefaults(a, b=100) {
		return a + b;
	}
	console.log('%c%s', 'color: #4CC25D; font: 0.9rem Tahoma;', `Задание 2:`);
	console.log(sumWithDefaults(10, 50));
	console.log(sumWithDefaults(10));

	//______________________________________________________

	// Задание 1.3:
	function returnFnResult(fn) {
		return fn();
	}
	console.log('%c%s', 'color: #4CC25D; font: 0.9rem Tahoma;', `Задание 3:`);
	console.log(returnFnResult(() => 'привет'));

	//______________________________________________________

	// Задание 1.4:
	function returnCounter(number) {
		return () => ++number;
	}

	let f = returnCounter(10);
	console.log('%c%s', 'color: #4CC25D; font: 0.9rem Tahoma;', `Задание 4:`);
	console.log(f());
	console.log(f());
	console.log(f());

	//______________________________________________________

	// Задание 1.5:

	// function returnArgumentsArray() {
	// 	let args = [];
	// 	for (let i = 0; i < arguments.length; i++) {
	// 		args.push(arguments[i]);
	// 	}
	// 	return args;
	// }

	function returnArgumentsArray() {
		let args = [].slice.call(arguments);
		return args;
	}

	let argumentsArray = returnArgumentsArray(5, 50, 100, 18, 10, 20, 'текст');
	console.log('%c%s', 'color: #4CC25D; font: 0.9rem Tahoma;', `Задание 5:`);
	console.log(argumentsArray);

	//______________________________________________________

	// Задание 1.6:


	// function bindFunction(fn) {
	// 	let args = [].slice.call(arguments, 1);
	// 	return () => {
	// 		return fn.apply(null, args);
	// 	};
	// }

	function bindFunction(fn, ...args) {
		return () => {
			return fn(...args);
		};
	}

	let newSum = bindFunction(concatArguments, 'здесь', 3, 'аргумента');
	console.log('%c%s', 'color: #4CC25D; font: 0.9rem Tahoma;', `Задание 6:`);
	console.log(newSum());

	function concatArguments() {
		let result = [].join.call(arguments, ' ');
		return result;
	}

});