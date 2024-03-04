import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    [x: string]: any;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

create (CreateUserDto: CreateUserDto){
  return this.userRepository.save(CreateUserDto);
}

  async findOneByEmail(user_email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { user_email: user_email } });
    if(!user){
      throw new HttpException(`No User found`, 404);
    }
    return user;
  }
  
  async findAllUser () {
    const users = await this.userRepository.find({ 
    });
    return users
}
}