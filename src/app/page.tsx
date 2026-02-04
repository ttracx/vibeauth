import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Key, Users, Zap, Check, ArrowRight, Github } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-violet-600" />
            <span className="text-2xl font-bold text-gray-900">VibeAuth</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Simple auth for modern SaaS
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Authentication that{" "}
            <span className="text-violet-600">just works</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Add secure authentication to your SaaS in minutes. Email/password,
            OAuth, JWT tokens, and user management—all in one simple service.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://github.com/ttracx/vibeauth" target="_blank">
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email & OAuth</h3>
            <p className="text-gray-600">
              Support email/password login plus Google and GitHub OAuth out of the box.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
              <Key className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">API Key Generation</h3>
            <p className="text-gray-600">
              Generate and manage secure API keys for your users&apos; integrations.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="h-12 w-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">User Management</h3>
            <p className="text-gray-600">
              Full dashboard to view and manage all your users in one place.
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mb-12">One plan, everything included</p>
          
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border-2 border-violet-200 p-8">
            <div className="text-violet-600 font-semibold mb-2">Pro Plan</div>
            <div className="flex items-baseline justify-center gap-1 mb-6">
              <span className="text-5xl font-bold">$19</span>
              <span className="text-gray-500">/month</span>
            </div>
            <ul className="space-y-3 text-left mb-8">
              {[
                "Unlimited users",
                "Email/password auth",
                "Google & GitHub OAuth",
                "JWT tokens",
                "API key generation",
                "User management dashboard",
                "99.9% uptime SLA",
                "Priority support",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link href="/register">
              <Button className="w-full" size="lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-20 border-t">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-violet-600" />
            <span className="font-semibold">VibeAuth</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 VibeAuth. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
