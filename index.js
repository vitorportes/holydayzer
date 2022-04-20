import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "1/3/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];

app.get("/holidays", (request, response) => {
  response.send(holidays);
});

app.get("/holidays/:month", (request, response) => {
  const mesRequisitado = request.params.month;
  const feriadosDoMes = holidays.filter((elemento) => {
    return elemento.date.slice(0, 1) === mesRequisitado;
  });
  response.send(feriadosDoMes);
});

app.get("/is-today-holiday", (request, response) => {
  const today = new Date().toLocaleDateString("en-US");
  const isHoliday = holidays.find((elemento) => {
    return elemento.date === today;
  });

  if (isHoliday == undefined) response.send("Não, hoje não é feriado");
  else response.send(`Sim, hoje é ${isHoliday.name}`);
});

app.listen(4000, () => {
  console.log("server running");
});
