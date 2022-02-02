# Upload Zip File to AWS Lambda

## Technologies

- NodeJS
- AWS-SDK

## Pre-Requirements

- Have configured AWS-cli

## Steps to develop

- Go to "script-lambda" folder.
- Install dependencies:

```
npm install
```

- Run code

```
npm run test
```

## Steps to deploy

- Go to "script-lambda" folder.
- Zip directory:

```
zip -r ../deploy.zip *
```

- Go to root folder.
- Configure .env file
- Install dependencies:

```
npm install
```

- Upload the zip file to the AWS Lambda:

```
npm run deploy
```
