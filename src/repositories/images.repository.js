import axios from "axios";

export class ImagesRepository {
  async getImages(page) {
    return await (
      await axios.get(`http://localhost:3100/images?page=${page}`)
    ).data;
  }

  async getSearchImages(search, page) {
    return await (
      await axios.get(
        `http://localhost:3100/images?search=${search}&page=${page}`
      )
    ).data;
  }

  async likeImage(id) {
    return await (
      await axios.post(`http://localhost:3100/images/${id}/likes`)
    ).status;
  }
}
