// import model
const Todo = require('../models/Todo')

exports.createTodo = async(req, res) =>{
    try {
        // fetching data from request or body
        const {title, description} = req.body;
        // create new todo object and insert in db
        const response = await Todo.create({title, description});
        // send a json response back with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'new entery created successful',
            }
        )
        
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success:false,
            data:'internal server error',
            message:error.message,
        })
    }
}