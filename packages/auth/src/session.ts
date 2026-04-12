export type AppSession = {
  user: {
    id?: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
};

export function getSessionUserId(session: AppSession | null | undefined) {
  return session?.user.id ?? null;
}
