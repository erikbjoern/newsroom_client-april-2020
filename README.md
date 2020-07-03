This is the mid-course project of the Craft Academy bootcamp

Visit the [live website](http://dailynewssense.netlify.app) or clone the repo to see the app in action.


## Authors:

[Erik Björn](https://github.com/erikbjoern)  
[Marcus Sjöqvist](https://github.com/viamarcus)  
[Jenny Scherr](https://github.com/jysmys)  
[Steve Watson](https://github.com/designerofthing)  
[Pauline Barnades](https://github.com/PaulineBA)  
[Ali Erbay](https://github.com/kermit-klein)  

## Clone:

To run this app locally, you need to clone both this and the [API](https://github.com/erikbjoern/newsroom_api-april-2020) and follow the instructions there. When the API is running, run `$ yarn start` and visit http://localhost:3001. There's also a [staff client](https://github.com/erikbjoern/newsroom_staff-april-2020) that uses the same API.

## Testing:

The application was developed test driven using [Cypress](https://cypress.io). To run the tests locally, run `$ yarn cypress` which executes commands for both starting the local server and Cypress, thank to ['start-server-and-test'](https://github.com/bahmutov/start-server-and-test#readme). Having the API running is not necessary for this, since the tests use mock data.

## Styling:

Was done with the help of [Semantic UI for React](https://react.semantic-ui.com/)
