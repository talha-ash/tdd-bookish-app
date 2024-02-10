// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck //Todo Add Types
import { createServer, Model } from "miragejs";
import { Book } from "./types";
import { ModelDefinition } from "miragejs/-types";

const BookModel: ModelDefinition<Book> = Model.extend({});

export const makeServer = ({ environment = "development" } = {}) =>
  createServer({
    environment,
    models: {
      book: BookModel,
    },

    routes() {
      this.namespace = "api";

      this.get("/books", (schema) => {
        return schema.books.all();
      });

      this.get("/books/:id", (schema, request) => {
        const id = request.params.id;

        return schema.books.find(id);
      });

      this.post("/books", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);

        if (Array.isArray(attrs)) {
          return attrs.map((book) => schema.books.create(book));
        }
        return schema.books.create(attrs);
      });

      this.patch("/books/:id", (schema, request) => {
        const newAttrs = JSON.parse(request.requestBody);
        const id = request.params.id;
        const movie = schema.books.find(id);

        return movie.update(newAttrs);
      });

      this.delete("/books/:id", (schema, request) => {
        const id = request.params.id;

        return schema.books.find(id).destroy();
      });
      this.delete("/books", (schema) => {
        return schema.books.destroy();
      });
    },

    seeds(server) {
      server.create("book", { name: "Refactoring" });
      server.create("book", { name: "Domain-driven design" });
      server.create("book", { name: "Building Microservices" });
    },
  });
