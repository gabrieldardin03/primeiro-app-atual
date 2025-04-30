import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { UppercasePipe } from '../common/pipes/uppercase.pipe';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  @UsePipes(UppercasePipe)
  findAll(@Query('name') name: string) {
    return this.teachersService.findAll(name);
  }
}