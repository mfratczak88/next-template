import { githubSecrets, smtpSecrets } from '@/lib/env';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { NextAuthOptions, Session, getServerSession } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GithubProvider from 'next-auth/providers/github';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [GithubProvider(githubSecrets()), EmailProvider(smtpSecrets())],
  pages: {
    signIn: '/auth/login',
    verifyRequest: '/auth/verify-email',
  },
};

export const getUser = async () => {
  // middleware will fire in before this gets called.
  // If there's no session user will be redirected to auth anyway
  const { user } = (await getServerSession(authOptions)) as Session;
  return user;
};

export const getSession = () => getServerSession(authOptions);
