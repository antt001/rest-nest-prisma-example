import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';  
import { EmployeeModule } from './employee/employee.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), EmployeeModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
