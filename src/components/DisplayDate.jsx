"use client";

import { useEffect, useState } from "react";

export default function DateDisplay() {
    const [date, setDate] = useState("");

    useEffect(() => {
        const today = new Date().toLocaleDateString("bn-BD", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        setTimeout(() => {
            setDate(today)
        }, 0)
    }, []);

    return <>{date}</>;
}