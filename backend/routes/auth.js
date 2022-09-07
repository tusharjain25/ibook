const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser=require('../middleware/fetchuser');

const JWT_SECRET = "Tusharisagoodb$oy";
router.post(
  "/createuser",
  [
    body("username", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be of atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success,error: "sorry a user already exists with this email" });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({ success,authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
)

router.post(
    "/login",
    [
      body("email", "Enter a valid email").isEmail(),
      body("password", "password cannot be blank").exists(),
    ],
    async (req, res) =>{
      let success=false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const{email,password}=req.body;
        try {
            let user=await User.findOne({email});
            if(!user) {
              success=false;
                return res.status (400).json({error:"please try to login with correct credentials"})
            }

            const passwordcompare=await bcrypt.compare(password,user.password);
            if(!passwordcompare) {
              success=false;
                return res.status (400).json({success,error:"please try to login with correct credentials"})
            }

            const data = {
                user: {
                  id: user.id,
                },
              };
              const authtoken = jwt.sign(data, JWT_SECRET);
              success=true;
              res.json({ success,authtoken });

        } catch (error) {
             console.error(error.message);
             res.status(500).send("internal server error");
        }
    })


    router.get("/getuser",fetchuser, async (req, res) =>{
    try {
      const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
  
    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }
})

// router.post('/setavatar/:id',fetchuser, async (req, res) =>{ 
//   try {
//     const userId = req.params.id;
//     const avatarImage = req.body.image;
//     const userData = await User.findByIdAndUpdate(
//       userId,
//       {
//         isAvatarImageSet: true,
//         avatarImage,
//       },
//       { new: true }
//     );
//     return res.json({
      
//       isSet: userData.isAvatarImageSet,
//       image: userData.avatarImage,
//     });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("internal server error");
// }
// })

// router.post("/logout",fetchuser, async (req, res)=> { 
//   try {
//     if (!req.params.id) return res.json({ msg: "User id is required " });
//     onlineUsers.delete(req.params.id);
//     return res.status(200).send();
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("internal server error");
// }
// })


module.exports = router;
