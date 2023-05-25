import { ImagesRepository } from "../repositories/images.repository";

export class AllImagesUseCase {
  static async execute() {
    const repository = new ImagesRepository();
    const images = await repository.getAllImages();
    return images;
  }
}
