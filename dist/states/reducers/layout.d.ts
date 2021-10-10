export interface LayoutState {
    navigatedJustBefore: number;
}
export declare const layoutSlice: import("@reduxjs/toolkit").Slice<LayoutState, {
    navigated(state: import("immer/dist/internal").WritableDraft<LayoutState>): void;
}, "layout">;
