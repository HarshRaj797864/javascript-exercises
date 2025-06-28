const palindromes = function (str) {

    let str2 = str.toLowerCase().split("").filter((item) => ((item >= 'a' && item <= 'z') || (item >= '0' && item <= '9'))).reverse().join("");
    return str2 === str.toLowerCase().split("").filter((item) => ((item >= 'a' && item <= 'z') || (item >= '0' && item <= '9'))).join("");
};

// Do not edit below this line
module.exports = palindromes;
