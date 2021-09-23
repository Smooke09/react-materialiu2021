import React from "react";
import { makeStyles, 
  AppBar, 
  Toolbar, 
  IconButton,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Icon,
  Box,
  Typography,
  ListSubheader,
  Grid,
  Hidden,
  Switch,
} from '@material-ui/core';

import { useTheme } from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';

import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';

import MusicNote  from '@material-ui/icons/MusicNote';
import EmojiEvents  from '@material-ui/icons/EmojiEvents';
import SportsEsports from '@material-ui/icons/SportsEsports';
import Movie  from '@material-ui/icons/Movie';
import LocalMovies  from '@material-ui/icons/LocalMovies';
import Panorama  from '@material-ui/icons/Panorama';
import Highlight  from '@material-ui/icons/Highlight';
import Assignment  from '@material-ui/icons/Assignment'; 
import LiveTv  from '@material-ui/icons/LiveTv';



const useStyles = makeStyles((theme) => ({
    root: {
       height: '100vh', 
       backgroundColor: theme.palette.background.dark,
     },
     AppBar:{
       zIndex: theme.zIndex.drawer + 1,
       boxShadow: 'none'
      },
      logo:{
        height: 25
      },
     drawer: {
      width: 240,
      flexShrink: 0,
     }, 
     drawerPaper:{
      width: 240,
      borderRight: "none",
     },
      MenuIcon:{
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(6),
      },
      icons: {
        paddingRight: theme.spacing(5)
      },
      grow: {
        flexGrow: 1,
      }, 
      ListItemText: {
        fontSize: 14,
      },
      ListItem: {
        paddingTop: 4,
        paddingBottom: 4,
      },
      subheader: {
        textTransform:"uppercase"

      },
      videos:{
        size:(10)
      }
}));

const videos = [
  {
    id: 1,
    title:
      'MASTERCHEF BRASIL (14/09/2021) | PARTE 5 | EP 11 | TEMP 08',
    channel: 'MasterChef Brasil',
    views: '1M de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb1.jpg',
  },
  {
    id: 2,
    title:
      'Lil Nas X, Jack Harlow - INDUSTRY BABY (Official Video)',
    channel: 'Lil Nas X',
    views: '121,535,515M visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',    
    thumb: '/images/thumb2.jpg',
  },
  {
    id: 3,
    title:
      'Five Finger Death Punch - Gone Away (Official Video)',
    channel: 'Smooke',
    views: '89,7  M visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb3.jpg',
  },
  {
    id: 4,
    title:
      'POV - ESL PRO LEAGUE 2021 vs NiP - GROUPSTAGE',
    channel: 'fallenINSIDERmooke',
    views: '46 miL de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb4.jpg',
  },
  {
    id: 5,
    title:
      '2Pac Gangsta Rap Old School Mix July 2021☠️ Best 2Pac Rap / Hip Hop Music Mix ft. Eminem, Biggie',
    channel: 'Thug Radio',
    views: '3,17M  de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb5.jpg',
  },
  {
    id: 6,
    title: 'MD Chefe - Tiffany (Clipe Oficial)',
    channel: 'MD Chefe',
    views: '1.8M mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb6.jpg',
  },
  {
    id: 7,
    title:
      'ELA NÃO VAI VOLTAR - Joao Gomes (DVD Ao Vivo em Fortaleza)',
    channel: 'João Gomes Cantor',
    views: '1,3M mil visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb7.jpg',
  },
  {
    id: 8,
    title:
      'MEU PEDAÇO DE PECADO - João Gomes - Tô Querendo te beijar de Novo (AUDIO E LETRA)',
    channel: 'João Gomes Cantor',
    views: '54,1M de visualizações',
    date: 'há 1 semana',
    avatar: '/images/avatar.jpeg',
    thumb: '/images/thumb8.jpg',
  },
];



