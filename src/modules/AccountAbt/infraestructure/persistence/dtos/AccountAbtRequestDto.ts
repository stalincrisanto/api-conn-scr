import { Length } from "class-validator";

export class AccountAbtRequestDto {
    @Length(1, 10)
    documentId: string;
}