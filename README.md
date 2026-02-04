# VibeAuth

Simple authentication service for SaaS applications.

![VibeAuth](https://img.shields.io/badge/VibeAuth-Authentication-violet)

## Features

- 🔐 **Email/Password Authentication** - Secure credential-based login
- 🌐 **OAuth Integration** - Google and GitHub single sign-on
- 🎫 **JWT Tokens** - Stateless session management
- 👥 **User Management Dashboard** - View and manage all users
- 🔑 **API Key Generation** - Create and manage API keys for integrations

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Database**: Neon PostgreSQL (Serverless)
- **ORM**: Prisma 7
- **Auth**: NextAuth.js v5
- **Styling**: Tailwind CSS
- **UI**: Radix UI + Lucide Icons

## Pricing

**$19/month** - Everything included:
- Unlimited users
- All authentication methods
- API key management
- User dashboard
- 99.9% uptime SLA

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)
- PostgreSQL database (or Neon account)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ttracx/vibeauth.git
   cd vibeauth
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. Configure your `.env`:
   ```env
   DATABASE_URL="your-postgresql-connection-string"
   AUTH_SECRET="your-random-secret"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   ```

5. Push database schema:
   ```bash
   pnpm prisma db push
   ```

6. Start development server:
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see VibeAuth in action.

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/auth/[...nextauth]` | GET/POST | NextAuth.js handlers |
| `/api/auth/register` | POST | User registration |
| `/api/keys` | GET | List API keys |
| `/api/keys` | POST | Create API key |
| `/api/keys?id=` | DELETE | Delete API key |
| `/api/users` | GET | List all users |

## Project Structure

```
vibeauth/
├── prisma/
│   └── schema.prisma      # Database schema
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   ├── dashboard/     # Dashboard pages
│   │   ├── login/         # Login page
│   │   └── register/      # Registration page
│   ├── components/
│   │   ├── auth/          # Auth components
│   │   └── ui/            # UI components
│   └── lib/
│       ├── auth.ts        # NextAuth config
│       ├── db.ts          # Prisma client
│       └── utils.ts       # Utility functions
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ttracx/vibeauth)

## License

MIT © 2025 VibeCaaS
