import type { User } from '../types/auth';

// Simple in-memory storage for demo purposes
// WARNING: This is NOT production-ready. In production:
// - Passwords should NEVER be stored in plain text
// - Passwords should be hashed using bcrypt or similar
// - Authentication should use JWT tokens or session cookies
// - Use HTTPS for all authentication requests
// - Implement rate limiting and account lockout
// - Add email verification
const USERS_KEY = 'genie_users';
const CURRENT_USER_KEY = 'genie_current_user';

interface StoredUser {
  id: string;
  email: string;
  password: string; // SECURITY NOTE: Stored in plain text for demo only
}

export const authService = {
  register: async (email: string, password: string): Promise<User> => {
    // Get existing users
    const usersJson = localStorage.getItem(USERS_KEY);
    const users: StoredUser[] = usersJson ? JSON.parse(usersJson) : [];
    
    // Check if user already exists
    if (users.find(u => u.email === email)) {
      throw new Error('User already exists with this email');
    }
    
    // Create new user
    const newUser: StoredUser = {
      id: Date.now().toString(),
      email,
      password, // SECURITY NOTE: Plain text storage for demo only
    };
    
    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    // Return user without password
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _pwd, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  },
  
  login: async (email: string, password: string): Promise<User> => {
    const usersJson = localStorage.getItem(USERS_KEY);
    const users: StoredUser[] = usersJson ? JSON.parse(usersJson) : [];
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    // Store current user
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _pwd, ...userWithoutPassword } = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
    
    return userWithoutPassword;
  },
  
  logout: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
  },
  
  getCurrentUser: (): User | null => {
    const userJson = localStorage.getItem(CURRENT_USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  },
};
