const URL = "http://localhost:3000";

export const getServices = async () => {
  const response = await fetch(`${URL}/api/services`);
  return await response.json();
};

export const registerUser = async (credentials) => {
  const request = await fetch(`${URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const result = await request.json();

  return result;
};

export const loginUser = async (credentials) => {
  const request = await fetch(`${URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const result = await request.json();

  return result;
};

export const getProfile = async (token) => {
  const response = await fetch(`${URL}/api/users/profile`, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};

export const getMyAppointments = async (token) => {
  const response = await fetch(`${URL}/api/appointments/user`, {
    method: "GET",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
};

export const updateProfile = async (changes, token) => {
  const response = await fetch(`${URL}/api/users/profile`, {
    method: "PUT",
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(changes),
  });

  return await response.json();
};
