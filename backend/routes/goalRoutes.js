const express = require ("express")
const router = express.Router()

//Importing Controller
const {getGoals, getSingleGoal, setGoal,updateGoal,deleteGoal} = require('../controllers/goalController')



router.route('/').get(getGoals).post(setGoal)
router.route('/:id').get(getSingleGoal).put(updateGoal).delete(deleteGoal)

//Get All Goals
// router.get('/', getGoals)

// //Get a single Goal
// router.get('/:id', getSingleGoal)

// //Set a Goal
// router.post('/', setGoal)

// //Update a Goal
// router.put('/:id', updateGoal)

// //Delete a Goal
// router.delete('/:id', deleteGoal)


module.exports=router