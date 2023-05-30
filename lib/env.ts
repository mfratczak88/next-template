import invariant from 'tiny-invariant';

export const githubSecrets = () => {
  invariant(process.env.GITHUB_ID);
  invariant(process.env.GITHUB_SECRET);
  return {
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
  };
};

export const smtpSecrets = () => {
  invariant(process.env.EMAIL_SERVER);
  invariant(process.env.EMAIL_FROM);
  return {
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM,
  };
};
