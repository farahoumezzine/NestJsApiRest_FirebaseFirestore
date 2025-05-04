import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { FirebaseAdminModule } from './firebase-admin/firebase-admin.module';

@Module({
  imports: [UsersModule, FirebaseAdminModule],
})
export class AppModule {}