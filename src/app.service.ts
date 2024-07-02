import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class StatusResponse {
  @ApiProperty({ example: 'ok', description: 'Status' })
  status: string;
  @ApiProperty({ example: '1.0.0', description: 'Version' })
  version: string;
}

@Injectable()
export class AppService {
  getStatus(): StatusResponse {
    return {
      status: 'ok',
      version: '1.0.0',
    };
  }
}
