import { v4 as uuidv4 } from 'uuid';
import db from '../config/db.js';

export const getWorkshops = (req,res) => {
    db.query("SELECT * FROM Workshop",(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    
}
export const createWorkshop = (req,res) => {

    const title = req.body.title;
    const description = req.body.description;
    const type = req.body.type;
    const time = req.body.time;
    const place = req.body.place;
    const formateur = req.body.formateur;

    db.query(
        "INSERT INTO `Workshop`(`title`, `description`, `type`, `time`, `place`) VALUES (?,?,?,?,?,?)",
      [title,description,type,time,place,formateur],
      (err,result) => {

        if(err) {
          console.log(err);
        } else{
          res.send("values inserted");
        }
      }
    );
}
export const getWorkshopByID = (req,res) => {

    const { id } = req.params;

    db.query("SELECT * FROM Workshop WHERE id = ? ",{id}.id,(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result[0]);
        }
      });
}
export const deleteWorkshop = (req,res) => {
    const { id } = req.params;
    db.query("DELETE FROM `Workshop` WHERE id = ? ",{id}.id,(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(`Workshop with the ID ${id} has been deleted`);
        }
      });
    
}
export const updateWorkshop = (req,res) => {

    const { id } = req.params;
    const title = req.body.title;
    const description = req.body.description;
    const type = req.body.type;
    const time = req.body.time;
    const place = req.body.place;
    const formateur = req.body.formateur;
    let newValues = [];
    
    db.query("SELECT * FROM Workshop WHERE id = ? ",{id}.id,(err,result) => {
      if (err) {
        console.log(err);
      } else {
        newValues = [result[0].title,result[0].description,result[0].type,result[0].time,result[0].place,result[0].formateur];
      }
    });

    if(title) {
        newValues[0] = title;
    }
    if(description) {
        newValues[1] = description;
    }
    if(type) {
      newValues[2] = type;
  }
  if(time) {
      newValues[3] = time;
  }
  if(place) {
    newValues[4] = place;
}
if(formateur) {
    newValues[5] = formateur;
}
    newValues[6] = {id}.id;

    db.query("UPDATE `Workshop` SET `title`=?,`description`=?,`type`=?,`time`=?,`place`=?,`formateur`=? WHERE id = ? ",newValues,(err,result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(`Workshop with the ID ${id} has been updated`);
        }
      });
    
   
}