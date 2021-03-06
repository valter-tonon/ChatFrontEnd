import React, {Component } from 'react'
import io from 'socket.io-client'
import Room from '../../components/Room'
import { Route, Link} from 'react-router-dom'
import SelectRoom from '../../components/SelectRoom'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333/auth'
})

class Home extends Component{
  constructor(props){
    super(props)
    const token = window.localStorage.getItem('token')
    const socket = io('http://localhost:3333?token='+token)
    api.get('/auth').then(res=>{
      this.setState({ user: res.data})
      
  })
    
 
    this.state={
      rooms: [],
      msgs: {},
      user:[]
    }

    socket.on('newRoom', room => {
      this.setState({rooms:[...this.state.rooms,room]})
    })
    // recebe a lista inicial de rooms
    socket.on('roomList', rooms => {
      this.setState({rooms: rooms})
     })
    socket.on('newMsg', msg => {
      if(!this.state.msgs[msg.room]){
        const msgs = {...this.state.msgs}
        msgs[msg.room] = [msg]
        this.setState({
          msgs: msgs
        })
      }else{
        const msgs = {...this.state.msgs}
        msgs[msg.room].push(msg)
        this.setState({
          msgs: msgs
      })
    }
    if(msg.room !== this.roomId){
      const room = this.state.rooms.find( room => room._id === msg.room)
      const ind = this.state.rooms.indexOf(room)
      const rooms = [...this.state.rooms]
      if(!room.count){
        room.count = 0
      }
      room.count ++
      rooms[ind] = room
      this.setState({ rooms: rooms})
    }
  })

    socket.on('newAudio', msg => {
      if(!this.state.msgs[msg.room]){
        const msgs = {...this.state.msgs}
        msgs[msg.room] = [msg]
        this.setState({
          msgs: msgs
        })
      }else{
        const msgs = {...this.state.msgs}
        msgs[msg.room].push(msg)
        this.setState({
          msgs: msgs
      })
    }})
    

    socket.on('msgsList', msgs => {
      if(msgs.length > 0){
          const msgsTmp = {...this.state.msgs}
          msgsTmp[msgs[0].room] = msgs
          this.setState({
            msgs: msgsTmp
        })
      }
      
    })
   
    this.socket = socket
    this.addNewRoom = this.addNewRoom.bind(this)
    this.setRoom= this.setRoom.bind(this)
  }
  addNewRoom(){
    const roomName = prompt('Informe o nome da sala')
    if(roomName){
     this.socket.emit('addRoom', roomName)
    }
  }
  setRoom(roomId){
    this.roomId = roomId 
    this.setState({
      roomId
    })
    const room = this.state.rooms.find( room => room._id === roomId)
    if(room){
    const ind = this.state.rooms.indexOf(room)
    const rooms = [...this.state.rooms]
    if(room.count){
      room.count = 0
    }
    rooms[ind] = room
    this.setState({ rooms: rooms})
  }
  }
  
    render(){
     console.log(this.state.user)
    
        return (
            <div className="container w-container">
            <div className="rooms">
              <h1 className="title-rooms">Salas Disponíveis</h1>
              <ul className="room-list w-list-unstyled">
              {this.state.rooms.map((room)=>{
                return <li className="room-item" key={room._id}>
                      <Link to={`/chat/${room._id}`}>
                      {room._id === this.state.roomId && ' >> '}{room.name}{ !!room.count && <span className="alert alert-danger">({room.count})</span>}</Link></li>
              })
                }
                  <li className="room-item"><Link to='/users'>Lista de Participantes</Link></li>
               </ul>
              <div className="add-room" onClick={this.addNewRoom}>+</div>
            </div>
            <Route path='/chat' exact component={SelectRoom}/>
            <Route path="/chat/:room" render = {(props)=> <Room {...props} 
                  socket= {this.socket} msgs={this.state.msgs} author={this.state.msgs.author}/>} />
          </div>
        )
    }
}
export default Home