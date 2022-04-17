// ddmmyyyy
const ngaySinhInput = '21031984';
const tenInput = 'QUACH HA CHAN AN';

let fullBirth = ngaySinhInput.split('').map((n) => Number(n));
const ngay = [fullBirth[0], fullBirth[1]];
const thang = [fullBirth[2], fullBirth[3]];
const nam = [fullBirth[4], fullBirth[5], fullBirth[6], fullBirth[7]];

let fullname = tenInput
    .split('')
    .filter((c) => c != ' ')
    .map((c) => c.toUpperCase());

const cNguyenAm = fullname.filter((c) => 'AEIOU'.includes(c));
const cPhuAm = fullname.filter((c) => !'AEIOU'.includes(c));

const sum = (input) => {
    let result = 0;
    result = input.reduce((a, c) => a + c, 0);

    while (result >= 10) {
        const tmp = result
            .toString()
            .split('')
            .map((n) => Number(n));

        result = tmp[0] + tmp[1];
    }

    return result;
};

const textToNumArray = (input) => {
    const charToNum = (input) => {
        let answer = 0;
        switch (input.toUpperCase()) {
            case 'A':
            case 'J':
            case 'S':
                answer = 1;
                break;
            case 'B':
            case 'K':
            case 'T':
                answer = 2;
                break;
            case 'C':
            case 'L':
            case 'U':
                answer = 3;
                break;
            case 'D':
            case 'M':
            case 'V':
                answer = 4;
                break;
            case 'E':
            case 'N':
            case 'W':
                answer = 5;
                break;
            case 'F':
            case 'O':
            case 'X':
                answer = 6;
                break;
            case 'G':
            case 'P':
            case 'Y':
                answer = 7;
                break;
            case 'H':
            case 'Q':
            case 'Z':
                answer = 8;
                break;
            case 'I':
            case 'R':
                answer = 9;
                break;
            default:
                answer = 0;
        }
        return answer;
    };

    return input.map((c) => charToNum(c));
};

const lyGiai = (input) => {
    let result = '';
    switch (Number(input)) {
        case 1:
            result = 'Độc lập, năng nổ, có nhu cầu chịu trách nhiệm.';
            break;
        case 2:
            result = 'Nhạy cảm, không thích mâu thuẫn.';
            break;
        case 3:
            result = 'Coi trọng giao tiếp và năng lượng sáng tạo.';
            break;
        case 4:
            result = 'Chắc chắn, có tinh thần trách nhiệm, theo đuổi sự an tâm.';
            break;
        case 5:
            result = 'Tự do, phiêu lưu.';
            break;
        case 6:
            result = 'Nuôi dưỡng, có khuynh hướng là người trông nom, quan tâm.';
            break;
        case 7:
            result = 'Tìm kiếm chân lý, luôn hỏi câu hỏi lớn “Tôi là ai?”';
            break;
        case 8:
            result = 'Có nhu cầu tự do về tài chính và tâm linh.';
            break;
        case 9:
            result = 'Có tố chất lãnh đạo, bẩm sinh có khuynh hướng nhân đạo.';
            break;
        default:
            result = '';
    }
    return '=> ' + result;
};

// Check 11, 22, 29
const sumWithCheck = (input) => {
    if (input[0] === 1 && input[1] === 1) return '11/2';
    if (input[0] === 2 && input[1] === 9) return '11/2';
    if (input[0] === 2 && input[1] === 2) return '22/4';
    return sum(input);
};

// Sum ve 2 so roi moi check 11, 22
const sumAndCheck = (input) => {
    let result = 0;
    let check = '';
    result = input.reduce((a, c) => a + c, 0);

    if (result === 11 || result === 22) {
        check = result + '/';
    }

    while (result >= 10) {
        const tmp = result
            .toString()
            .split('')
            .map((n) => Number(n));

        result = tmp[0] + tmp[1];
    }

    if (check != '') return check + result;
    else return result;
};

const NS = sumWithCheck(ngay);
const TD = sum([...ngay, ...thang]);
const DD = sum([...ngay, ...thang, ...nam]);
const DDCheck = sumAndCheck([...ngay, ...thang, ...nam]);
const LH = sumAndCheck(textToNumArray(cNguyenAm));
const NC = sumAndCheck(textToNumArray(cPhuAm));
const SM = sumAndCheck(textToNumArray(fullname));
const TN = sum([SM, DD]);

// Show result
console.log('HỌ TÊN: ', tenInput.toUpperCase());
console.log('NGÀY SINH:', ngaySinhInput, '\n');

console.log('NGÀY SINH (Attitude) (NS):', NS, lyGiai(NS));
console.log('THÁI ĐỘ (TD):', TD, lyGiai(TD));
console.log('ĐƯỜNG ĐỜI (Life Path) (DD)', DDCheck, lyGiai(DDCheck));
console.log('');
console.log('LINH HỒN (Soul Urge) (LH):', LH, lyGiai(LH));
console.log('NHÂN CÁCH (Personality) (NC):', NC, lyGiai(NC));
console.log('SỨ MỆNH (Destiny) (SM):', SM, lyGiai(SM));

console.log('\n=== BA GIAI ĐOẠN CUỘC ĐỜI ===');
console.log(`Tuổi trẻ \t[ 0-${36 - DD}] \tSố đại diện (GĐ):`, sum(thang), lyGiai(sum(thang)));
console.log(`Trưởng thành \t[${36 - DD + 1}-${36 - DD + 27}] \tSố đại diện (GĐ):`, sum(ngay), lyGiai(sum(ngay)));
console.log(`Tuổi già \t[${36 - DD + 27 + 1}-...] \tSố đại diện (GĐ):`, sum(nam), lyGiai(sum(nam)));

console.log('\nTRUNG NIÊN (Divine Purpose) (TN)', TN);
console.log('\n=== GIA ĐOẠN TRUNG NIÊN ===');
console.log(`Giai đoạn 1 \t[${36 - DD}-${36 - DD + 9}]  \tSố đại diện (GĐTN):`, TD, lyGiai(TD));
console.log(
    `Giai đoạn 2 \t[${36 - DD + 9 + 1}-${36 - DD + 9 + 9}]  \tSố đại diện (GĐTN):`,
    sum([...ngay, ...nam]),
    lyGiai(sum([...ngay, ...nam]))
);
console.log(
    `Giai đoạn 3 \t[${36 - DD + 9 + 9 + 1}-${36 - DD + 9 + 9 + 9}]  \tSố đại diện (GĐTN):`,
    sum([TD, ...ngay, ...nam]),
    lyGiai(sum([TD, ...ngay, ...nam]))
);
console.log(
    `Giai đoạn 4 \t[${36 - DD + 9 + 9 + 9 + 1}-...]  \tSố đại diện (GĐTN):`,
    sum([...thang, ...nam]),
    lyGiai(sum([...thang, ...nam]))
);

// Fill 2-way array with array of number
const fillTable = (input) => {};
