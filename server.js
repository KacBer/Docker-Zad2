const http = require("http");

const server = http.createServer((req, res) => {
  const { headers, method, url } = req;
  const ip = req.connection.remoteAddress;

  console.log("Serwer uruchomiony!");
  console.log(`Data uruchomienia: ${new Date().toLocaleString()}`);
  console.log(`Autor serwera: Kacper Berliński`);
  console.log(`Port nasłuchiwania: 3000`);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`
    <html>
      <head>
        <title>Informacje o kliencie</title>
      </head>
      <body>
        <h1>Adres IP klienta: ${ip}</h1>
        <h2>Data i godzina w strefie czasowej klienta: ${new Date().toLocaleString()}</h2>
      </body>
    </html>
  `);
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Serwer nasłuchuje na porcie 3000");
});
