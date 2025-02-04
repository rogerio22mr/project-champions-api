# Project Champions

## Overview

Project Champions is an Express-based API for managing football players and clubs. It provides endpoints for retrieving, creating, updating, and deleting players, as well as fetching club data.

## Features

- Manage player data (CRUD operations)
- Retrieve club information
- Built with Express.js
- Uses TypeScript for type safety
- Supports hot reloading in development

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/rogerio22mr/project-champions-api.git
   cd project-champions
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Scripts

The following scripts are available:

- `npm run dist` - Compiles TypeScript files
- `npm run start:dev` - Runs the server in development mode with environment variables
- `npm run start:watch` - Runs the server in watch mode (hot reload)
- `npm run start:dist` - Compiles and runs the server from the `dist` folder

## API Endpoints

### Players

| Method | Endpoint       | Description           |
| ------ | -------------- | --------------------- |
| GET    | `/players`     | Get all players       |
| POST   | `/players`     | Create a new player   |
| GET    | `/players/:id` | Get a player by ID    |
| DELETE | `/players/:id` | Delete a player by ID |
| PATCH  | `/players/:id` | Update a player by ID |

### Clubs

| Method | Endpoint | Description   |
| ------ | -------- | ------------- |
| GET    | `/clubs` | Get all clubs |

## Tech Stack

- Node.js
- Express.js
- TypeScript
- tsup (for bundling)
- tsx (for running TypeScript files in development)

## Running the Server

To start the server in development mode:

```sh
npm run start:dev
```

To start the server with hot reload:

```sh
npm run start:watch
```

To build and run the project:

```sh
npm run start:dist
```
