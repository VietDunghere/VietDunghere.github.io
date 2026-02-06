
class SinhVien {
    constructor(maSV, hoTen, ngaySinh, lopHoc, diemGPA) {
        this.maSV = maSV;
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.lopHoc = lopHoc;
        this.diemGPA = diemGPA;
    }

    capNhatThongTin(hoTen, ngaySinh, lopHoc, diemGPA) {
        this.hoTen = hoTen;
        this.ngaySinh = ngaySinh;
        this.lopHoc = lopHoc;
        this.diemGPA = diemGPA;
    }
}

var danhSachSV = [];

function themSinhVien() {
    var maSV = document.getElementById("maSV").value;
    var hoTen = document.getElementById("hoTen").value;
    var ngaySinh = document.getElementById("ngaySinh").value;
    var lopHoc = document.getElementById("lopHoc").value;
    var diemGPA = document.getElementById("diemGPA").value;

    if (maSV == "" || hoTen == "" || ngaySinh == "" || lopHoc == "" || diemGPA == "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    var sinhVien = new SinhVien(maSV, hoTen, ngaySinh, lopHoc, diemGPA);


    danhSachSV.push(sinhVien);


    hienThiBang();

    xoaForm();

    alert("Thêm sinh viên thành công!");
}

function hienThiBang() {
    var bang = document.getElementById("bangSinhVien");

    bang.innerHTML = "";

    for (var i = 0; i < danhSachSV.length; i++) {
        var sv = danhSachSV[i];

        var dong = document.createElement("tr");

        dong.innerHTML = 
            "<td>" + sv.maSV + "</td>" +
            "<td>" + sv.hoTen + "</td>" +
            "<td>" + sv.ngaySinh + "</td>" +
            "<td>" + sv.lopHoc + "</td>" +
            "<td>" + sv.diemGPA + "</td>" +
            "<td><button onclick='xoaSinhVien(" + i + ")'>Xóa</button></td>";

        bang.appendChild(dong);
    }
}

function xoaSinhVien(viTri) {
        danhSachSV.splice(viTri, 1);
        hienThiBang();
}

function xoaForm() {
    document.getElementById("maSV").value = "";
    document.getElementById("hoTen").value = "";
    document.getElementById("ngaySinh").value = "";
    document.getElementById("lopHoc").value = "";
    document.getElementById("diemGPA").value = "";
}
