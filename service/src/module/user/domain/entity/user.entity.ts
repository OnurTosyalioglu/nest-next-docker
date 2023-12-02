import { ObjectId } from 'mongoose';

export interface IUserEntity {
  _id?: ObjectId;
  email?: string;
  password?: string;
  authData?: string;
  refreshToken?: string;
  verified?: boolean;
  verifyCode?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class UserEntity implements IUserEntity {
  _id?: ObjectId;
  email?: string;
  password?: string;
  authData?: string;
  refreshToken?: string;
  verified?: boolean;
  verifyCode?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor({
    _id,
    email,
    password,
    authData,
    refreshToken,
    verified,
    verifyCode,
    createdAt,
    updatedAt,
  }: {
    _id?: ObjectId;
    email?: string;
    password?: string;
    authData?: string;
    refreshToken?: string;
    verified?: boolean;
    verifyCode?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this._id = _id;
    this.email = email;
    this.password = password;
    this.authData = authData;
    this.verified = verified;
    this.verifyCode = verifyCode;
    this.refreshToken = refreshToken;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
