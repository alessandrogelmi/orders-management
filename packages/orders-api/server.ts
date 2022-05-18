const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/test", (req: any, res: any) => {
  res.send("Test OK!");
});

app.get("/orders", (req: any, res: any) => {
  const order = [
    {
      id: 1,
      numero: "845-001-4590",
      dataOrdine: "2022-03-28",
      totale: 259.88,
      cliente: {
        id: 210,
        nominativo: "Armando Esposito",
      },
      listProdotti: [
        {
          id: 9,
          descr: "descr9",
          prezzo: 99.98,
        },
        {
          id: 66,
          descr: "descr66",
          prezzo: 159.9,
        },
      ],
    },
    {
      id: 2,
      numero: "845-001-8796",
      dataOrdine: "2022-04-12",
      totale: 100,
      cliente: {
        id: 180,
        nominativo: "Alberto Angiolini",
      },
      listProdotti: [
        {
          id: 2,
          descr: "descr78",
          prezzo: 50,
        },
        {
          id: 15,
          descr: "descr41",
          prezzo: 5,
        },
      ],
    },
  ];

  res.send(order);
});

app.listen(port, () => {
  console.log("Server listen on port " + port);
});
