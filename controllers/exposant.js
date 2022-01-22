import { v4 as uuidv4 } from 'uuid';
import db from '../config/db.js';

export const getExposants = (req,res) => {
    db.query("SELECT * FROM Exposant",(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    
}
export const createExposant = (req,res) => {

    const title = req.body.firstname;
    const description = req.body.description;
    const fb = req.body.fb;
    const insta = req.body.insta;
    const linkedin = req.body.linkedin;
    //image

    db.query(
        "INSERT INTO `Exposant`(`title`,`description`, `fb`, `insta`, `linkedin`) VALUES (?,?,?,?,?,?,?)",
      [firstname,lastname,title,description,fb,insta,linkedin],
      (err,result) => {

        if(err) {
          console.log(err);
        } else{
          res.send("values inserted");
        }
      }
    );
}
export const getExposantByID = (req,res) => {

    const { id } = req.params;

    db.query("SELECT * FROM Exposant WHERE id = ? ",{id}.id,(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result[0]);
        }
      });
}

export const deleteExposant = (req,res) => {
    const { id } = req.params;
    db.query("DELETE FROM `Exposant` WHERE id = ? ",{id}.id,(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(`Exposant with the ID ${id} has been deleted`);
        }
      });
    
}
export const updateExposant = (req,res) => {

    const { id } = req.params;
    const title = req.body.title;
    const description = req.body.description;
    const fb = req.body.fb;
    const insta = req.body.insta;
    const linkedin = req.body.linkedin;
    const image = req.body.image;
    let newValues = [];
    
    db.query("SELECT * FROM Exposant WHERE id = ? ",{id}.id,(err,result) => {
      if (err) {
        console.log(err);
      } else {
        newValues = [result[0].title,result[0].description,result[0].fb,result[0].insta,result[0].linkedin,result[0].image];
      }
    });

    if(title) {
        newValues[0] = title;
    }
    if(description) {
        newValues[1] = description;
    }
    if(fb) {
        newValues[2] = fb;
    }
    if(insta) {
        newValues[3] = insta;
    }
    if(linkedin) {
      newValues[4] = linkedin;
    }
    if (image) {
        newValues[5] =image; 
    }
    newValues[6] = {id}.id;

    db.query("UPDATE `Exposant` SET `title`=?,`description`=?,`fb`=?,`insta`=?,`linkedin`=?,`image`=? WHERE id = ? ",newValues,(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(`Exposant with the ID ${id} has been updated`);
        }
      });
    
   
}