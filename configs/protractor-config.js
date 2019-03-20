require('babel-register')({ presets: ['es2015'] });

const config = require('./app.js');
const SpecReporter = require('jasmine-spec-reporter');

exports.config = {

  directConnect: true,

  specs: ['../specs/*.spec.js'],
  baseUrl: config.baseUrl,
  // framework: 'jasmine2',

  onPrepare() {
    browser.manage().window().maximize();

    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'spec' }));
  },

  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 1,
    chromeOptions: {
      args: [
        '--disable-infobars',
        '--disable-extensions',
        'no-sandbox',
        'verbose',
        'log-path=/tmp/chromedriver.log',
          '--incognito',
      ],
      prefs: {
        // disable chrome's annoying password manager
        'profile.password_manager_enabled': false,
        credentials_enable_service: false,
        password_manager_enabled: false,
          'profile.managed_default_content_settings.geolocation': 1,
      },
    },
  },

  jasmineNodeOpts: {
    showColors: true,
    displayStacktrace: true,
    displaySpecDuration: true,
    print() {},
    defaultTimeoutInterval: 500000,
  },
};
