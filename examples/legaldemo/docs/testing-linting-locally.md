# Testing Linting Errors Locally

This guide explains how to test and fix linting errors locally before committing your code.

## Available Linting Commands

The project includes several npm scripts for linting and formatting:

### Check for Linting Errors

```bash
npm run lint
```

This command runs ESLint on all TypeScript and TSX files in the `src` directory and reports any errors without fixing them.

### Auto-fix Linting Errors

```bash
npm run lint:fix
```

This command runs ESLint with the `--fix` flag, which automatically fixes many linting errors (formatting, spacing, etc.).

### Check Prettier Formatting

```bash
npm run format:check
```

This command checks if all files are properly formatted according to Prettier rules without making changes.

### Auto-fix Prettier Formatting

```bash
npm run prettier
```

This command automatically formats all files according to Prettier rules.

### Fix All Issues (Lint + Prettier)

```bash
npm run fix
```

This command runs both `lint:fix` and `prettier` to fix all formatting and linting issues automatically.

### Type Checking

```bash
npm run type-check
```

This command runs TypeScript compiler to check for type errors without generating output files.

## Step-by-Step Testing Process

### 1. Check for Linting Errors

First, check if there are any linting errors:

```bash
cd examples/legaldemo
npm run lint
```

This will show you all ESLint errors in your code.

### 2. Check for Prettier Formatting Issues

Check if files are properly formatted:

```bash
npm run format:check
```

This will show you all Prettier formatting issues.

### 3. Fix All Issues Automatically

To automatically fix most issues:

```bash
npm run fix
```

This will:
- Fix ESLint errors that can be auto-fixed
- Format all files with Prettier

### 4. Verify All Issues Are Fixed

After running the fix command, verify everything is clean:

```bash
npm run lint
npm run format:check
npm run type-check
```

All three commands should complete without errors.

## Common Linting Errors and Solutions

### Prettier Errors

#### Trailing Newlines
**Error**: `Delete ␍⏎` or `Delete ␍⏎␍⏎`

**Solution**: Remove trailing newlines at the end of files. Files should end with a single newline, not multiple.

**Fix**: Run `npm run prettier` to auto-fix.

#### Line Length/Formatting
**Error**: `Replace ... with ...` or `Insert ␍⏎`

**Solution**: Prettier wants to reformat code to match its rules.

**Fix**: Run `npm run prettier` to auto-fix.

### TypeScript/ESLint Errors

#### Unused Variables
**Error**: `'variableName' is assigned a value but never used`

**Solution**: Remove the unused variable or use it in your code.

**Example**:
```typescript
// ❌ Bad
const { page } = useSitecore();
const isPageEditing = page.mode.isEditing; // Not used

// ✅ Good
const { page } = useSitecore();
// Or remove if not needed
```

#### Missing Imports
**Error**: `'ComponentName' is not defined`

**Solution**: Add the missing import statement.

## IDE Integration

### VS Code

1. **Install Extensions**:
   - ESLint
   - Prettier - Code formatter

2. **Enable Format on Save**:
   - Open Settings (Ctrl+,)
   - Search for "format on save"
   - Enable "Editor: Format On Save"

3. **View Errors**:
   - Errors will appear with red underlines
   - Hover over errors to see details
   - Check the "Problems" panel (Ctrl+Shift+M)

### Other IDEs

Most modern IDEs support ESLint and Prettier. Install the relevant plugins/extensions for your IDE.

## Pre-commit Workflow

Before committing your code, run:

```bash
# 1. Fix all linting and formatting issues
npm run fix

# 2. Verify everything is clean
npm run lint
npm run format:check
npm run type-check

# 3. If all pass, commit your changes
git add .
git commit -m "Your commit message"
```

## Continuous Integration

If you're using CI/CD, these commands are typically run automatically:

- `npm run lint` - Fails build if linting errors exist
- `npm run format:check` - Fails build if formatting issues exist
- `npm run type-check` - Fails build if TypeScript errors exist

## Quick Reference

| Command | Purpose | Auto-fixes? |
|---------|---------|-------------|
| `npm run lint` | Check ESLint errors | No |
| `npm run lint:fix` | Fix ESLint errors | Yes |
| `npm run format:check` | Check Prettier formatting | No |
| `npm run prettier` | Fix Prettier formatting | Yes |
| `npm run fix` | Fix all issues (lint + prettier) | Yes |
| `npm run type-check` | Check TypeScript types | No |

## Troubleshooting

### Errors Persist After Running Fix

1. **Check for syntax errors**: Some errors can't be auto-fixed
2. **Manually fix**: Review the error message and fix manually
3. **Check file encoding**: Ensure files use UTF-8 encoding
4. **Clear cache**: Try deleting `.next` folder and node_modules, then reinstall

### Prettier Conflicts with ESLint

The project uses `eslint-config-prettier` to disable ESLint rules that conflict with Prettier. If you see conflicts:

1. Ensure `eslint-config-prettier` is installed
2. Check your `.eslintrc` configuration
3. Run `npm run fix` which handles both

### Type Errors Not Showing

1. Run `npm run type-check` explicitly
2. Check `tsconfig.json` configuration
3. Ensure TypeScript is installed: `npm install typescript --save-dev`

## Best Practices

1. **Run linting before committing**: Always run `npm run lint` before committing
2. **Use format on save**: Enable format on save in your IDE
3. **Fix errors immediately**: Don't let linting errors accumulate
4. **Check CI/CD logs**: If CI fails, check the logs for specific errors
5. **Keep dependencies updated**: Update ESLint and Prettier regularly

## Related Documentation

- [Component Registration Guide](./component-registration-guide.md)
- [Manual Component Map Setup](./manual-component-map-setup.md)
- [Sitecore Setup Guide](./sitecore-setup.md)
