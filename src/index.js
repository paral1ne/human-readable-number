let numbers = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

module.exports = function toReadable(number) {
    if (number <= 13) {
        return numbers[number];
    } else if (number <= 19) {
        return `${numbers[number - 10]}teen`;
    } else if (number <= 99) {
        return `${numbers[number - (number % 10)]} ${numbers[number % 10]}${
            number % 10 == 0 ? "zero" : ""
        }`;
    } else if (number <= 999) {
        let hundred = number - (number % 100);
        return `${numbers[hundred / 100]} hundred ${
            numbers[number - hundred - (number % 10)]
        }${(number - (number % 10)) % 100 == 0 ? "zero" : ""} ${
            numbers[number % 10]
        }${number % 10 == 0 ? "zero" : ""}`;
    }
};
