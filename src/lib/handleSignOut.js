
import { redirect } from "next/navigation";
import { authClient } from "./auth-client";
import toast from "react-hot-toast";


export const handleSignOut = async () => {

    await authClient.signOut();
    toast.success("Log out successful")
    redirect('/')

}