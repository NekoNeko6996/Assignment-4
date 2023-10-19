const date = new Date();
document.getElementById('date').value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

const gdv_value = document.getElementById('gdv');
const ckd = document.getElementById('ckd');
const cmnd = document.getElementById('cmnd');
const nameInput = document.getElementById('name');
const nsInput = document.getElementById('ns');
const emailInput = document.getElementById('email');
const telInput = document.getElementById('tel');
const address = document.getElementById('address');

///gói dịch vụ///
function gdvF() {
    ckd.value = gdv_value.value;
}
gdvF();
///chuyển hướng ///
function ch() {
    location.href = 'http://www.vietteltelecom.vn/';
}
/////////////////////name check//////////////////////
const NAME_CHECK_PATTERN = /^.{6,}$/;
function nameCheck() {
    let result = nameInput.value;
    if(!NAME_CHECK_PATTERN.test(result)) {
        nameInput.setCustomValidity('Họ tên không được để trống và có ít nhất 6 kí tự!');
    } else {
        nameInput.setCustomValidity('');
    }
}
nameCheck();
/////////////////////birthday check//////////////////////
function nsCheck() {
    let result = nsInput.value;
    if(parseInt(result) >= 1930 && parseInt(result) <= 1990) {
        nsInput.setCustomValidity('');
    } else {
        nsInput.setCustomValidity('Năm sinh nhập vào phải nằm trong khoảng từ 1930 đến 1990!');
    }
}
nsCheck();
////////////////////check CMND/////////////////////
const CMND_CHECK_PATTERN = /^[^0][0-9]{8}$/; 
//console.log(CMND_CHECK_PATTERN.test('998765438'));
function cmndCheck() {
    let result = cmnd.value;
    if(!CMND_CHECK_PATTERN.test(result)) {
        cmnd.setCustomValidity('Số đầu tiên khác 0 và phải nhập đúng 9 số!');
    } else {
        cmnd.setCustomValidity('');
    }
}
cmndCheck();
/////////////////////email check///////////////////////
const EMAIL_CHECK_PATTERN = /^[\w.+\-]+@gmail\.com$/;
// console.log(EMAIL_CHECK_PATTERN.test('example@gmail.com'));
function emailCheck() {
    let result = emailInput.value;
    if(!EMAIL_CHECK_PATTERN.test(result)) {
        emailInput.setCustomValidity('Phải nhập đúng định dạng example@gmail.com!')
    } else {
        emailInput.setCustomValidity('');
    }
}

//////////////////////tel check///////////////////////
const TEL_CHECK_PATTERN = /^[0-9]{7}$/;
function telCheck() {
    let result = telInput.value;
    if(!TEL_CHECK_PATTERN.test(result)) {
        telInput.setCustomValidity('Nhập đủ 7 số cuối của số điện thoại!');
    } else {
        telInput.setCustomValidity('');
    }
}
telCheck();

////////////////////address check/////////////////////
const ADDRESS_CHECK_PATTERN = /^.{10,}$/;
function addressCheck() {
    let result = address.value;
    if(!ADDRESS_CHECK_PATTERN.test(result)) {
        address.setCustomValidity('Địa chỉ là bắt buộc và phải dài ít nhất 10 kí tự!');
    } else {
        address.setCustomValidity('');
    }
}
addressCheck();