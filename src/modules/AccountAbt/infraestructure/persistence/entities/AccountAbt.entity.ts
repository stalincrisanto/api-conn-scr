import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'account_abt' })
export class AccountAbtEntity {
  @PrimaryColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'ACCOUNTABT_ID' })
  accountAbtId: string;

  @Column({ name: 'FULL_NAME' })
  fullName: string;

  @Column({ name: 'DOCUMENT_ID' })
  documentId: string;

  @Column({ name: 'EMAIL' })
  email: string;

  @Column({ name: 'PROFILE' })
  profile: string;
}
