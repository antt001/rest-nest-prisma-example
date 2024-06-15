import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Employee, Prisma } from '@prisma/client';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EmployeeCreateInput): Promise<Employee> {
    return this.prisma.employee.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.EmployeeWhereUniqueInput;
    data: Prisma.EmployeeUpdateInput;
  }): Promise<Employee> {
    const { where, data } = params;
    return this.prisma.employee.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.EmployeeWhereUniqueInput): Promise<Employee> {
    return this.prisma.employee.delete({
      where,
    });
  }

  findAll(): Promise<Employee[]> {
    return this.prisma.employee.findMany();
  }

  findOne(id: number) : Promise<Employee | null> {
    return this.prisma.employee.findUnique({
      where: { id },
    });
  }
}
