import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    DATABASE_URL: z
        .string("Database connection string is required")
        .describe("PostgreSQL database connection string"),
    
    NODE_ENV: z
        .enum(["development", "production", "test"])
        .describe("enrivonment of the currently running application"),
});

function createEnv(env: NodeJS.ProcessEnv){
    const validation = envSchema.safeParse(env);
    if (validation.error)
        throw new Error(validation.error.message);

    return validation.data;
};

export const env = createEnv(process.env);
