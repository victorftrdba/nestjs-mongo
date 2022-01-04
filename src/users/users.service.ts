import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {
  }

  async create(createUserDto: CreateUserDto) {
    const result = await new this.userModel(createUserDto).save();
    return result.id;
  }

  async findAll() {
    const result = await this.userModel.find();
    return result;
  }

  async findOne(id: string) {
    const result = await this.userModel.findById(id);
    return result;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const result = await this.userModel.updateOne({ _id: id }, updateUserDto);
    return result;
  }

  async remove(id: string) {
    const result = await this.userModel.deleteOne({ _id: id });
    return result;
  }
}
