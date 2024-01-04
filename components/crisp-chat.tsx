"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat=()=>{
    useEffect(()=>{
        Crisp.configure("88e1ccc3-a5e0-4b10-8b94-b7b05b5986cc");
    },[])

    return null;
}