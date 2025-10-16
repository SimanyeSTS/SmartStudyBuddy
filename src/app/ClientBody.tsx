"use client"

import { useEffect } from "react"

export default function ClientBody({
    children,
}: {
children: React.ReactNode
}) {
    useEffect(() => {
        document.body.className = "antialised";
    }, []);

    return <div className="antialised">{children}</div>
}