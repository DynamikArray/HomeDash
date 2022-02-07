# SpeedTester

##

##

### Requirements

- node
- mongo
- Pm2
- speedtester globally

Speed tester library

- speedtest module - https://github.com/ddsol/speedtest.net
  - install globally - `npm install --global speedtest-net`
  - accept liscense `speedtest-net --accept-license`

Other Misc Stuff

- configure Pm2 to run app
  pm2 start application.config.js --env production/development

Configuration Stuff for Pm2 - followed this guide for setting up PM2 and having it restart with windows

- https://blog.cloudboost.io/nodejs-pm2-startup-on-windows-db0906328d75
  And then to get pm2 running on restarts followed this guide
- https://opensourcelibs.com/lib/pm2-installer

Resources
https://betterprogramming.pub/dockerizing-react-app-and-express-api-with-mongodb-f3a06bebf570
https://betterprogramming.pub/persistent-databases-using-dockers-volumes-and-mongodb-9ac284c25b39
