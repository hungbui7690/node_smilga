const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error); // ! chỗ này vẫn chưa xong, phải học xong custom error mới gắn vô
    }
  };
};

module.exports = asyncWrapper;
