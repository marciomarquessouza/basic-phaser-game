import { CursorPhaser } from "../../../api";
import { CreateCursorUseCase } from "../../../usecases";

const makeCursor = () => {
  const createCursorRepository = new CursorPhaser();
  const createCursor = new CreateCursorUseCase(createCursorRepository);
  return createCursor;
};

export const createCursor = makeCursor();
