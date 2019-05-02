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

  **Logining in with created account**
* **URL**

  * `/api/users/login`

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
  Since this route is protected therefore a token must be added to the request header
* **URL**

  * `/api/parks/:parkId`

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

**Note:**  Make sure GET request has Headers; Key:Token and Content-type:application/json. POST request has Headers; content-type:application/json. In case of using POSTMAN for testing APIs

## Usage: Two options
1. To run the application use:
* `clone https://github.com/gazalle/Parks-Picnic.git`
* `cd Parks-Picnic`
* `npm install`
* `npm start`

Server runs on http://localhost:8000/

2. or App can be run using the docker 
* `clone https://github.com/gazalle/Parks-Picnic.git`
* `cd Parks-Picnic`
* `docker build -t <your username>/node-picnic-parks-app .`
* `docker run -p 4000:8000 -d <your username>/node-picnic-parks-app`
