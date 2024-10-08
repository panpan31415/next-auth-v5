import prisma from "./db";

export const getUserByEmail = async (email: string) => {
    try {
        const user = prisma.user.findUnique({
            where: { email },
        });
        return user;
    } catch (error) {
        return null;
    }
};

export const getUserById = async (id: string) => {
    try {
        const user = prisma.user.findUnique({
            where: { id },
        });
        return user;
    } catch (error) {
        return null;
    }
};
