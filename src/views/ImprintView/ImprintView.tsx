import React from 'react';
import {Grid, Typography, Link, Button} from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import {useNavigate} from "react-router-dom";
const ImprintView: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Grid p={4} container direction='column' gap={1}>
      <Grid>
        <Button variant='outlined' onClick={() => navigate('/')} startIcon={ <ArrowBack />}> Back</Button>
      </Grid>
      <Grid>
        <Typography variant='h4'>Imprint</Typography>
      </Grid>
      <Grid>
        <Typography variant='body1'>Dion Übelacker</Typography>
        <Typography variant='body1'>Elisabeth-Kranz-Straße</Typography>
        <Typography variant='body1'>71640 Ludwigsburg</Typography>
      </Grid>
      <Grid>
        <Typography variant='subtitle1'>Contact</Typography>
        <Typography variant='body1'>consulting@uebelacker.it</Typography>
      </Grid>
      <Grid>
        <Typography variant='subtitle1'>Details of professional liability insurance</Typography>
        <Typography variant='body1'>TBD</Typography>
      </Grid>
      <Grid>
        <Typography variant='subtitle1'>Redaktionell verantwortlich</Typography>
        <Typography variant='body1'>Dion Übelacker</Typography>
        <Typography variant='body1'>Elisabeth-Kranz-Straße</Typography>
        <Typography variant='body1'>71640 Ludwigsburg</Typography>
      </Grid>
      <Grid>
        <Typography variant='subtitle1'>Consumer dispute resolution / Universal arbitration board</Typography>
        <Typography variant='body2'>We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board.</Typography>
        <Typography variant='body2'>Quelle: <Link target="_blank" rel="noreferrer" href='https://www.e-recht24.de'>e-Recht24</Link></Typography>
      </Grid>
    </Grid>
  )
}

export default ImprintView;
