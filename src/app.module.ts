import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: 
  [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.MONGO_ATLAS_URL}@cluster0.ngspb.mongodb.net/${process.env.MONGO_ATLAS_DB}?retryWrites=true&w=majority`),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
