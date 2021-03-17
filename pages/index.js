import React, { useState } from 'react';
import { Fragment } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({});
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  Paper,
  Grid,
  CssBaseline,
  Box,
  Typography,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  '@keyframes slideUp': {
    from: { transform: 'translate(0, 50%)', opacity: 0 },
    to: { transform: 'translate(0, 0)', opacity: 1 },
  },
  slideUpEffect: {
    animationName: '$slideUp',
    animationDuration: '.3s',
  },
  '@keyframes slideLeft': {
    from: { transform: 'translate(0, 0)', opacity: 0.7 },
    to: { transform: 'translate(-100%, 0)', opaicty: 0 },
  },
  slideLeftEffect: {
    animationName: '$slideLeft',
    animationDuration: '.4s',
  },
 

  
});

const TodoList = () => {
  const classes = useStyles();
  let inRef = null;
  const [idIndex, setIdIndex] = useState(3);
  const [todoList, setTodoList] = useState([
 
  ]);
  const toggleItem = value => () => {
    const copy = [...todoList];
    copy.forEach(e => {
      if (e.id == value) e.checked = !e.checked;
    });
    setTodoList(copy);
  };
  const deleteRequestItem = value => () => {
    const copy = [...todoList];
    let removeItem = undefined;
    copy.forEach(e => {
      if (e.id == value) {
        e.anim = true;
        removeItem = e;
      }
    });
    setTodoList(copy);
    setTimeout(value => {
      deleteItem(removeItem);
    }, 300);
  };
  const deleteItem = value => {
    const copy = [...todoList];
    let index = copy.indexOf(value);
    if (index != -1) {
      copy.splice(index, 1);
      setTodoList(copy);
    }
  };
  const addItem = value => {
    const data = {
      id: idIndex,
      checked: false,
      text: inRef.value,
      anim: false,
    };
    setIdIndex(idIndex + 1);
    const copy = [...todoList];
    copy.push(data);
    setTodoList(copy);
    inRef.value = '';
  };
  return (
    
    <Fragment>
      
      <List>
        {todoList.map((value, index) => {
          return (
            <ListItem
              key={value.id}
              button
              onClick={toggleItem(value.id)}
              className={
                value.anim ? classes.slideLeftEffect : classes.slideUpEffect
              }>
              <ListItemIcon>
                <Checkbox disableRipple edge="start" checked={value.checked} />
              </ListItemIcon>
              <ListItemText
                primary={
                  value.checked ? (
                    <b>
                      <strike>{value.text}</strike>
                    </b>
                  ) : (
                    value.text
                  )
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={deleteRequestItem(value.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
        <ListItem key={'input'} button disableRipple>
          <TextField
            fullWidth={true}
            label="Add notes/to-do's"
            inputRef={ref => (inRef = ref)}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={addItem}>
              <AddIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Grid container justify="center">
              <div>
     <Button variant="contained" color="primary" href="#contained-buttons">
     Go to analytics screen
   </Button>
   </div>
   </Grid>
    </Fragment>
  
  );
};

export default TodoList;