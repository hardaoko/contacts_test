import { baseUrl, testUrl } from "../utils/constants";

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
