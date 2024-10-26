import { Column } from 'typeorm';


/**
 * Represents a period with a specific date.
 * @Column { type: 'date', comment: 'The date representing the month and year of the record' }
 * @property {Date} date - The date representing the month and year of the record.
 */
export class Period {
  /**
   * const month = period.date.getMonth() + 1; // Month (1-12)
   * const year = period.date.getFullYear();
   * **/
  @Column({ type: 'date', comment: 'The date representing the month and year of the record' })
  date!: Date;
  public getMonth(): number {
    return this.date.getMonth() + 1; // Adjust for 1-based month (1-12)
  }

  public getYear(): number {
    return this.date.getFullYear(); // Returns the correct year without modification
  }
}
