# MedFind — Prescription & Medicine Management Platform

**Live Demo:** [prescription-finder-git-main-idris-projects-508cd8f1.vercel.app](https://prescription-finder-git-main-idris-projects-508cd8f1.vercel.app/)

A full-stack web application that connects patients, doctors, and pharmacies to streamline prescription management and medicine discovery.

---

## Features

### Patients
- View and track active prescriptions
- Search medicines across registered pharmacies
- Schedule and manage appointments
- Connect with doctors and submit requests

### Doctors
- Write and manage prescriptions
- View patient list and medical history
- Connect with pharmacies
- Manage incoming connection requests

### Pharmacies
- Manage medicine inventory (add, edit, delete)
- Browse and fulfill prescription orders
- Track medicine availability and stock levels

### Admin
- Verify and manage doctor registrations
- Manage all users across roles
- Overview of platform activity

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite 6 |
| Routing | React Router v7 |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui, Radix UI |
| Backend / Auth | Firebase (Auth + Firestore) |
| Forms | React Hook Form + Zod |
| Charts | Recharts |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm

### Installation

```bash
git clone https://github.com/jidris-spec/Prescription-Finder.git
cd Prescription-Finder
pnpm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Development

```bash
pnpm dev
```

### Production Build

```bash
pnpm build
```

---

## Project Structure

```
src/
├── app/              # Router, providers, entry point
├── auth/             # Login, sign-up, auth callback pages
├── context/          # AuthContext (Firebase auth + profile)
├── guards/           # Route protection by role
├── roles/
│   ├── admin/        # Admin dashboard and user management
│   ├── doctor/       # Doctor pages and components
│   ├── patient/      # Patient pages and components
│   └── pharmacy/     # Pharmacy pages and components
└── shared/
    ├── components/   # Reusable UI components and layout
    ├── lib/
    │   └── firebase/ # Firebase client, Firestore queries
    ├── pages/        # Shared pages (search, prescriptions, settings)
    └── styles/       # Global CSS
```

---

## Role-Based Access

| Route | Patient | Doctor | Pharmacy | Admin |
|-------|---------|--------|----------|-------|
| `/dashboard` | ✓ | ✓ | ✓ | ✓ |
| `/dashboard/prescriptions` | ✓ | ✓ | ✓ | ✓ |
| `/dashboard/new-prescription` | | ✓ | | |
| `/dashboard/inventory` | | | ✓ | ✓ |
| `/dashboard/orders` | | | ✓ | |
| `/dashboard/users` | | | | ✓ |
| `/dashboard/verifications` | | | | ✓ |

---

## License

MIT
