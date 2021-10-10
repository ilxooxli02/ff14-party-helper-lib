export type AuthToken = {
  id: bigint;
  token: string;
  userId: bigint;
  expiryAt: Date;
  createdAt: Date;
};
