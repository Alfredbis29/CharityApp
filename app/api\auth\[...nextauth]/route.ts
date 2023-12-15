import NextAuth from "next-auth/next";
import Credentialsprovider from "next-auth/providers/credentials";
const authOptions: NextAuthOptions = {
    providers: [
         Credentialsprovider({
            name:"creds"
            credentials: {
                email: { label: "Email", placeholder: "Enter Email"},
                password: { label: "Password", placeholder: "Password"}
            },
             async authorize(credentials, req){
                if (!credentials || !credentials.email || !credentials.password)
                     return null;
                 const user = users.find((item)=>item.email === credentials.email);
                 if (user?.password === credentials.password){
                     return user;
                 }
                     return null;
             },
         }),
    ],
};

const handler = NextAuth();

export {handler as GET, handle as POST};