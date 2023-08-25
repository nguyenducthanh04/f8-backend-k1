use database_02_nguyenducthanh;

CREATE TABLE customers (
    id int NOT NULL PRIMARY KEY,
    name varchar(50),
    email varchar(100) UNIQUE NOT NULL,
    phone_number int(10) UNIQUE NOT NULL,
    created_at timestamp,
    updated_at timestamp
);

CREATE TABLE products (
    id int NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL,
    price float NOT NULL,
    quantity int,
    total_price float,
    created_at timestamp,
    updated_at timestamp
);

CREATE TABLE orderList (
    id int NOT NULL PRIMARY KEY,
    customer_id int,
    total_quantity int,
    total_price float,
    status_oder text,
    created_at timestamp,
    updated_at timestamp,
    CONSTRAINT orderList_customer_id_foreign FOREIGN KEY (customer_id) REFERENCES customers(id)
);

CREATE TABLE oderDetails (
    id int NOT NULL PRIMARY KEY,
    customer_id int,
    product_id int,
    status_order text,
    created_at timestamp,
    updated_at timestamp,
    CONSTRAINT orderDetails_customer_id_foreign FOREIGN KEY (customer_id) REFERENCES customers(id),
    CONSTRAINT orderDetails_product_id_foreign FOREIGN KEY (product_id) REFERENCES products(id)
);

DESCRIBE oderDetails;