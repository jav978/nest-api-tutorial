import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller({})
export class AuthController {
    constructor(private authService: AuthService){}
    @Get('/auth')
    getAuth(){
        return this.authService.getAuth();
    }

   
}
