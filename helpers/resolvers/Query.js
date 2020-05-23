const userController = require("../../controllers/user");

const Query = {
  users: userController.findAll,
};

module.exports = Query;
