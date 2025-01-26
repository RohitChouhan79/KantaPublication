import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import dbConnect from "./lib/dbConnect";
import UserSchema from "./models/UserSchema";

async function login(credentials) {
  try {
      await dbConnect();
      const user = await UserSchema.findOne({ email: credentials.email });
      if (!user) throw new Error("Invalid username or password");
      
      const isCorrect = await bcrypt.compare(credentials.password, user.password);
      if (!isCorrect) throw new Error("Invalid username or password");

      return user;
  } catch (error) {
      console.error("Login error:", error.message);
      throw new Error("Authentication failed");
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const user = await login(credentials);
          return user || null;
      } catch (error) {
          console.error("Authorization error:", error.message);
          throw new Error("Authorization failed");
      }
      },
    })
  ],
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
            session.user.role = token.role;
            session.user.id = token.sub;
            session.user.name = token.name;
            session.user.email = token.email;
        return session;
    },
    async jwt({ token, user }: { token: any; user: any }) {
        if (user) {
            token.role = user.role;
            token.email=user.email;
        }
        return token;
    },
   
},
pages: {
  signOut: '/', // Redirect to home page after sign-out
},
secret: process.env.AUTH_SECRET,
session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
}
})