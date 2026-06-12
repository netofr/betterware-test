const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

require('./scripts/sync-env');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

/**
 * Metro configuration for monorepo workspace resolution.
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  watchFolders: [monorepoRoot],
  resolver: {
    nodeModulesPaths: [
      path.resolve(projectRoot, 'node_modules'),
      path.resolve(monorepoRoot, 'node_modules'),
    ],
    disableHierarchicalLookup: true,
    resolveRequest: (context, moduleName, platform) => {
      if (moduleName.startsWith('@/')) {
        const aliasedPath = path.resolve(
          projectRoot,
          'src',
          moduleName.slice(2),
        );

        return context.resolveRequest(context, aliasedPath, platform);
      }

      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
