import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';

@Controller()
export class HelloController {
    @Get('/hello')
    index(@Req() request: Request, @Res() response:Response ) {
        console.log(request.url)
        response.status(200).json({
            message:'Hello word'
        })
    }

    @Get('notfound')
    @HttpCode(404)
    notFoudPage(){
        return '404 not found'
    }

    @Get('new')
    @HttpCode(201)
    somethingnewPage(){
        return 'something new'
    }

    @Get('error')
    @HttpCode(500)
    errorPage(){
        return 'Error Route!!'
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num:number){
        return num + 14
    }
    
    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status:boolean){
        console.log(typeof status)
        return status
    }

    @Get('greet')
    greet(@Query(ValidateuserPipe) query:{name: string, age:number}){
        console.log(typeof query.age)
        console.log(typeof query.name)
        return `Hello ${query.name} you are ${query.age+20} years old`
    }
}

