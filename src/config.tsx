interface Configuration {
  MODE: string;
  ENDPOINT: string;
  BASEURL: string;
}

// configurations for app

const dev: Configuration = {
  MODE: "development",
  ENDPOINT: "http://localhost:4000",
  BASEURL: "http://localhost:3000",
};

const prod: Configuration = {
  MODE: "production",
  ENDPOINT: "test",
  BASEURL: "tobefilled",
};

export const Config = process.env.REACT_APP_STAGE === "production" ? prod : dev;
