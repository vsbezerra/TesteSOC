# Teste Ofensa SOC

xpi.com.br
https://xpi.com.br


eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh

Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ
  
  
2dc88bd7-f6eb-417b-82fa-d192ba041e5e


const request = require("request");

module.exports = {
    async createToken (){
        var options = {
            'method': 'POST',
            'url': 'https://xpi.com.br/oauth2/v1/access-token',
            'headers': {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
              'grant_type': 'client_credentials',
              'client_id': 'kSDfafgrA3RxbhzUjYNDyPsFiAyuv8QgN9c4iNLmkBtuAIGB',
              'client_secret': 'dgDsEqfFRXyHDs7XuOMHGA1hT1VeWzGnren82eXo8LrF9yrL12SriDxi3bDhRkNa'
            }
          };
          return new Promise((resolve, reject) => {
            request(options, function (error, response) {
                if (error) reject(error);
                    const resultJson = JSON.parse(response.body)
                    console.log('OLHA O TOKEN', resultJson.access_token);
                    resolve(resultJson.access_token);
              });
        })
    }
};
