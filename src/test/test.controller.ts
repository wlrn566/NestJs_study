import { HttpService } from '@nestjs/axios';
import { Controller, Get } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom, lastValueFrom } from 'rxjs';

@Controller('test')
export class TestController {
  constructor(private readonly httpService: HttpService) {}

  @Get('axios')
  async findAll(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://jsonplaceholder.typicode.com/posts').pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          throw 'An error happened!';
        }),
      ),
    );
    console.log(data);
    return data;
  }
}
