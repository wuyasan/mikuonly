import { ref } from 'vue'
import { defineStore } from 'pinia'


const stateDump = ref({
})

const currentwindow = ref('info')


// create a ws to cog.eterea.uk:8006
const wsProto = location.protocol === 'https:' ? 'wss' : 'ws';
const wsUrl = `${wsProto}://${location.host}/ws/`;
const ws = new WebSocket(wsUrl);

function initNetReg(){
  ws.onopen = function () {
    console.log('connection established')
  };
  
  ws.onmessage = function (event) {

    let data = JSON.parse(event.data)
    console.log(data)

    let action = data["action"]
    
    switch (action) {
      case 'state':
        stateDump.value = data["parameters"]
        break
  
    }
  
  };
  
  ws.onclose = function (event) {
  
  };
}

initNetReg()

function login(username, password ) {
  // if socket is still opening, send it after it's opened
  if (ws.readyState === WebSocket.CONNECTING) {
    ws.addEventListener('open', () => {
      ws.send(JSON.stringify({ action: 'login', parameters: { username, password } }))
    })
  } else {
    ws.send(JSON.stringify({ action: 'login', parameters: { username, password } }))
  }
}

function setWindow(cur){
  currentwindow.value = cur
}

export const useUserStore = defineStore('user', () => {
  return { stateDump, login, currentwindow, setWindow }
})