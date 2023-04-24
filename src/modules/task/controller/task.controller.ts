import {Controller, Get} from '@nestjs/common';
import { TaskService } from './services/task.servises';


@Controller()
export class TaskController{
    constructor(private readonly taskService: TaskService){};
    
    @Get()    
    getTask(){
        return this.taskService.getTask();
    };
};
