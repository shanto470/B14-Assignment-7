import { authClient } from "./auth-client";

export const handleSignOut = async () => {
    await authClient.signOut();
}