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

  @Get(':userId')
  findOneById(@Param('userId') userId:number){
  return this.userService.findOneById(userId);
  }
}


