import { Injectable } from '@nestjs/common';
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

// create (CreateUserDto: CreateUserDto){
//   return this.userRepository.save(CreateUserDto);
// }

//   async findOneByEmail(email: string): Promise<User | undefined> {
//     return this.userRepository.findOne({ where: { user_email: email } });
//   }
  
  async findAllUser () {
    const users = await this.userRepository.find({ 
      // select:{ user_name: true, user_lastname: true }
    });
  // console.log(users)
    return users
}
}