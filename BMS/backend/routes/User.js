const router = require('express').Router();
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcryptjs');

const secret = process.env.SECRET;


let User = require ('../models/userModel');


//register user
router.route('/register').post(async(req,res) =>{
    //const [name,email, password, repeatPassword] = req.body;
   
    const name = req.body.name;
    const  nic= req.body.nic;
    const  passportNo= req.body.passportNo; 
    const  phoneNo= req.body.phoneNo; 
    const  secPhoneNo= req.body.secPhoneNo; 
    const email = req.body.email;
    const  password= req.body. password;
    const repeatPassword = req.body.repeatPassword;
    const userType = "Customer";

    try{
       
        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        
        const newUser =  new User({
            name, nic, passportNo, phoneNo, secPhoneNo, email,password : hashedPassword, repeatPassword :hashedPassword, userType
        });
        newUser.save();

        if(newUser){
            res.status(201).json({
                _id:newUser.id,
                name: newUser.name,
                email: newUser.email,
            })
        }
        else{
            res.status(400)
            throw new Error('Invalid user data')
        }
    }
    catch(err){
        res.status(400).json(err)
    }    
});



//login user
router.route('/login').post(async(req,res) =>{
   const {email, password} = req.body;
   console.log(req.body);

   //check for user email
    const user = await User.findOne({email: email})

    if(user && (await bcrypt.compare(password, user.password))){
        const token = jwt.sign({email:user.email, id: user._id}, secret, {expiresIn: "24h"});

        res.status(201).json({
            id:user._id,
            name: user.name,
            email: user.email,
            token:token,
            userType:user.userType,
        })
        // console.log(user)
        }
    else{
            res.status(400).send({state: "Error"})
            // throw new Error('Invalid user data');
        }   


    
})


module.exports = router;
// export default router;