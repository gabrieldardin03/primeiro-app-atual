import { Injectable } from '@nestjs/common';

@Injectable()
export class TeachersService {
  findAll(name?: string) {
    if (name) {
      return [{ id: 1, name }];
    }
    return [{ id: 1, name: 'Prof. Robyson' }];
  }
}