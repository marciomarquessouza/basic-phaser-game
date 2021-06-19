import { STAR } from "../../constants";
import { makeDisableItem } from "../factories";
import { OverlapCallback } from "./overlap-callback.adapter";

const disableItem = makeDisableItem();

export const disableItemCallback: OverlapCallback = (_, itemName) =>
  disableItem.execute({ itemName, groupName: STAR });
