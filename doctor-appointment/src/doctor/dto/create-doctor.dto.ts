import { IsNotEmpty } from 'class-validator';

export class CreateDoctorDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  specialization: string;
}
