import { Injectable } from "@nestjs/common";
import { AccountAbt } from "../../domain/AccountAbt";
import { AccountAbtRepository } from "../ports/repositories/AccountAbtRepository";
import { AccountAbtUseCases } from "../ports/usecases/AccountAbtUseCases";

@Injectable()
export class AccountAbtService implements AccountAbtUseCases {

    constructor (private readonly repository: AccountAbtRepository) {}
    async getAccountAbtByDocumentId(documentId: string): Promise<AccountAbt | null> {
        this.repository.findByDocumentId(documentId);
        return null;
    }
}