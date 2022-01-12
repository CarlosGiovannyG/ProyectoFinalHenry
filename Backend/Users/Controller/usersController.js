


async function getUsers(req, res, next) {
      try {

          return res.send(
            'Soy el get'
        );
    } catch (error) {
        next(error);
    }
}

const addUser = async (req, res, next) => {
    try {

        return res.send(
          'Soy el post'
      );
  } catch (error) {
      next(error);
  }
}

async function getUserById(req, res, next) {
    try {
        

            return res.send(
              'Soy el get por id'
          );
      } catch (error) {
          next(error);
      }
  }





module.exports = {
    getUsers,
    getUserById,

    addUser,
};