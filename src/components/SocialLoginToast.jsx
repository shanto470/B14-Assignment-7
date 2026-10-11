"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function SocialLoginToast() {
    const { data: session, isPending } = authClient.useSession();

    useEffect(() => {
        if (isPending) return;

        const provider = sessionStorage.getItem("socialLoginPending");

        if (!provider) return;

        if (session?.user) {
            sessionStorage.removeItem("socialLoginPending");

            if (provider === "google") {
                toast.success("Google Sign In Successful!");
            }

            if (provider === "github") {
                toast.success("GitHub Sign In Successful!");
            }
        }
    }, [session, isPending]);

    return null;
}