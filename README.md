# react-rickandmorty
React and GraphQL

- I'm using NVM to manage versions for this install - using node v12.19.0 (npm v6.14.8)
- if you are using NVM you can simply run `nvm use --lts` to match the version above
- if you haven't got the above version installed you can run `nvm install 12.19.0` before you proceed
- run `npm install` or `yarn install`
- run `yarn build` 
- run from `/src/` - `node server.js` - Authentication
- run from the root folder `npm start`
- Done ... you are good to go :) 
- navigate to `http://localhost:3000` to view the project

To disable the use of the dummy authentication API you can do the following:

- edit `src/components/Login.js`  - replace the `loginUser()` function with:
`async function loginUser() {

  var credentials = "user";
  var string = JSON.stringify(credentials);
  localStorage.setItem('token', string);
 
}`

- and on line 23 `Login.js` add - `window.location.href = "/"`

- edit `src/useToken.js` - replace `const getToken = () ... ` with 
`const getToken = () => { 
    var token = localStorage.getItem('token');
    return token
}`

- replace `const saveToke = ...` with 
`const = saveToken = userToken =>{
    var token = localStorage.getItem('token', JSON.stringify(userToken));
};`

- now you don't need the dummy api to emulate the login


Preview link:
https://samuilmarinovdev2.co.uk
