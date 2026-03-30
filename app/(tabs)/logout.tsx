"use client";

import { useRouter } from "expo-router";
import { useEffect } from "react";
import { tokenStorage } from "../storage/storage";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const doLogout = async () => {
      await tokenStorage.removeToken();
      router.replace("/");
    };

    doLogout();
  }, [router]);

  return null; 
}
