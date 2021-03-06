function numerologyValues() {
    var destinyName = 0;
    var lifeDate = 0;
    destinyName = document.getElementById('inputNumber').value;
    lifeDate = document.getElementById('inputLife').value;
    printNumerologyValues(destinyName, lifeDate);
}

function strip_tags(input, allowed) {
    allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
    var commentsAndPhpTags = /|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}

function reduceNumber(innum) {
    while (innum > 9) {
        var tempSubName = innum.toString().split('');
        var subNameValue = 0;
        for (x = 0, y = tempSubName.length; x < y; x++) {
            subNameValue = subNameValue + parseInt(tempSubName[x]);
        }
        innum = subNameValue;
    }
    return innum;
}

function printNumerologyValues(edn, eld) {
    /* build display */
    var errorMessageLife = 'Accepts numbers above zero';
    var errorMessageName = 'Accepts letters and spaces';
    var displayEdn, displayEld;
    displayEdn = strip_tags(edn.toString());
    displayEld = strip_tags(eld.toString());
    if (displayEdn.length > 21) {
        displayEdn = displayEdn.substring(0, 21).concat('~');
    }
    if (displayEld.length > 21) {
        displayEld = displayEld.substring(0, 21).concat('~');
    }

    /* print inputs */
    document.getElementById('enteredLifeDate').innerHTML = displayEld;
    document.getElementById('enteredDestinyName').innerHTML = displayEdn;

    /* validate */
    var dnCalc,
        lnCalc = 0;
    var tempDn = strip_tags(edn.replace(/\s+/g, ''));
    var templN = strip_tags(eld.replace(/\s+/g, ''));
    var lnRegEx = templN.match(/[^0-9]+/);
    var dnRegEx = tempDn.match(/[^a-zA-Z ]+/);
    if (dnRegEx != null) {
        dnCalc = -1;
    } else {
        dnCalc = evaluateDestinyNumber(tempDn);
    }
    if (lnRegEx != null) {
        lnCalc = -1;
    } else {
        lnCalc = evaluateLifeNumber(templN);
    }

    /* results */
    if (dnCalc < 1) {
        document.getElementById('destinyResult').innerHTML = errorMessageName;
    } else {
        document.getElementById('destinyResult').innerHTML = dnCalc.toString();
    }
    if (lnCalc < 1) {
        document.getElementById('lifeResult').innerHTML = errorMessageLife;
    } else {
        document.getElementById('lifeResult').innerHTML = lnCalc.toString();
    }
}

function evaluateLifeNumber(elnc) {
    var lifeNumber = 0;
    var tempLifeNumber = elnc.toString().trim().split('');
    for (p = 0, q = tempLifeNumber.length; p < q; p++) {
        lifeNumber = lifeNumber + parseInt(tempLifeNumber[p]);
    }
    lifeNumber = reduceNumber(lifeNumber);
    return lifeNumber;
}

function evaluateDestinyNumber(ednc) {
    var destinyNumber = 0;
    var inputtoArr = ednc.toString().split(' ');
    var countNames = inputtoArr.length;
    var nameSum = [countNames - 1];
    var totalNameValue = [];
    for (i = 0, c = countNames; i < c; i++) {
        var currentName = inputtoArr[i];
        var currentNameValue = 0;
        var tempName = currentName.toLowerCase();
        var tempNameArr = tempName.split('');
        for (j = 0, d = tempNameArr.length; j < d; j++) {
            if (tempNameArr[j] == 'a' || tempNameArr[j] == 'j' || tempNameArr[j] == 's') {
                nameSum[i] = nameSum[i] + 1;
            }
            if (tempNameArr[j] == 'b' || tempNameArr[j] == 'k' || tempNameArr[j] == 't') {
                nameSum[i] = nameSum[i] + 2;
            }
            if (tempNameArr[j] == 'c' || tempNameArr[j] == 'l' || tempNameArr[j] == 'u') {
                nameSum[i] = nameSum[i] + 3;
            }
            if (tempNameArr[j] == 'd' || tempNameArr[j] == 'm' || tempNameArr[j] == 'v') {
                nameSum[i] = nameSum[i] + 4;
            }
            if (tempNameArr[j] == 'e' || tempNameArr[j] == 'n' || tempNameArr[j] == 'w') {
                nameSum[i] = nameSum[i] + 5;
            }
            if (tempNameArr[j] == 'f' || tempNameArr[j] == 'o' || tempNameArr[j] == 'x') {
                nameSum[i] = nameSum[i] + 6;
            }
            if (tempNameArr[j] == 'g' || tempNameArr[j] == 'p' || tempNameArr[j] == 'y') {
                nameSum[i] = nameSum[i] + 7;
            }
            if (tempNameArr[j] == 'h' || tempNameArr[j] == 'q' || tempNameArr[j] == 'z') {
                nameSum[i] = nameSum[i] + 8;
            }
            if (tempNameArr[j] == 'i' || tempNameArr[j] == 'r') {
                nameSum[i] = nameSum[i] + 9;
            }
        }
        var sumCurrentName = nameSum[i].toString().split('');
        for (k = 0, e = sumCurrentName.length; k < e; k++) {
            currentNameValue = currentNameValue + parseInt(sumCurrentName[k]);
        }
        totalNameValue[i] = reduceNumber(currentNameValue);
    }
    for (m = 0, g = totalNameValue.length; m < g; m++) {
        destinyNumber = destinyNumber + parseInt(totalNameValue[m]);
    }
    return destinyNumber;
}
