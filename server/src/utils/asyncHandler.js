import { ApiError } from "./ApiError.js";
import ApiResponse  from "./ApiResponse.js";


export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      if (err instanceof ApiError) {
        res.status(err.statusCode).json(new ApiResponse(err.statusCode, err.message));
      } else {
        res.status(500).json(new ApiResponse(500, "Internal Server Error"));
      }
    });
  };
  