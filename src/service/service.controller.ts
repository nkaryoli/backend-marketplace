import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { Request } from 'express';
import { SearchServiceDto } from './dto/searchService.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  // @Get()
  // findAvailableCarrier(@Query("origin") origin: string, ){
  // return this.serviceService.findAvailableCarrier(searchService);
  // }
  
  @Get()
  findAvailableCarrier(@Req() request: Request ){
    console.log(request.query)
  return this.serviceService.findAvailableCarrier(request.query as unknown as SearchServiceDto);
  }

  @Post()
  createService(@Body() createService: CreateServiceDto){
  return this.serviceService.createService(createService);
  }

  @Get(':clientId')
  listServices(@Param('clientId') clientId: number){
    return this.serviceService.listServices(clientId);
  }

  @Put(':serviceId')
  cancelServcice(@Param('serviceId') serviceId: number){
    return this.serviceService.cancelService(serviceId);
  }

}
