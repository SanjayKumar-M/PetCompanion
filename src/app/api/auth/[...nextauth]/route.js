import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import { dbConnection } from "@/lib/dbconnection";
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("User", user);
      console.log("Account", account);
      

      if (account.provider === 'google') {
        const {name, email} = user;
        try {
          await dbConnection()
          const response = await axios.post('http://localhost:3000/api/profile', {
            name,
            email,
        });

            if(response.ok){
              return user;
            }
        }
        catch (err) {
          console.log(err)
        }
      }

      return user;
    },

  },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


