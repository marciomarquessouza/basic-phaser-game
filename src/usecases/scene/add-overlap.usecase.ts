import { AddOverlap, AddOverlapRepository } from "../../data";

export class AddOverlapUseCase implements AddOverlap {
  constructor(private addOverlapRepository: AddOverlapRepository) {}

  execute(overlapData: AddOverlap.Params): void {
    this.addOverlapRepository.addOverlap(overlapData);
  }
}
