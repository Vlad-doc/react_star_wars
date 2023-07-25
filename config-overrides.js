const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@hoc': 'src/hoc',
    '@services': 'src/services',
    '@utils': 'src/utils',
    '@containers': 'src/containers',
    '@routes': 'src/routes',
  })(config)

  return config;
}

