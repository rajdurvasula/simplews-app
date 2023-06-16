# Simple React App for appsync-pub-sub backend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is built on AWS Amplify

## Development Environment
- AWS Cloud9
- OS: `AL2`
- Instance Type: `t3.medium`
- Disk Size: `30G`

## Prerequisite OS updates
- Install `xdg-utils` as `root` user
```
yum -y install xdg-utils
```

- Install `Amplify CLI` as `non-root` user
```
npm install -g @aws-amplify/cli
```

## Prerequisite Backend
- Deploy CDK Project: [appsync-pub-sub](https://github.com/rajdurvasula/appsync-pub-sub.git)

## Deployment

- Setup AWS Credentials
  - Disable Cloud9 Temporary Managed AWS Credentials
  - Execute Command as `non-root` user:
```
aws configure
```

- Perform these steps in `Project ROOT folder`
 
- Install Amplify modules
```
npm install --save aws-amplify @aws-amplify/core @aws-amplify/pubsub
```

- Initialize Amplify Project
```
amplify init
```

- Update AppSync References
  - Copy `ApiId` from `Backend Project`
  - Update file: `src/aws-exports.js`
```
amplify codegen add --apiId API_ID
```
- Ensure OLD references are not in `src/aws-exports.js`

- Push changes
```
amplify push -y
```

- Start frontend app
```
npm start
```

## Test App
- Open the React App in multiple browsers
- Enter any TEXT in one of the browser windows in the App TextArea
- Expected Result:
  - Same TEXT is displayed in all other browser windows


## Cleanup
- In `Project ROOT folder`, execute:
```
amplify delete
```
- Delete Cloud9 environment

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
