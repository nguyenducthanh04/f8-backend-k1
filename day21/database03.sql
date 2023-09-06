-- CREATE DATABASE database03_ducthanhnguyen;
use database03_ducthanhnguyen;

CREATE TABLE phong (
  Ma_Phong varchar(10) Primary Key NOT NULL,
  Loai_Phong varchar(10),
  So_Khach_Toi_Da int,
  Gia_Phong float,
  Mo_Ta text,
  created_at timestamp,
  updated_at timestamp
);

use database03_ducthanhnguyen;

INSERT INTO
  phong(
    Ma_Phong,
    Loai_Phong,
    So_Khach_Toi_Da,
    Gia_Phong,
    Mo_Ta
  )
VALUES
  ("P0001", "Loai 1", 20, 60000, "Dep mat");

INSERT INTO
  phong(
    Ma_Phong,
    Loai_Phong,
    So_Khach_Toi_Da,
    Gia_Phong,
    Mo_Ta
  )
VALUES
  ("P0002", "Loai 2", 25, 80000, "Dep mat2");

INSERT INTO
  phong(
    Ma_Phong,
    Loai_Phong,
    So_Khach_Toi_Da,
    Gia_Phong,
    Mo_Ta
  )
VALUES
  ("P0003", "Loai 3", 15, 50000, "Dep mat3");

INSERT INTO
  phong(
    Ma_Phong,
    Loai_Phong,
    So_Khach_Toi_Da,
    Gia_Phong,
    Mo_Ta
  )
VALUES
  ("P0004", "Loai 4", 20, 50000, "Dep mat4");

use database03_ducthanhnguyen;

SELECT
  *
FROM
  phong;

use database03_ducthanhnguyen;

CREATE TABLE khach_hang (
  Ma_KH varchar(10) Primary key NOT NULL,
  Ten_KH varchar(50) NOT NULL,
  Dia_Chi varchar(100),
  So_DT int(10) NOT NULL,
  created_at timestamp,
  updated_at timestamp
);

use database03_ducthanhnguyen;

INSERT INTO
  khach_hang(
    Ma_KH,
    Ten_KH,
    Dia_Chi,
    So_DT,
    created_at,
    updated_at
  )
VALUES
  (
    "KH0001",
    "Nguyen Van A",
    "Hoa Xuan",
    1111111111,
    NOW(),
    NOW()
  );

INSERT INTO
  khach_hang(
    Ma_KH,
    Ten_KH,
    Dia_Chi,
    So_DT,
    created_at,
    updated_at
  )
VALUES
  (
    "KH0002",
    "Nguyen Van B",
    "Hoa Hai",
    1111111112,
    NOW(),
    NOW()
  );

INSERT INTO
  khach_hang(
    Ma_KH,
    Ten_KH,
    Dia_Chi,
    So_DT,
    created_at,
    updated_at
  )
VALUES
  (
    "KH0003",
    "Phan Van A",
    "Cam Le",
    1111111113,
    NOW(),
    NOW()
  );

INSERT INTO
  khach_hang(
    Ma_KH,
    Ten_KH,
    Dia_Chi,
    So_DT,
    created_at,
    updated_at
  )
VALUES
  (
    "KH0004",
    "Phan Van B",
    "Hoa Xuan",
    1111111114,
    NOW(),
    NOW()
  );

use database03_ducthanhnguyen;

SELECT
  *
FROM
  khach_hang;

use database03_ducthanhnguyen;

CREATE TABLE dich_vu_di_kem (
  Ma_DV varchar(10) Primary key NOT NULL,
  Ten_DV varchar(100),
  Don_Vi_Tinh text,
  Don_Gia float,
  created_at timestamp,
  updated_at timestamp
);

use database03_ducthanhnguyen;

INSERT INTO
  dich_vu_di_kem(
    Ma_DV,
    Ten_DV,
    Don_Vi_Tinh,
    Don_Gia,
    created_at,
    updated_at
  )
VALUES
  ("DV001", "Beer", "lon", 10000, NOW(), NOW());

INSERT INTO
  dich_vu_di_kem(
    Ma_DV,
    Ten_DV,
    Don_Vi_Tinh,
    Don_Gia,
    created_at,
    updated_at
  )
VALUES
  ("DV002", "Nuoc ngot", "lon", 8000, NOW(), NOW());

INSERT INTO
  dich_vu_di_kem(
    Ma_DV,
    Ten_DV,
    Don_Vi_Tinh,
    Don_Gia,
    created_at,
    updated_at
  )
