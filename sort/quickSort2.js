const list = [1,2,3,4,5,6,7,8]

// 快排的非递归实现
function quickSort(list) {
	const stack = []
	let left = 0, right = list.length - 1
	stack.push(left, right)

	function sort(start, end) {
		let flag = list[start]
		let i = start
		let j = end
		while(i < j) {
			for(; i < j; j--) {
				if(list[j] < flag) {
					list[i++] = list[j]
					break;
				}
			}
			for(; i < j; i++) {
				if(list[i] > flag) {
					list[j--] = list[i]
					break;
				}
			}
		}
		list[i] = flag
		return i
	}

	while(stack.length) {
		right = stack.pop()
		left = stack.pop()
		console.log(list)
		if(left < right) {
			middle = sort(left, right)
			stack.push(left, middle - 1, middle + 1, right)
		}
	}
}
quickSort(list)