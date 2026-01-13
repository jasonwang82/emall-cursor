# CodeBuddy Quick Start Guide

This guide will help you get started with CodeBuddy in the emall-cursor project.

## Prerequisites

- CodeBuddy must be installed on your system
- Git configured and repository cloned

## Quick Start

### 1. Interactive Mode

Launch CodeBuddy in interactive mode:

```bash
codebuddy
```

This will start an interactive session where you can:
- Ask questions about the codebase
- Request code generation
- Get refactoring suggestions
- Debug issues

### 2. Prompt Mode

Use the `-p` flag to provide a specific task:

```bash
codebuddy -p "Add user registration endpoint"
```

CodeBuddy will:
1. Analyze the request
2. Review the existing codebase
3. Generate the required code
4. Suggest where to place it

### 3. Auto-Commit Mode

Use `--acp` to automatically commit and push changes:

```bash
codebuddy --acp
```

⚠️ **Warning**: This will automatically commit changes. Review carefully!

## Common Use Cases

### Adding a New Feature

```bash
codebuddy -p "Implement shopping cart functionality"
```

### Refactoring Code

```bash
codebuddy -p "Refactor user authentication to use JWT tokens"
```

### Bug Fixing

```bash
codebuddy -p "Fix the payment processing timeout issue"
```

### Generating Tests

```bash
codebuddy -p "Create unit tests for the order service"
```

### Documentation

```bash
codebuddy -p "Add JSDoc comments to all API endpoints"
```

## Configuration

CodeBuddy can be configured using `.codebuddy.config.json`:

```json
{
  "codebuddy": {
    "enabled": true,
    "autoCommit": false,
    "features": {
      "codeGeneration": true,
      "refactoring": true,
      "debugging": true,
      "documentation": true,
      "codeReview": true
    }
  }
}
```

## Tips and Best Practices

1. **Be Specific**: The more specific your prompt, the better the results
   - ❌ "Fix bugs"
   - ✅ "Fix the null pointer exception in checkout.js line 45"

2. **Context Matters**: Provide context in your prompts
   - ❌ "Add authentication"
   - ✅ "Add JWT authentication to the REST API endpoints"

3. **Review Changes**: Always review CodeBuddy's suggestions before committing
   
4. **Iterative Approach**: Start with small tasks and build up
   
5. **Use --help**: Explore all available options
   ```bash
   codebuddy --help
   ```

## Getting Help

### View All Options

```bash
codebuddy --help
```

### Check Version

```bash
codebuddy --version
```

## Troubleshooting

### CodeBuddy Not Found

Make sure CodeBuddy is installed and in your PATH:

```bash
which codebuddy
```

### Configuration Issues

Verify your configuration file is valid JSON:

```bash
cat .codebuddy.config.json | python -m json.tool
```

### Permission Issues

Ensure you have write permissions in the repository:

```bash
ls -la
```

## Advanced Usage

### Combining Options

```bash
codebuddy -p "Add error handling" --acp
```

### Working with Specific Files

```bash
codebuddy -p "Refactor src/api/users.js to use async/await"
```

### Multiple Tasks

Run CodeBuddy multiple times for different tasks:

```bash
codebuddy -p "Add input validation"
codebuddy -p "Add error logging"
codebuddy -p "Add unit tests"
```

## Next Steps

- Explore the [Custom Agent Configuration](./.github/agents/codebuddy.agent.md)
- Read the [Main README](./README.md)
- Experiment with different prompts
- Customize the configuration for your workflow

Happy coding with CodeBuddy! 🚀
