# Building a REST API with Node.js, MongoDB and Serverless Framework

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file, just check .env.example

`MONGO_URI`

## Run Project

To run this project

```bash
  npm run start:dev
```

## API Reference

#### Get all users

```http
  GET /users/find
```

#### Get user

```http
  GET /users/find/{id}
```

#### Create user

```http
  POST /users/find/{id}
```

#### Update user

```http
  PATCH /users/update/{id}
```

#### Delete user

```http
  DELETE /users/delete/{id}
```
