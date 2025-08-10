
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



```markdown
# E-Learning App

A React-based e-learning application that provides courses, quizzes, and lessons, along with emotion and typing analysis features. The application uses face-api.js for real-time emotion detection and typing speed analysis for user behavior tracking. It also includes Firebase for user authentication and data handling.

## Features

- **Dashboard with Emotion Detection**: The Dashboard displays user courses and includes a real-time emotion detection feature using the user's webcam.
- **Typing Behavior Analysis**: Track user typing speed, pauses, and backspace frequency within notes added through the app.
- **Mouse Movement Analysis**: Track and analyze mouse movements for behavioral insights.
- **Login and Logout Functionality**: Authentication is managed through Firebase.



### Prerequisites

- Node.js and npm installed.
- Firebase project set up for authentication and database.
- Ant Design library and dependencies installed.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/e-learning-app.git
   cd e-learning-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set up Firebase**

   - In your Firebase Console, create a new project and add a web app.
   - Copy your Firebase config and create a `.env` file in the root of your project with Firebase credentials:
     
     ```plaintext
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id
     ```

4. **Run the App**

   ```bash
   npm start
   ```

   The app will open at `http://localhost:3000`.

## Project Structure

- `Home.js`: Main component with navigation and component selection (Dashboard, CourseOne, CourseTwo).
- `Dashboard.js`: Component containing courses, webcam for emotion detection, typing analysis, and a notes feature.

## Usage

1. **Login and Logout**
   - The app includes Firebase-based authentication.
   - Users can log in to access courses and analysis tools.

2. **Emotion Detection**
   - In the Dashboard, the app accesses your webcam to analyze facial expressions using `face-api.js` and display the detected emotion in real-time.

3. **Typing and Mouse Analysis**
   - Track typing speed, backspaces, and pauses when adding a note in the app.
   - Analyze mouse movements and detect erratic behavior patterns.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **Ant Design**: UI framework for React components.
- **face-api.js**: Library for real-time face recognition and expression analysis.
- **react-webcam**: Component for accessing webcam video.
- **Firebase**: Backend services for authentication and database.


```