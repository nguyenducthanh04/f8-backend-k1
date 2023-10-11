# Đăng nhập thông qua mxh

Sử dụng phương thức xác thực của các mạng xã hội => Trả về thông tin tài khoản mxh(Tên, Email, Avatar,...)
=> Dựa vào các thông tin này => Insert vào database của ứng dụng => Thực hiện đăng nhập tự động
Công cụ Google Console Cloud

# Tư duy xây dựng database chức năng đăng nhập bằng mxh

Trên một ứng dụng có nhiều loại đăng nhập
-Password
-Google
-Facebook
-Github
=> Cần có 1 table để quản lý các loại đăng nhập: providers(id, name)
=> Trong bảng users => Cần bổ sung thêm trường: provider_id để tránh bị trùng id
