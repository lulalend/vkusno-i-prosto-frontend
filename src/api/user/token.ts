export const getLogin = (token: string): string => {
  const payload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(payload));

  return decodedPayload.sub;
};