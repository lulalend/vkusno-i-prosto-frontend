export type Recipe = {
  id: string;
  name: string;
  image: string;
};

export type SignInResponse = {
  token: string;
  ttl: number;
};

export type SignUpRequest = {
  login: string;
  password: string;
  username: string;
};

export type SignInRequest = Omit<SignUpRequest, 'username'>;
