import { Body, Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from './entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userEmail')
  findAvailableCarrier(@Body() userEmail:string){
  return this.userService.findOneByEmail(userEmail);
  }
}


