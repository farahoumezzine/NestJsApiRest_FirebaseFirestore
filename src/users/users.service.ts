import { Injectable } from '@nestjs/common';
import { FirebaseAdminService } from '../firebase-admin/firebase-admin.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly usersCollection = 'users';

  constructor(private readonly firebaseAdminService: FirebaseAdminService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const db = this.firebaseAdminService.getFirestore();
    const userRef = db.collection(this.usersCollection).doc();

    const user: User = {
      id: userRef.id,
      ...createUserDto,
      createdAt: new Date().toISOString(),
    };

    await userRef.set(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    const db = this.firebaseAdminService.getFirestore();
    const snapshot = await db.collection(this.usersCollection).get();

    const users: User[] = [];
    snapshot.forEach(doc => {
      users.push(doc.data() as User);
    });

    return users;
  }
}