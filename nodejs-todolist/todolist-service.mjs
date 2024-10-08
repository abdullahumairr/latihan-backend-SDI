export class TodolistService {
  todolists = ["Belajar NodeJS", "Belajar JavaScript"];

  getJsonTodolist() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todolists.map((val, idx) => {
        return {
          id: idx,
          todo: val,
        };
      }),
    });
  }

  // GET
  getTodolist(req, res) {
    res.end(this.getJsonTodolist());
  }

  // POST
  createTodo(req, res) {
    req.on("data", (chunk) => {
      const body = JSON.parse(chunk.toString());
      this.todolists.push(body.todo);

      this.getTodolist(req, res);
    });
  }

  // PUT
  putTodolist(req, res) {
    req.on("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolists[body.id] && this.todolists[body.id] != body.todo) {
        this.todolists[body.id] = body.todo;
      }

      this.getTodolist(req, res);
    });
  }

  // DELETE
  delTodolist(req, res) {
    req.on("data", (data) => {
      const body = JSON.parse(data.toString());
      if (this.todolists[body.id]) {
        this.todolists.splice(body.id, 1);
      }

      this.getTodolist(req, res);
    });
  }
}
