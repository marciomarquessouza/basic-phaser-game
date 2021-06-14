import { GetCursorRepository, GetCursorState } from "../../data";
import { Cursor } from "../../entities";

export class GetCursorStateUseCase implements GetCursorState {
  constructor(private getCursorRepository: GetCursorRepository) {}
  execute(): Cursor {
    return this.getCursorRepository.get();
  }
}
