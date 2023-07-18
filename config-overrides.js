module.exports = {
  override: (config) => {
    config.plugins.push("styled-components");
    config.rules["styled-components/no-unused-styles"] = "error";
    return config;
  },
};
