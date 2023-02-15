import React, { FC } from "react";
import { ITrack } from "@/types/track";
import { Box, Grid } from "@mui/material";
import TrackItem from "@/components/TrackItem";

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks?.map((track) => (
          <TrackItem key={track.id} track={track} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
