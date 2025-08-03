import { Controller, Post, Body } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Post()
  book(@Body() dto: CreateAppointmentDto) {
    return this.appointmentService.bookAppointment(dto);
  }
}
