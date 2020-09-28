import { SOME_CONST } from "./consts";

const someAction = (payload) => ({
  type: SOME_CONST,
  payload,
});

export { someAction };
