# MITAOE Frontend Designs

MITAOE Frontend Designs is a repository for creating and managing frontend design components and applications for MIT Academy of Engineering (MITAOE) projects. This repository serves as a starting point for React/TypeScript-based frontend applications and design systems.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Initial Repository Setup
The repository starts minimal with only a README.md file. To begin frontend development:

- **Environment Check**: Node.js v20.19.5 and npm v10.8.2 are available
- **Git**: Version 2.51.0 is available for version control

### Frontend Project Initialization 
Choose ONE of the following approaches based on project requirements:

#### Option 1: Modern Vite + React + TypeScript (Recommended)
- `npm create vite@latest . -- --template react-ts` -- takes ~1 second, NEVER CANCEL
- `npm install` -- takes ~7 seconds, NEVER CANCEL. Set timeout to 2+ minutes for safety
- `npm run dev` -- starts development server on http://localhost:5173/ in ~1 second
- `npm run build` -- builds for production in ~3 seconds, NEVER CANCEL

#### Option 2: Create React App (Deprecated but Still Works)
- `npx create-react-app . --template typescript` -- takes ~2 minutes, NEVER CANCEL. Set timeout to 10+ minutes
- `npm start` -- starts development server on http://localhost:3000/
- `npm run build` -- builds for production
- **WARNING**: CRA is deprecated as of 2024, prefer Vite for new projects

### Essential Development Dependencies
After project initialization, install common frontend development tools:
- `npm install --save-dev eslint prettier` -- takes ~1 second, NEVER CANCEL
- `npm install --save-dev @types/react @types/react-dom` (if not already included)

### Build and Development Commands
- **Development Server**: `npm run dev` (Vite) or `npm start` (CRA) -- starts instantly
- **Production Build**: `npm run build` -- takes 2-5 seconds for small projects, NEVER CANCEL. Set timeout to 5+ minutes for larger projects
- **Type Checking**: `npm run tsc --noEmit` (if TypeScript is configured)
- **Linting**: `npx eslint . --ext .ts,.tsx,.js,.jsx` -- runs instantly
- **Formatting**: `npx prettier --write .` -- runs instantly

### Testing Commands
Default React project setup includes testing:
- `npm test` -- runs test suite interactively, NEVER CANCEL
- `npm run test -- --coverage` -- runs tests with coverage report
- **Test files**: Create files ending in `.test.tsx` or `.spec.tsx`

## Validation

### Manual Validation Requirements
**ALWAYS run through these validation scenarios after making changes:**

1. **Project Initialization Validation**:
   - Create new project using chosen method
   - Verify `npm install` completes successfully
   - Confirm development server starts and loads React application
   - Take a screenshot of the running application in browser

2. **Build Process Validation**:
   - Run `npm run build` and verify it completes without errors
   - Check that `dist/` (Vite) or `build/` (CRA) directory is created with HTML, CSS, and JS files
   - Verify built files are properly minified

3. **Development Workflow Validation**:
   - Make a simple change to `src/App.tsx` (e.g., modify text content)
   - Verify hot reload works in development server
   - Confirm TypeScript compilation works without errors

4. **Code Quality Validation**:
   - Run linting commands and ensure no critical errors
   - Test formatting commands work correctly
   - Verify any added dependencies install successfully

### Critical Validation Steps
- **ALWAYS** test the complete development setup from scratch in a clean directory
- **ALWAYS** verify the development server starts and displays content correctly
- **ALWAYS** validate production builds complete successfully
- **NEVER CANCEL** build processes - they may appear to hang but are processing

## Common Tasks

### Repository Structure (Fresh Clone)
```
/home/runner/work/mitaoe-frontend-designs/mitaoe-frontend-designs/
├── .git/
├── .github/
│   └── copilot-instructions.md
└── README.md
```

### After Frontend Project Setup
```
project-root/
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts (Vite) or
├── craco.config.js (if using CRACO with CRA)
└── node_modules/
```

### Frequently Used Commands Output

#### npm --version
```
10.8.2
```

#### node --version
```
v20.19.5
```

#### Fresh Vite Project package.json
```json
{
  "name": "project-name",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.13",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.3",
    "eslint": "^9.36.0",
    "typescript": "~5.8.3",
    "vite": "^7.1.7"
  }
}
```

## Important Notes

### Performance and Timing Expectations
- **Project Creation**: 1 second (Vite) to 2 minutes (CRA) - NEVER CANCEL
- **Dependency Installation**: 7-10 seconds for basic setup, up to 2 minutes for complex projects
- **Development Server Startup**: Nearly instant (1-2 seconds)
- **Production Build**: 2-5 seconds for small projects, up to several minutes for large applications
- **Linting/Formatting**: Nearly instant for small codebases

### Critical Warnings
- **NEVER CANCEL** any npm install, build, or test commands
- **ALWAYS** wait for npm operations to complete - they may appear to hang during network operations
- **ALWAYS** use appropriate timeouts: 5+ minutes for builds, 10+ minutes for initial project creation
- **Development servers run indefinitely** - this is expected behavior for `npm run dev` or `npm start`

### Design-Focused Development
Since this is a frontend designs repository:
- **Focus on component development**: Create reusable React components in `src/components/`
- **Style organization**: Use CSS modules, styled-components, or Tailwind CSS for styling
- **Design system approach**: Consider tools like Storybook for component documentation
- **Responsive design**: Test components across different screen sizes
- **Accessibility**: Ensure components meet WCAG guidelines

### Git Workflow
- **ALWAYS** commit working code to avoid losing progress
- **Use meaningful commit messages** following conventional commit format
- **Test locally** before pushing changes
- **Keep dependencies up to date** but test thoroughly after updates

This repository is intended for collaborative frontend development work for MITAOE projects, prioritizing modern React development practices and component-driven design.