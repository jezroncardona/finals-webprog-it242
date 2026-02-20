import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app') // This means your URL will be /app
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllPosts() {
    return await this.appService.getPostData();
  }
}