VALUES
  ("DV003", "Trai cay", "dia", 35000, NOW(), NOW());

INSERT INTO
  dich_vu_di_kem(
    Ma_DV,
    Ten_DV,
    Don_Vi_Tinh,
    Don_Gia,
    created_at,
    updated_at
  )
VALUES
  ("DV004", "Khan uot", "cai", 2000, NOW(), NOW());

use database03_ducthanhnguyen;

SELECT
  *
FROM
  dich_vu_di_kem;

use database03_ducthanhnguyen;

CREATE TABLE dat_phong (
  Ma_Dat_Phong varchar(10) Primary key NOT NULL,
  Ma_Phong_id varchar(10),
  Ma_KH_id varchar(10),
  Ngay_Dat date,
  Gio_Bat_Dau time,
  Gio_Ket_Thuc time,
  Tien_Dat_Coc float default 0,
  Ghi_Chu text,
  Trang_Thai_Dat varchar(100),
  created_at timestamp,
  updated_at timestamp,
  CONSTRAINT FK_Khach_Hang_Dat_Phong FOREIGN KEY (Ma_KH_id) REFERENCES khach_hang(Ma_KH),
  CONSTRAINT FK_Phong_Dat_Phong FOREIGN KEY (Ma_Phong_id) REFERENCES phong(Ma_Phong)
);

use database03_ducthanhnguyen;

INSERT INTO
  dat_phong (
    Ma_Dat_Phong,
    Ma_Phong_id,
    Ma_KH_id,
    Ngay_Dat,
    Gio_Bat_Dau,
    Gio_Ket_Thuc,
    Tien_Dat_Coc,
    Trang_Thai_Dat,
    created_at,
    updated_at
  )
VALUES
  (
    "DP0001",
    "P0001",
    "KH0002",
    "2018/03/26",
    "11:30",
    "13:30",
    "100000",
    "Da dat",
    NOW(),
    NOW()
  );

INSERT INTO
  dat_phong (
    Ma_Dat_Phong,
    Ma_Phong_id,
    Ma_KH_id,
    Ngay_Dat,
    Gio_Bat_Dau,
    Gio_Ket_Thuc,
    Tien_Dat_Coc,
    Trang_Thai_Dat,
    created_at,
    updated_at
  )
VALUES
  (
    "DP0002",
    "P0001",
    "KH0003",
    "2018/03/27",
    "17:15",
    "19:15",
    "50000",
    "Da huy",
    NOW(),
    NOW()
  );

INSERT INTO
  dat_phong (
    Ma_Dat_Phong,
    Ma_Phong_id,
    Ma_KH_id,
    Ngay_Dat,
    Gio_Bat_Dau,
    Gio_Ket_Thuc,
    Tien_Dat_Coc,
    Trang_Thai_Dat,
    created_at,
    updated_at
  )
VALUES
  (
    "DP0003",
    "P0002",
    "KH0002",
    "2018/03/26",
    "20:30",
    "22:15",
    "100000",
    "Da dat",
    NOW(),
    NOW()
  );

INSERT INTO
  dat_phong (
    Ma_Dat_Phong,
    Ma_Phong_id,
    Ma_KH_id,
    Ngay_Dat,
    Gio_Bat_Dau,
    Gio_Ket_Thuc,
    Tien_Dat_Coc,
    Trang_Thai_Dat,
    created_at,
    updated_at
  )
VALUES
  (
    "DP0004",
    "P0003",
    "KH0001",
    "2018/04/1",
    "19:30",
    "21:15",
    "200000",
    "Da dat",
    NOW(),
    NOW()
  );

use database03_ducthanhnguyen;

SELECT
  *
FROM
  dat_phong;

use database03_ducthanhnguyen;

CREATE TABLE chi_tiet_du_dung_dv (
  Ma_Dat_Phong_id varchar(10) NOT NULL,
  Ma_DV_id varchar(10),
  So_Luong int,
  created_at timestamp,
  updated_at timestamp,
  CONSTRAINT FK_Dat_Hang_Chi_Tiet FOREIGN KEY (Ma_Dat_Phong_id) REFERENCES dat_phong(Ma_Dat_Phong),
  CONSTRAINT FK_Dich_Vu_Chi_Tiet FOREIGN KEY (Ma_DV_id) REFERENCES dich_vu_di_kem(Ma_DV)
);

use database03_ducthanhnguyen;

