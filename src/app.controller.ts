import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('Task')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tasks')
  getHello(): string {
    return this.appService.getHello();
  }
}
