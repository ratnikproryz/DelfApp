import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {getMessage} from '../api/ChatGPTAPI';

export default function ChatGPTScreen({navigation}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello VKU students',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: require('../assets/icons/ChatGPT_logo.png'),
        },
        image: 'http://vku.udn.vn/uploads/2021/08/15/1629028011_logoVKU.png',
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    const text = messages[0].text;
    getMessageHandler(text);
  }, []);

  const getMessageHandler = async text => {
    let data = await getMessage(text);
    data.choices[0].message.content = data.choices[0].message.content.replace(
      /\n/g,
      '',
    );
    addNewMessageHandler(data);
  };

  const addNewMessageHandler = data => {
    const message = {
      _id: data.id,
      text: data.choices[0].message.content,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: require('../assets/icons/ChatGPT_logo.png'),
      },
    };
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, message),
    );
  };
  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}
