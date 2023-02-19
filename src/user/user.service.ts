import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(name: string, age: number) {
    const user = this.repository.create({
      name,
      age,
    });
    console.log(user);
    return this.repository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<User> {
    return this.repository.findOneBy({ id });
  }
  getHelloUser(name: string): string {
    return `hello ${name}~`;
  }
}
