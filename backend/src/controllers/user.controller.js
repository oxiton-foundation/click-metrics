import { asyncHandler } from '../utils/asyncHandler.js';
import {User} from '../models/user.model.js';
import { ApiError } from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import jwt from 'jsonwebtoken';


const userSchema = z.object({
    fullName: z.string().nonempty("Full name is required"),
    email: z.string().email("Invalid email address"),
    username: z.string().nonempty("Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long")
  });

const loginSchema = z.object({
    email: z.string().email("Invalid email address").optional(),
    username: z.string().optional(),
    password: z.string().min(6, "Password must be at least 6 characters long")
  });


  const registerUser = asyncHandler(async (req, res) => {
    try {
      const { fullName, email, username, password } = req.body;
  
     
      userSchema.parse({ fullName, email, username, password });
  
     
      const existingUser = await User.findOne({
        $or: [{ username }, { email }]
      });
  
      if (existingUser) {
        throw new ApiError(409, "User with email or username already exists");
      }
  
    
      const hashedPassword = await bcrypt.hash(password, 10);
  

      const user = await User.create({
        fullName,
        email,
        password: hashedPassword,
        username
      });
  

      const userResponse = {
        fullName: user.fullName,
        email: user.email,
        username: user.username
      };
  
   
      res.status(201).json(new ApiResponse(201, "User registered successfully", userResponse));
    } catch (error) {
      console.error('Error registering user:', error);
      throw new ApiError(500, "Internal Server Error");
    }
  });

  const loginUser = asyncHandler(async (req, res) => {
    const { email, username, password } = req.body;
  
  
    try {
      loginSchema.parse({ email, username, password });
    } catch (e) {
      throw new ApiError(400, e.errors[0].message);
    }
  
    if (!username && !email) {
      throw new ApiError(400, "Username or email are required");
    }
  

    const user = await User.findOne({
      $or: [{ email }, { username }]
    });
  
    if (!user) {
      throw new ApiError(401, "Invalid credentials");
    }
  
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid credentials");
    }
  
   
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
   
    const userResponse = {
      fullName: user.fullName,
      email: user.email,
      username: user.username,
      token
    };
  
    
    res.status(200).json(new ApiResponse(200, "Login successful", userResponse));
  });

export { registerUser, loginUser};