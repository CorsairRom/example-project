import {Module} from '@nestjs/common'
import {TaskService} from './controller/services/task.servises'
import {TaskController} from './controller/task.controller'

@Module({
    imports: [],
    controllers: [
        TaskController
    ],
    providers: [
        TaskService
    ]
})
export class TaskModule{}

