import {asyncHandler} from '../utils/asyncHandler.js'
//import User from '../models/user.model.js'
import {ApiError} from '../utils/ApiError.js'
import ApiResponse from '../utils/ApiResponse.js'


const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res


});


export {registerUser}