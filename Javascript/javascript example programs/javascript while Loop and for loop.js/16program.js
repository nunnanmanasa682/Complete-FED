let sum = 0;
let num=0
    let temp = num;
    while (temp > 0) {
        // finding the one's digit
        let remainder = temp % 10;
        sum = sum + remainder * remainder * remainder;

        // removing last digit from the number and convert into integer
        temp = parseInt(temp / 10);
    }

    if (sum == num) {
        return `${num} is an Armstrong number`
    }
    else {
        return `${num} is not an Armstrong number`
    }


console.log(CheckArmstrong(153))
console.log(CheckArmstrong(222))
