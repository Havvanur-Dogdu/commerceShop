import React, { Component, useState,useEffect } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Steps from './ChatBoxSteps'
import { browserHistory } from 'react-router'
const otherFontTheme = {
  background: '#f5f8fb',
  headerBgColor: '#86bdb8',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#86bdb8',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const ChatBox = () => {
  const [opened, setOpened] = useState(false)

  const handleEnd = ({ steps, values }) => {
    console.log(values)
    if(values[1] === 'login'){
      window.location.href=`/${values[1]}`
      }else{
      window.location.href=`/${values[2]}`
      }
  }

  return (
    <div className='chatBot'>
      <ThemeProvider theme={otherFontTheme}>
        <ChatBot
          handleEnd={handleEnd}
          steps={Steps()}
          floating={true}
          opened={opened}
          toggleFloating={() => {
            setOpened((opened) => !opened)
          }}
          headerTitle='LOGO Sanal Destek'
          placeholder='Lütfen Mesajınızı yazınız'
        />
      </ThemeProvider>
    </div>
  )
}
export default ChatBox
