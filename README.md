# Expensify

> A React web app project from the Udemy course - [The Complete React Web Developer Course by Andrew Mead](https://www.udemy.com/react-2nd-edition/)

## Live Demo

 To see the app in action, go to [https://demo-expensify.herokuapp.com/](https://demo-expensify.herokuapp.com/)

 or

 To run that demo on your own computer, please follow the instructions in [Getting Started](https://github.com/lucasweng/expensify#getting-started)


## Features

* Integration with Firebase:

  * Authentication with Google account

  * User based security to control data access on a per-user basis

* Manage expenses with basic functionalities:

  * Create, remove and edit expense

  * Search existing expenses

  * Display expenses by date or amount

  * Filter expenses by a time span

* Responsive web design

### Custom Enhancement

* Render skeleton-ish screen while loading data for better user experience

## Getting Started

### Clone or download this repository

```sh
git clone https://github.com/lucasweng/expensify.git
```

### Install dependencies

```sh
yarn install
```

### Run the app

```sh
yarn dev-server
```

### See the app

Visit [http://localhost:8080](http://localhost:8080)

### Troubleshooting

#### Rendering blank page when running dev-server

Re-build the development version by running:

```sh
yarn run build:dev
```

Then start the dev-server again with:

```sh
yarn dev-server
```

TL;DR: It's very likely that the index.html in the public folder couldn't access the CSS and the JS files, because the HTML file might be of the production version(in which JS files are named with chunkhash for code splitting) instead of the development version(which contains one bundle.js), and webpack-dev-sever won't generate HTML file after compilation.


### Running tests

If you would like to run the tests:

```sh
yarn test --watch
```

## Built with

### Front-end

* [react](https://reactjs.org/)
* [react-router-dom](https://reacttraining.com/react-router/web/guides/philosophy)
* [react-redux](https://redux.js.org/docs/basics/UsageWithReact.html)
* [redux](https://redux.js.org/)
* [redux-thunk](https://github.com/gaearon/redux-thunk#redux-thunk)
* [react-dates](https://github.com/airbnb/react-dates#react-dates-)
* [firebase](https://firebase.google.com/docs/reference/js/#firebase)
* [normalize.css](http://nicolasgallagher.com/about-normalize-css/)
* [moment](https://momentjs.com/)
* [numeral](http://numeraljs.com/)
* [babel](http://babeljs.io/)
* [webpack](https://webpack.js.org/concepts/)
* [eslint](https://eslint.org/)
* [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb)
* [uuid](https://github.com/kelektiv/node-uuid#uuid-)

### Back-end

* [express](https://expressjs.com/)

### Platforms

* [Firebase](https://firebase.google.com/)
* [Heroku](https://www.heroku.com/)

### Testing

* [jest](https://facebook.github.io/jest/)
* [enzyme](http://airbnb.io/enzyme/)
* [redux-mock-store](http://arnaudbenard.com/redux-mock-store/)

### DevTools

* [Redux DevTools Extension](http://extension.remotedev.io/)

## License

#### [MIT](./LICENSE)