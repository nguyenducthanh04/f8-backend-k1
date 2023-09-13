CREATE TABLE `customers` (
    `id` int PRIMARY KEY,
    `name` varchar(100) NOT NULL,
    `email` varchar(100) NOT NULL,
    `password` varchar(100) NOT NULL,
    `created_at` timestamp,
    `updated_at` timestamp
);

CREATE TABLE `products` (
    `id` int PRIMARY KEY,
    `code` varchar(10) NOT NULL,
    `name` varchar(200) NOT NULL,
    `description` text,
    `price` float DEFAULT 0,
    `thumnail` varchar(150),
    `category_id` int,
    `created_at` timestamp,
    `updated_at` timestamp
);

CREATE TABLE `product_categories` (
    `id` int PRIMARY KEY,
    `name` varchar(200) NOT NULL,
    `created_at` timestamp,
    `updated_at` timestamp
);

CREATE TABLE `orders` (
    `id` int PRIMARY KEY,
    `customers_id` int NOT NULL,
    `quantity` int NOT NULL,
    `total` float NOT NULL,
    `status_id` int NOT NULL,
    `created_at` timestamp,
    `updated_at` timestamp
);

CREATE TABLE `order_detail` (
    `id` int PRIMARY KEY,
    `order_id` int NOT NULL,
    `product_id` int NOT NULL,
    `price` float NOT NULL,
    `quantity` int NOT NULL,
    `amount` float NOT NULL,
    `created_at` timestamp,
    `updated_at` timestamp
);

CREATE TABLE `status` (
    `id` int PRIMARY KEY,
    `name` varchar(100) NOT NULL,
    `created_at` timestamp,
    `updated_at` timestamp
);

ALTER TABLE
    `products`
ADD
    FOREIGN KEY (`category_id`) REFERENCES `product_categories` (`id`);

ALTER TABLE
    `orders`
ADD
    FOREIGN KEY (`customers_id`) REFERENCES `customers` (`id`);

ALTER TABLE
    `orders`
ADD
    FOREIGN KEY (`status_id`) REFERENCES `status` (`id`);

ALTER TABLE
    `order_detail`
ADD
    FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE
    `order_detail`
ADD
    FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

INSERT INTO
    customers(`name`, `email`, `password`, `status`)
VALUES
    (
        'Nguyen Van A',
        'vana@gmail.com',
        MD5('123456'),
        1
    )
INSERT INTO
    customers(`name`, `email`, `password`, `status`)
VALUES
    (
        'Nguyen Van B',
        'vanb@gmail.com',
        SHA1('123456'),
        1
    )