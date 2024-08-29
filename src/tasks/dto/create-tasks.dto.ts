import {IsString,  IsBoolean, IsNumber, MinLength} from 'class-validator'
export class CreateTasksDto {

    
    id:number

    @IsString()
    @MinLength(1)
    name:string

    @IsString()
    @MinLength(1)
    description?:string
    
    @IsBoolean()
    done:boolean

}
