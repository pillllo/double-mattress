import io from 'socket.io-client';

let Socket= io('https://double-mattress.herokuapp.com')

Socket.on("notifications-updated",(notifications)=>{

})
