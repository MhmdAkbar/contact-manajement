# User API Spec

## Register User api

Endpoint : POST /api/users

Request body :

```json
{
    "username" : "akbar_id",
    "password" : "rahasia",
    "name" : "akbar"
}
 ```

 Response body success :

 ```json
{
    "data" : {
        "username" : "akbar_id",
        "name" : "akbar"
    }
}
 ```

 Response body error

 ```json
{
    "errors" : "Username already registered"
}
 ```

 ## Login User API

 Endpoint : POST /api/users/login

 Request body :

 ```json
{
    "username" : "akbar_id",
    "password" : "rahasia"
}
 ```

 Response Body Success 

 ```json
{
    "data" : {
        "token" : "unique-token"
    }
}
 ```

 Response Body Error :
 
 ```json
{
    "errors" : "Username or password is not correct"
}
 ```

 ## Update User API 

 Endpoint : PATCH /api/users/current

 Headers :
 - Authorization : token

 Request Body :

 ```json
{
    "name" : "akbar update", // optional
    "password" : "rahasia_update" //optional
}
 ```

 Response Body Success :

 ```json
{
    "data" : {
        "id" : "akbar_id",
        "name" : "akbar update"
    }
}
 ```

 Response Body Error :
 ```json
{
    "errors" : "Name lenght min 4 and max 15"
}
 ```

 ## Get User API

 Endpoint : GET /api/users/current

  Headers :
 - Authorization : token

 Response Body Success :

 ```json
{
    "data" : {
        "username" : "akbar_id",
        "name" : "akbar"
    }
}
 ```

 Response Body Error 

 ```json
{
    "error" : "Unauthorized"
}
 ```

 ## Logout User API

 Endpoint : DELETE /api/users/logout

  Headers :
 - Authorization : token

 Response Body Success :

 ```json
{
    "data" : "ok"
}
 ```

 Response Body Error

 ```json
{
    "errors" : "Unauthorized" 
}
 ```