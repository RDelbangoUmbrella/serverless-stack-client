  const dev = {
    STRIPE_KEY: "pk_test_51HxFXnI6LPz55urkmEUW1jQJsZrgtPm5cz4mD5mnHhseUEOnOCj0Hfo6ThK0tkFhGnt5HkwZ6RnQehe8GW3do9Pt00Nai9HoeG",
    s3: {
      REGION: "us-east-1",
      BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1tyr162fbxgqu"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://yb0x06l1eg.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_QROf8UsRb",
      APP_CLIENT_ID: "7jnj8fai2pf20cn94nhtrnehro",
      IDENTITY_POOL_ID: "us-east-1:a9ec2498-63b3-4e05-b867-3aca16fe340f"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_51HxFXnI6LPz55urkmEUW1jQJsZrgtPm5cz4mD5mnHhseUEOnOCj0Hfo6ThK0tkFhGnt5HkwZ6RnQehe8GW3do9Pt00Nai9HoeG",
    s3: {
      REGION: "us-east-1",
      BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-124wzgzqu0gyx"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://8aa1rczgd4.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_8ZYNZsMj4",
      APP_CLIENT_ID: "3p22kfpjc31jkj8ksjup3s5uld",
      IDENTITY_POOL_ID: "us-east-1:97769136-a0f4-4c46-9941-2f3c25155a80"
    }
  };
  
  const config = {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    // Default to dev if not set
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
  };
  
  export default config;