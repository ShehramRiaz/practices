class MathUtil {
    static sum(...numbers) {
        return numbers.reduce((acc, curr) => acc + curr);
    }
}

console.log(MathUtil.sum(1, 4, 6, 3));

const obj = new MathUtil();
// console.log(obj.sum(3, 4)); // Error