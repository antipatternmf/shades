import dotenv from 'dotenv';
dotenv.config();

const moduleNameMapper = {
  '\\.pcss$': 'identity-obj-proxy',
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
