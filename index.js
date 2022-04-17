// ddmmyyyy
const ngaySinhInput = '05011982';
const tenInput = 'TRAN THI PHOI';

let fullBirth = ngaySinhInput.split('').map((n) => Number(n));
const ngaySinh = [fullBirth[0], fullBirth[1]];
const thangSinh = [fullBirth[2], fullBirth[3]];
const namSinh = [fullBirth[4], fullBirth[5], fullBirth[6], fullBirth[7]];

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

// Lý giải tháng cá nhân
const lyGiaiThangCaNhan = (n) => {
    switch (n) {
        case 1:
            return 'NĂNG LƯỢNG MỚI, KẾ HOẠCH MỚI. Đây là tháng để bắt tay vào những kế hoạch mới, khởi đầu những điều mới. Các cơ hội mới sẽ đến với bạn, nên đừng ngại nắm bắt chúng. Đây cũng là thời điểm thích hợp để nắm bắt, hạ quyết tâm và suy nghĩ quyết đoán, nhằm kiểm soát tay lái điều khiển cuộc đời mình và nắm quyền chỉ huy. Hãy dũng cảm khác biệt, đổi mới và làm những điều bạn chưa bao giờ làm.';
        case 2:
            return 'LẮNG NGHE NHIỀU HƠN, KIÊN NHẪN, CÁC MỐI QUAN HỆ. Đây là thời gian để bạn dành thời gian cho những người bạn quan tâm. Bạn nên dành thời gian để thu thập dữ liệu và học tính kiên nhẫn, bạn nên lùi lại một bước và nhẫn nại. Tìm kiếm sự cân bằng, bình yên, hòa hợp trong các mối quan hệ của bạn và sẵn sàng hợp tác với người khác. Hàn gắn những tổn thương trong quá khứ, biểu đạt cảm xúc của mình một cách lành mạnh, cũng như sẵn sàng đón nhận tình yêu.';
        case 3:
            return 'THỂ HIỆN BẢN THÂN, GIAO LƯU, SÁNG TẠO, CHIA SẺ. Đây là tháng bạn dành thời gian cho bản thân, vui chơi, giao lưu tìm kiếm cơ hội. Dù chuyện gì đang xảy ra trong cuộc sống của bạn đi chăng nữa thì việc giữ thái độ lạc quan vẫn là rất quan trọng. Đây cũng là thời điểm để thể hiện bản thân cũng như chia sẻ những suy nghĩ và cảm nhận của bạn một cách thật lòng.';
        case 4:
            return 'LÊN KẾ HOẠCH, NỖ LỰC, XÂY DỰNG, TRÁCH NHIỆM. Đây là thời gian giải quyết những vấn đề mà bạn đã bỏ qua, là tháng tuyệt vời để bạn thiết lập những kê hoạch, mục tiêu. Đây là lúc bạn phải làm việc chăm chỉ và nỗ lực trong mọi lĩnh vực của cuộc sống, bởi nỗ lực sẽ mang lại thành quả. Cố gắng đạt sự ổn định và xây dựng một nền móng vững chãi. Hãy lên kế hoạch trước, đừng trì hoãn hay lãng phí thời gian. Kiên trì vượt qua mọi thử thách và đừng bao giờ bỏ cuộc.';
        case 5:
            return 'TỰ DO, DỊCH CHUYỂN, PHIÊU LƯU, THAY ĐỔI. Đây là tháng bạn nên thay đổi, bươc ra khỏi vùng an toàn. Hãy linh hoạt và tập thích nghi cho sự thay đổi mới. Nếu bạn đang muốn thay đổi điều gì trong cuộc sống thì đây là lúc làm điều đó. Đây là một tháng năng động và có nhịp độ nhanh nên hãy tập trung và phân bổ thời gian hợp lý, và đừng bắt tay vào làm quá nhiều việc. Hãy kết giao và quảng bá hình ảnh của bản thân.';
        case 6:
            return 'YÊU THƯƠNG, BAO DUNG, TRÁCH NHIỆM, GIA ĐÌNH. Đây là tháng bạn nên thể hiện tình yêu thương, trách nhiệm với gia đình và xã hội. Hãy dành thời gian cho những người cần bạn giúp đỡ, quan tâm hay ở bên, cũng như giành thời gian yêu thương đứa trẻ bên trong bạn. Các vấn để còn tồn tại sẽ trở nên nổi cộm và cần được giải quyết. Đây là lúc để cải thiện các mối quan hệ của bạn, cũng như tập trung vào việc cho đi và nhận lại tình yêu.';
        case 7:
            return 'CHIÊM NGHIỆM, SUY NGẪM, TÂM LINH. Đây là tháng bạn nên lui lại, dành thời gian một mình yên tĩnh để suy nghĩ về cuộc sống và mục đích hướng tới. Đây cũng là lúc để tìm lại sợi dây kết nối tâm linh trong bạn và tập trung vào việc trở thành một con người tốt hơn. Hãy tìm cách nâng cao sức khỏe và thử những phương pháp thay thế như yoga và thiền định.';
        case 8:
            return 'HIỆN THỰC HÓA SỨC MẠNH CÁ NHÂN VÀ SỰ NGHIỆP TÀI CHÍNH. Đây là tháng bạn nên dành thời gian cân bằng lịch trình làm việc, phát triển bản thân và sắp xếp lại các khoản chi tiêu. Đây là thời điểm thuận lợi để có những thay đổi trong sự nghiệp: Hãy tham vọng lên, bảo vệ tiếng nói bên trong của bản thân và bắt tay vào hành động. Bạn cũng đừng ngại tiếp thu thái độ giàu có và suy nghĩ một cách tích cực, vì số 8 chính là con số của sự hiện thực hóa.';
        case 9:
            return 'THAY ĐỔI, THA THỨ, KẾT THÚC. Đây là tháng của kết thúc và thay đổi, vì thế hãy buông bỏ những điều củ dọn đường cho cái mới. Từ bỏ các thói quen xấu, những người không tốt, hay bất cứ điều gì bạn không còn cần đến trong cuộc sống. Đừng ái ngại khi phải chấm dứt một điều gì đó, vì những cơ hội tốt hơn đang chờ bạn ở phía trước. Hãy tha thứ cho những bất hạnh của cuộc đời mình và hướng về tương lai.';
        default:
            break;
    }
};

