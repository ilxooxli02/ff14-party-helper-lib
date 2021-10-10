import { PayloadAction } from "@reduxjs/toolkit";
import { CreateAuthTokenResponse } from "../../dto/auth";
export interface SessionState {
    token: string | null;
    expiryAt: Date | null;
}
export declare const SESSION_KEY = "ff14-party-helper:auth";
export declare const sessionSlice: import("@reduxjs/toolkit").Slice<SessionState, {
    signIn(state: import("immer/dist/internal").WritableDraft<SessionState>, action: PayloadAction<{
        redirectTo: string;
    } & CreateAuthTokenResponse>): void;
    signOut(state: import("immer/dist/internal").WritableDraft<SessionState>): void;
}, "session">;
