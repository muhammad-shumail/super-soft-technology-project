# CRUD Operation using Mock APIs

This project is a demonstration of how to make a CRUD (Create, Read, Update, Delete) operation using mock APIs, by the help of axios and redux toolkit.

## Technologies used

- TypeScript: A superset of JavaScript that adds static type definitions.
- Redux Toolkit: A library that simplifies the Redux state management and provides useful tools such as createSlice, createAsyncThunk, and configureStore.
- Tailwind CSS: A utility-first CSS framework that allows for rapid styling of components.
- Formik: A library that helps with building and validating forms in React.
- React Router DOM: A library that enables routing and navigation in React applications.
- Axios: A library that performs HTTP requests and handles responses and errors.
- Vitest: A testing framework that runs tests in Vite, a fast and lightweight bundler for web development.
- JSON Placeholder: A fake online REST API that provides mock data for testing and prototyping.

## Features

- CRUD operation: The project allows the user to perform CRUD operations on posts, todos, and users from the JSON Placeholder API.
- Dynamic routing: The project uses dynamic routing to display different components based on the URL parameters. For example, /student/:id will show the post with the given id and its comments, while /student/:id will show the user with the given id and their posts, albums, and todos.
- Nested routing: The project uses nested routing to display sub-components within a component. For example, /student/:id/posts will show the posts of the user with the given id, while /student/:id/ will show the albums of the user with the given id.
- Google map: The project shows a Google map with custom coordinates for each user from the JSON Placeholder API. The user can click on the view button to see the Google map of the current location in a new tab.
- Copy to clipboard: The project allows the user to copy the data from the JSON Placeholder API to the clipboard using core-js. The user can click on the copy button to copy the data to the clipboard.

## Installation and usage

To run this project, you need to have Node.js and npm installed on your machine. Then, follow these steps:

1. Clone this repository using `git clone https://github.com/muhammad-shumail/super-soft-technology-project.git`
2. Navigate to the project directory using `cd super-soft-technology-project`
3. Install the dependencies using `npm install`
4. Start the development server using `npm run dev`
5. Open your browser and go to [http://localhost:5173](http://localhost:5173) to see the project
6. To create a new student, go to [http://localhost:5173/create-student](http://localhost:5173/create-student)
7. To run the tests, use `npm run test`

## Author

This project was created by [Muhammad Shumail Ansari](https://github.com/muhammad-shumail), a software engineer and web developer. You can find his GitHub profile [here](https://github.com/muhammad-shumail) and his LinkedIn profile [here](https://www.linkedin.com/in/muhammad-shumail-ansari/).