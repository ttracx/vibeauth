import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Key, Shield, Activity } from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();
  
  // Get stats
  const [userCount, apiKeyCount] = await Promise.all([
    prisma.user.count(),
    prisma.apiKey.count({ where: { userId: session?.user?.id } }),
  ]);

  const stats = [
    {
      title: "Total Users",
      value: userCount,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Your API Keys",
      value: apiKeyCount,
      icon: Key,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Auth Methods",
      value: 3,
      icon: Shield,
      color: "text-violet-600",
      bg: "bg-violet-100",
    },
    {
      title: "Status",
      value: "Active",
      icon: Activity,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Welcome back, {session?.user?.name || "there"}! Here&apos;s an overview of your account.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              <div className={`h-8 w-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <a
              href="/dashboard/api-keys"
              className="block p-4 rounded-lg border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Key className="h-5 w-5 text-violet-600" />
                <div>
                  <p className="font-medium">Generate API Key</p>
                  <p className="text-sm text-gray-500">Create a new API key for integrations</p>
                </div>
              </div>
            </a>
            <a
              href="/dashboard/users"
              className="block p-4 rounded-lg border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-violet-600" />
                <div>
                  <p className="font-medium">Manage Users</p>
                  <p className="text-sm text-gray-500">View and manage all users</p>
                </div>
              </div>
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs font-bold">✓</span>
                </div>
                <div>
                  <p className="font-medium">Create your account</p>
                  <p className="text-sm text-gray-500">You&apos;re signed in and ready to go</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-violet-600 text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium">Generate an API key</p>
                  <p className="text-sm text-gray-500">Create keys for your applications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gray-600 text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium">Integrate with your app</p>
                  <p className="text-sm text-gray-500">Use our SDK or REST API</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
