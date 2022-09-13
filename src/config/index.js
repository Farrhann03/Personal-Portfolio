const env = process.env.REACT_APP_ENV;

let config = {
    baseURL: "https://farrhann03.github.io/Personal-Portfolio/"
}

switch(env.toUpperCase()){
    case "STAGE":
        config.baseURL = "https://stage.farrhann03.github.io/Personal-Portfolio/"
        break;
    case "PRODUCTION":{
        config.baseURL = "https://farrhann03.github.io/Personal-Portfolio/"
        break;
    }
}

export default config;