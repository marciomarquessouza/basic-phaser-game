import { ItemPhaser } from "../../../api";
import { STAR } from "../../../constants";
import { DisabeItemUseCase } from "../../../usecases";
import { OverlapCallback } from "../../adapters";

const makeDisableItem = () => {
  const disableItemAdapter = new ItemPhaser();
  return new DisabeItemUseCase(disableItemAdapter);
};

const disableItem = makeDisableItem();

export const disableItemCallback: OverlapCallback = (_, itemName) =>
  disableItem.execute({ itemName, groupName: STAR });
