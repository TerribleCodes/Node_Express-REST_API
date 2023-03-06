# Node_Express_REST_API

# Environment vars

This project uses the following environment variables:

| Name | Description | Default Value |
| ---- | ----------- | ------------- |
| PORT | Port Number | 5000          |

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version v18.13.0

# Getting started

- Clone the repository

```
git clone  https://github.com/TerribleCodes/Node_Express-REST_API
```

- Install dependencies

```
cd Node_Express-REST_API
npm install
```

- Build and run the project

```
npm run dev
```

Navigate to `http://localhost:5000`

# Express + Node

The main purpose of this repository is to show how REST API works.

## Project Structure

The folder structure of this app is explained below:

| Name                        | Description                            |
| --------------------------- | -------------------------------------- |
| **controller/users**        | Contain the route handling operations |
| **controller/node_modules** | Contain all npm dependencies          |
| **routes/users.js**         | Contain routes                         |
| **.env**                    | Contain environmental variables       |
| **.gitignore**              | Contain untracking files              |
| **index.js**                | Entry point to express app             |
| **package.json**            | Contain npm dependencies              |

## Building the project

### Running the build

| Npm Script | Description                                                               |
| ---------- | ------------------------------------------------------------------------- |
| `dev`      | Runs full build and runs node on /index.js. Can be invoked with `npm run` |
