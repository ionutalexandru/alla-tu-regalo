import "./App.css";
import Game from "./components/Game";

const shuffleStrArr = list => list.map(value => ({value, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(({value}) => value)
const shuffleObjArr = list => list.map(value => ({...value, sort: Math.random()})).sort((a, b) => a.sort - b.sort).map(({sort, ...value}) => ({...value}))

const prizes = [
  "Viaje a París",
  "Smartphone",
  "Ordenador portátil",
  "Televisor de 55 pulgadas",
  "Bicicleta de montaña",
  "Vale de compras de $500",
  "Consola de videojuegos",
  "Auriculares inalámbricos",
  "Reloj inteligente",
  "Cámara fotográfica",
  "Tablet",
  "Cafetera de alta gama",
  "Bono de spa para dos",
  "Suscripción anual a un servicio de streaming",
  "Cena en un restaurante de lujo"
]

const names = shuffleStrArr(["Sofía",
  "Mateo",
  "Valeria",
  "Lucas",
  "Martina",
  "Diego",
  "Camila",
  "Liam",
  "Isabella",
  "Daniel",
  "Ana",
  "Miguel",
  "Elena",
  "Gabriel",
  "Laura"
])


const formatPrizes = prizes => {
  return shuffleObjArr(prizes.map((value, key) => ({label: names[key], key, sort: key, value })))
}


function App() {
  const initBoxes = formatPrizes(prizes)
    .map((item) => ({ ...item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort);
  return (
    <main>
      <Game initBoxes={initBoxes} />
    </main>
  );
}

export default App;
