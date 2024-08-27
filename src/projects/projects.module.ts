import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Module({
    controllers:[
        
    ],
    providers: [ProjectsService]
})
export class ProjectsModule {}
