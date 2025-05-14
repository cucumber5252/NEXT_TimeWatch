import {withSentryConfig} from '@sentry/nextjs';
import webpack from 'webpack';

export default withSentryConfig({
async rewrites() {
  return [
      {
          source: '/api/socket.io/',
          destination: '/api/socket.io',
      },
  ];
},

webpack: (config, { isServer }) => {
  if (!isServer) {
      config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          os: false,
          path: false,
          module: false,
          crypto: false,
          stream: false,
          http: false,
          https: false,
          zlib: false,
      };

      config.plugins.push(
          new webpack.ProvidePlugin({
              process: 'process/browser',
          })
      );
  }

  config.resolve.alias = {
      ...config.resolve.alias,
      'xmlhttprequest-ssl': false,
  };

  return config;
},

serverRuntimeConfig: {
  projectRoot: process.cwd(),
},

async headers() {
  return [
      {
          // 모든 경로에 CORS 헤더를 추가하여 모든 요청에 대해 허용
          source: '/api/socket.io/(.*)',
          headers: [
              {
                  key: 'Access-Control-Allow-Credentials',
                  value: 'true',
              },
              {
                  key: 'Access-Control-Allow-Origin',
                  value: '*',
              },
              {
                  key: 'Access-Control-Allow-Methods',
                  value: 'GET,OPTIONS,POST',
              },
              {
                  key: 'Access-Control-Allow-Headers',
                  value: 'X-Requested-With, Accept, Content-Type',
              },
          ],
      },
  ];
}
}, {
// For all available options, see:
// https://www.npmjs.com/package/@sentry/webpack-plugin#options

org: "findwatch",
project: "javascript-nextjs",

// Only print logs for uploading source maps in CI
silent: !process.env.CI,

// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// This can increase your server load as well as your hosting bill.
// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// side errors will fail.
tunnelRoute: "/monitoring",

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
automaticVercelMonitors: true,
});