module.exports = {
  setupFilesAfterEnv: ["./jest.setup.ts"],
  automock: false,
  collectCoverage: false,
  testEnvironment: "jest-environment-node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!(react-native|\\@mui)/)"],
  testRegex: "(src|tests)/.*\\.(test|spec)\\.(ts|tsx|js|jsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|less|scss|jpg|png|svg|gif)$": "identity-obj-proxy",
  },
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/@types",
    "!src/**/*.d.ts",
  ],
};
