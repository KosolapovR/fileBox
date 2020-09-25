import { SOME_CONST } from "./consts";

export const someAction = (payload) => ({
  type: SOME_CONST,
  payload,
});

export { someAction };
