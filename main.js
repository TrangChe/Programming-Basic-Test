


function generateNumberToString(number) {
    let isLessThan1000 = number < 1000
    let outPut;

    if (isLessThan1000) {
        const wordList = [
            "", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"
        ];
        let numOrigin = parseInt(number, 10)
        let num = number.toString().split('')


        if (number.toString().length === 1) {

            const elemen = num.map(function (element) {
                return element
            });
            outPut = (wordList[+elemen[0]] === "" ? "Không" : wordList[+elemen[0]])

        };

        if (number.toString().length === 2) {

            const elemen = num.map(function (element) {
                return element
            });

            if (wordList[+elemen[0]] === "một" && wordList[+elemen[1]] === "") {
                outPut = "mười";
            } else if (wordList[+elemen[0]] === "một" && wordList[+elemen[1]] === "năm") {
                outPut = "mười lăm"
            } else if (wordList[+elemen[0]] === "một" && wordList[+elemen[1]] !== "") {
                outPut = "mười " + wordList[+elemen[1]];
            } else if (wordList[+elemen[0]] !== "một" && wordList[+elemen[1]] === "một") {
                outPut = wordList[+elemen[0]] + " mươi mốt";
            } else {
                outPut = wordList[+elemen[0]] + " mươi " + (wordList[+elemen[1]] === 'năm' ? 'lăm' : wordList[+elemen[1]]);
            }
        };

        if (number.toString().length === 3) {
            const elemen = num.map(function (element) {
                return element
            });


            if (wordList[+elemen[1]] === "" && wordList[+elemen[2]] === "") {

                outPut = wordList[+elemen[0]] + " trăm";
            } else if (wordList[+elemen[1]] === "" && wordList[+elemen[2]] !== "") {

                outPut = wordList[+elemen[0]] + " trăm linh " + wordList[+elemen[2]];
            } else if (wordList[+elemen[0]] !== "" && wordList[+elemen[2]] === "năm" && wordList[+elemen[1]] === "một") {

                outPut = wordList[+elemen[0]] + " trăm " + " mười lăm";//+ wordList[+elemen[1]]
            } else if (wordList[+elemen[2]] === "một" && wordList[+elemen[1]] !== "" && wordList[+elemen[2]] !== "") {

                outPut = wordList[+elemen[0]] + " trăm " + wordList[+elemen[1]] + " mươi mốt";
            } else if (wordList[+elemen[0]] !== "" && wordList[+elemen[1]] !== "một" && wordList[+elemen[2]] === "năm") {
                outPut = wordList[+elemen[0]] + " trăm " + wordList[+elemen[1]] + " mươi lăm"
            }
            else {

                outPut = wordList[+elemen[0]] + " trăm mười";
            }

        }


    } else {
        outPut = 'number must < 1000'
    }
    return outPut

}

console.log('101: ', generateNumberToString(101))
console.log('231: ', generateNumberToString(231))
console.log('19: ', generateNumberToString(19))
console.log('10: ', generateNumberToString(10))
console.log('0: ', generateNumberToString(0))



