# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers :
- Authorization : token

Request Body :

 ```json
{
    "first_name" : "Muhammad",
    "last_name" : "akbar",
    "email" : "akbar@mail.com",
    "phone" : "1234567"
}
 ```

 Response Body Success :

 ```json
{
    "data" : {
    "id" : 1,
    "first_name" : "Muhammad",
    "last_name" : "akbar",
    "email" : "akbar@mail.com",
    "phone" : "1234567"
    }
}
 ```

 Response Body Error :

 ```json
{
    "errors" : "Email is not valid"
}
 ```
## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers :
- Authorization : token

Request Body :

 ```json
{
    "first_name" : "Muhammad",
    "last_name" : "akbar",
    "email" : "akbar@mail.com",
    "phone" : "1234567"
}
 ```

 Response Body Success :

 ```json
{
    "data" : {
    "id" : 1,
    "first_name" : "Muhammad",
    "last_name" : "akbar",
    "email" : "akbar@mail.com",
    "phone" : "1234567"
    }
}
 ```

 Response Body Error :

 ```json
{
    "errors" : "Email is not valid"
}
 ```

## Get Contact API

Endpoint : GET api/contact/s:id

Headers :
- Authorization : token

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "first_name" : "Muhammad",
        "last_name" : "akbar",
        "email" : "akbar@mail.com",
        "phone" : "1234567"
    }
}
```

Response Body Error :

```json
{
    "errors" : "Contact is not found"
}
```
## Search Contact API

Endpoint : GET /api/contacts

Headers :
- Authorization : token

Query Params :
- name : Search by first_name or last_name using like, optional
- email : Search by email using like. optional
- phone : Search by phone number using like, optional
- page : number of page, default 1
- size : Size of page, default 10

Response Body Success :

```json
{
    "data" :[
         {
        "id" : 1,
        "first_name" : "Muhammad",
        "last_name" : "akbar",
        "email" : "akbar@mail.com",
        "phone" : "1234567"
        },
        {
        "id" : 2,
        "first_name" : "Muhammad",
        "last_name" : "akbar",
        "email" : "akbar@mail.com",
        "phone" : "1234567"
        }
    ],
    "paging" : {
        "page" : 1,
        "total_page" : 3,
        "total_item" : 30
    }
}
```

## Remove Contact API

Endpoint : DELETE /api/contact/:id

Headers :
- Authorization : token 

Response Body Success :

```json
{
    "data" : "ok"
}
```

Response Body Error :

```json
{
    "errors" : "Contact is not found"
}
```