import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setBaseUrl, setDefaultHeaders } from "@coralblack/flax";
import { LoLang } from "../../consts/common";
import { CreateAuthTokenResponse } from "../../dto/auth";

// Set baseUrl
setBaseUrl(process.env.REACT_APP_SERVICE_HOST || "http://127.0.0.1");

export interface SessionState {
  token: string | null;
  expiryAt: Date | null;
}

export const SESSION_KEY = "ff14-party-helper:auth";
const stored = localStorage.getItem(SESSION_KEY);

const initialState: SessionState = Object.assign(
  {
    token: null,
    expiryAt: null,
  },
  stored ? JSON.parse(stored) : {}
);

const configurableDefaultHeaders = (headers?: { [key: string]: string }) =>
  Object.assign(
    {
      Authorization: initialState.token,
      Lang: LoLang.KO,
    },
    headers || {}
  ) as { [key: string]: string };

setDefaultHeaders(configurableDefaultHeaders());

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    signIn(
      state,
      action: PayloadAction<{ redirectTo: string } & CreateAuthTokenResponse>
    ) {
      state.token = action.payload.authToken.token;
      state.expiryAt = action.payload.authToken.expiryAt;

      localStorage.setItem(
        SESSION_KEY,
        JSON.stringify({ ...state, redirectTo: undefined })
      );

      if (action.payload.redirectTo) {
        document.location.href = action.payload.redirectTo;
      } else {
        document.location.reload();
      }
    },
    signOut(state) {
      state.token = null;
      state.expiryAt = null;

      localStorage.removeItem(SESSION_KEY);
      document.location.href = "/";
    },
  },
});
