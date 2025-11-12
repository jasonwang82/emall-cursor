# Genie Platform

An AI-powered web application development platform that allows users to describe their application ideas and generates them through AI.

## Project Status

This is the initial implementation phase, focusing on the foundation of the platform:
- Homepage with application description interface
- User authentication system
- Basic routing and navigation

## Features

### Homepage
- Clean, modern interface with gradient design
- Text input for describing application ideas
- Support for Enter key submission
- Login/Register buttons in header
- Authentication requirement prompt when not logged in

### Authentication
- Email/password based registration and login
- No email verification (for demo purposes)
- Session persistence using localStorage
- Protected routes requiring authentication

### Canvas Page
- Placeholder page showing "Coming Soon" message
- Displays the user's submitted application prompt
- Navigation back to homepage

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **LocalStorage** - Demo authentication storage

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Security Notes

⚠️ **Important**: The current authentication implementation is for demonstration purposes only and should NOT be used in production:

- Passwords are stored in plain text in localStorage
- No password hashing (bcrypt or similar)
- No HTTPS enforcement
- No rate limiting or account lockout
- No email verification
- No CSRF protection
- No secure session management

For production use, implement:
- Proper password hashing (bcrypt, argon2)
- JWT tokens or secure session cookies
- HTTPS/TLS encryption
- Email verification
- Rate limiting
- Account security features
- Backend authentication server

## User Flow

1. User visits homepage
2. User can describe their application idea in the text area
3. If not logged in and tries to submit:
   - Login/Register modal appears
   - User can create account or login
4. After authentication:
   - User can submit their application description
   - User is redirected to canvas page
5. Canvas page shows "Coming Soon" with the submitted prompt
6. User can navigate back to homepage

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── AuthModal.tsx  # Login/Register modal
│   └── AuthModal.css
├── contexts/          # React contexts
│   └── AuthContext.tsx
├── hooks/             # Custom React hooks
│   └── useAuth.ts
├── pages/             # Page components
│   ├── HomePage.tsx   # Landing page
│   ├── HomePage.css
│   ├── CanvasPage.tsx # Canvas placeholder
│   └── CanvasPage.css
├── services/          # Business logic
│   └── authService.ts # Authentication service
├── types/             # TypeScript type definitions
│   └── auth.ts
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## Future Enhancements

- Backend API integration
- Proper authentication with JWT
- AI integration for app generation
- Real-time canvas with code generation
- Application preview and export
- User dashboard
- Project management
- Collaboration features

## License

Private project
