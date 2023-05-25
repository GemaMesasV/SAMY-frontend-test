import { ImagesRepository } from "../repositories/images.repository";

export class SearchImagesUseCase {
  static async execute(search) {
    const repository = new ImagesRepository();
    const images = await repository.getSearchImages(search);
    return images.filter((image) =>
      image.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
