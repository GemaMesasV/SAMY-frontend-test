import axios from "axios";

export class ImagesRepository {
  async getAllImages() {
    return await (
      await axios.get("http://localhost:3100/images")
    ).data;
  }

  async getSearchImages(search) {
    return await (
      await axios.get(`http://localhost:3100/images?search=${search}`)
    ).data;
  }

  async likeImage(id) {
    return await (
      await axios.post(`http://localhost:3100/images/${id}/likes`)
    ).status;
  }
}
