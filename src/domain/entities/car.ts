import { Driver } from '@domain/entities/driver';

export class Car {
  public id: String;
  public name: String;
  private available: boolean;
  public createdAt: Date;
  public driver: Driver | null;
  constructor(car: {
    id: string;
    name: string;
    available: boolean;
    createdAt: Date;
    driver: Driver;
  }) {
    this.id = car.id;
    this.name = car.name;
    this.available = car.available;
    this.createdAt = car.createdAt;
    this.driver = car.driver;
  }
  public isAvailable() {
    return this.available;
  }

  public setAvailability(availability: boolean) {
    this.available = availability;
  }
}
