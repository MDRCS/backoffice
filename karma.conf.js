// NOTE: Due to bugs in the Angular/Karma generators, the Karma runner may not work correctly when following the
// steps given in yeoman_angular.sh.  If that's the case, compare the contents of your test/karma.conf.js with
// this version, and edit yours as needed.

// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-06-05 using
// generator-karma 0.8.1

module.exports = function(config) {
    config.set({
      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,
  
      // base path, that will be used to resolve files and exclude
      basePath: '..',
  
      // testing framework to use (jasmine/mocha/qunit/...)
      frameworks: ['jasmine'],
  
      // list of files / patterns to load in the browser
      files: [
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-resource/angular-resource.js',
        'app/bower_components/angular-cookies/angular-cookies.js',
        'app/bower_components/angular-sanitize/angular-sanitize.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'app/scripts/*.js',
        'app/scripts/**/*.js',
        'test/spec/**/*.js'
      ],
  
      // list of files / patterns to exclude
      exclude: [],
      
      captureTimeout: 100,
      //browserDisconnectTolerance: 3 //# try 3 times to reconnect
      //browserNoActivityTimeout: 200 //#wait 20 seconds before trying recconnect. 

      // web server port
      port: 8080,
  
      // Start these browsers, currently available:
      // - Chrome
      // - ChromeCanary
      // - Firefox
      // - Opera
      // - Safari (only Mac)
      // - PhantomJS
      // - IE (only Windows)
      browsers: [
        'PhantomJS'
      ],
  
      // Which plugins to enable
      plugins: [
        'karma-phantomjs-launcher',
        'karma-jasmine'
      ],
  
      // Continuous Integration mode
      // if true, it capture browsers, run tests and exit
      singleRun: false,
  
      colors: true,
  
      // level of logging
      // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
      logLevel: config.LOG_INFO,
  
      // Uncomment the following lines if you are using grunt's server to run the tests
      // proxies: {
      //   '/': 'http://localhost:9000/'
      // },
      // URL root prevent conflicts with the site root
      // urlRoot: '_karma_'
    });
  };