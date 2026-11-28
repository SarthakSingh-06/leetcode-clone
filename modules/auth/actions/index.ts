"use server";
import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

async function onBoardUser() {
    try {
        const user = await currentUser();

        if (!user) {
            return {
                success: false,
                error: "No authenticated user found"
            };
        }

        const { id, firstName, lastName, imageUrl, emailAddresses } = user;
        const newUser = await prisma.user.upsert({
            where: {
                clerkId: id
            },
            update: {},
            create: {
                clerkId: id,
                firstName: firstName || null,
                lastName: lastName || null,
                imageUrl: imageUrl || null,
                email: emailAddresses[0]?.emailAddress || ""
            }
        });

        return { ...newUser };
    } catch (error) {
        console.error("Error occurred while onboarding user:", error);
        return {
            success: false,
            error: "Failed to onboard user"
        };
    }
};

export {
    onBoardUser,
};
