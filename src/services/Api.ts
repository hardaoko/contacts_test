import { baseUrl } from "../utils/constants";

export function checkResponse(response: Response) {
  if (!response.ok) {
    throw Error(response.statusText + " - " + response.status);
  } else {
    return response.json();
  }
}

export const loginRequest = async (login: string, password: string) => {
  const res = await fetch(`${baseUrl}/users?name=${login}&password=${password}`);
  return checkResponse(res);
};

export const contactsRequest = async () => {
  const res = await fetch(`${baseUrl}/contacts`);
  return checkResponse(res);
};

export const addContactRequest = async (name: string, description: string) => {
  const res = await fetch(`${baseUrl}/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      name: name,
      description: description,
    }),
  });
  return checkResponse(res);
};
