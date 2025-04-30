import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { APP_GUARD, APP_FILTER } from '@nestjs/core';
import { AuthGuard } from '../common/guards/auth.guard';
import { HttpExceptionFilter } from '../common/filters/http-exception.filter';

@Module({
  controllers: [TeachersController],
  providers: [
    TeachersService,
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ],
})
export class TeachersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('teachers');
  }
}