import express from 'express'
import {Request, Response, NextFunction} from 'express'
import {r} from './r-router';
export const employeeRouter = express.Router();


//console.log(r);

/*
* veriying user logged in  
*/
let logged = false;


let emp =[

{

    userName:'Hec100' , // partition key
    password:'1234'  ,
	firstName:'Hector',  
	lastName:'Figueroa',
	email:'hector.@1234.com'  ,
	role:'employee'  // or maybe “admin”



},
{

    userName:'Ped100' , // partition key
    password:'1234'  ,
	firstName:'Pedro',  
	lastName:'Hernandez',
	email:'pedro.@1234.com'  ,
	role:'employee'  // or maybe “admin”




},
{

    userName :'carl100',
    password:'1234',
	firstName:'Carlos',  
	lastName:'White',
	email:'carlos.@1234.com'  ,
	role:'employee'  // or maybe “admin”


}
]




employeeRouter.get('',(req:Request,resp:Response)=>{
    console.log('retrieving all reimbuersements');
    resp.json(emp);

});


employeeRouter.get('/name/:name', (req:Request,resp:Response) =>{

    const name=req.params.name;
    console.log(`retreiving reinbustment with name ${name}`);
    for (let p of emp){
        if(p.userName === name){
            resp.json(p);
            return;
    
        }
    }
    
    
    });

    employeeRouter.post ('',(req:Request,resp:Response)=>{

        console.log(`adding reinbustment: ${JSON.stringify(req.body)}to reinbustments`)
        // if(!req.body.name || !req.body.size){
        //     resp.sendStatus(400);
        // }else{
            const p = {
                userName :req.body.userName,
                password: req.body.password,
                firstName:req.body.firstName,  
                lastName:req.body.lastName,
                email:req.body.email ,
                role:req.body.role  // or maybe “admin”
        
            }
            emp.push(p);
            resp.sendStatus(201)
        
        // }

    });


    employeeRouter.delete('/name/:name',(req:Request,resp:Response)=>{
        emp =emp.filter((p)=>p.userName !== req.params.userName)
            resp.end();
            
        });

    
    employeeRouter.get('/login',(req:Request,resp:Response)=>{
        resp.send('please enter userName');


    });

    employeeRouter.post('/login',(req:Request,resp:Response)=>{
        resp.send('please enter userName and password');
        let body=req.body;

        // console.log(body);

        // console.log(body.username);
        // console.log(body.password);
            for( let e of emp ){
                if(e.userName === body.username && e.password === body.password){
                console.log("user found")
                     }else console.log("user not found");
                                         
                }
             
                 
    });