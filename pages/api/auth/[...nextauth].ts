import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credential",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(`${process.env.NEXT_APP_APIURL}/auth/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const data = await res.json();
          if (data.user) {
            return {
              ...data.user,
              name: data.user.username,
            };
          }
          return null;
        } catch (error) {
          console.log("err", error);
        }
      },
    }),
  ],
  callbacks: {
    async signIn(data: any) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
    async redirect({ url, baseUrl }: any) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token, user }: any) {
      // user params is undefined
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account }: any) {
      if (account) {
        token.accessToken = user.access_token;
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
    newUser: "/auth/new-user",
  },
};

export default NextAuth(authOptions);
