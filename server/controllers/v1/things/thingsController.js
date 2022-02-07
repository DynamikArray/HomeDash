async function home(req, res, next) {
  try {
    res.send("Things and Stuff");
    //
  } catch (e) {
    //correctly json handle this error message
    logger.error("thingsController | home | error=" + e);
  } finally {
    //
  }
}

module.exports = { home };