// Lý giải Năm cá nhân
// https://sohocmattroi.com/than-so-hoc-so-4/
const lyGiaiNamCaNhan = (n) => {
    switch (n) {
        case 1:
            return 'Năm số 1: Sự bắt đầu.\nNăm đầu tiên trong chu kỳ 9 năm nhân số học sẽ là năm của sự sáng tạo, gieo hạt cho những sự kiện mới, cơ hội mới và tràn đầy tự tin. Cũng là năm chúng ta lên kế hoạch cho những mục tiêu mới.\nĐây là một năm của những hành động phát triển cá nhân mạnh mẽ. Sức mạnh của năm này thúc đẩy chúng ta dám trở nên đặc biệt và phát triển lòng tự tin.\nĐây cũng là một năm phù hợp để chúng ta phá bỏ những thói quen cũ. Bên cạnh đó việc hình thành lối sống mới chắc chắn đòi hỏi ta có sự kiên trì cao độ. ';
        case 2:
            return 'Năm số 2: Sự cân bằng, tình yêu thương.\nNăm số 2 của chu kỳ 9 năm thần số học là thời điểm bạn nên đặt sự ưu tiên dành cho bản thân và các mối quan hệ xung quanh. Bạn nên dành nhiều thời gian quan tâm cho gia đình và những người thân yêu dưới mọi hình thức.\nĐây là một năm diễn biến chậm, không phải là năm của sự thay đổi. Năm này đòi hỏi bạn phải có sự kiên trì, nhẫn nại. Có thể xem năm nay được thiết kế cho bạn nghỉ ngơi và phát triển về nhận thức tâm linh.';
        case 3:
            return 'Năm số 3: Truyền cảm hứng, phát triển bản thân.\nKhi bước vào năm số 3 trong chu kỳ 9 năm nhân số học, bạn cần mở rộng tầm mắt, trí não để phát triển bản thân. Bạn có thể tham gia một khóa học, hay một chuyến đi nào đó. Và điều quan trọng, bạn hãy nhận thức rằng đây là năm phát triển trí não.\nĐây cũng là năm chúng ta nên cân bằng cuộc sống. Dành thời gian cho những niềm vui, các buổi tụ tập cùng bạn bè để tận hưởng cuộc sống. Tuy nhiên đây cũng là năm nhạy cảm. Sẽ chứa đựng những cảm xúc bị tổn thương và nỗi nghi ngờ sẽ xuất hiện. ';
        case 4:
            return 'Năm số 4: Củng cố nội lực (điểm trũng lần 1 trong chu kỳ 9 năm nhân số học).\nĐây là năm trũng đầu tiên trong chu kỳ 9 năm của đời người. Bạn cần nghỉ ngơi và duy trì sự ổn định sẽ là điều kiện tốt giúp củng cố lại năng lượng cho chu kỳ 5 năm tiếp theo. Các yếu tố về thể chất, tiền tài sẽ được xem là chạm đáy trong năm này.\nĐây được xem là một năm để bạn nghiêm túc trau dồi kỹ năng và cũng cố nội lực nhằm tạo dựng nền tảng vững chắc cho công việc, cho các mối quan hệ, sức khỏe hay gia đình của bạn. ';
        case 5:
            return 'Năm số 5: Sự phiêu lưu và tự do.\nĐây là năm bắt đầu với một sự bùng nổ, nhộn nhịp với nhiều trải nghiệm và niềm vui, là năm mà năng lượng tự do được kích hoạt rõ nét nhất. Năm nay có rất nhiều cuộc vui nhưng mục đích là để rèn luyện tính kỷ luật của bạn.\nĐây là năm không có gì là chắc chắn, không có kế hoạch và luôn có cảm giác hồi hộp nhất định. Đây không phải là thời điểm mà bạn nên lựa chọn để cam kết lâu dài, vì còn rất nhiều thứ thú vị để bạn thử.\nNăm số 5 trong chu kỳ 9 năm thần số học mang đến rất nhiều cơ hội để đối mặt với nỗi sợ của bản thân. Giúp bạn loại bỏ những hạn chế và khơi dậy cảm giác phiêu lưu. ';
        case 6:
            return 'Năm số 6: Sự yêu thương.\nKhi bước qua năm này, bạn cần tập trung năng lượng yêu thương cho gia đình và các mối quan hệ cá nhân nhiều hơn. Bạn cần quay về tập trung thể hiện tình cảm với gia đình của mình.\nTrong năm nay, bạn sẽ cần cân bằng giữa sự nghiệp và trách nhiệm trong gia đình. Và tìm ra điểm trung gian giữa việc thể hiện sự quan tâm cho người khác và tôn vinh chính bạn.\nĐây cũng là thời điểm vô cùng thuận lợi để những người độc thân tìm kiếm sự lãng mạn vì tình yêu sẽ đến với bạn. Đây cũng là một năm để tập trung vào sức khỏe của bạn. Thực hiện cam kết, kết hôn hoặc bắt đầu một gia đình.\nBằng cách tôn trọng trách nhiệm của bạn và ở đó cho những người cần bạn có thể biến điều này thành một năm rất hiệu quả. ';
        case 7:
            return 'Năm số 7: Nội tâm, suy ngẫm.\nĐây là năm thứ 2 trong chu kỳ 9 năm thần số học rơi vào điểm trũng sau năm số 4. Đây cũng là giai đoạn gần kết thúc chu kỳ 9 năm của đời người. Chính vì thế giai đoạn này bạn không thể tập trung vào công việc hay đạt được những thành tựu gì về tài chính.\nNăm này được xem là thời điểm thích hợp để bạn phát triển tâm linh, chiêm nghiệm. Bạn sẽ cảm thấy đây là thời điểm mà niềm tin và sự tin tưởng của mình đang được thử thách.\nNăm số 7 được xem là năm trũng, giống như năm số 4. Bạn cần tập trung vào bản thân nhiều hơn, phát triển bản thân. Không nên hướng ra ngoài và có những sự thay đổi quá lớn.\nNăm này đầy rẫy việc buông bỏ và mất mát. Có thể là các vấn đề về sức khỏe, tình cảm hay sự kiện khác. ';
        case 8:
            return 'Năm số 8: Trí tuệ và quyền lực.\nBước qua được năm trũng cuối cùng trong chu kỳ. Đây sẽ là năm mang lại cơ hội cho những người mong muốn gặt hái được thành quả trong 7 năm qua. Sau khoảng thời gian phát triển bản thân, đã đến lúc bạn bước ra ngoài và gặt hái thành quả.\nNăm số 8 là năm tốt nhất cho sự nghiệp kinh doanh cũng như tài chính cá nhân của bạn. Bạn sẽ đạt đến đỉnh cao trong sự nghiệp của mình với nhiều lời mời và cơ hội cực kỳ hấp dẫn. Có thể xem đây là năm phản ánh lại kết quả mà bạn đã trải qua. ';
        case 9:
            return 'Năm số 9: Kết thúc chu kỳ.\nĐây là năm cuối của chu kỳ 9 năm thần số học khép lại một chu kỳ cũ và mở ra một chu kỳ mới. Thời điểm này bạn có thể đưa ra một quyết định nào đó cho một công việc hoặc một mối quan hệ.\nNhững thay đổi này rất đa dạng có thể như chuyển nhà, thay đổi môi trường sống. Thay đổi công việc, hoặc ngay cả việc kết thúc một mối quan hệ. Không phải kết thúc lúc nào cũng buồn.\nNăm thứ 9 là năm của kết thúc, của sự hoàn tất mọi việc. Đây là lúc để bạn nhìn lại và hiểu rằng tất cả mọi chu kỳ đều có điểm bắt đầu và điểm kết thúc. Và nó sẽ bắt đầu một chu kỳ mới.\nNhững níu kéo sẽ không còn có ý nghĩa gì nữa khi mọi thứ đã qua đi. Hãy đón nhận chu kỳ mới và biết ơn những cơ hội của bạn. ';
        default:
            break;
    }
};

