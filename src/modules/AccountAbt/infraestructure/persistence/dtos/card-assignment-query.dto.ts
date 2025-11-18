import { IsIn, IsNotEmpty, IsString, Matches } from 'class-validator';

export class CardAssignmentQueryDto {
  
  @IsNotEmpty({ message: "El parámetro 'type' es obligatorio" })
  @IsIn(['cardCode', 'documentId'], {
    message: "El parámetro 'type' debe ser 'cardCode' o 'documentId'",
  })
  type: 'cardCode' | 'documentId';

  @IsNotEmpty({ message: "El parámetro 'value' es obligatorio" })
  @IsString()
  value: string;
}