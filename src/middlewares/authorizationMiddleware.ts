import  jwt from 'jsonwebtoken';

export const validateUser = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  
    // If the client does not send auth - header, send a 401 response
    if (token == null) {
      return res.badreq({message: 'The request does not contain a valid access header'});
    }
  
    // res.locals is commonly used to store temporary request data
    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
      console.log(err)
  
      if (err) return res.unauth({message: 'You are not permitted to access this resource'});
  
      req.user = user
  
      next()
    })
    
  }