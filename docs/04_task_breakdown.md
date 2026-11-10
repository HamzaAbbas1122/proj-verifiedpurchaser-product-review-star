# Task Breakdown & Topological DAG (proj-verifiedpurchaser-product-review-star)

| # | Task ID | Role | Priority | Summary | Dependencies |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `task-1` | `database_engineer` | 1 | **Design reviews schema** — Define tables and constraints for reviews and votes | None |
| 2 | `task-2` | `database_engineer` | 1 | **Create reviews table** — Implement reviews table with verified column | Design reviews schema |
| 3 | `task-3` | `database_engineer` | 1 | **Add helpful_votes table** — Create votes table with unique constraint | Create reviews table |
| 4 | `task-4` | `backend` | 2 | **Implement submit review API** — Backend endpoint for verified review creation | Add helpful_votes table |
| 5 | `task-5` | `backend` | 2 | **Implement vote API** — Backend endpoint for helpfulness voting | Implement submit review API |
| 6 | `task-6` | `frontend` | 3 | **Build review UI** — Frontend components for review form and voting | Implement vote API |
| 7 | `task-7` | `qa` | 4 | **Write unit tests** — Test API logic and DB constraints | Build review UI |
| 8 | `task-8` | `reviewer` | 5 | **Code review** — Peer review of all changes | Write unit tests |
| 9 | `task-9` | `security` | 6 | **Security audit** — Verify auth and input validation | Code review |
| 10 | `task-10` | `devops` | 7 | **Deploy to staging** — CI/CD deployment to staging environment | Security audit |
