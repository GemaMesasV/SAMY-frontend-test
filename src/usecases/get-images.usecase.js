import { ImagesRepository } from "../repositories/images.repository";

export class GetImagesUseCase {
  static async execute(page = 1) {
    const repository = new ImagesRepository();
    const images = await repository.getImages(page);
    return images.slice(
      (page - 1) * `${import.meta.env.VITE_IMAGES_PER_PAGE}`,
      page * `${import.meta.env.VITE_IMAGES_PER_PAGE}`
    );
  }
}
