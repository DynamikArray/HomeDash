module.exports = {
  apps: [
    {
      name: "Express Api",
      script: "./server/index.js",
      args: "rotate",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
