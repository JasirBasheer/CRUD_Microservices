import express from "express"
import { Register } from '../controllers/authenticationController.js'; 
const router = express.Router()

router.post('/register',Register)
router.get('/login')

export default router