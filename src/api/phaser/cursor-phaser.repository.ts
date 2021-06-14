import { CreateCursorRepository, GetCursorRepository } from "../../data";
import { Cursor } from "../../entities";
import { cursorHelper } from "./helper";

export class CursorPhaser
  implements CreateCursorRepository, GetCursorRepository
{
  create(): void {
    cursorHelper.createCursor();
  }
  get(): Cursor {
    return cursorHelper.getCursorState();
  }
}
