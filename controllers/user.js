const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis();

const baseUrl = process.env.USERAPI;

class Controller {
  static async findAll() {
    try {
      const users = JSON.parse(await redis.get("users"));
      if (users) {
        return users;
      } else {
        const { data } = await axios({
          url: baseUrl,
          method: "GET",
        });
        redis.set("users", JSON.stringify(data));
        return data;
      }
    } catch {
      return console.log("error findAll : ", error);
    }
  }
}

module.exports = Controller;
