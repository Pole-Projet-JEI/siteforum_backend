import { v4 as uuidv4 } from 'uuid';
import db from '../config/db.js';

export const getOrganisateurs = (req,res) => {
    db.query("SELECT * FROM Organisateur",(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    
}
export const createOrganisateur = (req,res) => {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const title = req.body.title;
    const description = req.body.description;
    const fb = req.body.fb;
    const insta = req.body.insta;
    const linkedin = req.body.linkedin;
    //image

    db.query(
        "INSERT INTO `Organisateur`(`firstname`, `lastname`, `title`, `description`, `fb`, `insta`, `linkedin`) VALUES (?,?,?,?,?,?,?)",
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
export const getOrganisateurByID = (req,res) => {

    const { id } = req.params;

    db.query("SELECT * FROM Organisateur WHERE id = ? ",{id}.id,(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result[0]);
        }
      });
}

export const deleteOrganisateur = (req,res) => {
    const { id } = req.params;
    db.query("DELETE FROM `Organisateur` WHERE id = ? ",{id}.id,(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(`Organisateur with the ID ${id} has been deleted`);
        }
      });
    
}
export const updateOrganisateur = (req,res) => {

    const { id } = req.params;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const title = req.body.title;
    const description = req.body.description;
    const fb = req.body.fb;
    const insta = req.body.insta;
    const linkedin = req.body.linkedin;
    const image = req.body.image;
    let newValues = [];
    
    db.query("SELECT * FROM Organisateur WHERE id = ? ",{id}.id,(err,result) => {
      if (err) {
        console.log(err);
      } else {
        newValues = [result[0].firstname,result[0].lastname,result[0].title,result[0].description,result[0].fb,result[0].insta,result[0].linkedin,result[0].image];
      }
    });

    if(firstname) {
        newValues[0] = firstname;
    }
    if(lastname) {
        newValues[1] = lastname;
    }
    if(title) {
        newValues[2] = title;
    }
    if(description) {
        newValues[3] = description;
    }
    if(fb) {
        newValues[4] = fb;
    }
    if(insta) {
        newValues[5] = insta;
    }
    if(linkedin) {
      newValues[6] = linkedin;
    }
    if (image) {
        newValues[7] =image; 
    }
    newValues[8] = {id}.id;

    db.query("UPDATE `Organisateur` SET `firstname`=?,`lastname`=?,`title`=?,`description`=?,`fb`=?,`insta`=?,`linkedin`=?,`image`=? WHERE id = ? ",newValues,(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(`Organisateur with the ID ${id} has been updated`);
        }
      });
    
   
}