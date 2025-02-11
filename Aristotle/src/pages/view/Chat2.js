
import React, { useState } from 'react';
import { Container, Paper, TextField, Button, List, ListItem, ListItemText } from '@mui/material';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemText>{message}</ListItemText>
            </ListItem>
          ))}
        </List>
        <TextField
          label="Message"
          fullWidth
          value={newMessage}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Paper>
    </Container>
  );
}

export default ChatApp;
