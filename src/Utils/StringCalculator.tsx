export function add(numbers: string): number {
    if (numbers === "") {
        return 0;
    }
    let delimiter = /[,\\n]+/; 
    let numbersToAdd = numbers;

    if (numbers.startsWith("//")) {
        const endOfDelimiterLine = numbers.indexOf("\\n");
        const delimiterLine = numbers.substring(2, endOfDelimiterLine);
        delimiter = new RegExp(`[,\\n${delimiterLine}]`); 
        numbersToAdd = numbers.substring(endOfDelimiterLine + 2);
        console.log(endOfDelimiterLine, delimiterLine, delimiter)
    }

    const numArray = numbersToAdd.split(delimiter).map((val)=>val.split('\\n')).flat();

    let sum = 0;

    for (const num of numArray) {
        sum += Number(num);
    }

    return sum;
}

