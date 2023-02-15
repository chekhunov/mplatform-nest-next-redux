import React from 'react';
import {ITrack} from "@/types/track";
import MainLayout from "@/layouts/MainLayout";
import {Button, Grid, TextField} from "@mui/material";
import {useRouter} from "next/router";

const TrackPage = () => {
  const router = useRouter()
  const track: ITrack = {
    id: '1',
    name: 'Track 1',
    artist: "ArtistName 1",
    text: "Lorem ipsum Lorem ipsum Lorem ipsum",
    listens: 0,
    picture: "/img",
    audio: '/audio',
    comments: []
  }

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        style={{fontSize: 32}}
        onClick={() => router.push('/tracks')}>
        К списку
      </Button>

      <Grid container style={{margin: '20px 0'}}>
        <img
          width={200}
          height={200}
          src={track.picture} alt="picture-track"/>
        <div style={{margin: '20px 0'}}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушивание - {track.listens}</h1>
        </div>
      </Grid>

      <h1>Слова в треке</h1>
      <p>{track.text}</p>

      <h1>Комментарий</h1>
      <Grid container>
        <TextField
          label="Ваше имя"
          fullWidth
        />
        <TextField
          label="Комментарий"
          fullWidth
          multiline
          rows={4}
        />
        <Button>Отправить</Button>
      </Grid>

      <div>{track.comments.map(comment =>
        <div>
          <div>Автор - {comment.username}</div>
          <div>Комментарий - {comment.text}</div>
        </div>)}</div>
    </MainLayout>
  );
};

export default TrackPage;