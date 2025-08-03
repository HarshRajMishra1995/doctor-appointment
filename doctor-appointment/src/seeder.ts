import { DataSource } from 'typeorm';
import { Doctor } from './doctor/doctor.entity';
import { Patient } from './patient/patient.entity';
import { Appointment } from './appointment/appointment.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'gondola.proxy.rlwy.net',
  port: 44255,
  username: 'postgres',
  password: 'bukziyuKnAjgwvkXwtkLlHugSmdOjTla',
  database: 'railway',
  entities: [Doctor, Patient, Appointment],
  synchronize: true, // WARNING: Don't use `true` in production unless you're okay with schema changes
});

async function seed() {
  await AppDataSource.initialize();
  console.log('Database connected.');

  const doctorRepo = AppDataSource.getRepository(Doctor);
  const patientRepo = AppDataSource.getRepository(Patient);
  const appointmentRepo = AppDataSource.getRepository(Appointment);

  const doctor1 = doctorRepo.create({ name: 'Dr. Smith', specialization: 'Cardiology' });
  const doctor2 = doctorRepo.create({ name: 'Dr. Watson', specialization: 'Neurology' });
  await doctorRepo.save([doctor1, doctor2]);

  const patient1 = patientRepo.create({ name: 'John Doe', email: 'john@example.com' });
  const patient2 = patientRepo.create({ name: 'Jane Roe', email: 'jane@example.com' });
  await patientRepo.save([patient1, patient2]);

  const appointment1 = appointmentRepo.create({
    date: '2025-08-05',
    time: '10:00',
    doctor: doctor1,
    patient: patient1,
  });

  const appointment2 = appointmentRepo.create({
    date: '2025-08-06',
    time: '11:30',
    doctor: doctor2,
    patient: patient2,
  });

  await appointmentRepo.save([appointment1, appointment2]);

  console.log('Seeding complete.');
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error('Seeding failed:', err);
  AppDataSource.destroy();
});
