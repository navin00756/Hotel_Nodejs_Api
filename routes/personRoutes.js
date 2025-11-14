const express = require('express')
const app = express()
const router = express.Router();


const Person = require('../models/person')
//                      ./../models/person' bot works

router.post('/', async (req, res) => {
    try {

        const data = req.body//request bodi contain person data

        //create new person document  using mongoose model
        const newPerson = new Person(data);

        //save the person to database   
        const respones = await newPerson.save();

        console.log('data saved');

        res.status(200).json(respones);
    }


    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server' })

    }
})










router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');

        res.status(200).json(data);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server' })

    }
}); 















//parameterized url
    

router.post('/:workType',async(req,res)=>{

    try{

         const workType=req.params.workType;
    if(workType=='chef' || workType=='manager' || workType=='waiter'){

        const respones=await Person.find({work:workType});
        console.log('responeses fetchd');
        res.status(200).json(respones);
        
    } else{
        res.status(404).json({error:'invalid workType'})
    }


    }
    catch(err){

    }
})







router.put('/:id', async(req,res)=>{
    try{
        const personId=req.params.id;//extract id from url pattern
        const updatePersonData=req.body;


        const respones= await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,//return updataed doucment
            runValidators:true,//mongoose validation
        })




     if(!respones){
        return res.status(404).json({error:'person not found'})
     }



          console.log('data updated');
          res.status(200).json(respones);

    }catch(err){
         console.log(err);
        res.status(500).json({ error: 'internal server' })

    }
})





router.delete('/:id',async(req,res)=>{

    try{

          const personId=req.params.id;//extract id from url pattern

          const respones=await Person.findByIdAndDelete(personId);

          
     if(!respones){
        return res.status(404).json({error:'person not found'})
     }


          console.log('data deleted');
          res.status(200).json({massege:'person deleted successfully'});


    }catch(err){
//naveen
          console.log(err);
        res.status(500).json({ error: 'internal server' })
    }

})





module.exports = router