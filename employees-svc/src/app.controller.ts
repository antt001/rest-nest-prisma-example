import { Controller, Get } from '@nestjs/common';
import { AppService, StatusResponse } from './app.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  @ApiResponse({ status: 200, type: StatusResponse })
  getStatus(): StatusResponse {
    return this.appService.getStatus();
  }
}
