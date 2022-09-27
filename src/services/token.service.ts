import jwt from 'jsonwebtoken';

const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = 'secret';

const TOKEN_SERVICE = {
  createToken: (claims: string) => {
    const payload = { payloas: claims };
    const token = jwt.sign(payload, secret, jwtConfig);
    return token;
  },
};

export default TOKEN_SERVICE;