import { Cursor } from "../../entities";

export namespace GetCursorState {
  export type Response = Cursor;
}

export interface GetCursorState {
  execute(): GetCursorState.Response;
}

export interface GetCursorRepository {
  get(): GetCursorState.Response;
}
