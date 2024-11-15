# Full_Stack_Laurea_PhoneBook
This is an Express.js application that provides a RESTful API to manage people data, including functionalities to retrieve, add, update, and delete people records.
# Features
-Retrieve all people records.
-Get a single person by ID.
-Add a new person with name and number validation.
-Update a person's details.
-Delete a person by ID.
# Prerequirements
-Node.js and npm installed
-MongoDB for storing people
-.env file for environment variables
# Setup
1.Clone the repository and navigate to project directory
2.Install dependences
3.Setup .env file for environment variables:
PORT=YOUR_PORT
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
# Usage
npm start
# Endpoints
1.Get All people
url: /api/getall
Method: GET
Description: Retrieves all people records from the database.
2.Get a Person by ID
URL: /api/:id
Method: GET
Description: Retrieves a specific person by their unique ID.
Responses:
200: Successfully retrieved.
404: Person not found.
3.dd a New Person
URL: /api/add
Method: POST
Description: Adds a new person to the database.
Body:
name (string): Person's name (required, min 3 characters).
number (string): Person's contact number (required).
Responses:
201: Successfully created.
400: Validation error or missing fields.
4.Update a Person's Information
URL: /api/update/:id
Method: PUT
Description: Updates a person’s name and/or number.
Body:
name (string): Updated name.
number (string): Updated number.
Responses:
200: Successfully updated.
400: Validation error or missing fields.
5.Delete a Person
URL: /api/delete/:id
Method: DELETE
Description: Deletes a person by their unique ID.
Responses:
200: Successfully deleted.
# Dependencies
express: Framework for server setup and routing.
cors: Middleware for enabling CORS.
dotenv: Loads environment variables.
mongoose: MongoDB object modeling.
nodemon: Development tool for automatically restarting the server on file changes.


