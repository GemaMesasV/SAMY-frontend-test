import { ImagesRepository } from "../src/repositories/images.repository";
import { GetImagesUseCase } from "../src/usecases/get-images.usecase";

import { IMAGES } from "./fixtures/images";

jest.mock("../src/repositories/images.repository");

describe("All images use case", () => {
  beforeEach(() => {
    ImagesRepository.mockClear();
  });

  it("should get first page of images", async () => {
    ImagesRepository.mockImplementation(() => {
      return {
        getImages: () => IMAGES,
      };
    });

    const result = await GetImagesUseCase.execute(1);

    expect(result.length).toBe(6);
    expect(result[0].title).toBe(IMAGES[0].title);
    expect(result[0].author).toBe(IMAGES[0].author);
    expect(result[0].price).toBe(IMAGES[0].price);
    expect(result[0].id).toBe(IMAGES[0].id);
  });
  it("should get second page of images", async () => {
    ImagesRepository.mockImplementation(() => {
      return {
        getImages: () => IMAGES,
      };
    });

    const result = await GetImagesUseCase.execute(2);

    expect(result.length).toBe(6);
    expect(result[0].title).toBe(IMAGES[6].title);
    expect(result[0].author).toBe(IMAGES[6].author);
    expect(result[0].price).toBe(IMAGES[6].price);
    expect(result[0].id).toBe(IMAGES[6].id);
  });
});
