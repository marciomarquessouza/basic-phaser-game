import { CursorPhaser } from "../../../api";
import { GetCursorStateUseCase } from "../../../usecases";

const makeGetCursorState = () => {
  const getCursorRepository = new CursorPhaser();
  const getCursorState = new GetCursorStateUseCase(getCursorRepository);
  return getCursorState;
};

export const getCursorState = makeGetCursorState();
