import { Module } from '@nestjs/common';
import { ChecklistService } from './checklist.service';

@Module({
  providers: [ChecklistService]
})
export class ChecklistModule {}
