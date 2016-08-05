# React Horizon Demo

A demo realtime chat application created using React, Redux and Horizon/RethinkDB

**Note: This is just an experimental project**

## What’s Inside?
It is a simple chat application build on top of React and RethinkDB/Horizon and many amazing community projects, such as:

* [create-react-app](https://github.com/facebookincubator/create-react-app) with its dependencies.
* [React](https://facebook.github.io/react/)
* [Redux](https://github.com/reactjs/redux/)
* [Horizon](http://horizon.io/)/[RethinkDB](https://www.rethinkdb.com/)
* [Express](http://expressjs.com/)
* and more.

## Installation
* Install npm packages
```sh
  npm install
```
* Install [RethinkDB](http://rethinkdb.com/) and [Horizon](https://horizon.io/)
* Init Horizon
```sh
  hz init
```

## Build and run the server
**Start rethinkdb**
```sh
rethinkdb
```
RethinkDB Administration Console: http://localhost:8080.

**Build server app**
```sh
npm run build-server
```

**Run server app**
- Development
```sh
node ./build/server.js
```
- Production
```sh
NODE_ENV=production node ./build/server.js
```
The default server address is http://localhost:8181. You can change the setting in the src/config.js

## Build and run the client app
**Development**
```sh
npm start
```
Visit http://localhost:3000 to see the result. You can test it in different browser instances.

**Production**
```sh
npm build
```

## Contributing

Contributions are welcome.
