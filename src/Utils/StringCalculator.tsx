export function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }
    const numArray = numbers.split(/[,\\n]+/);
    let sum = 0;

    for (const num of numArray) {
        sum += Number(num);
    }

    return sum;
}

