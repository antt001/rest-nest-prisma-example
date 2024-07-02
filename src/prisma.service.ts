import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // This is optional — if removed, Prisma will connect lazily on its first call to the database. 
  async onModuleInit() {
    await this.$connect();
  }
}
