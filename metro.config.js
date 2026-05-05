const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Some versions of Supabase have issues with Metro's resolution of internal files
// Adding mjs support and ensuring correct extension handling
config.resolver.sourceExts = [...config.resolver.sourceExts, 'mjs', 'cjs'];

// Prioritize 'module' field in package.json to use ESM versions of Supabase packages
config.resolver.resolverMainFields = ['module', 'main'];

// New Architecture libraries (like safe-area-context) REQUIRE package exports to be enabled
// to find their native component configurations.
config.resolver.unstable_enablePackageExports = true;

module.exports = config;