INSERT INTO
  chi_tiet_du_dung_dv(
    Ma_Dat_Phong_id,
    Ma_DV_id,
    So_Luong,
    created_at,
    updated_at
  )
VALUES
  ("DP0001", "DV001", 20, NOW(), NOW());

INSERT INTO
  chi_tiet_du_dung_dv(
    Ma_Dat_Phong_id,
    Ma_DV_id,
    So_Luong,
    created_at,
    updated_at
  )
VALUES
  ("DP0001", "DV003", 3, NOW(), NOW());

INSERT INTO
  chi_tiet_du_dung_dv(
    Ma_Dat_Phong_id,
    Ma_DV_id,
    So_Luong,
    created_at,
    updated_at
  )
VALUES
  ("DP0001", "DV002", 10, NOW(), NOW());

INSERT INTO
  chi_tiet_du_dung_dv(
    Ma_Dat_Phong_id,
    Ma_DV_id,
    So_Luong,
    created_at,
    updated_at
  )
VALUES
  ("DP0002", "DV002", 10, NOW(), NOW());

INSERT INTO
  chi_tiet_du_dung_dv(
    Ma_Dat_Phong_id,
    Ma_DV_id,
    So_Luong,
    created_at,
    updated_at
  )
VALUES
  ("DP0002", "DV003", 1, NOW(), NOW());

INSERT INTO
  chi_tiet_du_dung_dv(
    Ma_Dat_Phong_id,
    Ma_DV_id,
    So_Luong,
    created_at,
    updated_at
  )
VALUES
  ("DP0003", "DV003", 2, NOW(), NOW());

INSERT INTO
  chi_tiet_du_dung_dv(
    Ma_Dat_Phong_id,
    Ma_DV_id,
    So_Luong,
    created_at,
    updated_at
  )
VALUES
  ("DP0003", "DV004", 10, NOW(), NOW());

use database03_ducthanhnguyen;

SELECT
  *
FROM
  chi_tiet_du_dung_dv;

--1
use database03_ducthanhnguyen;

SELECT
  Ma_Dat_Phong_id,
  Ma_DV_id,
  So_Luong
FROM
  chi_tiet_du_dung_dv
WHERE
  So_Luong > 3
  AND So_Luong < 10 --2
  use database03_ducthanhnguyen;

UPDATE
  phong
SET
  Gia_Phong = Gia_Phong + 10000
WHERE
  So_Khach_Toi_Da > 10;

--3
use database03_ducthanhnguyen;

DELETE FROM
  dat_phong
WHERE
  Trang_Thai_Dat = "Da huy" --4 
  use database03_ducthanhnguyen;

SELECT
  Ten_KH
FROM
  khach_hang
WHERE
  LEFT(Ten_KH, 1) IN ("H", "N", "M")
  AND LENGTH(Ten_KH) <= 20 --5
  use database03_ducthanhnguyen;

SELECT
  DISTINCT Ten_KH
FROM
  khach_hang;

--6
use database03_ducthanhnguyen;

SELECT
  Ma_DV,
  Ten_DV,
  Don_Vi_Tinh,
  Don_Gia
FROM
  dich_vu_di_kem
WHERE
  (
    Don_Vi_Tinh = "Lon"
    AND Don_Gia > 10000
  )
  OR (
    Don_Vi_Tinh = "Cai"
    AND Don_Gia < 5000
  ) --7
  use database03_ducthanhnguyen;

SELECT
  dp.Ma_Dat_Phong,
  p.Ma_Phong,
  p.Loai_Phong,
  p.So_Khach_Toi_Da,
  p.Gia_Phong,
  kh.Ma_KH,
  kh.Ten_KH,
  kh.So_DT,
  dp.Ngay_Dat,
  dp.Gio_Bat_Dau,
  dp.Gio_Ket_Thuc,
  dv.Ma_DV,
  ctsd.So_Luong,
  dv.Don_Gia
FROM
  dat_phong AS dp
  INNER JOIN phong AS p ON dp.Ma_Phong = p.Ma_Phong
  INNER JOIN khach_hang AS kh ON dp.Ma_KH = kh.Ma_KH
  INNER JOIN chi_tiet_du_dung_dv AS ctsd ON dp.Ma_Dat_Phong = ctsd.Ma_Dat_Phong
  INNER JOIN dich_vu_di_kem AS dv ON ctsd.Ma_DV = dv.Ma_DV
WHERE
  YEAR(dp.Ngay_Dat) IN (2016, 2017)
  AND p.Gia_Phong > 50000