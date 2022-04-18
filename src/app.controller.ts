import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("health")
  getHealth(): string {
    console.log('Health check');
    return this.appService.areYouOk();
  }

  @Get("ping")
  getHello(): string {
    console.log('Hola!');
    return this.appService.getHello();
  }
}
