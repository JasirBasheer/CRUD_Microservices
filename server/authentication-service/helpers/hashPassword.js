import bcrypt from 'bcrypt'
export const HashPassword = async(password) =>{
    try {   
        const HashedPassword = await bcrypt.hash(password,10)
        return HashedPassword
    } catch (error) {
        console.log('unexpected error occured')
    }
}