import jwt from "jsonwebtoken";
import userRepo from "../repositories/userRepository.js";
import bcrypt from "bcrypt";

class AuthService {
  generateAccessToken(userId) {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
  }

  generateRefreshToken(userId) {
    return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "7d",
    });
  }

  async register(email, password) {
    const user = await userRepo.FindUserByEmail(email);
    if (user) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await userRepo.createUser(email, hashedPassword);

    const accessToken = this.generateAccessToken(user.id);
    const refreshToken = this.generateRefreshToken(user.id);

    return {
      accessToken,
      refreshToken,
      user: { id: user.id, email: user.email },
    };
  }

  async login(email, password) {
    const user = await userRepo.FindUserByEmail(email);
    if (!user) {
      throw new Error("Invalid email or password");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    const accessToken = this.generateAccessToken(user.id);
    const refreshToken = this.generateRefreshToken(user.id);
    return {
      accessToken,
      refreshToken,
      user: { id: user.id, email: user.email },
    };
  }
}
export default new AuthService();
