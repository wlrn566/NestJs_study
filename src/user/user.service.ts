import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'j',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'm',
    }
  ];

  async findOne(
    username: string
  ): Promise<User | undefined> {
    console.log('UserService findOne');
    return this.users.find(user => user.username === username);
  }
  getHelloUser(
    name: string
  ): string {
    return `hello ${name}~`;
  }
}



