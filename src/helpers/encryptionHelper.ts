import * as bcrypt from 'bcrypt';

export const cryptPassword = async (password) => {
   const hash = bcrypt.hashSync(password, 10);
   return hash;
};

export const comparePassword = async (plainPass, hashword) => {
   return bcrypt.compareSync(plainPass, hashword);
};