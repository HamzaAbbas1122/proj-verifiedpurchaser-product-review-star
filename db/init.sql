```sql
-- ----------------------------------------------------
-- PostgreSQL DDL for Review & Rating System
-- ----------------------------------------------------

-- Enable extensions (if needed)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ----------------------------------------------------
-- users
-- ----------------------------------------------------
CREATE TABLE users (
    id          uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email       varchar(255) NOT NULL UNIQUE,
    created_at  timestamptz NOT NULL DEFAULT now()
);

-- ----------------------------------------------------
-- orders
-- ----------------------------------------------------
CREATE TABLE orders (
    id           uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id      uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    status       varchar(20) NOT NULL
        CHECK (status IN ('pending','shipped','delivered','canceled')),
    delivered_at timestamptz,
    created_at   timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status   ON orders(status);

-- ----------------------------------------------------
-- order_items
-- ----------------------------------------------------
CREATE TABLE order_items (
    id         uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id   uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id uuid NOT NULL,
    quantity   int NOT NULL CHECK (quantity > 0)
);

CREATE INDEX idx_order_items_order_id  ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);

-- ----------------------------------------------------
-- products
-- ----------------------------------------------------
CREATE TABLE products (
    id           uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name         varchar(255) NOT NULL,
    avg_rating   numeric(3,2) NOT NULL DEFAULT 0,
    rating_count int NOT NULL DEFAULT 0,
    created_at   timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_products_name ON products(name);

-- ----------------------------------------------------
-- reviews
-- ----------------------------------------------------
CREATE TABLE reviews (
    id          uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id  uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    user_id     uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    order_id    uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    rating      smallint NOT NULL CHECK (rating BETWEEN 1 AND 5),
    title       varchar(255),
    body        text,
    verified    bool GENERATED ALWAYS AS (
                    EXISTS (
                        SELECT 1
                        FROM orders o
                        WHERE o.id = order_id
                          AND o.user_id = user_id
                          AND o.status = 'delivered'
                    )
                ) STORED,
    created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_reviews_product_id ON reviews(product_id);
CREATE INDEX idx_reviews_user_id    ON reviews(user_id);
CREATE INDEX idx_reviews_verified   ON reviews(verified);

-- ----------------------------------------------------
-- helpful_votes
--
