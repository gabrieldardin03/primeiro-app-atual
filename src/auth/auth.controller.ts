import { Controller, Post } from '@nestjs/common';
import { signInDto } from './dto/signin.dto';

@Controller('auth')
export class AuthController {

    @Post()
    signIn(@Body()singInDto: SignInDto){
        return this.authService.authenticate(singInDto)
    }
}
