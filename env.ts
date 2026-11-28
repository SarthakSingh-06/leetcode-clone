import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    DATABASE_URL: z
        .string("Database connection string is required")
        .describe("PostgreSQL database connection string"),
    
    NODE_ENV: z
        .enum(["development", "production", "test"])
        .describe("enrivonment of the currently running application"),

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z
        .string("Clerk publishable key is required")
        .describe("Clerk publishable key for client-side authentication"),
    
    CLERK_SECRET_KEY: z
        .string("Clerk secret key is required")
        .describe("Clerk secret key for server-side authentication"),
    
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: z
        .string("Clerk sign-in URL is required")
        .describe("Clerk sign-in URL for client-side authentication"),
    
    NEXT_PUBLIC_CLERK_SIGN_UP_URL: z
        .string("Clerk sign-up URL is required")
        .describe("Clerk sign-up URL for client-side authentication"),

    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: z
        .string("Clerk sign-in fallback redirect URL is required")
        .describe("Clerk sign-in fallback redirect URL for client-side authentication")
        .default("/"),

    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: z
        .string("Clerk sign-up fallback redirect URL is required")
        .describe("Clerk sign-up fallback redirect URL for client-side authentication")
        .default("/sign-up"),
});

function createEnv(env: NodeJS.ProcessEnv){
    const validation = envSchema.safeParse(env);
    if (validation.error)
        throw new Error(validation.error.message);

    return validation.data;
};

export const env = createEnv(process.env);
