<<<<<<< HEAD
export const SOCKET_EVENTS = {
  CONNECT: "connect", // client
  CONNECTION: "connection", // server
  DISCONNECT: "disconnect",
  DISCONNECTING: "disconnecting",
  ID: {
    REQUEST: "id.request",
    CONFIRM: "id.confirm",
  },
  NOTIFICATIONS: {
    GET: "notifications.get",
    UPDATED: "notifications.updated",
    MARK_AS_READ: "notifications.mark_as_read",
  },
};
// Socket.emit()
=======
import io from 'socket.io-client';

let Socket= io('https://double-mattress.herokuapp.com')

Socket.on("notifications-updated",(notifications)=>{

})
>>>>>>> 01fc2e4ca739c119c2b34748c354f0442b18a91d
