"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myApi = void 0;
const getUserInfo = {
    method: "GET",
    url: "/my",
    reducer: (resp) => resp,
    errReducer: (resp) => resp,
};
exports.myApi = { getUserInfo };
//# sourceMappingURL=my.js.map