# Full Stack Travel Log

A full stack application to store/list places you have traveled.

#### STEPS

- [ ] Setup SERVER

  - [ ] Install Dependencies.
    - [ ] **Express**_A Node.js library for creating APIs
    - [ ] **CORS**_Because we separated the frontend and backend.
    - [ ] **Morgan**_For the log in; HTTP request logger middleware for node.js.
    - [ ] **Helmet**_Also a middleware, Helmet helps you secure your Express apps by setting various HTTP headers. At Network **Response Headers**; Remove X-Powered-By to prevent to know what are you using.
    - [ ] **Dotenv**_To load environment variables from a file.
  - [ ] Install / Setup Linter
    - **ESlint**_It is a devDependency. ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. In many ways, it is similar to JSLint and JSHint with a few exceptions_**npx i -D eslint**
  - [ ] Setup Express App
  - [ ] Setup Not Found and Error Middlewares

- [ ] Model DB.

  - What data will we store?

- [ ] Setup Mongoose Model(s)

- [ ] POST / logs

  - Create a new log entry

- [ ] GET / logs

  - List all log entries

- [ ] Setup Client

- [ ] Create Form to add new entry

- [ ] Setup Map SDK on client

- [ ] List all log entries on map

  

### DB_Models

- [ ] Log Entry:
  1. Title - Text
  2. Description - Text
  3. Comments  - Text
  4. Rating - scale of 1-10
  5. Image  - Text 
  6. Latitude - Number
  7. Longitude - Number
  8. Visit Date - Date;
     - var place = {date: new Date()}
     - JSON.stringify(place) => "{"date":"2020-09-27T13:01:35.254Z"}"
     - var now = new Date()
     - now.toISOString() => "2020-09-27T13:02:20.824Z"
  9. Timestamps - True