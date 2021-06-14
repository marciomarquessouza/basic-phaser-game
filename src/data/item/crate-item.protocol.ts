import { Items } from "../../entities";

export namespace CreateItem {
  export type Params = Items;
}

export interface CreateItem {
  execute(data: CreateItem.Params): void;
}

export interface CreateItemRepository {
  create(itemData: CreateItem.Params): void;
}
