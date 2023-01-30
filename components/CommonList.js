import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function CommonList({listArray}) {
    // const  key_features=[{name:"From MNC working developers", image:"", description:" Learn skills From Experienced programmers"},{name:"Coding practice", image:"", description:"Fully practice based Approach"}]
  return (
    <List sx={{ width: '100%', maxWidth: 360 }} className=" dark:text-white">
        {
            listArray.map((item, index)=>{
                return(
                    <div key={index} className="text-blue-700 dark:text-white">
                        <ListItem >
                          {/* {item.image && 
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={item.image} />
                            </ListItemAvatar>
                          } */}
                          <ListItemText
                                primary={item.name.toUpperCase()}
                                // className=""
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body1"
                                        // color="text.primary"
                                    >
                                        {""}
                                    <span
                                     className='text-gray-600 dark:text-gray-200 italic'
                                     >
                                    {item.description}
                                    </span>
                                    </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    <Divider variant="middle" component="li" />
                    </div>
                )
            })
        }
      {/* <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem> */}
    </List>
  );
}
