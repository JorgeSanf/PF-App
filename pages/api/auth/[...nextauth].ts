import NextAuth from "next-auth";
//import GoogleProvider from "next-auth/providers/google";
//import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
import { redirect } from "next/dist/server/api-utils";
import { text } from "node:stream/consumers";
//import TwitterProvider from "next-auth/providers/twitter";
//import Auth0Provider from "next-auth/providers/auth0";
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  //debug: process.env.NODE_ENV === "development",
  secret: process.env.AUTH_SECRET,
  /*pages: {
    signIn: "/auth/signin", //"/auth/signin",
    /*     signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest) /*
  },*/
  /*callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      //if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      //else
      if (new URL(url).origin === baseUrl) return baseUrl + "/home";
      return baseUrl;
    },
  },*/
});

// https://next-auth.js.org/configuration/providers/oauth
/*   secret: "test",
  jwt: {
    secret: "test",
    encryption: true,
    maxAge: 5 * 60,
  },
  pages: {
    signIn: "/auth/login",
  },   callbacks: {
    async redirect({ url, baseUrl }) {
                return baseUrl;
            },
        },*/
/*providers: [
    /* EmailProvider({
         server: process.env.EMAIL_SERVER,
         from: process.env.EMAIL_FROM,
       }),
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains
      
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    /*GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    /*
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },*/
