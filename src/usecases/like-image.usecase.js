import { ImagesRepository } from "../repositories/images.repository";

export class LikeImageUseCase {
  static async execute(id, images) {
    const repository = new ImagesRepository();
    const likeStatus = await repository.likeImage(id);
    return likeStatus === 204
      ? images.map((image) =>
          image.id === id
            ? image.liked === false
              ? { ...image, likes_count: image.likes_count + 1, liked: true }
              : { ...image, likes_count: image.likes_count - 1, liked: false }
            : image
        )
      : images;
  }
}
