export type User = {
  id: number;
  name: string;
  email: string;
};

export type AuthContextValue = {
  user: User | null;
  authLoading: boolean;
  login: () => void;
  logout: () => void;
};
