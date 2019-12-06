// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageDirectory: "coverage",
  testEnvironment: "node",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  setupFiles: [
    '<rootDir>/tests/jest.setup'
  ],
};
