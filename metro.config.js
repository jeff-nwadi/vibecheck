const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);


// New Architecture libraries (like safe-area-context) REQUIRE package exports to be enabled
// to find their native component configurations.
config.resolver.unstable_enablePackageExports = true;

module.exports = config;
