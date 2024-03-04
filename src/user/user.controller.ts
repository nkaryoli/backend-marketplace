import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAllUser() {
    return this.userService.findAllUser();
  }

  @Get(':user_id')
  findAvailableCarrier(@Param('user_id') user_id:number){
  return this.userService.findOneByEmail(user_id);
  }
}


