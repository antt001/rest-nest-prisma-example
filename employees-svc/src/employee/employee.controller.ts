import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { ApiBody, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Employee } from './entities/employee.entity';

@ApiTags('employee')
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  @ApiOperation({ summary: 'Create employee' })
  @ApiResponse( { status: 201, description: 'Employee created', type: Employee })
  @ApiBody({ schema: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      firstname: { type: 'string' },
      lastname: { type: 'string' }
      }
    }
  })
  create(@Body() createEmployeeData: { email: string, firstname: string, lastname: string }): Promise<Employee> {
    return this.employeeService.create({
      email: createEmployeeData.email,
      firstname: createEmployeeData.firstname,
      lastname: createEmployeeData.lastname
    });
  }

  @Get()
  @ApiOperation({ summary: 'Get all employees' })
  @ApiOkResponse({ description: 'Employees found', type: [Employee] })
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get employee by id' })
  @ApiOkResponse({ description: 'Employee found', type: Employee })
  findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update employee' })
  // @ApiResponse({ status: 201, description: 'Employee Updated', type: Employee })
  @ApiOkResponse({ description: 'Employee Updated', type: Employee })
  @ApiBody({ schema: {
    type: 'object',
    properties: {
      email: { type: 'string' },
      firstname: { type: 'string' },
      lastname: { type: 'string' }
      }
  }})
  update(@Param('id') id: string, @Body() updateEmployeeData: { email?: string | null, firstname?: string | null, lastname?: string | null }) {
    return this.employeeService.update({
      where: { id: +id },
      data: {
        email: updateEmployeeData.email,
        firstname: updateEmployeeData.firstname,
        lastname: updateEmployeeData.lastname
      }
    });
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete employee'})
  @ApiOkResponse({ description: 'Employee Deleted', type: Employee})
  remove(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.delete({ id: +id });
  }
}
