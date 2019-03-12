
window.addEventListener('DOMContentLoaded', function () {
	console.log('%c%s', 'color: #C12525; font: 1.1rem Tahoma;', `Часть 2:`);
	// Задание 2.1:
	function forEach(array, fn) {

		for (let i = 0; i < array.length; i++) {
			fn(array[i], i, array);
		}
	
	}
	console.log('%c%s', 'color: #4CC25D; font: 0.9rem Tahoma;', `Задание 1:`);
	let arr1 = [29, 8, 0, 1];
	forEach(arr1, (item, i) => {
		console.log(`${i}-й элемент: ${item}`);
	});
	// arr1.forEach((item, i) => {
	// 	console.log(`${i}-й элемент: ${item}`);
	// });
	// ______________________________________________________

	// Задание 2.2:
	function map(array, fn) {
		let newArray = [];

		for (let i = 0; i < array.length; i++) {
			let item = fn(array[i], i, array);
			newArray.push(item);
		}

		return newArray;
	}

	let arr2 = [2, 55, 9, 13];
	let doubleArr = map(arr2, (item) => {
		return item*2;
	});
	console.log('%c%s', 'color: #4CC25D; font: 0.9rem Tahoma;', `Задание 2:`);
	console.log(`doubleArr:`);
	console.log(doubleArr);
	//______________________________________________________

	// Задание 2.3:
	function reduce(array, fn, initial) {
		let i = 0, result = initial || array[i++];
		// console.log(`result: ${result}`);

		for (i; i < array.length; i++) {
			result = fn(result, array[i], i, array);
		}

		return result;
	}

	let arr3 = [10, 20, 30, 40, 50];
	let itemsSum = reduce(arr3, (sum, current) => {
		return sum + current;
	}, 0);
	console.log('%c%s', 'color: #4CC25D; font: 0.9rem Tahoma;', `Задание 3:`);
	console.log(`itemsSum: ${itemsSum}`);

	//______________________________________________________

	// Задание 2.4:
	function upperProps(obj) {
		let arr = [];

		for (let key in obj) {
			key = key.toUpperCase();
			arr.push(key);
		}

		return arr;
	}

	let propsUpper = upperProps({ name: 'Сергей', lastName: 'Петров' });
	console.log('%c%s', 'color: #4CC25D; font: 0.9rem Tahoma;', `Задание 4:`);
	console.log(`propsUpper:`);
	console.log(propsUpper);
	//______________________________________________________

	// Задание 2.5:
	function slice(array, from = 0, to = array.length) {
		var newArray = [];

		if (from < 0 && Math.abs(from) > array.length) {
			from = 0;
		} if (from < 0) {
			from = array.length + from;
		} if (from > array.length) {
			from = array.length;
		}

		if (to < 0 && Math.abs(to) < array.length) {
			to = array.length + to;
		} if (to > array.length) {
			to = array.length;
		}

		for (let i = from; i < to; i++) {
			newArray.push(array[i]);
		}

		return newArray;
	}
	let arr5 = [1, 2, 3, 4, 5, 6];
	// let part = slice(arr5, 4, 5);
	let part = arr5.slice(4,5);
	console.log('%c%s', 'color: #4CC25D; font: 0.9rem Tahoma;', `Задание 5:`);
	console.log(`part:`);
	console.log(part);

	

});