# Wealth Management

This app helps customer to login and register to their account and search, manage their portfolio of stocks.

The app allow the user to do the following:

- login to their portfolio
- search for stocks
- follow stocks they are interested in
- unfollow stocks they are no longer interested in

## Run Locally

### 1. Clone repo

```
$ git clone git@github.com:shandilya10/wealth-management.git
$ cd wealth-management

```

### 2. Install MongoDB

Download it from here: https://docs.mongodb.com/manual/administration/install-community/

### 3. Run Backend

```
$ cd backend
$ npm install
$ npm start

```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start

```

### 5. Run Test

```
# Inside backend terminal
$ npm run test

```

### 6. Register

- Run http://localhost:3000/register
- Enter details and click register

### 7. Login

- Run http://localhost:3000/login
- Enter admin email and password and click login

### 8. Stocks

- After login, Run http://localhost:3000/stocks
- Search stocks and follow.

### 9. My Stocks

- Run http://localhost:3000/mystocks
- List of your followed stocks, click unfollow to remove.

## Technology Used

- HTML5 and CSS3: Semantic Elements, Flexbox
- React: Components, Props, Events, Hooks, Router, Axios
- Redux: Store, Reducers, Actions
- Node & Express: Web API, Body Parser, JWT
- MongoDB: Mongoose
- Development: Babel, Git, Github
- Test: Jest

## Things took care of

- Simple design for better user experience and because of responsive single page application every components of the site are accessible better. 
- Better file structure and easily understable code to know the flow of the project.
- Simple and scalable database design.
- Design and built API endpoints which works better for rendering data on front side.

## Future Scope

- Social media login and register
- Password strength validation on Register
- More information about users
- More information about single stock after clicking know more
- Using Intraday endpoint of API, track ups and downs of stocks on stock single page