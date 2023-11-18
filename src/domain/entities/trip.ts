import { User } from '@domain/entities/user';
import { Driver } from '@domain/entities/driver';
import { Car } from '@domain/entities/car';

class Trip {
  public id: number;
  public booker: User;
  public bookerId: string;
  public driver: Driver;
  public driverId: string;
  public car: Car;
  public carId: string;
  public createdAt: Date;

  constructor(
    id: number,
    booker: User,
    bookerId: string,
    driver: Driver,
    driverId: string,
    car: Car,
    carId: string,
    createdAt: Date,
  ) {
    this.id = id;
    this.booker = booker;
    this.bookerId = bookerId;
    this.driver = driver;
    this.driverId = driverId;
    this.car = car;
    this.carId = carId;
    this.createdAt = createdAt;
  }
}
