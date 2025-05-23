# Workflow repo for the CA ✇
## Description
This is a project based on the workflow course from Noroff Vocational School given in May of 2025. The course is meant to teach us how to use development tools such as ESLint, Prettier, Husky - as well as Vitest and Playwright for testing. 

## Table of Content
1. [Initial Setup](#initial-setup)
2. [Enviorment Variables](#enviorment-variables)
3. [Available Scripts](#available-scripts)

## Initial Setup
Clone the repository and install dependencies:

```bash
npm install
```

## Enviorment Variables
Create a .env file with the following:

```bash
TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```
These are used by the Playwright login tests. Your .env file is ignored via .gitignore, and an .env.example is included.

## Available Scripts

| Script       | Command                    | Description                                             |
| ------------ | -------------------------- | ------------------------------------------------------- |
| `dev`        | `npm run dev`              | Start live-server                                       |
| `test`       | `npm run test:unit`        | Run all unit tests with Vitest                          |
| `test:e2e`   | `npm run test:e2e`         | Run Playwright end-to-end tests                         |
| `lint`       | `npm run lint`             | Run ESLint manually                                     |
| `lint-staged`| `npx lint-staged`          | Lint staged files (used by Husky)                       |
| `prepare`    | `npm run prepare`          | Husky install (should be installed on npm install)      |

Built by **Thea (QueenWoofie)** 🐾