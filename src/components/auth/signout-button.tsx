"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function SignOutButton() {
  return (
    <Button
      variant="ghost"
      className="w-full justify-start"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <LogOut className="h-5 w-5 mr-3" />
      Sign Out
    </Button>
  );
}
