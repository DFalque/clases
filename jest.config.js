const pathsToIgnore = [
  "/node_modules/",
  "/dist/",
  "/out/",
  "/coverage/",
  "/firebase/",
];

const config = {
  globals: {
    "ts-jest": {
      // configuramos para que Jest use typescript
      tsconfig: "tsconfig.json", // usar la configuración estandart de TS
    },
  },
  transform: {
    // usar TS para extensiones de fichero ts i tsx
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: [
    // ejecutar tests en los ficheros que contengan ".spec" justo antes de extensiones ts, tsx, js, jsx y se encuentren en una carpeta test
    "**/*.spec.+(ts|tsx|js|jsx)",
  ],
  watchPathIgnorePatterns: pathsToIgnore, // no ejectar tests cuando haya cambios en los directorios de pathToIgnore
  testPathIgnorePatterns: pathsToIgnore, // no incluir los directorios de pathToIgnore al ejecutar los tests
  collectCoverage: false,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.ts", "!src/*/*.spec.ts"],
  coverageReporters: ["lcov"], // cSpell: disable-line
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-addons/setup-tests.ts"],
  moduleNameMapper: {
    ".+\\.(scss|css)$": "<rootDir>/jest-addons/file-mock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest-addons/file-mock.js",
    "fetch-progress": "<rootDir>/jest-addons/file-mock.js",
  },
};

module.exports = config;
