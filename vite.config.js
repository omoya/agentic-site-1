import fs from "fs";

// Clear the error log file at the start of each run
const errorLogPath = "./error-log.txt";
fs.writeFileSync(errorLogPath, "", "utf8");

export default {
  plugins: [
    {
      name: "error-logger",
      configureServer(server) {
        server.middlewares.use((err, req, res, next) => {
          if (err) {
            const errorMessage = `${new Date().toISOString()} - ${
              err.message
            }\n`;
            fs.appendFileSync(errorLogPath, errorMessage, "utf8");
          }
          next(err);
        });
      },
    },
  ],
};
