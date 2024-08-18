import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

export const options = {
    providers: [
        GitHubProvider({
            profile(profile){
                console.log("Profile GitHub: ", profile)

                let userRole = "GitHub User"
                if(profile?.email == "subhransu2004@gmail.com"){
                    userRole = "admin"
                }
                return{
                    ...profile,
                    role: userRole,
                };
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_Secret
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_Secret,
    callbacks: {
        async jwt({token, user}){
            if(user) token.role = user.role
            return token;
        },
        async session({session, token}){
            if(session?.user) 
                session.user.role = token.role;
            return session;
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    }
}