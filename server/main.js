/* eslint-disable no-case-declarations */
/*
const WebSocketServer = require("ws").Server;
const fs = require('fs')*/
//use nodejs import
import { WebSocketServer } from "ws";
import fs from 'fs'

const calServer = new WebSocketServer({ port: 8006 });
var clients = []

var serverState = {}
if (fs.existsSync('db.json')) serverState = JSON.parse(fs.readFileSync('db.json'))
else serverState = {
  bulletin: [
    { 'q': 'aaa', 'a': 'bbb', 'upvotes': 479, 'author': 'Kaltsit', id: 0 },
  ],

  calendar: null
}

calServer.on("connection", (ws) => {

  clients.push(ws)
  ws.send(JSON.stringify({ action: 'state', parameters: serverState }))

  ws.on("message", async (message) => {

    const data = JSON.parse(message);
    const action = data.action
    const parameters = data.parameters




    switch (action) {
      case 'login':
        const username = parameters.username
        if (username == 'Kaltsit' && parameters.password == '31415926535') { ws.username = 'Kaltsit'; break; }
        else if (username == 'Kaltsit') break
        ws.username = username
        break

      case 'second':
        const QAID = parseInt(parameters.QAID)
        //console.log(QAID)
        if (!serverState.bulletin[QAID]) break
        if (QAID > serverState.bulletin.length - 1) break
        serverState.bulletin[QAID].upvotes += 1
        break

      case 'ask':
        const question = parameters.question
        if (question.length > 100 || question.length==0) break
        serverState.bulletin.push({ 'q': question, 'a': false, 'upvotes': 0, 'author': ws.username, id: serverState.bulletin.length })
        break

      case 'delete':
        if (ws.username != 'Kaltsit') break
        const id = parseInt(parameters.id)
        serverState.bulletin.splice(id, 1)
        break

      case 'answer':
        if (ws.username != 'Kaltsit') break
        const answer = parameters.answer
        const id2 = parseInt(parameters.id)
        serverState.bulletin[id2].a = answer
        break
    }
    // save into db.json

    fs.writeFile('db.json',JSON.stringify(serverState),()=>{ })
      
      clients.forEach(client => {
        if (client.readyState === client.OPEN)
          client.send(JSON.stringify(
            { action: 'state',parameters: {state: serverState, isLoggedIn: client.username} }
          ))
      })


  })})

