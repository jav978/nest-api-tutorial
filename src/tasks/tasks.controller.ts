import { Body, Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Tasks } from "./tasks.interface";

@Controller('/tasks')
export class TasksController{

    constructor(private tasksService: TasksService ){}
    @Get()
    getAllTasks(){
        return this.tasksService.getTasks();
    }

    @Post()
    createTask(@Body() task: Tasks){
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