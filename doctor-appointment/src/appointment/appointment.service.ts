import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Doctor } from '../doctor/doctor.entity';
import { Patient } from '../patient/patient.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,

    @InjectRepository(Doctor)
    private doctorRepository: Repository<Doctor>,

    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) {}

  async bookAppointment(dto: CreateAppointmentDto) {
    const { doctorId, patientId, date, time } = dto;

    const doctor = await this.doctorRepository.findOne({ where: { id: doctorId } });
    const patient = await this.patientRepository.findOne({ where: { id: patientId } });

    if (!doctor || !patient) {
      throw new BadRequestException('Doctor or patient not found');
    }

    const overlap = await this.appointmentRepository.findOne({
      where: { doctor: { id: doctorId }, date, time },
    });

    if (overlap) {
      throw new BadRequestException('Doctor is already booked at this time');
    }

    const appointment = this.appointmentRepository.create({
      doctor,
      patient,
      date,
      time,
    });

    return this.appointmentRepository.save(appointment);
  }
}