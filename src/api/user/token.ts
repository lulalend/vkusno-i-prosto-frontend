export const getLogin = (token: string): string => {
  const payload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(payload));

  return decodedPayload.sub;
};

export const getUsername = (token: string | null): string => {
  if (!token) {
    return 'Потеряно :(';
  }

  const payload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(payload));

  return decodedPayload.username || '-';
};