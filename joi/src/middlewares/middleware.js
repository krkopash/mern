export const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, {abortEarly: false});

  if (error) {
    return res.json({message: "Validation Error",
      errors: error.details.map((err) => err.message)
    });
  }
  next();
};