function separarParesPorZero(array) {
    if (!array) {
        return -1;
    } else {
        flag = 0;
        while (array.some(item => item % 2 === 0 && item !== 0)) {
            let index = array.findIndex(item => item % 2 === 0 && item !== 0)
            array[index] = 0;
        }
        return array
    }
}

console.log(separarParesPorZero());
console.log(separarParesPorZero([1, 3, 4, 6, 80, 33, 23, 90]));