import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty()
  doctorId: number;

  @IsNotEmpty()
  patientId: number;

  @IsString()
  date: string;

  @IsString()
  time: string;
}