import axios from "axios";
import type { User } from "../types/type";
const base_url = import.meta.env.VITE_BASE_URL;
const api_key = import.meta.env.VITE_API_KEY;

export async function register(user: User) {
  const result = await axios.post(
    `${base_url}/accounts:signUp?key=${api_key}`,
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return result;
}

export async function login(user: User) {
  const result = await axios.post(
    `${base_url}/accounts:signInWithPassword?key=${api_key}`,
    user,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return result;
}
