import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { AppointmentModule } from './appointment/appointment.module';
import { AppController } from './app.controller';
import { Doctor } from './doctor/doctor.entity';
import { Patient } from './patient/patient.entity';
import { Appointment } from './appointment/appointment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT as string),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Doctor, Patient, Appointment],
      synchronize: true,
    }),
    DoctorModule,
    PatientModule,
    AppointmentModule,
  ],
  controllers: [AppController],
})
export class AppModule {}