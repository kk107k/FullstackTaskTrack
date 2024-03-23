import { createCookieSessionStorage } from "@remix-run/node"

const sessionSecret = process.env.SESSION_SECRET || ""; // Ensure session secret is not undefined

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "_session",
        sameSite: "lax",
        path: "/",
        httpOnly: true,
        secrets: [sessionSecret], // Use sessionSecret instead of process.env.SESSION_SECRET
        secure: process.env.NODE_ENV === "production", //bool
        maxAge: 60 * 60 * 24 * 30,
    },
})

export {sessionStorage}