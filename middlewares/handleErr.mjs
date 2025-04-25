export function globalErr(err, req, res, next) {
  res.status(500).json({ msg: err.message });
}
