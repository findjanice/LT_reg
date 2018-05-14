module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API',
      script    : './index.js',
      env: {
      NODE_ENV: 'development'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }

    // Second application
    // {
    //   name      : 'WEB',
    //   script    : 'web.js'
    // }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      key: '~/.ssh/id_rsa',
      user : 'lonetree',
      host : '65.175.68.103',
      // ref  : 'origin/master',
      // repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
       env  : {
        NODE_ENV: 'production'
      }
    },
    dev : {
      key: '~/.ssh/id_rsa',
      user : 'lontree',
      host : '65.175.68.103',
      // ref  : 'origin/master',
      // repo : 'git@github.com:repo.git',
      path : '/var/www/development',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
