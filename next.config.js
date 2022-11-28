/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@gdsc-dju/gds-theme']);

module.exports = withPlugins([withTM], {
  // ...
});
