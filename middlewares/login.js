const emailCheck = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  if (!email || !emailRegex.test(email)) {
  return res.status(400).json(
    { message: 'Some required fields are missing' },
);
}
  next();
};
const passwordCheck = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length < 6) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};
const passwordAndEmailCheck = (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email) && !password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};
module.exports = { emailCheck, passwordCheck, passwordAndEmailCheck };