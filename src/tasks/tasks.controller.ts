import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTasksDto} from "./dto/create-tasks.dto";
import { UpdateTasksDto } from "./dto/update-tasks.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('/tasks')
@ApiTags('Tasks')

export class TasksController {


    constructor(private tasksService: TasksService) {}

    // Trae todas las tarea 
    @Get()



    @ApiOperation({ summary: 'Get all tasks' })
    @ApiResponse({ status: 200, description: "return all tasks" })
    @ApiResponse({ status: 403, description: "Forbidden" })

    getAllTasks(@Query() query: string) {
        console.log(query)
        return this.tasksService.getAllTasks();
    }



    @Get('/:id')

    getTask(@Param('id') id: string) {       
        return this.tasksService.getTask(parseInt(id));
    }


    @ApiOperation({ summary: 'Create a new taks' })
    @Post()    

    createTask(@Body() task: CreateTasksDto) {
        console.log(task)
        return this.tasksService.createTask(task);
    }

    @Put()

    updateTask(@Body() task: UpdateTasksDto) {
        return this.tasksService.updateTask(task);
    }

    @Delete()

    deleteTask() {
        return this.tasksService.deleteTask();
    }

    @Patch()

    patchTask() {
        return this.tasksService.updateTasksStatus()
    }

}