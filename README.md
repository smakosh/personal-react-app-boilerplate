## Custom React Boilerplate

### Features

- Stateless functional components using Recompose
- Private and public routes using React-router-dom
- Redux store setup and configured
- Nice file structure
- Eslint
- PWA
- Client side error handling with formik and validation with yup
- Server side errors show up easily, you need to pass the right errors object from the backend
- Async/Await implemented on actions

and more....

### Libraries used

```js
"axios": "^0.18.0",
"formik": "^1.3.0",
"react": "^16.6.3",
"react-dom": "^16.6.3",
"react-helmet": "^5.2.0",
"react-redux": "^5.0.7",
"react-router-dom": "^4.3.1",
"react-scripts": "2.0.3",
"react-spinkit": "^3.0.0",
"recompose": "^0.30.0",
"redux": "^4.0.0",
"redux-thunk": "^2.3.0",
"styled-components": "^4.1.1",
"yup": "^0.26.5"
```

### Setup

1- Create a `.env.local` file on the root of the app and pass on these env variables:

```shell
REACT_APP_URL=example.com
REACT_APP_NAME=example
REACT_APP_PROD_API=api.example.com
REACT_APP_DEV_API=api.dev.example.com
```

2- Run `yarn && yarn start` and your react app will be running on `localhost:3000`

3- Update the endpoints and play around.

### Todo

- [x] Open source a simple rest api with auth ready and server side error handling: https://github.com/smakosh/rest-api-boilerplate-v2
- [ ] Write an article connecting that api with this boilerplate
- [ ] Apply redux-thunk
- [ ] Prepare most common used elements (buttons, form fields...)