import express from 'express'
import { engine } from 'express-handlebars';
const port = 5000;
const host = '127.0.0.1';
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


const students = [
    {
        id : 1 ,
        name : 'Abdo' , 
        email : 'abdo@gmail.com'
    }
,
    {
        id : 2 ,
        name : 'Mohamed' , 
        email : 'Mohamed@gmail.com'
    }
,
    {
        id : 3 ,
        name : 'Ahmed' , 
        email : 'Ahmed@gmail.com'
    }
]
app.get('/', (req , res) =>{
    res.render('page' , {layout:false , student : students})
})

app.listen(port , host , ()=> {
    console.log('running on :' + host + ':' + port );
})