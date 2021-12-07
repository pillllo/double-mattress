import io from 'socket.io-client';
import { useSelector, useDispatch } from "react-redux";
let Socket= io('https://double-mattress.herokuapp.com')
const dispatch= useDispatch();
Socket.on("notifications-updated",(notifications)=>{
  dispatch({ type: "ADD_NOTIFICATION", payload:notifications });
  dispatch({ type: "NEW_NOTIFICATION", payload:true })
})

Socket.emit()