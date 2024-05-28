import { NextFunction, Request, Response } from 'express';

const createUser = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(201).json({
      code: 201,
      message: 'User created Successfully!',
    });
  } catch (error) {
    next(error);
  }
};

const updateUserProfile = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(201).json({
      code: 201,
      message: 'User created Successfully!',
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(201).json({
      code: 201,
      message: 'User created Successfully!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createUser,
  updateUserProfile,
  deleteUser,
};
