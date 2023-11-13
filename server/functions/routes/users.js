const router = require("express").Router();



router.get("/", (req, res) => {
    return res.send("Inside the user router");
  });

router.get("/jwtVerfication", async (req, res) => {
    
});
  



module.exports = router;