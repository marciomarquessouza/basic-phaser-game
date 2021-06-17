import { ItemPhaser, UniqueIdentifierUUID } from "../../../api";
import { CreateItemUseCase } from "../../../usecases";

export const makeCreateItem = () => {
  const createItemAdapter = new ItemPhaser();
  const createIdAdapter = new UniqueIdentifierUUID();
  return new CreateItemUseCase(createItemAdapter, createIdAdapter);
};

export const createItem = makeCreateItem();
