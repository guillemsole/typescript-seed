let config = require('./env/' + (process.env.NODE_ENV || "development"));
export default config.default;
