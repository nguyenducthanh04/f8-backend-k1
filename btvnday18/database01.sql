CREATE DATABASE database_01_nguyenducthanh;

use database_01_nguyenducthanh;

CREATE TABLE courses (
    id int NOT NULL,
    name varchar(50) NOT NULL,
    price float,
    detail text,
    teacher_id int NOT NULL,
    active int,
    created_at timestamp,
    updated_at timestamp
)
ALTER TABLE
    courses
ADD
    description text NULL
AFTER
    price;

ALTER TABLE
    courses CHANGE COLUMN detail content text NOT NULL;

INSERT INTO
    courses (
        id,
        name,
        price,
        description,
        content,
        teacher_id,
        active,
        created_at,
        updated_at
    )
VALUES
    (
        1,
        'Khoa hoc 1',
        100,
        'description 1',
        'content 1',
        1,
        1,
        '2023-08-23 17:30:00',
        NOW()
    );

INSERT INTO
    courses (
        id,
        name,
        price,
        description,
        content,
        teacher_id,
        active,
        created_at,
        updated_at
    )
VALUES
    (
        2,
        'Khoa hoc 2',
        200,
        'description 2',
        'content 2',
        2,
        2,
        '2023-08-23 17:30:00',
        NOW()
    );

INSERT INTO
    courses (
        id,
        name,
        price,
        description,
        content,
        teacher_id,
        active,
        created_at,
        updated_at
    )
VALUES
    (
        3,
        'Khoa hoc 3',
        300,
        'description 3',
        'content 3',
        3,
        3,
        '2023-08-23 17:30:00',
        NOW()
    );

INSERT INTO
    courses (
        id,
        name,
        price,
        description,
        content,
        teacher_id,
        active,
        created_at,
        updated_at
    )
VALUES
    (
        4,
        'Khoa hoc 4',
        400,
        'description 4',
        'content 4',
        4,
        4,
        '2023-08-23 17:30:00',
        NOW()
    );

INSERT INTO
    courses (
        id,
        name,
        price,
        description,
        content,
        teacher_id,
        active,
        created_at,
        updated_at
    )
VALUES
    (
        5,
        'Khoa hoc 5',
        500,
        'description 5',
        'content 5',
        5,
        5,
        '2023-08-23 17:30:00',
        NOW()
    );

INSERT INTO
    courses (
        id,
        name,
        price,
        description,
        content,
        teacher_id,
        active,
        created_at,
        updated_at
    )
VALUES
    (
        6,
        'Khoa hoc 6',
        600,
        'description 6',
        'content 6',
        6,
        6,
        '2023-08-23 17:30:00',
        NOW()
    );

INSERT INTO
    courses (
        id,
        name,
        price,
        description,
        content,
        teacher_id,
        active,
        created_at,
        updated_at
    )
VALUES
    (
        7,
        'Khoa hoc 7',
        700,
        'description 7',
        'content 7',
        7,
        7,
        '2023-08-23 17:30:00',
        NOW()
    );

INSERT INTO
    courses (
        id,
        name,
        price,
        description,
        content,
        teacher_id,
        active,
        created_at,
        updated_at
    )
VALUES
    (
        8,
        'Khoa hoc 8',
        800,
        'description 8',
        'content 8',
        8,
        8,
        '2023-08-23 17:30:00',
        NOW()
    );

INSERT INTO
    courses (
        id,
        name,
        price,
        description,
        content,
        teacher_id,
        active,
        created_at,
        updated_at
    )
VALUES
    (
        9,
        'Khoa hoc 9',
        900,
        'description 9',
        'content 9',
        9,
        9,
        '2023-08-23 17:30:00',
        NOW()
    );

UPDATE
    courses
SET
    name = 'Course 1',
    price = 1000
WHERE
    id = 1;

UPDATE
    courses
SET
    name = 'Course 2',
    price = 2000
WHERE
    id = 2;

UPDATE
    courses
SET
    name = 'Course 3',
    price = 3000
WHERE
    id = 3;

UPDATE
    courses
SET
    name = 'Course 4',
    price = 4000
WHERE
    id = 4;

UPDATE
    courses
SET
    name = 'Course 5',
    price = 5000
WHERE
    id = 5;

UPDATE
    courses
SET
    name = 'Course 6',
    price = 6000
WHERE
    id = 6;

UPDATE
    courses
SET
    name = 'Course 7',
    price = 7000
WHERE
    id = 7;

UPDATE
    courses
SET
    name = 'Course 8',
    price = 8000
WHERE
    id = 8;

UPDATE
    courses
SET
    name = 'Course 9',
    price = 9000
WHERE
    id = 9;

CREATE TABLE teacher (
    id int NOT NULL,
    name varchar(50) NOT NULL,
    bio text NULL,
    created_at timestamp,
    updated_at timestamp
)
INSERT INTO
    teacher (id, name, bio, created_at, updated_at)
VALUES
    (
        1,
        'teacher1',
        'Bio 1',
        '2023-08-23 17:30:00',
        NOW()
    );

INSERT INTO
    teacher (id, name, bio, created_at, updated_at)
VALUES
    (
        2,
        'teacher2',
        'Bio 2',
        '2023-08-23 17:30:00',
        NOW()
    );

INSERT INTO
    teacher (id, name, bio, created_at, updated_at)
VALUES
    (
        3,
        'teacher3',
        'Bio 3',
        '2023-08-23 17:30:00',
        NOW()
    );

UPDATE
    teacher
SET
    bio = 'New Bio 1'
WHERE
    id = 1;

UPDATE
    teacher
SET
    bio = 'New Bio 2'
WHERE
    id = 2;

UPDATE
    teacher
SET
    bio = 'New Bio 3'
WHERE
    id = 3;

SELECT
    *
FROM
    teacher;

SELECT
    *
FROM
    courses;