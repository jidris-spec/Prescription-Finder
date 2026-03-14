Medication Finder

Live Demo
[(link)
](https://app.netlify.com/projects/prescription-finder/overview)
Tech Stack
React
Firebase
Tailwind

Features
- Role Based Access Control
- Multi-role dashboards
- Prescription workflow
- Pharmacy inventory system

Architecture
Frontend (React + Tailwind) – The user interface where doctors, patients, pharmacies, and admins interact with the system.

Logic Layer (React Router + Context) – Handles routing, authentication state, and role-based access control so each user only sees the pages allowed for their role.

Backend Services (Firebase) –

Firebase Authentication manages user login and identity.

Firestore stores application data such as profiles, prescriptions, medicines, and pharmacy inventory.

Flow:
User → React Interface → Firebase Authentication → Firestore Database → Data returned to the correct role dashboard.

In short: React handles the interface and application logic, while Firebase provides authentication and real-time data storage.


