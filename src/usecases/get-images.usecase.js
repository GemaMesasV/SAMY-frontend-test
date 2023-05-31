import { ImagesRepository } from "../repositories/images.repository";

const IMAGES_PER_PAGE = 6;

export class GetImagesUseCase {
  static async execute(page = 1) {
    const repository = new ImagesRepository();
    const images = await repository.getImages();
    return images.slice((page - 1) * IMAGES_PER_PAGE, page * IMAGES_PER_PAGE);
  }
}
