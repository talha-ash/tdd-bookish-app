import nodemon from "nodemon";

const { on, once } = nodemon;
nodemon({
  script: "./app.js",
  env: {
    PORT: 4000,
  },
  ext: "js, json",
  watch: ["./*"],
  ignore: ["server.js"],
  delay: 1000,
});

on("start", () => {
  console.log("Started API Server...");
}).on("restart", (files) => {
  console.log(
    "Watcher has detected files have changed. API Server restarted..."
  );
});

process.once("SIGINT", () => {
  once("exit", () => {
    console.log("nodemon has cleanly exited");
    process.exit();
  });
});
