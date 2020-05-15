module.exports = (req, res, next) => {
  /**
   *Handle Login request
   */
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "admin" && req.body.password === "admin") {
      res.status(200).json({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiTmljayBKb2huIiwiZW1haWwiOiJuaWNrLmpvaG5AZ21haWwuY29tIiwicm9sZXMiOlsiYWRtaW4iLCJidXNpbmVzc3MiXSwiaWF0IjoxNTE2MjM5MDIyfQ.FNZpP0GiwCQLxFTN-KMtq7PEeDm6d09TQwfLPpjxXdo",
      });
    } else {
      res.status(401).json({ message: "Incorrect username/password" });
    }
  } else {
    next();
  }
};
