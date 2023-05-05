#### A description of the project.
this project demonstrate the simple project manajement app. The following features:
- user management
- project
- task

####  A description of the API.

the api uses RESTAPI, the example: 

```
taskRoute.get('/', validateAuth, getTasksController);
taskRoute.get('/:id', validateAuth, taskGetByIdValidationRules(), validate, getTaskByIdController);
taskRoute.post('/', validateAuth, taskInsertValidationRules(), validate, insertTaskController);
taskRoute.delete('/:id', validateAuth, taskDeleteValidationRules(), validate, deleteTaskController);
taskRoute.put('/:id', validateAuth, taskUpdateValidationRules(), validate, updateTaskController);
```

#### A description of the endpoints

the endpoints refer this link: https://www.postman.com/telecoms-geoscientist-93913429/workspace/public/request/17865254-5c0aa403-36a4-43fb-82f5-620ef7bb6d7f

#### A description of the authentication
the authentication implement JWT with encrypt-salt  password.

**create token**
```
export const loginUserService = async (req) => {
    const payload = req.body;
    const user = await getUserByEmailRepository(payload.email);
    const isMatch = await comparePassword(payload.password, user.password);
    if(isMatch){
        const token = jwt.sign(
           {_id: user._id, name: user.name, email: user.email},
            process.env.TOKEN_SECRET,
            {
              expiresIn: "24h",
            }
          );
          return {authorization: true, token: token};
    } 
    else return{authorization: false}
}
```
**decode token**

```
export const decodeJWT = async (req) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split('Bearer ')[1]
    const decoded = await jwt.verify(token, process.env.TOKEN_SECRET);
    return decoded;
}
```
**encypt decrypt password**
```
export const cryptPassword = async (password) => {
   const hash = bcrypt.hashSync(password, 10);
   return hash;
};

export const comparePassword = async (plainPass, hashword) => {
   return bcrypt.compareSync(plainPass, hashword);
};
```
#### A description of the authorization

authorization using middleware

```
import  jwt from 'jsonwebtoken';

export const validateAuth = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split('Bearer ')[1]
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
```
then putting in the routes

```
userRoute.get('/:id', validateAuth, userGetByIdValidationRules(), validate, getUserByIdController);
```
every user will be checked in validator before access some features

```
export const projectDeleteValidationRules = () => {
    return [
        param('id').notEmpty().withMessage({
            message: errorMessageEng.NOT_EMPTY
        }),
        param('id').custom( async (value) => {
            const project = await ProjectSchema.findOne({ _id: value })
            if(!project){
                throw new Error('Id does not exist');
            }
         }).withMessage({
            message: errorMessageEng.IS_EXIST
        }),
        param('id').custom( async (value, {req}) => {
            const project = await ProjectSchema.findOne({ _id: value });
            const decoded = await decodeJWT(req);
            if(project.user_id != decoded._id){
                throw new Error('Id is not allowed to edit');
            }
         }).withMessage({
            message: errorMessageEng.NOT_ALLOWED
        }),
        param('id').custom( async (value) => {
            const task = await TaskSchema.findOne({ project_id: value });
            if(task){
                throw new Error('Id is not allowed to delete');
            }
         }).withMessage({
            message: errorMessageEng.NOT_DELETED
        }),
    ]
}
```
#### A description of the error handling

error handling using middleware

```
export const accessLog = (req, _, next) => {
    const { hostname, method, path, ip, protocol } = req;
    console.log(`ACCESS: ${method} ${protocol}://${hostname}${path} - ${ip}`);
    next();
  }
  
export const errorLog = (err, req, res, _) => {
    const { hostname, method, path, protocol } = req;
    console.log(`ERROR: ${method} ${protocol}://${hostname}${path} - ${err}`);
    // next(); // you can call either next or send a uniform error response
    res.internal({ message: err.message });
}
```
#### A description of the security
- every endpoint always validate with expresss-validator
- implement OWASP security: disabled x-powered-by, protect to attact csrf, protect to xss

```
app.disable( 'x-powered-by' );
```

```
app.use(csrf()) ;
```
```
ESAPI.encoder().encodeForHTML(payload.description)
```

#### A description of the deployment

we use action github to connect digitalocean, please refer to .github

#### A markdown file that contains the documentation of the endpoints
I provided the link https://www.postman.com/telecoms-geoscientist-93913429/workspace/public/request/17865254-5c0aa403-36a4-43fb-82f5-620ef7bb6d7f

#### A link to the deployed API

no server