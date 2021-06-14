import { SceneElement } from "../../entities";

export namespace AddCollider {
  export type Params = {
    object1: SceneElement;
    object2: SceneElement;
  };
}

export interface AddCollider {
  execute(collidersElements: AddCollider.Params): void;
}

export interface AddColliderRepository {
  add(colliders: AddCollider.Params): void;
}
