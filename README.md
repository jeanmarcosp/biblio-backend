# Biblio API

![Team Photo](Insert a Team Photo URL here)
[*how?*](https://help.github.com/articles/about-readmes/#relative-links-and-image-paths-in-readme-files)

Biblio API is a comprehensive platform designed to help users manage and share book collections. Users can create, read, update, and delete book entries, as well as add comments and filter books based on various criteria.

## Architecture

The Biblio API is structured to provide a scalable and maintainable backend service using modern web technologies.

### Code Organization

- `src/`: Contains the main source code for the API.
  - `controllers/`: Houses the business logic for handling requests.
  - `models/`: Defines the data models and schemas.
  - `routes/`: Sets up the endpoints and links them to the controllers.
  - `server.js`: Initializes the server and connects to the database.
  - `middleware/`: Contains custom middleware functions.

### Tools and Libraries Used

- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for handling routes and middleware.
- **MongoDB**: NoSQL database for storing book and comment data.
- **Mongoose**: ODM library for MongoDB to model and manage data.
- **Chakra UI**: For the frontend components (if applicable).
- **Zustand**: For state management in the frontend (if applicable).
- **Tailwind CSS**: For styling the frontend components (if applicable).

## Setup

To get the development environment up and running, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/project-api-biblio.git
    cd project-api-biblio
    ```

2. Install the required dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```
## Deployment

To deploy the Biblio API, follow these steps:

1. Set up a MongoDB instance on a cloud service (e.g., MongoDB Atlas).
2. Deploy the server to a cloud platform (e.g., Render).
3. Configure environment variables on the cloud platform:
    - `MONGODB_URI`
    - `PORT` (optional, as most platforms have their default port configurations)
    - `API_KEY`

4. Push your code to the deployment service's repository or use their CLI tool to deploy.

5. Ensure that your cloud platform is correctly configured to start the server, typically by specifying a start script like `npm start`.


TODO: how to get the project dev environment up and running, npm install etc
* npm install
* npm start


## Sample Requests

### Create a New Book
```sh
POST /api/books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "tags": ["classic", "novel"],
  "description": "A novel set in the Roaring Twenties...",
  "coverUrl": "http://example.com/great-gatsby.jpg"
}
```

## Authors

TODO: list of authors
* Christian

## Acknowledgments
# starter express app template

* node with babel
* expressjs
* airbnb eslint rules

Procfile for Heroku included
Settings for render.com:
* build command:  `npm install && npm run build`
* run command:  `npm run prod`