-- CREATE DATABASE database03_ducthanhnguyen;
use database03_ducthanhnguyen;

CREATE TABLE phong { id int Primary Key NOT NULL,
Ma_Phong varchar(10) NOT NULL,
Loa_iPhong varchar(10),
So_Khach_Toi_Da int,
Gia_Phong float,
Mo_Ta text,
created_at timestamp,
updated_at timestamp };

use database03_ducthanhnguyen;

CREATE TABLE khach_hang { id int Primary key NOT NULL,
Ten_KH varchar(50) NOT NULL,
Ma_KH varchar(20) NOT NULL,
Dia_Chi varchar(100),
So_DT int NOT NULL,
};

use database03_ducthanhnguyen;

CREATE TABLE dich_vu_di_kem { id int primary key NOT NULL,
MaDv varchar(100) NOT NULL,
TenDV varchar(100),
DonViTinh text,
DongGia float,
} use database03_ducthanhnguyen;

CREATE TABLE dat_phong { id int primary key NOT NULL,
MaDatPhong varchar(50),
MaPhong varchar(50),
MaKH_id int,
NgayDat timestamp,
GioBatDau timestamp,
GioKetThuc timestamp,
TienDatCoc float,
GhiChu text,
TrangThaiDat_id int,
};

use database03_ducthanhnguyen;

CREATE TABLE chi_tiet_du_dung_dv { id int primary key NOT NULL,
MaDatPhong_id int,
MaDV_id int,
SoLuong int,
}