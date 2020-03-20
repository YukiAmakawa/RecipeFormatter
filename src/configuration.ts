//dev
let FIREBASE_CONFIG = {
  apiKey: "AIzaSyABQOtbJnaNjv9HHxy7hcNenajLgpGY5yc",
  authDomain: "recipe-formatter-dev.firebaseapp.com",
  databaseURL: "https://recipe-formatter-dev.firebaseio.com",
  projectId: "recipe-formatter-dev",
  storageBucket: "recipe-formatter-dev.appspot.com",
  messagingSenderId: "1041892621000",
  appId: "1:1041892621000:web:2557d40e244cca762083fd",
  measurementId: "G-4EZT79FLFY"
};

const readConfig = () => {
  switch (process.env.NODE_ENV) {
    case "local":
      //dev
      FIREBASE_CONFIG = {
        apiKey: "AIzaSyABQOtbJnaNjv9HHxy7hcNenajLgpGY5yc",
        authDomain: "recipe-formatter-dev.firebaseapp.com",
        databaseURL: "https://recipe-formatter-dev.firebaseio.com",
        projectId: "recipe-formatter-dev",
        storageBucket: "recipe-formatter-dev.appspot.com",
        messagingSenderId: "1041892621000",
        appId: "1:1041892621000:web:2557d40e244cca762083fd",
        measurementId: "G-4EZT79FLFY"
      };
      break;
    case "development":
      //dev
      FIREBASE_CONFIG = {
        apiKey: "AIzaSyABQOtbJnaNjv9HHxy7hcNenajLgpGY5yc",
        authDomain: "recipe-formatter-dev.firebaseapp.com",
        databaseURL: "https://recipe-formatter-dev.firebaseio.com",
        projectId: "recipe-formatter-dev",
        storageBucket: "recipe-formatter-dev.appspot.com",
        messagingSenderId: "1041892621000",
        appId: "1:1041892621000:web:2557d40e244cca762083fd",
        measurementId: "G-4EZT79FLFY"
      };
      break;
    case "production":
      //prod
      FIREBASE_CONFIG = {
        apiKey: "AIzaSyAIAPSvcGIJkVJJu0XOK-oAhlrlzUvsAUQ",
        authDomain: "recipe-formatter.firebaseapp.com",
        databaseURL: "https://recipe-formatter.firebaseio.com",
        projectId: "recipe-formatter",
        storageBucket: "recipe-formatter.appspot.com",
        messagingSenderId: "672439336459",
        appId: "1:672439336459:web:165db6e166d1605f86510e",
        measurementId: "G-3CR7GS7K15"
      };
      break;
    default:
      //dev
      FIREBASE_CONFIG = {
        apiKey: "AIzaSyABQOtbJnaNjv9HHxy7hcNenajLgpGY5yc",
        authDomain: "recipe-formatter-dev.firebaseapp.com",
        databaseURL: "https://recipe-formatter-dev.firebaseio.com",
        projectId: "recipe-formatter-dev",
        storageBucket: "recipe-formatter-dev.appspot.com",
        messagingSenderId: "1041892621000",
        appId: "1:1041892621000:web:2557d40e244cca762083fd",
        measurementId: "G-4EZT79FLFY"
      };
  }
};

readConfig();
const config = {
  FIREBASE_CONFIG
};

export default config;
