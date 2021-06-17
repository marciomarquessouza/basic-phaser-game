import { CursorPhaser } from "../../../api";
import { GetCursorStateUseCase } from "../../../usecases";

const makeGetCursorState = () => {
  const getCursorAdapter = new CursorPhaser();
  const getCursorState = new GetCursorStateUseCase(getCursorAdapter);
  return getCursorState;
};

export const getCursorState = makeGetCursorState();
