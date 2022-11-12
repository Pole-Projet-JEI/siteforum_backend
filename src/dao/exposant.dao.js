const exposantModel = require('../models/exposant.model');


class exposantDao {

    async  add (exposant) {
        try {
            const exposantToSave = exposantModel.build(exposant);
            const result = await  exposantToSave.save();
            return {success: true}
        } catch (e) {
            console.log(e)
            return {success:false}
        }

    }
    
    async delete (id) {
        try{
            const response = await  exposantModel.destroy({where : {"id":id}})
            console.log("exposant deleted successfully");
            return {success: true}
        }catch (e) {
            console.log(e)
            return {success:false}
        }
    }
}


module.exports = new exposantDao() ;