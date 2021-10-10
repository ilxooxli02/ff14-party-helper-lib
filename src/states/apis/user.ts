import { FxApiRequest } from "@coralblack/flax";
import { GetUserInfoResponse } from "../../dto/user";
import { ApiErrorResponse } from "../../typings/api";

const getUserInfo: FxApiRequest<GetUserInfoResponse, ApiErrorResponse> = {
  method: "GET",
  url: "/user",
  reducer: (resp) => resp,
  errReducer: (resp) => resp,
};

export const userApi = { getUserInfo };
