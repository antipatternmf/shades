export function makeOptionsWithAuthHeader(userEmail: string) {
  return { headers: { Authorization: userEmail } };
}
