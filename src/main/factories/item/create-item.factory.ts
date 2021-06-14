import { ItemPhaser } from "../../../api";
import { CreateItemUseCase } from "../../../usecases";

export const makeCreateItem = () => {
  const createItemRepository = new ItemPhaser();
  const createItem = new CreateItemUseCase(createItemRepository);
  return createItem;
};

export const createItem = makeCreateItem();
