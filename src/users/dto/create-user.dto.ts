import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, MinLength } from 'class-validator'

export class CreateUserDto {

    // @IsString()
    // @IsNotEmpty()    
    // id:string

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name:string

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    password:string

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    email:string

}

