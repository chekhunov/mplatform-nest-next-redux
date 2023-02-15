import React from 'react';
import MainLayout from "@/layouts/MainLayout";
import {Box, Button, Card, Grid} from "@mui/material";
import {useRouter} from "next/router";
import {ITrack} from "@/types/track";
import TrackList from "@/components/TrackList";

const Tracks = () => {
  const router = useRouter()
  const tracks: ITrack[] = [
    {
      id: '1',
      name: 'Track 1',
      artist: "ArtistName 1",
      text: "Lorem ipsum Lorem ipsum Lorem ipsum",
      listens: 0,
      picture: "/img",
      audio: '/audio',
      comments: []
    },
    {
      id: '2',
      name: 'Track 1',
      artist: "ArtistName 1",
      text: "Lorem ipsum Lorem ipsum Lorem ipsum",
      listens: 0,
      picture: "/img",
      audio: '/audio',
      comments: []
    },
    {
      id: '3',
      name: 'Track 1',
      artist: "ArtistName 1",
      text: "Lorem ipsum Lorem ipsum Lorem ipsum",
      listens: 0,
      picture: "/img",
      audio: '/audio',
      comments: []
    }
  ]

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{width: 900}}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
            </Grid>
          </Box>

          <TrackList tracks={tracks}/>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Tracks;