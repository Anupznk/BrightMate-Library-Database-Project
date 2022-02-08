import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {transferData} from "./App";
import {
    Avatar, Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import CreateIcon from '@mui/icons-material/Create';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import LanguageIcon from '@mui/icons-material/Language';
import logo from ".//logo.png";


export default function SingleBookDetails() {
    return (
        <Grid container spacing={4} padding={5}>
            <Grid item xs={12} md={12}>
                <center>
                    <img src={logo} height={120} width={120}/>
                </center>
            </Grid>
            <Grid item xs={0} md={2}>
            </Grid>
            <Grid item xs={12} md={8}>
                <div align="left" style={{display: "flex", justifyContent: "center"}}>

                    <Card sx={{minWidth: 800}}>
                        <CardContent>

                            <b><strong><Typography variant="h4" component="div">
                                {transferData.Title}
                            </Typography> </strong></b>
                            <br/>
                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                Edition: {transferData.Edition}
                            </Typography>
                            <Typography sx={{mb: 1.5}} color="text.primary">
                                ISBN: {transferData.ISBN}
                            </Typography>

                            <hr color="#E1EBFF"/>

                            <br/>
                            <Avatar sx={{bgcolor: "#50CB88"}}>
                                <CheckCircleIcon/>
                            </Avatar>
                            <Typography paddingTop={1} variant="h5">
                                Available Copies: {transferData.CountOfBooks}
                            </Typography>
                            <br/>

                            <Avatar sx={{bgcolor: "#E91E63"}}>
                                <CreateIcon/>
                            </Avatar>
                            <List disablePadding>
                                {transferData.AuthorObject.map((singleAuthor) => (
                                    <ListItem divider={false}>
                                        <ListItemText
                                            key={singleAuthor.AuthorId}
                                            primary={singleAuthor.AuthorName}
                                        />
                                    </ListItem>
                                ))}

                            </List>
                            <br/>


                            <Avatar sx={{bgcolor: "#3A7CFF"}}>
                                <LocalPrintshopIcon/>
                            </Avatar>

                            <Typography paddingTop={1} variant="body2">
                                {transferData.Publisher}
                            </Typography>


                            <br/>
                            <Avatar sx={{bgcolor: "#E91E63"}}>
                                <LanguageIcon/>
                            </Avatar>
                            <Typography paddingTop={1} variant="body2">
                                Language: {transferData.Language}
                            </Typography>

                            <br/>
                            <Avatar sx={{bgcolor: "#6C63FF"}}>
                                <DescriptionIcon/>
                            </Avatar>
                            <Typography paddingTop={1} variant="body2">
                                {transferData.Description}
                            </Typography>


                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </Grid>

            <Grid item xs={0} md={2}>
            </Grid>
        </Grid>
    );
}