// Lý giải ngày cá nhân
const lyGiaiNgayCaNhan = (n) => {
    switch (n) {
        case 1:
            return 'Đây là ngày của những ý tưởng tuyệt vời, là ngày để bắt đầu một điều gì đó. Tập trung vào bản thân, nhưng đừng ích kỷ hay bướng bỉnh. Đã đến lúc phải dứt khoát, tham vọng và tự tin hành động.';
        case 2:
            return 'Hãy kiên nhẫn và tập trung vào chi tiết. Làm việc dựa trên các mối quan hệ và hợp tác. Đây là một ngày nhẹ nhàng. Bạn sẽ cảm thấy nhạy cảm và có thể có những giấc mơ sống động.';
        case 3:
            return 'Hãy sáng tạo, dành thời gian cho bạn bè và giao tiếp. Chấp nhận bất kỳ lời mời nào bạn nhận được. Thực hành lòng biết ơn. Tránh hành vi đặc quyền. Đây là một ngày may mắn!';
        case 4:
            return 'Học cách có tổ chức, quy củ. Chú trọng đến các khỏe. Tránh sự cứng nhắc, kín kẽ hoặc kiểm soát. Đừng trì hoãn. Tập trung vào chi tiết để tiến gần hơn đến mục tiêu của bạn. Làm theo các quy tắc nếu không bạn sẽ phải đối mặt với hậu quả.';
        case 5:
            return 'Hãy thay đổi, mở rộng và thúc đẩy các mối quan hệ. Tránh hành xử quá bốc đồng. Tập trung năng lượng. Sẵn sàng đón nhận sự thay đổi, ngày của bạn có thể không diễn ra như kế hoạch.';
        case 6:
            return 'Quan tâm đến gia đình, vật nuôi và ngôi nhà của bạn. Trang trí và làm đẹp xung quanh. Hãy lưu tâm đến ý kiến mạnh mẽ của riêng bạn. Tập trung vào các vấn đề trong nhà và trao đi năng lượng chăm sóc, nuôi dưỡng của mình. Gặp bác sĩ trị liệu, làm tóc, học thêm điều gì đó mới.';
        case 7:
            return 'Đây là thời gian cho sự yên tĩnh. Nghỉ ngơi và nhìn nhận lại mọi thứ. Suy ngẫm. Dành thời gian ở ngoài trời, gần với thiên nhiên hoặc đọc sách. Bạn có thể cảm thấy muốn ở một mình. Hãy tiên chăm sóc bản thân trong ngày này.';
        case 8:
            return 'Quản lý tiền của bạn, yêu cầu tăng lương, thu nợ, thanh toán hóa đơn, trả phí. Hãy cẩn thận để không lặp lại bài học hoặc sai lầm. Chú tâm đến công việc để tiến bộ và thành công. Không có bài học Nghiệp trong ngày này. Bạn có thể gặp vấn đề với chính quyền.';
        case 9:
            return 'Kết thúc mọi thứ. Hãy giải phóng và bao dung. Thực hiện những việc làm tử tế ngẫu nhiên. Cho đi một thứ gì đó. Hoàn thiện các dự án và hoàn tất các chi tiết dang dở.';
        default:
            break;
    }
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

const NS = sumWithCheck(ngaySinh);
const TD = sum([...ngaySinh, ...thangSinh]);
const DD = sum([...ngaySinh, ...thangSinh, ...namSinh]);
const DDCheck = sumAndCheck([...ngaySinh, ...thangSinh, ...namSinh]);
const LH = sumAndCheck(textToNumArray(cNguyenAm));
const NC = sumAndCheck(textToNumArray(cPhuAm));
const SM = sumAndCheck(textToNumArray(fullname));
const TN = sum([SM, DD]);

// Show result
console.log('HỌ TÊN: ', tenInput.toUpperCase());
console.log('NGÀY SINH:', ngaySinhInput, '\n');

console.log('NGÀY SINH (Attitude) (NS):', NS);
console.log('THÁI ĐỘ (TD):', TD);
console.log('ĐƯỜNG ĐỜI (Life Path) (DD):', DDCheck);
console.log('');
console.log('LINH HỒN (Soul Urge) (LH):', LH);
console.log('NHÂN CÁCH (Personality) (NC):', NC);
console.log('SỨ MỆNH (Destiny) (SM):', SM);

console.log('\n=== BA GIAI ĐOẠN CUỘC ĐỜI ===');
console.log(`Tuổi trẻ \t[ 0-${36 - DD}] \tSố đại diện (GĐ):`, sum(thangSinh));
console.log(`Trưởng thành \t[${36 - DD + 1}-${36 - DD + 27}] \tSố đại diện (GĐ):`, sum(ngaySinh));
console.log(`Tuổi già \t[${36 - DD + 27 + 1}-...] \tSố đại diện (GĐ):`, sum(namSinh));

console.log('\nTRUNG NIÊN (Divine Purpose) (TN)', TN);
console.log('\n=== GIA ĐOẠN TRUNG NIÊN ===');
console.log(`Giai đoạn 1 \t[${36 - DD}-${36 - DD + 9}]  \tSố đại diện (GĐTN):`, TD);
console.log(
    `Giai đoạn 2 \t[${36 - DD + 9 + 1}-${36 - DD + 9 + 9}]  \tSố đại diện (GĐTN):`,
    sum([...ngaySinh, ...namSinh])
);
console.log(
    `Giai đoạn 3 \t[${36 - DD + 9 + 9 + 1}-${36 - DD + 9 + 9 + 9}]  \tSố đại diện (GĐTN):`,
    sum([TD, ...ngaySinh, ...namSinh])
);
console.log(`Giai đoạn 4 \t[${36 - DD + 9 + 9 + 9 + 1}-...]  \tSố đại diện (GĐTN):`, sum([...thangSinh, ...namSinh]));

// LẤY NĂM, THÁNG, NGÀY HIỆN TẠI
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
console.log(`\nTODAY (d/m/yy): ${currentDay}/${currentMonth}/${currentYear}`);

// Băm số thành array
const numberToTextArray = (input) => {
    let result = input.toString().split('');
    result = result.map((c) => Number(c));
    // console.log(result);
    return result;
};

// Năm thế giới
const namTheGioi = sum(numberToTextArray(currentYear));
console.log('Năm Thế Giới:', namTheGioi);

// Năm cá nhân = Năm Thế Giới + Thái Độ
const namCaNhan = sum([namTheGioi, TD]);
console.log('Năm Cá Nhân:', namCaNhan);
console.log('Lý giải năm Cá Nhân', namCaNhan, ' : ', lyGiaiNamCaNhan(namCaNhan), '\n');

// Rung động tuổi: tính tuổi hiện tại rồi sum lại.
const tuoiHienTai = currentYear - Number(namSinh.join(''));
const rungDongTuoi = sum(numberToTextArray(tuoiHienTai));
console.log('Tuổi hiện tại:', tuoiHienTai);
console.log('Rung Động Tuổi:', rungDongTuoi);

// Tháng cá nhân = Năm Cá Nhân + Tháng Hiện tại
console.log('Tháng Cá Nhân: ', sum([namCaNhan + currentMonth]));
for (i = 1; i <= 12; i++) {
    // console.log(`\nTháng  ${i}/${currentYear}  => Tháng cá nhân ${sum([namCaNhan + i])}`);
    if (i === currentMonth)
        console.log(`\n*** Lý giải ${i}/${currentYear}: ${lyGiaiThangCaNhan(sum([namCaNhan + i]))}`);
    if (i === currentMonth + 1)
        console.log(`\nLý giải ${i}/${currentYear}: ${lyGiaiThangCaNhan(sum([namCaNhan + i]))}`);
    if (i === currentMonth + 2)
        console.log(`\nLý giải ${i}/${currentYear}: ${lyGiaiThangCaNhan(sum([namCaNhan + i]))}`);
}

// Ngày cá nhân = Tháng cá nhân + ngày theo lịch
const ngayCaNhan = sum([namCaNhan, currentMonth, currentDay]);
console.log('\nNgày Cá Nhân:', ngayCaNhan, ' => Lý giải:', lyGiaiNgayCaNhan(ngayCaNhan), '\n');
