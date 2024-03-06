module.exports = {
  apps: [
    {
      script: 'npm start',
    },
  ],

  deploy: {
    production: {
      user: 'ubuntu',
      key: 'mac-jenkins.pem',
      host: '54.208.137.49',
      ref: 'origin/develop',
      repo: 'https://github.com/bats-properties/landing-page.git',
      path: 'home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy':
        'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    },
  },
};
