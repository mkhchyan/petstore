export const url = "https://petstore.swagger.io";

export async function FetchData(method: any, data: any, api: any) {
  const requestOptions = {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url + api, requestOptions);

    const json = await response.json();

    if (json.message) throw new Error(json.message);

    return json;
  } catch (err: any) {
    return err.message;
  }
}

export async function FetchDataGet(username: string, api: any, name: any) {
  const response = await fetch(url + api + `?${name}=${username}`);

  const json = await response.json();

  return json;
}

export const isDataValid = (user: any) => {
  return Object.values(user).every((field) => {
    return field;
  });
};