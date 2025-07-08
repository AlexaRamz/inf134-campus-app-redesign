# INF 134 Campus App Redesign
This project is an app redesign we developed for UCI's Informatics 134 course. It aims to combine the UCI Campus Rec and Atrium Campus Connect services to improve student access to gym facilities, dining, and recreational programs. The app is created using React Native along with Expo, allowing it to be targeted for both web and mobile and platforms.

[Link to the web app](https://inf134-campus-app-redesign--04xv58jghx.expo.app)
## How to Set up
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

## How to deploy (optional)
Since this project uses Expo, a quick and simple way to deploy and share it with others is to use EAS hosting to create a public web link. Create your own Expo account and set up what you need. Here are some commands you'll use often.
- `npx expo export --platform web`
- `eas deploy`

After the first time you deploy, you can just update the production url instead:
- `eas deploy --prod`
