# SkillSphere – Online Learning Platform

A modern online learning platform built with Next.js where users can explore courses, enroll in skill-based programs, and manage their learning journey.

## Live Demo

[Live Link](https://skillsphere-omega-neon.vercel.app/)

## Features

- Browse and search courses by title and category
- Course details page with curriculum and learning outcomes
- User authentication with email/password and Google OAuth
- Protected routes for course details and profile pages
- User profile page with stats and progress
- Update profile with name and photo
- Toast notifications for success and error feedback
- Loading states and skeleton loaders
- Custom 404 page
- Fully responsive for mobile, tablet, and desktop

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + DaisyUI
- **Authentication:** BetterAuth
- **Notifications:** React Toastify
- **Language:** JavaScript (JSX)

## Pages

| Page | Route | Protected |
|------|-------|-----------|
| Home | `/` | No |
| All Courses | `/courses` | No |
| Course Details | `/courses/[id]` | Yes |
| Login | `/login` | No |
| Register | `/register` | No |
| Profile | `/profile` | Yes |
| Update Profile | `/profile/update` | Yes |
| Not Found | `*` | No |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/skillsphere.git
cd skillsphere
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root:

```env
BETTER_AUTH_SECRET=your_32_character_secret_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Navigate to APIs & Services → Credentials
4. Create OAuth 2.0 Client ID → Web application
5. Add `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI
6. Copy the Client ID and Secret into `.env.local`

## Project Structure

skillsphere/
├── app/
│   ├── api/auth/[...all]/route.js
│   ├── courses/
│   │   ├── [id]/page.jsx
│   │   └── page.jsx
│   ├── login/page.jsx
│   ├── register/page.jsx
│   ├── profile/
│   │   ├── page.jsx
│   │   └── update/page.jsx
│   ├── layout.jsx
│   ├── page.jsx
│   ├── loading.jsx
│   └── not-found.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── CourseCard.jsx
├── data/
│   └── courses.json
├── lib/
│   ├── auth.js
│   └── auth-client.js
├── middleware.js
└── next.config.js

## License

This project was built as an academic assignment. All rights reserved.
