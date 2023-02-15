import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    MongooseModule.forRoot('mongodb+srv://Ihor:orientalcaffe1955@cluster0.e7vdl10.mongodb.net/music-platform?retryWrites=true&w=majority'),
    TrackModule,
    FileModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}