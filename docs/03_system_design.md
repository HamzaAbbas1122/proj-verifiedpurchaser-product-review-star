# System Architecture

## Tech Stack
- **Frontend**: React 18 (TSX), Vite, TailwindCSS  
- **API**: Go 1.22, Gin, gRPC for internal services  
- **DB**: PostgreSQL 15 (Citus for sharding), Redis 7 (TTL cache, Bloom filter)  
- **Message Bus**: NATS JetStream (event sourcing)  
- **Auth**: OAuth2/JWT (RS256) via Auth0 (or internal IdP)  
- **CI/CD**: GitHub Actions, Docker, Helm, K8s 1.28  

## Topology
- **Client** → HTTPS/1.1 → **Ingress (NGINX)** → **API GW (Envoy)** →  
  - **Review Service (Go)** – gRPC ↔ **Order Service** (existing)  
  - **Rating Service (Go)** – gRPC ↔ **PostgreSQL** (primary) & **Redis** (read‑through)  
  - **Moderation Service (Go)** – gRPC ↔ **NATS JetStream** (vote events)  
- **Cache Layer**: Redis (LRU, Bloom filter for duplicate vote check)  
- **Background Workers**: Go workers subscribed to NATS for async aggregation & fraud detection  

## Database Schema
```yaml
tables:
  users:
    id: uuid PK
    email: varchar(255) UNIQUE
    created_at: timestamptz
    indexes: [email]
  orders:
    id: uuid PK
    user_id: uuid FK users.id
    status: varchar(20) CHECK(status IN ('pending','shipped','delivered','canceled'))
    delivered_at: timestamptz NULL
    created_at: timestamptz
    indexes: [user_id, status]
  order_items:
    id: uuid PK
    order_id: uuid FK orders.id
    product_id: uuid
    quantity: int
    indexes: [order_id, product_id]
  products:
    id: uuid PK
    name: varchar(255)
    avg_rating: numeric(3,2) DEFAULT 0
    rating_count: int DEFAULT 0
    created_at: timestamptz
    indexes: [name]
  reviews:
    id: uuid PK
    product_id: uuid FK products.id
    user_id: uuid FK users.id
    order_id: uuid FK orders.id
    rating: smallint CHECK(rating BETWEEN 1 AND 5)
    title: varchar(255)
    body: text
    verified: bool GENERATED ALWAYS AS (EXISTS(SELECT 1 FROM orders o WHERE o.id=order_id AND o.user_id=user_id AND o.status='delivered')) STORED
    created_at: timestamptz
    indexes: [product_id, user_id, verified]
  helpful_votes:
    id: uuid PK
    review_id: uuid FK reviews.id
    user_id: uuid FK users.id
    vote: smallint CHECK(vote IN (1,-1))
    created_at: timestamptz
    unique: