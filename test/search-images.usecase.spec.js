import { ImagesRepository } from "../src/repositories/images.repository";
import { SearchImagesUseCase } from "../src/usecases/search-images.usecase";

import { IMAGES } from "./fixtures/images";

jest.mock("../src/repositories/images.repository");

describe("Search images use case", () => {
  beforeEach(() => {
    ImagesRepository.mockClear();
  });

  it("should get filtered image", async () => {
    ImagesRepository.mockImplementation(() => {
      return {
        getSearchImages: () => IMAGES,
      };
    });

    const result = await SearchImagesUseCase.execute("Grey beach");

    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Grey beach");
    expect(result[0].author).toBe("Mary Robinette");
    expect(result[0].price).toBe(43);
    expect(result[0].id).toBe(2);
  });
  it("should get first page of filtered images", async () => {
    ImagesRepository.mockImplementation(() => {
      return {
        getSearchImages: () => IMAGES,
      };
    });

    const result = await SearchImagesUseCase.execute("y", 1);

    expect(result.length).toBe(6);
    expect(result[5].title).toBe("Yellow-ish");
    expect(result[5].author).toBe("Kameron Hurley");
    expect(result[5].price).toBe(11);
    expect(result[5].id).toBe(12);
  });
  it("should get second page of filtered images", async () => {
    ImagesRepository.mockImplementation(() => {
      return {
        getSearchImages: () => IMAGES,
      };
    });

    const result = await SearchImagesUseCase.execute("y", 2);

    expect(result.length).toBe(2);
    expect(result[0].title).toBe("Sky Escape");
    expect(result[0].author).toBe("Jo Walton");
    expect(result[0].price).toBe(95);
    expect(result[0].id).toBe(14);
  });
});
