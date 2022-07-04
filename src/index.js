import { express } from 'express';

const app = express()

// Middleware
app.use(express.json())


app.get("/", (req, res) =>{
    res.send("Tô rodando o heroku.")
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Ta funcionando.")
})


