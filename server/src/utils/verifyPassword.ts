import bcrypt from "bcryptjs";
const verifyPassword = async (
  hashPassword: string,
  inputPassword: string
): Promise<boolean> => {
  try {
    return bcrypt.compare(hashPassword, inputPassword);
  } catch (err) {
    console.log(err);
    return false;
  }
};


export default verifyPassword