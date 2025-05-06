import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    
    async authenticate(signInDto: SignInDto){
        console.log(signInDto)
        return true
    }
}
