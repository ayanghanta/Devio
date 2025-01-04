// const BASE_URL = `http://localhost:8000/api/v1/users`;
const BASE_URL = `https://devio-backend-rzqx.onrender.com/api/v1/users`;

export async function singup({ name, email, password, confirmPassword }) {
  try {
    const res = await fetch(`${BASE_URL}/singup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ name, email, password, confirmPassword }),
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.message);

    return data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function login({ email, password }) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // This line is crucial for cookies
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.message);

    return data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function logout() {
  try {
    const res = await fetch(`${BASE_URL}/logout`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.message);

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function forgotPassword(email) {
  try {
    const res = await fetch(`${BASE_URL}/forgotPassword`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // This line is crucial for cookies
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.message);

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getUser() {
  try {
    const res = await fetch(`${BASE_URL}/isAuthenticated`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await res.json();

    if (!data.ok) throw new Error(data.message);

    return data.data;
  } catch (err) {
    throw new Error(err.message);
  }
}
