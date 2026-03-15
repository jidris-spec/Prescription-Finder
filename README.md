# Medication Finder

Medication Finder is a multi-role healthcare web application that helps patients, doctors, pharmacies, and admins work inside a shared prescription and medicine-management workflow.

## Live Demo
https://prescription-finder.netlify.app/

## Tech Stack
- React
- React Router
- Firebase Authentication
- Firestore
- Tailwind CSS

## Core Roles
- **Doctor**: create prescriptions, manage patient connections, access patient and pharmacy-related workflows
- **Patient**: view prescriptions, manage schedules, connect with doctors
- **Pharmacy**: manage medicine inventory, view prescriptions, process orders
- **Admin**: manage users and oversee protected system workflows

## Current Features
- Authentication with Firebase Authentication
- Role-based route protection
- Multi-role dashboard architecture
- Doctor prescription workflow
- Patient prescription and doctor connection views
- Pharmacy inventory and medicine management
- Admin user management page
- Lazy-loaded routes for role-based pages

## Architecture Overview

### 1. Frontend Layer
The user interface is built with React and Tailwind CSS.  
Each role interacts with dedicated pages and components based on access permissions.

### 2. Application Logic Layer
React Router handles page navigation and route matching.  
Context API manages authentication state globally through `AuthProvider`.  
Protected routes are enforced with role guards such as `RequireRole`.

### 3. Backend Services Layer
Firebase Authentication handles user sign-in, sign-up, and session state.  
Firestore stores application data such as:
- user profiles
- prescriptions
- medicines
- connected doctor-patient relationships
- pharmacy inventory

## Authentication and Authorization Flow
1. User signs in with Firebase Authentication
2. The app listens to auth state through `onAuthStateChanged`
3. The user profile is loaded from Firestore
4. The profile role is used to control access to protected routes
5. The correct dashboard and pages are rendered based on the authenticated role

## Project Structure
- `src/app` – app bootstrap, router, provider composition
- `src/context` – authentication context and shared global state
- `src/guards` – route protection logic
- `src/roles` – role-specific pages, components, and APIs
- `src/shared` – reusable pages, components, hooks, utilities, and Firebase setup

## Example System Flow
User → React UI → Firebase Authentication → Firestore Profile/Data → Role-Based Route Access → Dashboard/Page Rendering

## Current Limitations / In Progress
- More robust prescription lifecycle tracking
- Better pharmacy inventory synchronization
- Additional admin tooling
- Further performance optimization and testing coverage

## Goal
The goal of this project is to model a realistic healthcare workflow system with role separation, protected routes, and connected data flows between patients, doctors, pharmacies, and administrators.
