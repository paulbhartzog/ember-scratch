var VALID_DEPLOY_TARGETS = [ //update these to match what you call your deployment targets
  'dev',
  'test',
  'prod'
];

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    pipeline: {},
    redis: {
      allowOverwrite: true,
      keyPrefix: 'ember-scratch:index'
    }
  };
  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  if (deployTarget === 'dev') {
    ENV.build.environment = 'development';
    ENV.build.outputPath = 'built-dev';
    ENV.pipeline.activateOnDeploy = true;
    ENV.plugins = ['build'];
    //ENV.redis.revisionKey = 'development';
  }

  if (deployTarget === 'test') {
    ENV.build.environment = 'production';
    ENV.build.outputPath = 'built-test';
    ENV.pipeline.activateOnDeploy = true;
    ENV.plugins = ['build'];
    //ENV.redis.url = process.env.TEST_REDIS_URL;
    //ENV.redis.revisionKey = 'test';
  }

  if (deployTarget === 'prod') {
    ENV.build.environment = 'production';
    ENV.build.outputPath = 'built-prod';
    ENV.pipeline.activateOnDeploy = true;
    ENV.plugins = ['build'];
    //ENV.redis.url = process.env.PROD_REDIS_URL;
    //ENV.redis.revisionKey = 'prod';
  }

  return ENV;

  /* Note: a synchronous return is shown above, but ember-cli-deploy
   * does support returning a promise, in case you need to get any of
   * your configuration asynchronously. e.g.
   *
   *    var Promise = require('ember-cli/lib/ext/promise');
   *    return new Promise(function(resolve, reject){
   *      var exec = require('child_process').exec;
   *      var command = 'heroku config:get REDISTOGO_URL --app my-app-' + deployTarget;
   *      exec(command, function (error, stdout, stderr) {
   *        ENV.redis.url = stdout.replace(/\n/, '').replace(/\/\/redistogo:/, '//:');
   *        if (error) {
   *          reject(error);
   *        } else {
   *          resolve(ENV);
   *        }
   *      });
   *    });
   *
   */
}
