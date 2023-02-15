import {Module} from "@nestjs/common";
import {TrackController} from "./track.controller";
import {TrackService} from "./track.service";
import {Track, TrackSchema} from "./shemas/track.shema";
import {Comment, CommentSchema} from "./shemas/comments.shema";
import {MongooseModule} from "@nestjs/mongoose";
import {FileService} from "../file/file.service";

@Module({
    // регистрируем наши модули
    imports: [
        MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
        MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}])
    ],
    controllers: [TrackController],
    providers: [TrackService, FileService]
})

export class TrackModule {}