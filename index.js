import express from "express";
import bodyParser from "body-parser";
import speakersRoutes from './routes/speakers.js';

const app = express();

app.use(bodyParser.json());


app.get('/',(req,res) => {
    res.send('hello API!');
});
app.use('/speakers',speakersRoutes);

app.listen(5000,()=>{
    console.log('server listening on port 5000');
})