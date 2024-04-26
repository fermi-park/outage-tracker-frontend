# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js and npm
- Docker
- Git
- AWS CLI (configured with user credentials)

## Cloning the Repository

To clone the repository and set up the project, run the following commands:

```
git clone https://github.com/fermi-park/outage-tracker-frontend.git
cd outage-tracker-frontend
npm install
```

## Running the Frontend Application

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

## Docker Deployment for Zmap Scans

To deploy the Docker container for running zmap scans, follow these steps:

1. Build the Docker image:
   ```
   docker build -t zmap-outage-tracker .
   ```
   This command builds the Docker image named `zmap-outage-tracker` from the Dockerfile in the current directory.

2. Run the Docker container:
   ```
   docker run --name zmap-outage-tracker-test -d zmap-outage-tracker
   ```
   This command runs the Docker container named `zmap-outage-tracker-test` in detached mode using the image `zmap-outage-tracker`.

3. Check the Docker container logs:
   ```
   docker logs zmap-outage-tracker-test
   ```
   This command retrieves the logs from the Docker container to verify its operation and the results of the zmap scan.

Ensure that you have the `ip_list.txt` file with the IP addresses you wish to scan in the same directory as your Dockerfile before building the image.

For more information on the zmap scan script and its output, refer to the `zmap_scan.sh` script located at `/usr/src/app/zmap_scan.sh` within the Docker container.

## Deploying to Netlify

To deploy the frontend application to Netlify, follow these steps:

1. Build the React application:
   ```
   npm run build
   ```

2. Deploy the build directory to Netlify using the provided token:
   ```
   deploy_netlify build --token fbed2852db16473c98ea8b46a8f94199
   ```

3. The application will be available at the provided Netlify URL.

## AWS Timestream Integration

To store scan results in AWS Timestream, ensure the AWS CLI is configured with the correct credentials and region. The `zmap_scan.sh` script will automatically send the scan results to the `ScanResults` table in Timestream.

## Verifying Frontend Functionality

To verify that the frontend is correctly displaying data:

1. Ensure the backend server is running and serving the `responsive_ips.txt` file.
2. Access the frontend application and check if the data visualization reflects the scan results.

## Troubleshooting

If you encounter issues during setup or deployment, consider the following:

- Check that all prerequisites are installed and correctly configured.
- Ensure the `ip_list.txt` file is formatted correctly and placed in the correct directory.
- Verify that the AWS CLI is configured with the correct permissions to write to Timestream.
- For Docker-related issues, ensure Docker is running and you have the necessary permissions to create and run containers.

For more detailed troubleshooting, refer to the official documentation for each tool or service.
