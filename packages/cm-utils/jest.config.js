module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  //setupFiles: ['<rootDir>/tests/jest.init.js'],
  moduleFileExtensions: ['js', 'vue', 'ts', 'tsx'],
  transform: {
    //  '^.+\\.(js|ts|tsx)$': '<rootDir>/tests/jest.transform.js',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/$1',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],

};
