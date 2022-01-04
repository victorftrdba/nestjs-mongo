import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://localhost:PASSWORD@cluster0.mdupn.mongodb.net/DB?retryWrites=true&w=majority'),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
