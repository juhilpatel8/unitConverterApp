# unitConverterApp

# Prerequisites
1. [Node JS (v8.9.x or greater)](<https://nodejs.org/en/download/>)

# Installing
Run the command `npm install`

## local Server
Run `npm start` to build the project. 

POST API is available at `http://localhost:8080/unit-convert`. 

Sample request payload 
```
{
	"initialValue" : 25.6,
	"initialUnit" : "cups",
	"targetUnit" : "liters",
	"studentResponse" : 6.1
}

```

Run `npm test` to run the tests. 

## Improvements

1. I can add more unit tests to cover middleware function tests.
2. I can add CI/CD pipeline.
3. I can add Dockerfile.
4. I can add health check api to make sure we can check health of the server.
5. I can enable JWT authentication for api.

