import { ImagesRepository } from "../repositories/images.repository";

export class SearchImagesUseCase {
  static async execute(search, page = 1) {
    const repository = new ImagesRepository();
    const images = await repository.getSearchImages(search, page);
    return images
      .filter(
        (image) =>
          image.title.toLowerCase().includes(search.toLowerCase()) ||
          image.author.toLowerCase().includes(search.toLowerCase())
      )
      .slice(
        (page - 1) * `${import.meta.env.VITE_IMAGES_PER_PAGE}`,
        page * `${import.meta.env.VITE_IMAGES_PER_PAGE}`
      );
  }
}
