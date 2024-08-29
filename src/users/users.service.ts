import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from './dto/users.interface';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
   
    constructor(private prisma: PrismaService){}

    getUsers() {
        return this.prisma.user.findMany()
    }

    createUser(user: CreateUserDto){
       
        return this.prisma.user.create({data: user})

    }

    // updateUser(user: UpdateUserDto ){
    //     return this.prisma.user.update({
            
    //     })
    // }

}
