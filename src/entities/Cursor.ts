export type keyActions = {
  isDown: boolean;
};

export class Cursor {
  left: keyActions;
  right: keyActions;
  up: keyActions;
  down: keyActions;
}
