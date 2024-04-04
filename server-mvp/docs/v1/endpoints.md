## USERS




### Clear User Data 

```http
///Request 

GET /clean-data HTTP/1.1
Host: localhost:5001

```


```http
///Response 
    status:200

{
    "msg": "All data was deleted "
}

```



### User Registration

```http
///Request 

POST /api/v1/users/register HTTP/1.1
Host: localhost:5001
Content-Type: application/json
Content-Length: 95

{
    "username": "hello",
    "email": "tecado6359@nasmis.com",
    "password": "123234"
}
```


```http
///Response 
    status:201

{
    "msg": "Account Created Successful. Please verify your Email",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaGVsbG8iLCJlbWFpbCI6InRlY2FkbzYzNTlAbmFzbWlzLmNvbSIsImlkIjoiNjU2NDgyZGY3MzBlOGEzYzBiY2I0OGIyIiwidHlwZSI6InVzZXIiLCJkYXRhIjp7InR5cGUiOiJ1c2VyIn19LCJpYXQiOjE3MDEwODU5MTksImV4cCI6MTczMjE4OTkxOX0.-sUYaFquKo6l5g0AuSUWV45AVjpYS-zBBOqm6rPXqqQ"
}
```





### User Login

```http
///Request 

POST /api/v1/users/login HTTP/1.1
Host: localhost:5001
Content-Type: application/json
Content-Length: 70

{ 
    "email": "tecado6359@nasmis.com",
    "password": "123234"
}
```


```http
///Response 
    status:200

{
    "msg": "login Successfull",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaGVsbG8iLCJlbWFpbCI6InRlY2FkbzYzNTlAbmFzbWlzLmNvbSIsImlkIjoiNjU2NDgyZGY3MzBlOGEzYzBiY2I0OGIyIiwidHlwZSI6InVzZXIiLCJkYXRhIjp7InR5cGUiOiJ1c2VyIn19LCJpYXQiOjE3MDEwODU5MTksImV4cCI6MTczMjE4OTkxOX0.-sUYaFquKo6l5g0AuSUWV45AVjpYS-zBBOqm6rPXqqQ"
}
```






### Update user token 

```http
///Request 

PUT /api/v1/users/update-user-token HTTP/1.1
Host: localhost:5001
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaGVsbG8iLCJlbWFpbCI6InRlY2FkbzYzNTlAbmFzbWlzLmNvbSIsImlkIjoiNjU2NDgzYjE3MzBlOGEzYzBiY2I0OGM3IiwidHlwZSI6InVzZXIiLCJkYXRhIjp7InR5cGUiOiJ1c2VyIn19LCJpYXQiOjE3MDEwODYxMzAsImV4cCI6MTczMjE5MDEzMH0.rss96BjyuY6elHnSwAOFQUB3RkRUxJdZPiYLjtuLuZI
```


```http
///Response 
    status:200

{
    "msg": "Token update Successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaGVsbG8iLCJlbWFpbCI6InRlY2FkbzYzNTlAbmFzbWlzLmNvbSIsImlkIjoiNjU2NDgzYjE3MzBlOGEzYzBiY2I0OGM3IiwidHlwZSI6InVzZXIiLCJkYXRhIjp7InR5cGUiOiJ1c2VyIn19LCJpYXQiOjE3MDEwODYzODcsImV4cCI6MTczMjE5MDM4N30._5EsDaeyT-C2oc6MTNKlrv3xKZ6CnSLu4h6Ds7Wee9Q"
}
```




### Current User 

```http
///Request 

GET /api/v1/users/current/ HTTP/1.1
Host: localhost:5001
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaGVsbG8iLCJlbWFpbCI6InRlY2FkbzYzNTlAbmFzbWlzLmNvbSIsImlkIjoiNjU2NDgyZGY3MzBlOGEzYzBiY2I0OGIyIiwidHlwZSI6InVzZXIiLCJkYXRhIjp7InR5cGUiOiJ1c2VyIn19LCJpYXQiOjE3MDEwODU5MTksImV4cCI6MTczMjE4OTkxOX0.-sUYaFquKo6l5g0AuSUWV45AVjpYS-zBBOqm6rPXqqQ
```


```http
///Response 
    status:200

{
    "id": "656482df730e8a3c0bcb48b2",
    "username": "hello",
    "email": "tecado6359@nasmis.com",
    "is_verified": false
}
```






### Resend Verification Email 

```http
///Request 

POST /api/v1/users/resend-verification-email HTTP/1.1
Host: localhost:5001
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaGVsbG8iLCJlbWFpbCI6InRlY2FkbzYzNTlAbmFzbWlzLmNvbSIsImlkIjoiNjU2NDgyZGY3MzBlOGEzYzBiY2I0OGIyIiwidHlwZSI6InVzZXIiLCJkYXRhIjp7InR5cGUiOiJ1c2VyIn19LCJpYXQiOjE3MDEwODU5MTksImV4cCI6MTczMjE4OTkxOX0.-sUYaFquKo6l5g0AuSUWV45AVjpYS-zBBOqm6rPXqqQ

```


```http
///Response 
    status:200


{
    "msg": "Verification email send successful"
}

```





### Verify OTP using code - call from app

```http
///Request 

GET /api/v1/users/verify-user-otp-token HTTP/1.1
Host: localhost:5001
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaGVsbG8iLCJlbWFpbCI6InRlY2FkbzYzNTlAbmFzbWlzLmNvbSIsImlkIjoiNjU2NDdjNjM4ZWQ3MjczNjk4MTkxMzUyIiwidHlwZSI6InVzZXIiLCJkYXRhIjp7InR5cGUiOiJ1c2VyIn19LCJpYXQiOjE3MDEwODQyNTksImV4cCI6MTczMjE4ODI1OX0.Bl3C5v9bvXYrdJjqlV3ihKsJqmpsNIq_CwG6EXvPJbo
Content-Length: 21

{
    "code":5665
}

```


```http
///Response 
    status:200


{
    "msg": "User is Activated"
}

```





### Verify OTP using token - call from Email Link

```http
///Request 

GET /api/v1/users/verify-user-otp-token?id=656454226aeb13545a52d0f8&null=null&token=Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiaGVsbG8iLCJlbWFpbCI6ImJpbml3bzE4MTBAbWFpbm9qLmNvbSIsImlkIjoiNjU2NDU0MjI2YWViMTM1NDVhNTJkMGY4IiwidHlwZSI6Im90cCIsImRhdGEiOnsidmVyaWZpY2F0aW9uX2NvZGVfaWQiOiI2NTY0NTZlODJhNTk1NDJlNzJjNDI0ZWEiLCJjb2RlIjo0NTI0LCJ0eXBlIjoib3RwIn19LCJpYXQiOjE3MDEwNzQ2NjQsImV4cCI6MTcwMTA3ODI2NH0.4GSM7T4UkLYQjhgUuvmTzXyjE-q2uit3DZDeu6htU-s HTTP/1.1
Host: localhost:5001

```


```http
///Response 
    status:200


{
    "msg": "User is Activated"
}

```



