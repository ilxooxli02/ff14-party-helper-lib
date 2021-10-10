export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    layout: import("./reducers/layout").LayoutState;
    session: import("./reducers/session").SessionState;
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    layout: import("./reducers/layout").LayoutState;
    session: import("./reducers/session").SessionState;
}, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<{
    layout: import("./reducers/layout").LayoutState;
    session: import("./reducers/session").SessionState;
}, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
