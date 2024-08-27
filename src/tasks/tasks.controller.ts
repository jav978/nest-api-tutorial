import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTasksDto} from "./dto/create-tasks.dto";

@Controller('/tasks')
export class TasksController{

    constructor(private tasksService: TasksService ){}

    // Trae todas las tarea 
    @Get()
    getAllTasks(@Query() query:string){
        console.log(query)
        return this.tasksService.getAllTasks();
    }


    @Get('/:id')
    getTask(@Param('id') id:string){       
        return this.tasksService.getTask(parseInt(id));
    }


    @Post()
    createTask(@Body() task: CreateTasksDto){
        console.log(task)
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(){
        return this.tasksService.updateTask();
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask();
    }
    @Patch()
    patchTask(){
        return this.tasksService.updateTasksStatus()
    }

}