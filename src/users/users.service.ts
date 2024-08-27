import { Injectable } from '@nestjs/common';
import { User } from './users.interface';

@Injectable()
export class UsersService {
    private user: User[] = [
        {
            id:'1',
            name:'Jorge',
            age:25,
            email:'UO6Zf@example.com',
            phone:'123456789',
            address:'Calle 123'
        },
        {
            id:'2',
            name:'Carlos',
            age:30,
            email:'UO6Zf@example.com',
            phone:'123456789',
            address:'Calle 123'
        },
        {
            id:'3',
            name:'Miguel',
            age:35,
            email:'UO6Zf@example.com',
            phone:'123456789',
            address:'Calle 123'
        }
    ];


    getUsers(): User[] {
        return this.user;
    }

    createUser(user: User):User[]{
        this.user.push(user);
        return this.user;

    }

}