function Home({ darkMode, setDarkMode  }) {
    const classes = useStyles();
    const theme = useTheme();
    

    return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.AppBar}>

        <Toolbar> 
         <IconButton
         className={classes.MenuIcon}
         size="large"
         edge="start"
         color="inherit"
         aria-label="menu"
         sx={{ mr: 2 }}
         >
       <MenuIcon />              
       </IconButton> 
      <img src={
        theme.palette.type === 'dark' 
      ? '/images/branco.png'
      : '/images/preto.png'
    } 
      alt="logo"
       className={classes.logo}
       />
      
      
       <div className={classes.grow} />
       <Switch 
       value={darkMode} 
       onChange={() => setDarkMode( !darkMode)} 
       className={classes.icons} 
       />
       <IconButton className={classes.icons}>
         <VideoCall/>              
       </IconButton> 
       <IconButton className={classes.icons}>
       <Apps />              
       </IconButton> 

       <IconButton className={classes.icons}> 
       <MoreVert />              
       </IconButton> 

       <Button 
       startIcon={<AccountCircle />}
       variant="outlined" 
       color="secondary"
       >
         Fazer Login
    </Button>
     </Toolbar>
    </AppBar>



  <Box display="flex">
  <Hidden  mdDown>
    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>

            <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon> 
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText
               }} 
               primary={'Inicio'} 
               />

            </ListItem>
            <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<Whatshot />}</ListItemIcon> 
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText
               }} 
               primary={'Em alta'} 
               />
               
            </ListItem>
            <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>{<Subscriptions />}</ListItemIcon> 
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText
               }} 
               primary={'Inscrição'} 
               />
               
            </ListItem>
            </List>
            <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <VideoLibrary />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.ListItemText
                    }}
                    primary={'Biblioteca'}
                  />
                </ListItem>

                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <History />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.ListItemText
                    }}
                    primary={'Histórico'}
                  />
                </ListItem>

            <Divider />
                <Box p={7}>
                    <Typography variant="body2">
                      Faça login para curtir videos, comentar e se inscrever.
                    </Typography>
                <Box mt={2}>
                      <Button                  
                      variant="outlined" 
                      color="secondary"
                      startIcon={<AccountCircle  />}
                     >
                      Fazer Login
                    </Button>
                  </Box>
                 </Box>    

          <Divider /> 
          <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader
              component='div'
              id='nested-list-subheader'
              className={classes.subheader}
              >
                  O Melhor do youtube     
              </ListSubheader>
                }
              />
             <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>
                  {<MusicNote/>}
                  </ListItemIcon> 
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
               }} 
               primary={'Musica'} 
               />
            </ListItem>
            
            <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>
                  {<EmojiEvents />}
                  </ListItemIcon> 
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
               }} 
               primary={'Esporte'} 
               />
            </ListItem>

            <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>
                  {<SportsEsports  />}
                  </ListItemIcon> 
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
               }} 
               primary={'Jogos'} 
               />
            </ListItem>

            <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>
                  {<Movie />}
                  </ListItemIcon> 
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
               }} 
               primary={'Filmes'} 
               />
            </ListItem>

            <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>
                  {<Assignment />}
                  </ListItemIcon> 
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
               }} 
               primary={'Noticias'} 
               />
            </ListItem>

            <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>
                  {<LiveTv />}
                  </ListItemIcon> 
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
               }} 
               primary={'Ao vivo'} 
               />
            </ListItem>

            <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>
                  {<Highlight />}
                  </ListItemIcon> 
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
               }} 
               primary={'Aprender'} 
               />
            </ListItem>

            <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>
                  {<LocalMovies />}
                  </ListItemIcon> 
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
               }} 
               primary={'Video do momento'} 
               />
            </ListItem>

            <ListItem button classes={{ root: classes.ListItem }}>
                <ListItemIcon>
                  {<Panorama />}
                  </ListItemIcon> 
                  <ListItemText 
                  classes={{
                    primary: classes.ListItemText,
               }} 
               primary={'Video em 360'} 
               />
            </ListItem>
            <Divider />  
        </div>
      </Drawer>
      </Hidden>

      <Box p={8}>
        <Toolbar />
          <Typography
          variant="h5"
          color="textPrimary"
          style={{fontWeight: 600}}
          >
            Recomendados
          </Typography>
          
         <Grid container spacing={4}>
          {
            videos.map((item, index) => (
              <Grid item lg={3} lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                    </Box>
                  </Box>
              </Grid>
            ))

          }
         </Grid>

        </Box>
      </Box>
  </div>
    );
}
export default Home;