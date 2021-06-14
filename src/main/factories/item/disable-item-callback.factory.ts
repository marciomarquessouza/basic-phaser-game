import { ItemPhaser } from "../../../api";
import { STAR } from "../../../constants";
import { DisabeItemUseCase } from "../../../usecases";
import { OverlapCallback } from "../../adapters";

const makeDisableItem = () => {
  const disableItemRepository = new ItemPhaser();
  return new DisabeItemUseCase(disableItemRepository);
};

const disableItem = makeDisableItem();

export const disableItemCallback: OverlapCallback = (_, itemName) =>
  disableItem.execute({ itemName, groupName: STAR });
