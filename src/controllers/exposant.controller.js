const StatusCodes =  require ("http-status-codes");
const exposantDao = require("../dao/exposant.dao");

class exposantController {

    async add (req,res) {
        const {nom , email,telephone,entreprise}=req.body;
      
        const exposantToSave = {
            nom,
            email,
            telephone,
            entreprise
        }
        const saving = await  exposantDao.add(exposantToSave);
        if(saving.success===false){
            return  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("error, please try again")
        }
        return  res.status(StatusCodes.CREATED).json("you have successfully registered")
        
    }
   
   

    

}


module.exports = new exposantController()