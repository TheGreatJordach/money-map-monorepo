import { Column } from 'typeorm';

/**
 * Represents an address with street details, city, state, zip code, and country.
 */
export class Address {
  @Column()
  street1?:string
  @Column()
  street2?:string
  @Column()
  city?:string
  @Column()
  state?:string
  @Column()
  zip?:string
  @Column()
  country?:string
}
