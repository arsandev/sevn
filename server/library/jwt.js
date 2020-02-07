import jwt from 'jsonwebtoken'

export default {
  sign(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXP
    })
  },
  verify(token) {
    return jwt.verify(token, process.env.JWT_SECRET)
  }
}
