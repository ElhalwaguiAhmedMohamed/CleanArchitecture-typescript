import { Car } from '@domain/entities/car';

export class Driver {
  public id: String;
  public name: String;
  private available: boolean;
  public createdAt: Date;
  public car: Car;
  constructor(driver: {
    id: string;
    name: string;
    available: boolean;
    createdAt: Date;
    car: Car;
  }) {
    this.id = driver.id;
    this.name = driver.name;
    this.available = driver.available;
    this.createdAt = driver.createdAt;
    this.car = driver.car;
  }
  public isAvailable() {
    return this.available;
  }

  public setAvailability(availability: boolean) {
    this.available = availability;
  }
}
