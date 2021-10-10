import { FxApiRequest } from "@coralblack/flax";
import { GetUserInfoResponse } from "../../dto/user";
import { ApiErrorResponse } from "../../typings/api";
export declare const userApi: {
    getUserInfo: FxApiRequest<GetUserInfoResponse, ApiErrorResponse<undefined>, GetUserInfoResponse, ApiErrorResponse<undefined>>;
};
