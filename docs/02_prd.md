# Product Requirements Document

## 1. Overview & Goals
- Verify review authenticity: only users with a delivered order of the product can submit reviews.
- Enable community moderation: deduplicate helpfulness votes per user, auto‑update product average ratings.
- KPI: 95 % verified review rate, <1 % duplicate helpfulness votes, <2 s average rating update latency.

## 2. Personas (Compact)
- **Verified Buyer**: “I want to share my experience after receiving the product.”
- **Moderator**: “I need to flag inappropriate content quickly.”
- **Data Analyst**: “I need accurate aggregate ratings for reporting.”

## 3. User Stories & Epics (Dense List)
* **Review Submission**  
  As a Verified Buyer, I want to submit a review so that I can help future shoppers.  
  - AC: Given a logged‑in user with a delivered order, When I submit a review, Then the review is stored and marked verified.  
  - AC: Given a user without a delivered order, When I attempt to review, Then I receive “Not eligible” error.  
  - AC: Given a review with >500 chars, When I submit, Then I receive “Exceeds character limit” error.

* **Helpfulness Voting**  
  As a Verified Buyer, I want to vote helpful so that useful reviews rise.  
  - AC: Given I have not voted on this review, When I click helpful, Then vote count increments and I cannot vote again.  
  - AC: Given I have already voted, When I click again, Then I receive “Duplicate vote” error.  
  - AC: Given a review with 10 helpful votes, When I vote, Then total becomes 11.

* **Rating Aggregation**  
  As a Data Analyst, I want product average ratings to update automatically so that dashboards stay current.  
  - AC: Given a new review with 5 stars, When it is stored, Then product average recalculates within 2 s.  
  - AC: Given a review is deleted, When deletion occurs, Then average recalculates within 2 s.  
  - AC: Given a review is edited, When edit completes, Then average recalculates within 2 s.

* **Moderation Pipeline**  
  As a Moderator, I want to flag reviews so that inappropriate content is removed.  
  - AC: Given a review, When I flag, Then it enters pending review queue.  
  - AC: Given a flagged review, When a moderator approves, Then review remains visible.  
  - AC: Given a flagged review, When a moderator rejects, Then review is hidden and user notified.

## 4. Functional Specs (Bullet Tree)

- **Review API**  
  - `POST /reviews`  
    *Auth*: JWT, scopes: `review:write`  
    *Body*: `{productId, orderId, rating, title, body}`  
    *Validation*:  
      - `orderId` must exist, belong to user, status `DELIVERED`.  
      - `rating` ∈ [1,5].  
      - `body` ≤ 500 chars.