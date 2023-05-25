import axios from "axios";

export class ImagesRepository {
  async getAllImages() {
    return await (
      await axios.get("http://localhost:3100/images")
    ).data;
  }
}
