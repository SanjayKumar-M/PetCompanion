import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
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
            const respone = await axios.post('http://localhost:3000/api/profile',{
              method:"POST",
              headers:{
                "Content-Type":"application/json",
              },
              body: JSON.stringify({
                name,email,
              })
            })

            if(respone.ok){
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


