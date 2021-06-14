import { LoadAsset, LoadAssetRepository } from "../../data";

export class LoadAssetUseCase implements LoadAsset {
  constructor(private loadAssetRepository: LoadAssetRepository) {}
  execute(asset: LoadAsset.Params): void {
    this.loadAssetRepository.loadAsset(asset);
  }
}
