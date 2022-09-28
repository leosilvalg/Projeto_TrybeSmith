import { Request, Response, NextFunction } from 'express';

const USERNAME_VALIDATION = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (username.length <= 2) {
    return res.status(422)
      .json({ message: '"username" length must be at least 3 characters long' });
  }

  if ((typeof (username) !== 'string')) {
    return res.status(422).json({ message: '"username" must be a string' });
  }

  next();
};

const CLASSE_VALIDATION = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;

  if (!classe) {
    return res.status(400).json({ message: '"classe" is required' });
  }

  if (classe.length <= 2) {
    return res.status(422).json({ message: '"classe" length must be at least 3 characters long' });
  }

  if ((typeof (classe) !== 'string')) {
    return res.status(422).json({ message: '"classe" must be a string' });
  }

  next();
};

function correction(value: unknown): boolean {
  return (typeof (value) !== 'number');
}

const LEVEL_VALIDATION = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;

  if (!level && correction(level)) {
    return res.status(400).json({ message: '"level" is required' });
  }
 
  if (correction(level)) {
    return res.status(422).json({ message: '"level" must be a number' });
  }

  if (level <= 0) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }

  next();
};

const PASSWORD_VALIDATION = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password.length < 8) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }

  if ((typeof (password) !== 'string')) {
    return res.status(422).json({ message: '"password" must be a string' });
  }

  next();
};

export default {
  USERNAME_VALIDATION,
  CLASSE_VALIDATION,
  LEVEL_VALIDATION,
  PASSWORD_VALIDATION,
};