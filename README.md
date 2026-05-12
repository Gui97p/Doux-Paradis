# Doux Paradis

A company presentation website and e-commerce built as a high school entrepreneurship project. Frontend by [Yure Anjos](https://github.com/YureAnjos), backend/API by me.

The project is split across two branches: `client` for the frontend and `server` for the API.

---

## Stack

**Backend (`server` branch)**
- **NestJS** — chosen for its module-based structure, which kept the API organized even as features grew
- **MongoDB + Mongoose** — flexible schema, good fit for a product catalog that kept changing during the project

**Frontend (`client` branch)**
- React + plain CSS

---

## Context

This was built 3–4 years ago for a high school entrepreneurship class. The idea was to simulate a real business — Doux Paradis — with an actual storefront and a working backend API, not just a static page.

It's a monorepo with frontend and backend living in separate branches, which is a bit unconventional, but it worked for a two-person project at the time.

---

## Branches

| Branch | What's in it |
|---|---|
| `client` | Frontend — HTML, CSS, JavaScript |
| `server` | Backend — NestJS REST API + MongoDB |

---

## Running locally

**API (server branch):**
```bash
git checkout server
npm install
# set up your .env with MONGODB_URI and any other required vars
npm run start:dev
```

**Frontend (client branch):**
```bash
git checkout client
npm install
npm start
```

---

## License

MIT
