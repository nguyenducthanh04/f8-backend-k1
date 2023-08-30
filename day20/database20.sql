CREATE DATABASE database_03_thanhnguyen;

use database_03_thanhnguyen;

CREATE TABLE products (
    id int PRIMARY KEY auto_increment,
    sku varchar(15) UNIQUE NOT NULL,
    name varchar(100) NOT NULL,
    original_price float DEFAULT 0,
    price float DEFAULT 0,
    description text,
    quantity int NOT NULL,
    user_guide text,
    created_at timestamp,
    updated_at timestamp
);

use database_03_thanhnguyen;

CREATE TABLE properties (
    id int primary key auto_increment,
    property_name varchar(200) NOT NULL,
    created_at timestamp,
    updated_at timestamp
);

use database_03_thanhnguyen;

CREATE TABLE property_values (
    id int PRIMARY KEY auto_increment,
    value varchar(100) UNIQUE NOT NULL,
    property_id int,
    created_at timestamp,
    updated_at timestamp,
    CONSTRAINT property_values_property_id_foreign FOREIGN KEY (property_id) REFERENCES properties(id)
);

use database_03_thanhnguyen;

CREATE TABLE product_properties (
    id int primary key auto_increment,
    product_id int,
    property_id int,
    property_values_id int,
    created_at timestamp,
    updated_at timestamp,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (property_values_id) REFERENCES property_values(id)
);

use database_03_thanhnguyen;

INSERT INTO
    products(
        sku,
        name,
        original_price,
        price,
        description,
        quantity,
        user_guide,
        created_at,
        updated_at
    )
VALUES
    (
        '1000',
        'Noi com dien',
        600000,
        160000,
        'Dung de cam com',
        10,
        'Co the su dung ngay sau khi mua',
        NOW(),
        NOW()
    );

INSERT INTO
    products(
        sku,
        name,
        original_price,
        price,
        description,
        quantity,
        user_guide,
        created_at,
        updated_at
    )
VALUES
    (
        '2000',
        'Quat tran',
        1200000,
        800000,
        'Quat cong suat lon',
        8,
        'Su dung lau dai',
        NOW(),
        NOW()
    );

INSERT INTO
    products(
        sku,
        name,
        original_price,
        price,
        description,
        quantity,
        user_guide,
        created_at,
        updated_at
    )
VALUES
    (
        '3000',
        'Dien thoai',
        800000,
        360000,
        'Dien thoai thong minh',
        3,
        'Chat luong dep',
        NOW(),
        NOW()
    );

use database_03_thanhnguyen;

INSERT INTO
    properties(property_name, created_at, updated_at)
VALUES
    ('Chat luong', NOW(), NOW());

INSERT INTO
    properties(property_name, created_at, updated_at)
VALUES
    ('Thanh phan', NOW(), NOW());

INSERT INTO
    properties(property_name, created_at, updated_at)
VALUES
    ('Do ben', NOW(), NOW());

use database_03_thanhnguyen;

SELECT
    *
FROM
    properties;

use database_03_thanhnguyen;

INSERT INTO
    property_values(value, property_id, created_at, updated_at)
VALUES
    ('Tot', 1, NOW(), NOW());

INSERT INTO
    property_values(value, property_id, created_at, updated_at)
VALUES
    ('Dep', 1, NOW(), NOW());

INSERT INTO
    property_values(value, property_id, created_at, updated_at)
VALUES
    ('On dinh', 1, NOW(), NOW());

use database_03_thanhnguyen;

INSERT INTO
    property_values(value, property_id, created_at, updated_at)
VALUES
    ('Nhua', 2, NOW(), NOW());

INSERT INTO
    property_values(value, property_id, created_at, updated_at)
VALUES
    ('Kim loai', 2, NOW(), NOW());

INSERT INTO
    property_values(value, property_id, created_at, updated_at)
VALUES
    ('Nhieu thanh phan khac nhau', 2, NOW(), NOW());

use database_03_thanhnguyen;

INSERT INTO
    property_values(value, property_id, created_at, updated_at)
VALUES
    ('Rat tot', 3, NOW(), NOW());

INSERT INTO
    property_values(value, property_id, created_at, updated_at)
VALUES
    ('Vai nam su dung', 3, NOW(), NOW());

INSERT INTO
    property_values(value, property_id, created_at, updated_at)
VALUES
    ('Su dung lau dai', 3, NOW(), NOW());

use database_03_thanhnguyen;

INSERT INTO
    product_properties(property_values_id, product_id)
VALUES
    (1, 1);

INSERT INTO
    product_properties(property_values_id, product_id)
VALUES
    (4, 1);

INSERT INTO
    product_properties(property_values_id, product_id)
VALUES
    (7, 1);

use database_03_thanhnguyen;

INSERT INTO
    product_properties(property_values_id, product_id)
VALUES
    (2, 2);

INSERT INTO
    product_properties(property_values_id, product_id)
VALUES
    (5, 2);

INSERT INTO
    product_properties(property_values_id, product_id)
VALUES
    (8, 2);

use database_03_thanhnguyen;

INSERT INTO
    product_properties(property_values_id, product_id)
VALUES
    (3, 3);

INSERT INTO
    product_properties(property_values_id, product_id)
VALUES
    (6, 3);

INSERT INTO
    product_properties(property_values_id, product_id)
VALUES
    (9, 3);

use database_03_thanhnguyen;

SELECT
    *
FROM
    products;

use database_03_thanhnguyen;

SELECT
    products.name as 'Name product',
    properties.property_name as 'Thuoc Tinh',
    property_values.value
FROM
    property_values,
    properties,
    product_properties,
    products
WHERE
    properties.id = property_values.property_id
    AND property_values.id = product_properties.property_values_id
    AND product_properties.product_id = products.id
    AND products.id = 2;

SELECT
    *
FROM
    products
WHERE
    quantity > 0;