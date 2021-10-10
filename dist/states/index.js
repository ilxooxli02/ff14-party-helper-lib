"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const layout_1 = require("./reducers/layout");
const session_1 = require("./reducers/session");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        layout: layout_1.layoutSlice.reducer,
        session: session_1.sessionSlice.reducer,
    },
});
//# sourceMappingURL=index.js.map