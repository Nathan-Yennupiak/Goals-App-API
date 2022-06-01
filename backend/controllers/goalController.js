const asyncHandler = require("express-async-handler");
const Goal = require('../models/goalModel')


//@desc  Get all goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ })
  res.status(200).json( { message: "All Goals", goals}  );
});

//@desc  Get a Single goal
//@route GET /api/goals/:id
//@access Private
const getSingleGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  const getSingleGoal = await Goal.findById(req.params.id, req.body, {new:false})
  res.status(200).json( { message: "Goal Found", getSingleGoal}  );
});

//@desc  Set goal
//@route POST /api/goals/
//@access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error("Please add a text field");
  }

  const goal = await Goal.create({
    text: req.body.text
  })

  res.status(200).json( { message: "Goal set", goal}  );
});

//@desc Update goal
//@route PUT /api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {

  const goal = await Goal.findById(req.params.id)

  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new:true})
  res.status(200).json( { message: "Goal Updated", updatedGoal} );
});

//@desc  Delete goal
//@route DELETE /api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if(!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  await goal.remove()
  res.status(200).json({ message: "Goal deleted", id: req.params.id})
});

module.exports = {
  getGoals,
  getSingleGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
