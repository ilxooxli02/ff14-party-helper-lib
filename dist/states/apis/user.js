"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userApi = void 0;
const getUserInfo = {
    method: "GET",
    url: "/user",
    reducer: (resp) => resp,
    errReducer: (resp) => resp,
};
exports.userApi = { getUserInfo };
//# sourceMappingURL=user.js.map