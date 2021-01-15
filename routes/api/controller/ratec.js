const ApiError = require('../../../ApiError');
const axios = require('axios');

class RateController {
    ratec (req, res, next) {
        const myurl = new URL("https://api.exchangeratesapi.io/latest");
            var base = req.query.base;
            var currency = req.query.currency;
            if (!base || !currency) {
                console.log("base");
                next(ApiError.badRequest("Invalid base or currency value"));
                return;
            }
            myurl.searchParams.append('base',base);
            myurl.searchParams.append('symbols',currency);
            let respon = {"result":""};
        
            axios.get(myurl.toString())
                .then(data =>{
                    respon.result =  data.data;
                    console.log(data.data);
                    res.json(respon);
                })
                .catch(err => {
                    if (err.response.status === 400) {
                        next(ApiError.badRequest(err.response.data.error));
                    } else {
                        next(ApiError.internal(err.response.data.error))
                    }
                    console.log(err.response.data);
                    console.log(err.response.status);
                });
    }
}
module.exports = new RateController();