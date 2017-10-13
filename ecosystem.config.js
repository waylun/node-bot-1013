module.exports = {
  apps: [{
    name: 'node-bot',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-209-135-173.us-west-2.compute.amazonaws.com',
      key: '/mnt/c/Users/waylu/Desktop/Nodejs/NodeKey.pem',
      ref: 'origin/master',
      repo: 'git@github.com:waylun/node-bot-1013.git',
      path: '/home/ubuntu/node-bot-1013',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
