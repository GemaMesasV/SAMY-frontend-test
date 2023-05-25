import { ImagesRepository } from "../src/repositories/images.repository";
import { SearchImagesUseCase } from "../src/usecases/search-images.usecase";

import { IMAGES } from "./fixtures/images";

jest.mock("../src/repositories/images.repository");

describe("Search images use case", () => {
  beforeEach(() => {
    ImagesRepository.mockClear();
  });

  it("should get filtered images", async () => {
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
});
