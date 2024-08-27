import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { ProductsModule } from './products/products.module';


@Module({
  imports: [TasksModule, AuthModule, UsersModule, ProjectsModule,ProductsModule ],
 
})
export class AppModule {}
