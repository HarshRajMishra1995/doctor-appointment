import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;
}