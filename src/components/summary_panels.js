import MuiAlert from '@material-ui/lab/Alert';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CircularStatic from './circular_progress'
import Box from '@material-ui/core/Box';
import Card1 from './card1'
import Card2 from './card2'
import Card3 from './card3'




export default function panels(props) {
    return(
      <Grid container className={props.classes.summary_root} spacing={2}>
      <Grid item xs={12} >
        <Grid container justify="center" spacing={5}>
            <Grid key={0} item>
                <Button
                icon=<PlayCircleOutlineIcon />
                color="secondary"
                href="/backend"
                variant="contained" >Empezar Protocolo</Button>
            </Grid>
         </Grid>
         <Grid container justify="center" spacing={5}>
            <Grid key={0} item justify="center">
            <Box className={props.classes.paper}>
                <Card1 title="Veces a Repetir" text="3"/>
            </Box>
             </Grid>
            <Grid key={1} item justify="center">
            <Box className={props.classes.paper} >
                <Card3 title="Fecha Límite" text="21/11"/>
            </Box>
             </Grid>
            <Grid key={2} item justify="center">
            <Box className={props.classes.paper} >
                <Card2 title="Completado" text="70%"/>
            </Box>
            </Grid>
         </Grid>
       </Grid>
      </Grid>
    )

}