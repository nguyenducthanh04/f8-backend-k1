# Các bước làm việc với Sequelize CLI

- Cài đặt sequelize: npm i sequelize
- Cài đặt sequelize-cli: npm install --save-dev sequelize-cli
- Khởi tạo: npx sequelize-cli init
  File: config/config.json => config database theo các môi trường khác nhau

## Migrations là gì?

- File xây dựng cấu trúc của các table trong database
- Khi làm việc với database -> Không thao tác trực tiếp trên CSDL mà thông qua các file Migrations
- Tác dụng:
  --Bảo mật
  --Quản lý phiên bản Database(rollback)
  --Chia sẻ CSDL giữa các thành viên trong team

## Tạo model bằng CLI

npx sequelize-cli model:generate --name TenModel --attributes tenfield1:kieudulieu,tenfield2:kieudulieu

Ví dụ: npx sequelize-cli model:generate --name Customer --attributes id:number,name:string

## Chạy Migration

- npx sequelize-cli db:migrate

## Undo migrate

- Khôi phục phiên bản trước của Database
- npx sequelize-cli db:migrate:undo

## Undo All

- npx sequelize-cli db:seed:all
  ->Reset database về trạng thái ban đầu

## Tạo riêng migration (Áp dụng khi sửa cấu trúc bảng)

- npx sequelize migration:generate --name=ten_migration
- Lưu ý: Viết tường minh tên migration

## Seeder là gì?

- Tạo ra các dữ liệu mẫu để test

## Tạo file seeder

- npx sequelize-cli seed:generate --name ten_file_seed
- Lưu ý: Tên file cũng phải tường minh

## Chạy seeder

- npx sequelize-cli db:seed:all

## Thông tin SMTP

- HOST: smtp.gmail.com
- Username: dducthanh04@gmail.com
- Password: midn lcia tcly pcbn
- Port: 465 hoặc 587
- Secure: ssl hoặc tls -> ssl nếu port = 465, tls nếu port = 587
