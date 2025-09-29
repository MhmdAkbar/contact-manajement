# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Request Body :

```json
{
    "street" : "alamat jalan",
    "city" : "alamat kota",
    "province" : "alamat provinsi",
    "country" : "alamat negara",
    "postal_code" : "kode pos"
}
```

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "street" : "alamat jalan",
        "city" : "alamat kota",
        "province" : "alamat provinsi",
        "country" : "alamat negara",
        "postal_code" : "kode pos"

    }
}
```

Response Body Error :

```json
{
    "errors" : "country is required"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Request Body :

```json
{
    "street" : "alamat jalan",
    "city" : "alamat kota",
    "province" : "alamat provinsi",
    "country" : "alamat negara",
    "postal_code" : "kode pos"

}
```
Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "street" : "alamat jalan",
        "city" : "alamat kota",
        "province" : "alamat provinsi",
        "country" : "alamat negara",
        "postal_code" : "kode pos"
    }
}
```

Response Body Error :

```json
{
    "errors" : "contry is required"
}
```

## Get Address API

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :
- Authorization : token

Response Body Success :

```json
{
    "data" : {
        "id" : 1,
        "street" : "alamat jalan",
        "city" : "alamat kota",
        "province" : "alamat provinsi",
        "country" : "alamat negara",
        "postal_code" : "kode pos"
    }
}
```

Response Body Error :

```json
{
    "errors" : "contact is not found"
}
```
## List Address API 

Endpoint : GET /api/contacts/:contactId/addresses

Headers :
- Authorization : token

Response Body Success :

```json
{
    "data" : [
        {
        "id" : 1,
        "street" : "alamat jalan",
        "city" : "alamat kota",
        "province" : "alamat provinsi",
        "country" : "alamat negara",
        "postal_code" : "kode pos"
    },
    {
        "id" : 1,
        "street" : "alamat jalan",
        "city" : "alamat kota",
        "province" : "alamat provinsi",
        "country" : "alamat negara",
        "postal_code" : "kode pos"
    }
    ]
}
```

Response Body Error : 

```json
{
    "error" : "contact is not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

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
    "errors" : "address is not found"
}
```
