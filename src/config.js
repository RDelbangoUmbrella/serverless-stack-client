const config = {
    STRIPE_KEY: "pk_test_51HxFXnI6LPz55urkmEUW1jQJsZrgtPm5cz4mD5mnHhseUEOnOCj0Hfo6ThK0tkFhGnt5HkwZ6RnQehe8GW3do9Pt00Nai9HoeG",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-udm",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://8aa1rczgd4.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_EaxQEmeWr",
      APP_CLIENT_ID: "2tn1ag8ch4udea89t1nc31vl88",
      IDENTITY_POOL_ID: "us-east-1:6bded70c-ae2c-4848-97a8-df03d87cc730",
    },
  };
  
  export default config;