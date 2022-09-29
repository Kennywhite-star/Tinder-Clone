import express from 'express'
import mongoose from 'mongoose'
import cards from './dbCard.js'
import Cors from 'cors';


//App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url ='mongodb+srv://admin:CybaHMQFRwcacKjc@cluster0.t3dgc.mongodb.net/tinderdb?retryWrites=true&w=majority'


//Middlewares
app.use(express.json())
app.use(Cors())



//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
   // useCreateIndex: true,
    useUnifiedTopology:true,
})


//API Endpoints
app.get('/',(req,res) =>{
    res.status(200).send('Hello kennywhite')
})

        //post id to push info into the database
app.post('/tinder/cards', (req,res) => {
    const dbCard =  req.body;

    cards.create(dbCard,(err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
   
        }

    })
})

app.get('/tinder/cards', (req,res) => {
    const dbCard =  req.body;

    cards.find((err, data) => {
        if(err){
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
   
        }

    });
});

//Listener
app.listen(port, () => console.log(`listening on local host: ${port}`));