# CodeBuddy Usage Examples

This file contains example scenarios for using CodeBuddy in the emall-cursor project.

## Example 1: Creating a User API Endpoint

### Command
```bash
codebuddy -p "Create a REST API endpoint for user registration"
```

### What CodeBuddy Will Do
- Analyze existing API structure
- Generate user registration endpoint
- Add input validation
- Include error handling
- Suggest appropriate HTTP status codes

### Expected Output
```javascript
// POST /api/users/register
app.post('/api/users/register', async (req, res) => {
  try {
    const { email, password, username } = req.body;
    
    // Validation
    if (!email || !password || !username) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Create user logic here
    const user = await User.create({ email, password, username });
    
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});
```

## Example 2: Refactoring Legacy Code

### Command
```bash
codebuddy -p "Refactor callback-based code to use async/await"
```

### Before
```javascript
function getUser(id, callback) {
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}
```

### After (CodeBuddy suggestion)
```javascript
async function getUser(id) {
  try {
    const result = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return result;
  } catch (error) {
    throw error;
  }
}
```

## Example 3: Adding Tests

### Command
```bash
codebuddy -p "Generate unit tests for the shopping cart module"
```

### CodeBuddy Output
```javascript
describe('Shopping Cart', () => {
  let cart;
  
  beforeEach(() => {
    cart = new ShoppingCart();
  });
  
  test('should add item to cart', () => {
    cart.addItem({ id: 1, name: 'Product', price: 10 });
    expect(cart.items.length).toBe(1);
  });
  
  test('should calculate total price', () => {
    cart.addItem({ id: 1, name: 'Product 1', price: 10 });
    cart.addItem({ id: 2, name: 'Product 2', price: 20 });
    expect(cart.getTotal()).toBe(30);
  });
  
  test('should remove item from cart', () => {
    cart.addItem({ id: 1, name: 'Product', price: 10 });
    cart.removeItem(1);
    expect(cart.items.length).toBe(0);
  });
});
```

## Example 4: Bug Fixing

### Command
```bash
codebuddy -p "Fix the memory leak in the order processing service"
```

### What CodeBuddy Does
1. Analyzes the code for memory leaks
2. Identifies event listeners not being cleaned up
3. Suggests fixes
4. Adds proper cleanup code

## Example 5: Documentation

### Command
```bash
codebuddy -p "Add comprehensive JSDoc comments to all functions in utils.js"
```

### Before
```javascript
function formatPrice(amount, currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}
```

### After (with CodeBuddy)
```javascript
/**
 * Formats a numeric amount as a currency string
 * @param {number} amount - The amount to format
 * @param {string} currency - The currency code (e.g., 'USD', 'EUR')
 * @returns {string} Formatted currency string
 * @example
 * formatPrice(29.99, 'USD') // Returns '$29.99'
 */
function formatPrice(amount, currency) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}
```

## Example 6: Security Enhancement

### Command
```bash
codebuddy -p "Add input sanitization to prevent SQL injection"
```

### What CodeBuddy Suggests
- Use parameterized queries
- Add input validation
- Implement sanitization functions
- Add security middleware

## Example 7: Performance Optimization

### Command
```bash
codebuddy -p "Optimize the product search query for better performance"
```

### CodeBuddy Analysis
- Suggests adding database indexes
- Recommends caching strategies
- Proposes query optimization
- Suggests pagination implementation

## Example 8: Code Review

### Command
```bash
codebuddy -p "Review the checkout module for potential issues"
```

### CodeBuddy Checks
- Code quality issues
- Security vulnerabilities
- Performance bottlenecks
- Best practice violations
- Missing error handling

## Example 9: Auto-Commit Workflow

### Command
```bash
codebuddy -p "Add logging to all API endpoints" --acp
```

### What Happens
1. CodeBuddy generates the logging code
2. Applies changes to all files
3. Automatically commits with descriptive message
4. Pushes to the remote repository

⚠️ Use with caution - always review before using --acp

## Example 10: Multiple Related Tasks

### Commands
```bash
# Step 1: Create model
codebuddy -p "Create a Product model with Mongoose"

# Step 2: Create controller
codebuddy -p "Create CRUD controllers for Product model"

# Step 3: Create routes
codebuddy -p "Create REST API routes for Product"

# Step 4: Add tests
codebuddy -p "Generate integration tests for Product API"
```

## Tips for Effective Prompts

1. **Be Specific**: Include file names, line numbers, or specific functionality
2. **Provide Context**: Mention the technology stack or framework
3. **State Requirements**: List any specific requirements or constraints
4. **Reference Existing Code**: Point to similar patterns in the codebase

## Getting More Help

For more examples and detailed documentation:
```bash
codebuddy --help
```

Or visit the [Quick Start Guide](../CODEBUDDY_QUICKSTART.md).
