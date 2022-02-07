# Express Vue App Stack

### Stuff i used to build this

- Docker
- Pm2
- mongo
- Node
- Express
- Vue
- Vuetify

### Start Docker using docker-compose and supplying correct env file

-docker-compose --env-file ./config/.env.prod.pi up
-docker-compose --env-file ./config/.env.prod.pi down

Other Misc Stuff

- configure Pm2 to run app
  pm2 start application.config.js --env production/development

Resources
https://betterprogramming.pub/dockerizing-react-app-and-express-api-with-mongodb-f3a06bebf570
https://betterprogramming.pub/persistent-databases-using-dockers-volumes-and-mongodb-9ac284c25b39
