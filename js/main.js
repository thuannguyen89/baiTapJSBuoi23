/**
 * Bai 1 : Tinh tien luong NV
 * 
 * Inputs:
 * luong1Ngay, soNgayLam
 * 
 * Process:
 * Function:
 *   B1: Lấy giá trị từ form
 *   B2: kiểm tra số lượng để áp dụng khuyến mãi
 *      Nếu soNgayLam > 0 => Tinh ngay luong
 *      Ngược lại => Thông báo người dùng nhập lại soNgayLam
 * 
 *  B3: thông báo kết quả
 * 
 * Outputs:
 * thanhTien
 */
function tinhTienLuongNV() {
    let thanhTien = 0;
    let luong1Ngay = 100000;
    let soNgayLuong = document.getElementById('soNgayLuong').value;

    if (soNgayLuong > 0) {
        thanhTien = (soNgayLuong * luong1Ngay);
    } else {
        alert('Vui lòng nhập lại Số Ngày Làm.')
    }

    if (thanhTien > 0) {
        // Su dung ${} cua ES6 de binding du lieu
        let txtResult = document.getElementById('txtResultTienLuongNV');
        txtResult.innerHTML = `<br /> Tiền lương của NV là : ${thanhTien.toLocaleString('vi-VN', {style:"currency", currency:"VND"})}`;
    }
}
// Goi ham tinhTienLuongNV khi click button 'btnTinhTienLuongNV'
document.getElementById('btnTinhTienLuongNV').onclick = tinhTienLuongNV;




/**
 * Bai 2 : Tính TB
 * 
 * Inputs:
 * soThu1, soThu2, soThu3, soThu4, soThu5
 * 
 * Process:
 * Function:
 *   B1: Lấy giá trị từ form
 *   B2: Lập công thức tính toán
 *    + Xử lý ép kiểu number khi thực hiện phép (+)
 *   B3: thông báo kết quả
 * 
 * Outputs:
 * soTB
 */
function tinhTB() {
    let soThu1 = document.getElementById('soThu1').value;
    let soThu2 = document.getElementById('soThu2').value;
    let soThu3 = document.getElementById('soThu3').value;
    let soThu4 = document.getElementById('soThu4').value;
    let soThu5 = document.getElementById('soThu5').value;

    let soTB = (Number(soThu1) + Number(soThu2) + Number(soThu3) + Number(soThu4) + Number(soThu5)) / 5;

    // Su dung ${} cua ES6 de binding du lieu
    let txtResult = document.getElementById('txtResultTinhTB');
    txtResult.innerHTML = `<br /> Giá trị TB là : ${soTB.toLocaleString()}`;
}
// Goi ham tinhTB khi click button 'btnTinhTB'
document.getElementById('btnTinhTB').onclick = tinhTB;




/**
 * Bai 3 : Quy đổi VNĐ
 * 
 * Inputs:
 * gia1USDSangVND, soTienUSD  
 * 
 * Process:
 * Function:
 *   B1: Lấy giá trị từ form
 *   B2: Khai báo giá trị mặc định quy đổi 1 USD sang VND 
 *    + Lập công thức tính quy đổi
 *   B3: thông báo kết quả
 * 
 * Outputs:
 * soTienQuyDoiVND
 */
const ONE_USD_VND = 23500;

function quyDoiVND() {
    let soTienUSD = document.getElementById('soTienUSD').value;
    let soTienQuyDoiVND = soTienUSD * ONE_USD_VND;

    // Su dung ${} cua ES6 de binding du lieu
    let txtResult = document.getElementById('txtResultQuyDoiVND');
    txtResult.innerHTML = `<br /> Số tiền quy đổi sang VNĐ là : ${soTienQuyDoiVND.toLocaleString('vi-VN', {style:"currency", currency:"VND"})}`;
}
// Goi ham quyDoiVND khi click button 'btnQuyDoiVND'
document.getElementById('btnQuyDoiVND').onclick = quyDoiVND;




/**
 * Bai 4 : Tinh Chu vi và Diện tích HCN
 * 
 * Inputs:
 * chieuDai, chieuRong
 * 
 * Process:
 * Function:
 *   B1: Lấy giá trị từ form
 *   B2: kiểm tra giá trị chieuDai 
 *       kiểm tra giá trị chieuRong
 *      Nếu chieuDai <= 0 || chieuRong <= 0 => Thông báo người dùng nhập lại chieuDai hoặc chieuRong
 *      Ngược lại => Tinh chu vi & dien tich
 *      
 * 
 *   B3: thông báo kết quả
 * 
 * Outputs:
 * chuVi, dienTich
 */
function tinhChuViDienTichHCN() {
    let chieuDai = document.getElementById('chieuDai').value;
    let chieuRong = document.getElementById('chieuRong').value;

    if (chieuDai <= 0) {
        alert('Vui lòng nhập lại Chiều Dài.');
    } else if (chieuRong <= 0) {
        alert('Vui lòng nhập lại Chiều Rộng.')
    } else {
        // Tính Chu vi
        let chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;

        // Tính Diện tích
        let dienTich = (chieuDai * chieuRong);

        // Su dung ${} cua ES6 de binding du lieu
        let txtResult = document.getElementById('txtResultChuViDienTichHCN');
        txtResult.innerHTML = `<br /> Chu vi HCN là : ${chuVi} 
            <br />
            Diện tích HCN là : ${dienTich}
        `;
    }
}
// Goi ham tinhChuViDienTichHCN khi click button 'btnChuViDienTichHCN'
document.getElementById('btnChuViDienTichHCN').onclick = tinhChuViDienTichHCN;




/**
 * Bai 5 : Tinh Tong 2 Ky So
 * 
 * Inputs:
 * so2ChuSo
 * 
 * Process:
 * Function:
 *   B1: Lấy giá trị từ form
 *   B2: kiểm tra giá trị số  2 chử số
 *      Nếu lengh so2ChuSo == 2 :
 *          Lấy số hàng chục
 *          Lấy số hàng đơn vị
 *      => Tính tong2KySo
 *      Ngược lại => Thông báo người dùng nhập lại số có 2 chữ số
 *      
 *   B3: thông báo kết quả
 * 
 * Outputs:
 * tong2KySo
 */
 function tinhTong2KySo() {
    let so2ChuSo = document.getElementById('so2ChuSo').value;

    if (so2ChuSo.length == 2) {
        // Lấy số  hàng chục
        let soHangChuc = Math.floor(so2ChuSo / 10);

        // Lấy số hàng đơn vị
        let soHangDonVi = so2ChuSo % 10;

        // Tính tổng 2 ký số
        let tong2KySo = soHangChuc + soHangDonVi;

        // Su dung ${} cua ES6 de binding du lieu
        let txtResult = document.getElementById('txtResultTong2KySo');
        txtResult.innerHTML = `<br /> Tổng 2 Ký Số là : ${tong2KySo}`;
    } else {
        alert('Vui lòng nhập lại số có 2 chữ số.')
    }
}
// Goi ham tinhTong2KySo khi click button 'btnTong2KySo'
document.getElementById('btnTong2KySo').onclick = tinhTong2KySo;