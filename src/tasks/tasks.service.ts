import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTasksDto } from './dto/create-tasks.dto';


@Injectable()
export class TasksService{
    private tasks: CreateTasksDto[] = [];

    getAllTasks(): CreateTasksDto[] {
      
        return this.tasks;
    }
    
    getTask(id:number){
        const taskFound = this.tasks.find(task => task.id === id);
        
        if(!taskFound){
            return new NotFoundException(`Tasks with id ${id} not found`);
        }
        return taskFound;

    }
    
    createTask(task:CreateTasksDto){
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return this.tasks;
    }

    updateTask(){
        return 'Actualizando una tarea';
    }

    deleteTask(){
        return 'Eliminando una tarea'
    }

    updateTasksStatus(){
        return 'Actualizando el estado de una tarea'
    }

}
