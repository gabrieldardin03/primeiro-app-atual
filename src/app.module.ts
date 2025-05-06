import { Module } from '@nestjs/common';
import { TeachersModule } from './teachers/teachers.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TeachersModule, AuthModule],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class AppModule {}