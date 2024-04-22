module.exports = {
  preset: 'react-native',
  // verbose: true,
  // transform: {
  //   '^.+\\.js$': 'babel-jest',
  //   "^.+\\.ts?$": "ts-jest",
  //   "^.+\\.tsx?$": "ts-jest"
  // },
  transformIgnorePatterns: [
    "/node_modules/(?!react-native)/.+"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json"
  ],
//   transform: {
//       '^.+\\.js$': 'babel-jest',
//     "^.+\\.tsx?$": "ts-jest",
//  },
//  setupTestFrameworkScriptFile: "<rootDir>/src/setupSpecs.ts"
};