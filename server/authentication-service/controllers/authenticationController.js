import { HashPassword } from '../helpers/hashPassword.js';
import User from '../models/userModel.js';

export const Register = async (req,res) => {
    try {
        const { name, email, password } = req.body
        
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        const HashedPassword = await HashPassword(password)
        const user = new User({
            name,
            email,
            password: HashedPassword,
          });
      
          await user.save(); 
      
          res.status(201).json({ message: 'User registered successfully' });
        
    } catch (error) {
        console.log(error)
    }
}