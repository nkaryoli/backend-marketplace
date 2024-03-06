import { Service } from 'src/service/entities/service.entity';
import { Vehicle } from 'src/vehicle/entities/vehicle.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Carrier {
  [x: string]: any;
  @PrimaryGeneratedColumn('increment')
  carrier_id: number;

  @Column({ default: true })
  availability: boolean;

  @Column()
  location: string;

  @Column()
  car_rate: number;

  @Column()
  van_rate: number;

  @Column()
  average_rating: number;

  @Column()
  user_user_id: number;

  @OneToMany(() => Service, (service: Service) => service.carrier)
  service: Service[];

  @OneToMany(() => Vehicle, (vehicle: Vehicle) => vehicle.carrier)
  vehicle: Vehicle[];
}
