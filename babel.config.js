module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
          blocklist: null,
          allowlist: ["STEPZEN_API_URL", "STEPZEN_API_KEY"],
          blacklist: null,
          whitelist: null,
          safe: true,
          allowUndefined: true,
          verbose: false,
        },
      ],
    ],
  };
};
