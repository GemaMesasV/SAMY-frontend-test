import { ImagesRepository } from "../src/repositories/images.repository";
import { AllImagesUseCase } from "../src/usecases/all-images.usecase";

import { IMAGES } from "./fixtures/images";

jest.mock("../src/repositories/images.repository");

describe("All images use case", () => {
  beforeEach(() => {
    ImagesRepository.mockClear();
  });

  it("should get all images", async () => {
    ImagesRepository.mockImplementation(() => {
      return {
        getAllImages: () => IMAGES,
      };
    });

    const result = await AllImagesUseCase.execute();

    expect(result.length).toBe(IMAGES.length);
    expect(result[0].title).toBe(IMAGES[0].title);
    expect(result[0].author).toBe(IMAGES[0].author);
    expect(result[0].price).toBe(IMAGES[0].price);
    expect(result[0].id).toBe(IMAGES[0].id);
  });
});
