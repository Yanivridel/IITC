import bcrypt from 'bcrypt'

const SECRET_KEY = process.env.ENCRYPTION_SECRET

export async function hashPassword(userPassword) {
    const combinedPassword = userPassword + SECRET_KEY
    const saltRounds = 10;
    
    const hashedPassword = await bcrypt.hash(combinedPassword, saltRounds)
    return hashedPassword
}

export async function comparePassword(userPassword, hashedDbPassword) {
    const combinedPassword = userPassword + SECRET_KEY;
    return await bcrypt.compare(combinedPassword, hashedDbPassword);
}