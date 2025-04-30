import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const now = Date.now();
    const timestamp = new Date().toISOString();

    console.log('[Middleware] Request started');
    console.log(`  Method: ${method}`);
    console.log(`  URL: ${originalUrl}`);
    console.log(`  Timestamp: ${timestamp}`);

    res.on('finish', () => {
      const duration = Date.now() - now;
      console.log('[Middleware] Request completed');
      console.log(`  Status: ${res.statusCode}`);
      console.log(`  Duration: ${duration}ms`);
    });

    next();
  }
}