# Parks and Picnic

## Description
A backend application for people who wants to go to picnic. 

## Authentication endpoints

**Creating an account**
* **URL**

  * `/api/users`

  * **with following body:** `{
  "user": {
    "email": String,
    "password": String
  }
}`
* Set following options in POSTMAN headers section
  * `Content-Type: application/json`

* **Method:**

  * `POST`

* **Success Response:**

   * **Content:** `{
    "user": {
        "_id": "5b0f38772c46910f16a058c5",
        "email": "gazelle@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyZGVsamFjLmFudG9uaW9AZ21haWwuY29tIiwiaWQiOiI1YjBmMzg3NzJjNDY5MTBmMTZhMDU4YzUiLCJleHAiOjE1MzI5MDgxNTEsImlhdCI6MTUyNzcyNDE1MX0.4TWc1TzY6zToHx_O1Dl2I9Hf9krFTqPkNLHI5U9rn8c"
    }
}`

* **Sample Call:**

  * `/api/users`
  * **with following body:** `{
  "user": {
    "email": "gazelle@gmail.com",
    "password": "test"
  }
}`

  **Logining in with created account**
* **URL**

  * `/api/users/login`

  * Set following options in POSTMAN headers section
  * `Authorization: Token [tokenValue]`
  * `Content-Type: application/json`

* **Method:**

  * `POST`

   * **with following body:** `{
    "email": String,
    "password": String
}`

* **Success Response:**

   * **Content:** `{
    "user": {
        "_id": "5b0f38772c46910f16a058c5",
        "email": "gazelle@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyZGVsamFjLmFudG9uaW9AZ21haWwuY29tIiwiaWQiOiI1YjBmMzg3NzJjNDY5MTBmMTZhMDU4YzUiLCJleHAiOjE1MzI5MDgxNTEsImlhdCI6MTUyNzcyNDE1MX0.4TWc1TzY6zToHx_O1Dl2I9Hf9krFTqPkNLHI5U9rn8c"
    }
}`

* **Sample Call:**

  * `/api/users/login`
  * **with following body:** `{
    "email": "gazelle@gmail.com",
    "password": "test"
}`
* Set following options in POSTMAN headers section
  * `Content-Type: application/json`

 ## Application endpoints 

 **Getting parks with distance of 3 km**
* **URL**

  * `/api/parks?distance=3`

* **Method:**

  * `GET`

* **Success Response:**

   * **Content:** `{
        "_id": "5cca01f1fec10ebf32db84c7",
        "name": "City Park",
        "distance": 3,
        "groups": [
            {
                "items": [
                    {
                        "name": "gameboards"
                    },
                    {
                        "name": "drink"
                    },
                    {
                        "name": "snack"
                    }
                ],
                "members": [
                    {
                        "name": "jeff",
                        "items": "snack"
                    }
                ],
                "name": "Game Group",
                "isAvailable": true
            }
        ]
    }`

* **Sample Call:**

  * `/api/parks?distance=3`

  **Getting available groups with selected parks**
  * Since this route is protected therefore a token must be added to the request header. [You get the token after login or sign up]
* **URL**

  * `/api/parks/:parkId`
   * Set following options in POSTMAN headers section
  * `Authorization: Token [tokenValue]`
  * `Content-Type: application/json`

* **Method:**

  * `GET`


* **Success Response:**

   * **Content:** `{
        "_id": "5cca01f1fec10ebf32db84c7",
        "name": "City Park",
        "distance": 3,
        "groups": [
            {
                "items": [
                    {
                        "name": "gameboards"
                    },
                    {
                        "name": "drink"
                    },
                    {
                        "name": "snack"
                    }
                ],
                "members": [
                    {
                        "name": "jeff",
                        "items": "snack"
                    }
                ],
                "name": "Game Group",
                "isAvailable": true
            }
        ]
    }`

* **Sample Call:**

  * `/api/parks/5cca01f1fec10ebf32db84c7`
  * Set following options in POSTMAN headers section
  * `Authorization: Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyZGVsamFjLmFudG9uaW9AZ21haWwuY29tIiwiaWQiOiI1YjBmMzg3NzJjNDY5MTBmMTZhMDU4YzUiLCJleHAiOjE1MzI5MDgxNTEsImlhdCI6MTUyNzcyNDE1MX0.4TWc1TzY6zToHx_O1Dl2I9Hf9krFTqPkNLHI5U9rn8c`
  * `Content-Type: application/json`

**Note:**  Make sure GET request has Headers; Key:Token and Content-type:application/json. POST request has Headers; content-type:application/json. In case of using POSTMAN for testing APIs

## Usage: Two options

**Note:**  First use parksData.js for initial data inside mongoDB:
* `mongo parks < parksData.js`
* here "parks" is the database name created for the app

1. To run the application use:
* `clone https://github.com/gazalle/Parks-Picnic.git`
* `cd Parks-Picnic`
* `npm install`
* `npm install -g nodemon`
* `npm start`

Server runs on http://localhost:8000/

2. or App can be run using the docker
* `clone https://github.com/gazalle/Parks-Picnic.git`
* `cd Parks-Picnic`
* `docker build -t <your username>/node-picnic-parks-app .`
* `docker run -p 4000:8000 -d <your username>/node-picnic-parks-app`



