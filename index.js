import express from "express";
import bodyParser from "body-parser";
import speakersRoutes from './routes/speakers.js';
import workshopRoutes from './routes/workshop.js';
import galerieRoutes from './routes/galerie.js';
import exposantRoutes from './routes/exposant.js';
import organisateurRoutes from './routes/organisateur.js';
import formateurRoutes from './routes/formateur.js';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) => {
    res.send('hello API!');
});
app.use('/speakers',speakersRoutes);
app.use('/workshop',workshopRoutes);
app.use('/galerie',galerieRoutes);
app.use('/exposant',exposantRoutes);
app.use('/organisateur',organisateurRoutes);
app.use('/formateur',formateurRoutes);
app.listen(5000,()=>{
    console.log('server listening on port 5000');
})