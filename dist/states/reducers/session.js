"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionSlice = exports.SESSION_KEY = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const flax_1 = require("@coralblack/flax");
const common_1 = require("../../consts/common");
// Set baseUrl
(0, flax_1.setBaseUrl)(process.env.REACT_APP_SERVICE_HOST || "http://127.0.0.1");
exports.SESSION_KEY = "ff14-party-helper:auth";
const stored = localStorage.getItem(exports.SESSION_KEY);
const initialState = Object.assign({
    token: null,
    expiryAt: null,
}, stored ? JSON.parse(stored) : {});
const configurableDefaultHeaders = (headers) => Object.assign({
    Authorization: initialState.token,
    Lang: common_1.LoLang.KO,
}, headers || {});
(0, flax_1.setDefaultHeaders)(configurableDefaultHeaders());
exports.sessionSlice = (0, toolkit_1.createSlice)({
    name: "session",
    initialState,
    reducers: {
        signIn(state, action) {
            state.token = action.payload.authToken.token;
            state.expiryAt = action.payload.authToken.expiryAt;
            localStorage.setItem(exports.SESSION_KEY, JSON.stringify({ ...state, redirectTo: undefined }));
            if (action.payload.redirectTo) {
                document.location.href = action.payload.redirectTo;
            }
            else {
                document.location.reload();
            }
        },
        signOut(state) {
            state.token = null;
            state.expiryAt = null;
            localStorage.removeItem(exports.SESSION_KEY);
            document.location.href = "/";
        },
    },
});
//# sourceMappingURL=session.js.map