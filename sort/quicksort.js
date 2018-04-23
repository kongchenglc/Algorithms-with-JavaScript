function quickSort(array) {
	function sort(prev, numsize) {
		var i = prev;
		var j = numsize - 1;
		var flag = array[prev];
		if ((numsize - prev) > 1) {
			while (i < j) {
				for (; i < j; j--) {
					if (array[j] < flag) {
						array[i++] = array[j];　 //a[i] = a[j]; i += 1;
						break;
					};
				}
				for (; i < j; i++) {
					if (array[i] > flag) {
						array[j--] = array[i];
						break;
					}
				}
			}
			array[i] = flag;
			sort(0, i);
			sort(i + 1, numsize);
		}
	}
	sort(0, array.length);
	return array;
}