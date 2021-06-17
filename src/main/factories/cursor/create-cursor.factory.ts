import { CursorPhaser } from "../../../api";
import { CreateCursorUseCase } from "../../../usecases";

const makeCursor = () => {
  const createCursorAdapter = new CursorPhaser();
  const createCursor = new CreateCursorUseCase(createCursorAdapter);
  return createCursor;
};

export const createCursor = makeCursor();
