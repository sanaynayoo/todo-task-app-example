import '@testing-library/react-native/extend-expect';

import type {Config} from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
};

export default config;