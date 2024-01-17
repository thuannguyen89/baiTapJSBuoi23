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