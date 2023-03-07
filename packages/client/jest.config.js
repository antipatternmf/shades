import dotenv from 'dotenv';
dotenv.config();

const moduleNameMapper = {
  '\\.pcss$': 'identity-obj-proxy',
  "^api(.*)$": "<rootDir>/src/api",
  "^assets/(.*)$": "<rootDir>/src/assets/$1",
  "^components/(.*)$": "<rootDir>/src/components/$1",
  "^hocs(.*)$": "<rootDir>/src/hocs",
  "^hooks(.*)$": "<rootDir>/src/hooks",
  "^pages/(.*)$": "<rootDir>/src/pages/$1",
  "^reducers/(.*)$": "<rootDir>/src/reducers/$1",
  "^store(.*)$": "<rootDir>/src/store",
  "^constants/(.*)$": "<rootDir>/src/constants/$1",
  "^utils/(.*)$": "<rootDir>/src/utils/$1"
};

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper,
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  globals: {
    SERVER_PORT: process.env.SERVER_PORT,
  },
};
