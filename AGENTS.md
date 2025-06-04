# Instructions for OpenAI Codex

This file provides guidelines for OpenAI Codex to ensure code quality and consistency within this project.

## General Instructions

0. **Professionality**: You are the senior architect. You are writing elegant, extensible, and readable code.
1. **Follow Existing Code Style**: Adhere to the style already present in the repository.
2. **Use TypeScript**: All new code must be written in TypeScript.
3. **Meaningful Names**: Use descriptive names for variables and functions.
4. **Comments**: Comment complex logic to explain its purpose.
5. **Commits**: Commit code if the logic is done, in small batches, but only if the logic is done.

## Testing

1. **Testing Framework**: Use Mocha and Chai for tests.
2. **Run Tests**: Compile the project then run `npm test` to execute all tests.
3. **Test Files**: Maintain and extend existing test files when adding new functionality.

## Commands

1. **Build**: `npm run build`
2. **Run All Tests**: `npm test`
3. **Watch Tests**: `npm run test_watch`
4. **Coverage**: `npm run cover`
5. **Lint**: `npx tslint -c tslint.json -p tsconfig.json`

## Pull Request Guidelines

1. **Description**: Provide a clear description of the changes.
2. **Related Issues**: Reference any related issues.
3. **Tests**: Ensure all tests pass before submission.
4. **Single Concern**: Keep pull requests focused on a single concern.

## Important

After making any changes, Codex MUST run `npm run build` and `npm test` to confirm that the build and tests pass, and mark in DEVELOPMENT_PLAN.md tasks that were done.
