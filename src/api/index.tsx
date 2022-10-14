import { FetchData } from "../config";

export async function RegisterUser(user: any) {
  const result = await FetchData("POST", user, "/api/v2/user");
  return result;
}

export async function LoginUser(user: any) {
  const result = await FetchData("GET", user, "/api/v2/user/login");
  return result;
}

export async function UpdateUser(user: any) {
  const result = await FetchData("PUT", user, "/api/v2/user/{username}");
  return result;
}