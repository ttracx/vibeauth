import { LoginForm } from "@/components/auth/login-form";
import { Shield } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-violet-50 to-white p-4">
      <Link href="/" className="flex items-center gap-2 mb-8">
        <Shield className="h-8 w-8 text-violet-600" />
        <span className="text-2xl font-bold text-gray-900">VibeAuth</span>
      </Link>
      <LoginForm />
    </div>
  );
}
