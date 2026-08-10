import cors from "cors"
// import DBConnection from "./DB/DB.connection.js"
import authController from "./modules/auth/auth.controller.js"
import userController from "./modules/user/user.controller.js"
import messageController from "./modules/message/message.controller.js"
import { globalErrorHandling } from "./utils/error/error.js"
export default function bootstrap(app, express) {
  app.use(cors())
  app.use(express.json())
  app.use("/auth", authController)
  app.use("/user", userController)
  app.use("/message", messageController)

  app.use( (req, res)=>{
    return res.status(404).json({message:"in-valid routing"}) 
  })  
  app.use(globalErrorHandling)
}


