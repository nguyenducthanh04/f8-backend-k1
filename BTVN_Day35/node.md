RESTFUL API

URL: Server API + Path
Ví dụ: https://api.fullstack.edu.vn/users

HTTP Method:

- GET -> Lấy dữ liệu từ server
- POST -> Thêm mới dữ liệu lên server
- PUT -> Cập nhật dữ liệu (Ghi đè)
- PATCH -> Cập nhật dữ liệu (Không ghi đè)
- DELETE -> Xóa

Endpoint: URL + Method

- GET /users
- POST /users

Chú ý khi thiết kế Api
Response Message thường sẽ cần phải cho chạy qua một bộ lọc có tên là : transformer
Tác dụng của transformer: Xử lý thay đổi lại các key của json, bổ sung thêm key mới

Giả sử tình huống:

- Front-end đang sử dụng Api có key ở dạng camelCase
- Back-end đang thiết kế database ở dạng undersCore

=> Tạo ra 1 transformer để rename các field trong Database thành dạng camelCase
