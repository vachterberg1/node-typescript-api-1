/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const {resolve} = require('path')
const root = resolve(__dirname)
module.exports = {
  rootDir: root,
  displayName: 'root-tests',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  clearMocks: true,
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test(.*)': '<rootDir>/$1',
  },
  preset: 'ts-jest'
}