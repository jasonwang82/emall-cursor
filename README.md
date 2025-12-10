# EMall Cursor

A modern e-commerce platform built with cutting-edge web technologies.

## Overview

EMall Cursor is a women's fashion e-commerce platform designed for the Chinese market, featuring a clean, minimalist design inspired by Zara and H&M. This project demonstrates modern web development practices with a focus on user experience, performance, and scalability.

## Features

### Core Functionality
- 🏠 **Homepage** - Eye-catching hero carousel with featured products
- 🛍️ **Product Catalog** - Browse products with advanced filtering and sorting
- 📦 **Product Details** - Detailed product information with image galleries
- 🛒 **Shopping Cart** - Full cart management with quantity controls
- 💳 **Checkout** - Streamlined checkout process with address management
- 💰 **Payment** - Multiple payment options (Alipay, WeChat Pay, Card)
- 📋 **Order Management** - Track order history and status
- 👤 **User Profile** - Manage personal information and preferences

### User Experience
- 📱 **Responsive Design** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern UI** - Clean, minimalist interface with smooth animations
- 🌐 **Chinese Language Support** - Full localization for Chinese users
- ♿ **Accessibility** - WCAG-compliant components
- 🔐 **Authentication** - Secure login with email, WeChat, and Alipay

## Technology Stack

### Frontend
- **React 18+** - Modern UI library with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management

### UI Components
- **shadcn/ui** - High-quality accessible components
- **Radix UI** - Unstyled, accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful, consistent icons

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn/pnpm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jasonwang82/emall-cursor.git
cd emall-cursor
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory.

## Project Structure

```
emall-cursor/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Header.tsx   # Site header
│   │   ├── Footer.tsx   # Site footer
│   │   └── ...
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── ProductListPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   └── ...
│   ├── store/           # State management
│   │   └── useStore.ts  # Zustand store
│   ├── lib/             # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── README.md            # This file
```

## Key Pages

1. **Home** (`/`) - Landing page with hero carousel and featured products
2. **Products** (`/products`) - Product listing with filters and sorting
3. **Product Detail** (`/products/:id`) - Individual product information
4. **Cart** (`/cart`) - Shopping cart management
5. **Checkout** (`/checkout`) - Checkout and shipping information
6. **Payment** (`/payment`) - Payment method selection
7. **Orders** (`/orders`) - Order history and tracking
8. **Profile** (`/profile`) - User account management
9. **Login** (`/login`) - User authentication
10. **Register** (`/register`) - New user registration

## State Management

The application uses Zustand for global state management, handling:
- Shopping cart items
- User authentication state
- Product data
- UI state (modals, notifications)

## Styling

The project uses a combination of:
- **Tailwind CSS** for utility-first styling
- **CSS Variables** for theme customization
- **CSS Modules** for component-specific styles (where needed)
- **Animations** using Tailwind and custom keyframes

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Use TypeScript for all new files
- Follow the existing code style and conventions
- Write meaningful commit messages
- Add comments for complex logic
- Ensure all components are accessible

## License

This project is private and proprietary.

## Contact

Project maintainer: jasonwang82

## Acknowledgments

- Design inspiration from Zara and H&M
- UI components from shadcn/ui and Radix UI
- Icons from Lucide
- Community feedback and contributions

---

**Note**: This is an active development project. Features and documentation are continuously being updated.
