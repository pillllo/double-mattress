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
