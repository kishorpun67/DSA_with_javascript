

var string = 'hello';
var string1 = 'olleh';

function checkAnagram(string, string1) {
    if(string.length == string1.length) {
        var counter = {};
        for(let letter of string) {
            counter[letter] = (counter[letter]  || 0)+1;
        }
        for(let item of string1) {
            if(!counter[item]) {
                return false;
            }
            counter[item] -= 1;
        }
        return true;
    }
}
// const result = checkAnagram(string, string1)
// console.log(result);
// this complexity is O(n)



var string3 = 'kishor';
var string4 = 'rohsik';

function checkNameAnagram(string3, string4) {

    if (string3.length != string4.length) {
        return false;
    }
    var counter = {};
    for(let letter of string3) {
        counter[letter] = (counter[letter] || 0) +1;
    }
    for(let item of string4) { 
        if(!counter[item]) { 
            return false;
        }
        counter[item] -= 1;
    }
    return true;

}

var result2 = checkNameAnagram(string3, string4)
console.log(result2);