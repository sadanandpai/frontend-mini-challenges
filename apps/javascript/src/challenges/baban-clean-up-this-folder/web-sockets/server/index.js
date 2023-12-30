const { WebSocketServer } = require("ws");
// const http = require("http");

const webSocketServer = new WebSocketServer({ port: 8001 });

const users = {};
const clients = {};

const messageTypes = {
  CONTENT_CHANGE: "contentchange",
  USER_EVENT: "userevent",
};

let contentValue = null;

const sendMessageToAllClients = (data) => {
  Object.keys(clients).forEach((client) => {
    clients[client].send(JSON.stringify(data));
  });
};

webSocketServer.on("connection", (ws) => {
  const userId = Date.now();
  clients[userId] = ws;
  console.log(`New ${userId} is connected!`);

  ws.on("message", (message) => {
    const { type, data } = JSON.parse(message);
    if (type === messageTypes.CONTENT_CHANGE) {
      contentValue = data;
      sendMessageToAllClients({ type, data: contentValue });
    } else if (type === messageTypes.USER_EVENT) {
      // TODO: update user activity
      users[userId] = { userName: data };
      sendMessageToAllClients({ type, data: users });
    }
  });

  ws.on("close", () => {
    delete clients[userId];
    delete users[userId];
    sendMessageToAllClients({ type: messageTypes.USER_EVENT, data: users });
  });

  ws.send(
    JSON.stringify({ type: messageTypes.CONTENT_CHANGE, data: contentValue })
  );
});

/*
** user : {
  [293492034]: username
}
*/
