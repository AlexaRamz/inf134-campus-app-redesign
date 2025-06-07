# INF 134 Campus App Redesign

## How to Set up
This app is created using React Native along with Expo.
### Prerequisites
- Download Node.js
- npm (Node Package Manager) is included with Node.js
### Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies (which are specified in package.json) by running this command in your terminal: ```npm install```
4. Follow the instructions in the Expo docs to set up your environment for the platform of your choice: https://docs.expo.dev/get-started/set-up-your-environment/

### Running the application
1. Start the development server: ```npx expo start```
2. Follow the instructions in the terminal to open the app in your browser or on the device or emulator you have chosen. Refer to the Expo docs for more details: https://docs.expo.dev/get-started/start-developing/

### Deploying as a web app
Since this project uses Expo, a quick and simple way to deploy and share it with others is to use EAS hosting to create a public web link. Create your own Expo account and set up what you need. Here are some commands you'll use often.
- `npx expo export --platform web`
- `eas deploy`

After the first time you deploy, you can just update the production url instead:
- `eas deploy --prod`
