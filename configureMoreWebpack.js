const path = require('path');
const peerDependencies = [
    '@apollo/client',
    '@magento/pwa-buildpack',
    '@magento/venia-ui',
    'graphql',
    'graphql-tag',
    'react',
    'react-router-dom'
];

const resolvePeerDependencies = (deps = [], folder = './node_modules') =>
    deps.reduce(
        (acc, dep) => ({ ...acc, [dep]: path.resolve(`${folder}/${dep}`) }),
        {}
    );

const configurePeerDependenciesAliases = config =>
    Object.assign(
        {},
        config.resolve.alias,
        resolvePeerDependencies(peerDependencies)
    );

module.exports = { configurePeerDependenciesAliases };
