# Deals Provider System

Application for creating and managing deals, with fake user registration system.

## About

This app was bootstrapped by [CRA](https://github.com/facebook/create-react-app), and used [Redux](https://redux.js.org/) for state management, [Reac Router 4](https://reacttraining.com) for navigation logic, and [Redux Thunk](https://www.npmjs.com/package/redux-thunk) for asynchronous dispatching.

 *This app is part of Bahr's interview only, and not ready for production*

## Get Started

First, you need to run the server app. Please clone and run the server from [here](https://github.com/iHani/my-deals-server)

To install and start the API server, run the following npm (or yarn) commands in this directory:

`npm install`

`npm start`

The app should open up on http://localhost:3000

#### First time

The following list of deals will be populated as a mockup data.

```sh
[
  { dealId: "1", dealCategory: 'Travel', dealPartner: 'AlTayyar', dealPrice: 200 },
  { dealId: "2", dealCategory: 'Hotel', dealPartner: 'Ritz', dealPrice: 2500 },
  { dealId: "3", dealCategory: 'Hotel', dealPartner: 'Hilton', dealPrice: 1500 },
  { dealId: "4", dealCategory: 'Rent', dealPartner: 'Theeb', dealPrice: 80 },
]
```

To create, edit, or delete a deal you need to be authorized, to be authorized you must sign up with your mobile number and a password (no validation implemented), or login using the user you created, or you can use the following credentials for testing:

 * mobile: a
 * passwoed: a

## Licence

MIT
