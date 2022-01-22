import { v4 as uuidv4 } from 'uuid';
import db from '../config/db.js';

export const getImgs = (req,res) => {
    db.query("SELECT * FROM Galerie",(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    
}
export const createImg = (req,res) => {
    //image
    const img = req.body.image;

    db.query(
        "INSERT INTO `Galerie`(`img`) VALUES (?)",
      [img],
      (err,result) => {

        if(err) {
          console.log(err);
        } else{
          res.send("values inserted");
        }
      }
    );
}

export const deleteImg = (req,res) => {
    const { id } = req.params;
    db.query("DELETE FROM `Galerie` WHERE id = ? ",{id}.id,(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(`image with the ID ${id} has been deleted`);
        }
      });
    
}

   
