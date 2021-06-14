export namespace LoadAsset {
  export type Params = {
    name: string;
    path: string;
    frame?: {
      frameWidth: number;
      frameHeight: number;
    };
  };
}

export interface LoadAsset {
  execute(asset: LoadAsset.Params): void;
}

export interface LoadAssetRepository {
  loadAsset(asset: LoadAsset.Params): void;
}
