export function idGenerator(n) {
  let id = "";
  const key = "1234567890qwertyuiopasdfghjklzxcvbnm";
  for (let i = 0; i < n; i++) {
    id = id + key[Math.floor(Math.random() * key.length)];
    id = id.toUpperCase();
  }
  return id;
}
export const rootUrl =
  process.env.NODE_ENV === "production" ? "https://ls.webcouture.com.ng" : "";
