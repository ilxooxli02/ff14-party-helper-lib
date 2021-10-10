"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.layoutSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = { navigatedJustBefore: 0 };
exports.layoutSlice = (0, toolkit_1.createSlice)({
    name: "layout",
    initialState,
    reducers: {
        navigated(state) {
            state.navigatedJustBefore = state.navigatedJustBefore + 1;
        },
    },
});
//# sourceMappingURL=layout.js.map