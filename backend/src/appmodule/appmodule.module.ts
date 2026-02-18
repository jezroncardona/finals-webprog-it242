import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppmoduleController } from './appmodule.controller';
import { AppmoduleService } from './appmodule.service';

@Module({
  imports: [ConfigModule], // Allows the service to use process.env
  controllers: [AppmoduleController],
  providers: [AppmoduleService],
})
export class AppmoduleModule {}