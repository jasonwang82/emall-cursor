# Emall-Cursor

E-commerce mall project with AI coding assistant integration.

## CodeBuddy Integration

This repository is integrated with CodeBuddy, an AI-powered coding assistant similar to Claude code that helps with development tasks.

### What is CodeBuddy?

CodeBuddy is an intelligent coding assistant that provides:
- Code generation and completion
- Automated refactoring
- Bug detection and fixes
- Documentation generation
- Code review assistance

### Installation

To use CodeBuddy, you need to have it installed on your system. Follow the official CodeBuddy installation guide.

### Usage

#### Basic Command

```bash
codebuddy
```

#### Command-line Options

| Option | Description |
|--------|-------------|
| `-p <prompt>` | Specify a project or provide a coding prompt |
| `--acp` | Automatically commit and push changes |
| `--help` | Display help information and all available options |

#### Examples

1. **Start CodeBuddy interactively:**
   ```bash
   codebuddy
   ```

2. **Run with a specific prompt:**
   ```bash
   codebuddy -p "Add user authentication to the checkout process"
   ```

3. **Auto-commit and push changes:**
   ```bash
   codebuddy --acp
   ```

4. **View all options:**
   ```bash
   codebuddy --help
   ```

### Custom Agent Configuration

The CodeBuddy custom agent is configured in `.github/agents/codebuddy.agent.md`. This configuration enables:
- Automated code suggestions
- Context-aware assistance
- Repository-specific customizations

### Getting Started

1. Install CodeBuddy on your system
2. Clone this repository
3. Run `codebuddy` from the repository root
4. Follow the interactive prompts or use command-line options

### Support

For more information about CodeBuddy commands and features, run:
```bash
codebuddy --help
```

## Project Structure

```
.
├── .github/
│   └── agents/
│       └── codebuddy.agent.md    # CodeBuddy agent configuration
└── README.md                      # This file
```

## Contributing

When contributing to this project, you can leverage CodeBuddy to:
- Generate boilerplate code
- Refactor existing implementations
- Create comprehensive tests
- Improve code documentation

## License

Please refer to the repository license file for licensing information.
