import { Column, Entity, Table } from 'typeorm';

@Entity({ name: 'account_abt' })
export class AccountAbtEntity {
  @Column({ name: 'ACCOUNTABT_ID' })
  accountAbtId: string;

  @Column({ name: 'FULL_NAME' })
  fullName: string;

  @Column({ name: 'DOCUMENT_ID' })
  documentId: string;

  @Column({ name: 'EMAIL' })
  email: string;
}
