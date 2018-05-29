import express from 'express';
import {Request, Response,NextFunction} from 'express';
//import {somethingRouter} from  './routers / pizza-router';
import bodyParser from 'body-parser';

const app = express();

const port = 3000;

app.set('port',port);

app.use((req:Request , resp:Response , next:NextFunction)=>{


console.log(`request was made with url : ${req.path}

ad method : ${req.method}`);

next();


});


//Register the body parser to convert request json to an actual object 
app.use(bodyParser.json());


/*******************************************************************************
 * Register Routers
 * 
*/


/*
 * Start database
 */

app.listen(port,()=> {

    console.log('started');

});