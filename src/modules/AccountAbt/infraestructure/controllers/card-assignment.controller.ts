import {
  BadRequestException,
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CardAssignmentService } from '../../application/services/card-assignment.service';
import { CardAssignmentQueryDto } from '../persistence/dtos/card-assignment-query.dto';
import { AccountAbtResponseDto } from '../persistence/dtos/account-abt-response.dto';

@Controller('/card-assignment')
export class CardAssignmentController {
  constructor(private readonly cardAssignmentService: CardAssignmentService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async getCardAssignment(@Query() query: CardAssignmentQueryDto): Promise<AccountAbtResponseDto | null> {
    const { type, value } = query;

    if (type === 'documentId' && !/^\d{10}$/.test(value)) {
      throw new BadRequestException(
        'La cédula debe tener exactamente 10 dígitos numéricos.',
      );
    }
    
    const cardAssignment = await this.cardAssignmentService.getCardAssignmentInfo(type, value);
    return cardAssignment;
  }
}
