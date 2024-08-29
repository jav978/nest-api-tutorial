import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { ProductsModule } from './products/products.module';
import { HelloController } from './hello/hello.controller';
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [TasksModule, AuthModule, UsersModule, ProjectsModule,ProductsModule, PaymentsModule ],
  controllers: [HelloController],
 
})
export class AppModule {}
