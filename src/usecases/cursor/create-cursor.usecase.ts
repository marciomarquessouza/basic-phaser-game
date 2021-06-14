import { CreateCursor, CreateCursorRepository } from "../../data/cursor";

export class CreateCursorUseCase implements CreateCursor {
  constructor(private createCursorRepository: CreateCursorRepository) {}

  execute(): void {
    this.createCursorRepository.create();
  }
}
