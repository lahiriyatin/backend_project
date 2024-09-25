const asyncHandler = (requestHandler) => {
  return (req , res , next) => {
  Promise.resolve(requestHandler(req , res , next)).catch((err)=> next(err))
  };
};

export {asyncHandler}
// the asyncHandler function is a higher-order function. It takes another function (commonly called a "callback" or "handler function") as an argument and wraps that function in an asynchronous error-handling mechanism.




/*
const asyncHandler = (fn) => async (req , res , next) => { 
  try {
    await fn(req , res , next)
  } catch (error) {
    res.status(err.code || 500).json({
      success: false
      message: err.message
    })
  }
}
*/



//this thing basically means it is taking a function as an argument and passing it i.e. const asyncHandler = (fn) => { async () => {} }