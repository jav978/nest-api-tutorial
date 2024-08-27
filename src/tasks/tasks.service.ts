import { Injectable } from '@nestjs/common';
import { Tasks } from './tasks.interface';


@Injectable()
export class TasksService{
    private tasks: Tasks[] = [];

    getAllTasks(){
      
        return this.tasks;
    }
    
    getTask(id:number){
      
        return this.tasks;
    }
    
    createTask(task:Tasks){
        this.tasks.push(task)
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
