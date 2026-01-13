---
# CodeBuddy Agent Configuration
# CodeBuddy is an AI coding assistant similar to Claude code
# The Copilot CLI can be used for local testing: https://gh.io/customagents/cli
# To make this agent available, merge this file into the default repository branch.
# For format details, see: https://gh.io/customagents/config

name: codebuddy
description: AI coding assistant that helps with code generation, refactoring, and debugging
---

# CodeBuddy Agent

CodeBuddy is an AI-powered coding assistant similar to Claude code. It provides intelligent code suggestions, refactoring capabilities, and helps with debugging.

## Features

- Code generation and completion
- Code refactoring and optimization
- Bug detection and fixing
- Documentation generation
- Code review assistance

## Usage

Run CodeBuddy from the command line:

```bash
codebuddy
```

### Command-line Options

- `-p` - Specify a project or prompt
- `--acp` - Auto-commit and push changes
- `--help` - Display help information

### Examples

```bash
# Start CodeBuddy with a specific prompt
codebuddy -p "Add authentication to the API"

# Run with auto-commit and push
codebuddy --acp

# View all available options
codebuddy --help
```

## Integration

This agent is integrated into the repository to provide AI-assisted coding capabilities. You can use it for various development tasks including:

1. Writing new features
2. Refactoring existing code
3. Fixing bugs
4. Generating tests
5. Improving code quality
