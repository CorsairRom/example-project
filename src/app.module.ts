import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TaskModule } from './modules/task/task.module'

@Module({
  imports: [
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}