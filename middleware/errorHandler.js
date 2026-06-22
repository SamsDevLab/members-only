function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;
  const msgArr = err.errors.map((error) => error.msg);

  res.status(statusCode).json({
    success: false,
    error: {
      status: statusCode,
      messages: msgArr,
    },
  });
}

module.exports = errorHandler;
