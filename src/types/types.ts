export type Recipe = {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  steps: string[];
  videoLink: string;
  showUsername: boolean;
  ownerUsername: string;
};

export type RecipeForUpdate = Omit<Recipe, 'ownerUsername'>;

export type RecipeForCreate = Omit<Recipe, 'id' | 'ownerUsername'>;

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
