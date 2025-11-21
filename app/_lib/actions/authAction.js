"use server";

import { auth } from "../auth";
import { ServerActionError } from "../handleError";

export async function signUpAction({ email, password }) {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
      },
    });
    return { success: true };
  } catch (err) {
    return new ServerActionError(err.message).genericError();
  }
}
export async function signInAction({ email, password }) {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    // on success redirect to the admin dashboard
    return { success: true };
  } catch (err) {
    return new ServerActionError(err.message).genericError();
  }
}
