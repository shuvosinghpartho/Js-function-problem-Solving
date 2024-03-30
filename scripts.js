function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Invalid Number";
    } else {
        var number = (ticketSale * 120) - (500 + (8 * 50));
        return number;
    }
}

function checkName(name) {
    if (typeof(name) == "string") {
        if (isUpperCase(name)) {
            console.log("Good Name");
        } else {
            console.log("Bad Name");
        }
    } else {
        console.log("invalid");
    }
}

function isUpperCase(str) {
    var contain = false;
    for (var i = 0; i < str.length; i++) {
        var a = str[i].toUpperCase();
        if (str[i] == a) {
            contain = true;
        } else {
            contain = false;
            break;
        }
    }
    return contain;
}

function deleteInvalids(arr) {
    if (Array.isArray(arr)) {
        var newArr = [];
        var tmp = 0;
        for (var i = 0; i < arr.length; i++) {
            if (Number.isInteger(arr[i])) {
                newArr[tmp] = arr[i];
                tmp++;
            }
        }
        return newArr;
    } else {
        return "Invalid Array";
    }
}

function password(obj) {
    if (typeof(obj.name) == "string" && Number.isInteger(obj.birthYear) && typeof(obj.siteName) == "string" && obj.birthYear.toString().length == 4) {
        var newSiteName = "";
        for (var i = 0; i < obj.siteName.length; i++) {
            if (i == 0) {
                newSiteName = obj.siteName[i].toUpperCase();
            } else {
                newSiteName += obj.siteName[i];
            }
        }
        return newSiteName + "#" + obj.name + "@" + obj.birthYear;
    }
}

function monthlySavings(arr, livingCost) {
    let isValid = Array.isArray(arr) && Number.isInteger(livingCost);
    if (isValid) {
        var totalPayment = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= 3000) {
                totalPayment += arr[i] * 0.80;
            } else {
                totalPayment += arr[i];
            }
        }
        var savings = totalPayment - livingCost;
        if (savings >= 0) {
            console.log(savings);
        } else {
            console.log("earn more");
        }
    } else {
        console.log("invalid input");
    }
}