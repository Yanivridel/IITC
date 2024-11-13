import bcrypt from 'bcrypt'


export async function hashPassword(userPassword) {
    const combinedPassword = userPassword + process.env.BCRYPT_KEY
    const saltRounds = 10;
    
    const hashedPassword = await bcrypt.hash(combinedPassword, saltRounds)
    return hashedPassword
}

export async function comparePassword(userPassword, hashedDbPassword) {
    const combinedPassword = userPassword + process.env.BCRYPT_KEY;
    return await bcrypt.compare(combinedPassword, hashedDbPassword);
}