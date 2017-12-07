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

### Custom Enhancements

* Render skeleton-ish screen while loading data for better user experience

* Confirmation modal when removing expense

* Show username and number of hidden expenses on the dashboard

* Authentication with Facebook account

### Enhancements to be made

* Error handling for authenticatoin

* Refactor react-dates' date picker for better UI on mobile

* Link multiple auth providers to an account

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

TL;DR: the HTML output might be of the production version, so the dev-server cannot access the correct JS source file.

Re-build the development version by running:

```sh
yarn run build:dev
```

Then start the webpack-dev-server again with:

```sh
yarn dev-server
```

In this project, there are two versions of webpack configuration that produce JS files with different naming method. In order to correctly access those output files every time we build, webpack is set to automatically generate HTML files and wire them up to JS files with varying names. However, the webpack-dev-server is set to be serving outputs of the development version for the existing HTML file without generating a new one. So, it is likely to have the production version HTML be served with the development version JS file when running the dev-server, and that would therefore render nothing on the page.

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
* [react-modal](https://reactcommunity.org/react-modal/)
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