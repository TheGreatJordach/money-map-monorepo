import { Column } from 'typeorm';

/**
 * Represents a class for storing full name details.
 * Includes columns for first name, last name, and profile name.
 */
export class FullNameEmbedded {
  @Column()
  firstName!:string
  @Column()
  lastName!:string
  @Column()
  profileName!:string
}
