# React Horizon

A simple realtime chat application created using React and RethinkDB/Horizon

**Note: this is just an experimental project**

## What’s Inside?
It is a simple chat application build on top of React and RethinkDB/Horizon and many amazing community projects, such as:

* [create-react-app](https://github.com/facebookincubator/create-react-app) with its dependencies.
* [webpack](https://webpack.github.io/)
* [Babel](http://babeljs.io/)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [ESLint](http://eslint.org/)
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

## Start the app (development)
* Start Horizon server
```sh
  hz serve --dev --serve-static ./build
```
* Start the application
```sh
  npm run start
```
* Test the app at the address: http://localhost:3000. You can test it in different browser tabs/windows.

## Contributing

Contributions are welcome.
