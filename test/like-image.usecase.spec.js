import { ImagesRepository } from "../src/repositories/images.repository";
import { LikeImageUseCase } from "../src/usecases/like-image.usecase";

import { IMAGES } from "./fixtures/images";

jest.mock("../src/repositories/images.repository");

describe("Like image use case", () => {
  beforeEach(() => {
    ImagesRepository.mockClear();
  });

  it("should get images with added like", async () => {
    ImagesRepository.mockImplementation(() => {
      return {
        likeImage: () => 204,
      };
    });

    const result = await LikeImageUseCase.execute(2, IMAGES);

    expect(result.length).toBe(IMAGES.length);
    expect(result[0].liked).toBe(true);
    expect(result[0].likes_count).toBe(2);
  });
  it("should get images removed like", async () => {
    ImagesRepository.mockImplementation(() => {
      return {
        likeImage: () => 204,
      };
    });

    const result = await LikeImageUseCase.execute(3, IMAGES);

    expect(result.length).toBe(IMAGES.length);
    expect(result[0].liked).toBe(false);
    expect(result[0].likes_count).toBe(1);
  });
});
