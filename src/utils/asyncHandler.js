/*
THERE ARE TWO APPROACHES TO DO THIS AND BOTH OF THEM ARE GOOD. IT DEPENDS ON YOU WHICH ONE YOU FIND MORE SUITABLE FOR YOURSELF.
1. PROMISE
2. TRY-CATCH
*/


// const asyncHandler = (requestHandler) => {
//   return (req , res , next) => {
//   Promise.resolve(requestHandler(req , res , next)).catch((err)=> next(err))
//   };
// };


// the asyncHandler function is a higher-order function. It takes another function as an argument and wraps that function in an asynchronous error-handling mechanism.

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


export {asyncHandler}

//this thing basically means it is taking a function as an argument and passing it i.e. const asyncHandler = (fn) => { async () => {} }