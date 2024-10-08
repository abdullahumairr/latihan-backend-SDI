import http from "http";
import { TodolistService } from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((req, res) => {
  //   res.write("Todolist API");
  //   res.end();

  switch (req.method) {
    case "GET":
      service.getTodolist(req, res);
      break;
    case "POST":
      service.createTodo(req, res);
      break;
    case "PUT":
      service.putTodolist(req, res);
      break;
    case "DELETE":
      service.delTodolist(req, res);
      break;
  }
});

server.listen(3000, () => console.log("server running"));
