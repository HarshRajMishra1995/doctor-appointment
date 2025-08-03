# 🏥 Doctor Appointment Booking API

A backend REST API to manage doctors, available slots, and patient appointments — built with **NestJS**, **PostgreSQL**, and **Prisma ORM**.

---

## 📌 Project Overview

This project provides:
- Doctor management (create/list)
- Time slot assignment to doctors
- Appointment booking with conflict prevention
- RESTful architecture with modular service design
- PostgreSQL as the database
- Pg as ORM, using the `pg` client under the hood

---

## 🧰 Tech Stack

- **Backend Framework:** [NestJS](https://nestjs.com/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/) (using `pg`)
- **Validation:** class-validator, class-transformer
- **Documentation:** Swagger (optional)
- **Language:** TypeScript
- **Tooling:** Nodemon, ESLint

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/doctor-appointment-api.git
cd doctor-appointment-api
npm install
npm run seed
.env includes below details
DB_HOST=gondola.proxy.rlwy.net
DB_PORT=44255
DB_USERNAME=postgres
DB_PASSWORD=bukziyuKnAjgwvkXwtkLlHugSmdOjTla
DB_NAME=railway


