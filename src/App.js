import LinearRegression from "./LinearRegression";
import ModeloRedNeuronal from "./ModeloRedNeuronal";
import MultipleLinearRegression from "./MultipleLinearRegression";
import RandomForestExample from "./RandomForestExample";
import Clasificacion from "./Clasificacion";
import Correlacion from "./Correlacion";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Correlacion></Correlacion>
      <Clasificacion></Clasificacion>
      <ModeloRedNeuronal></ModeloRedNeuronal>
      <RandomForestExample></RandomForestExample>
      <LinearRegression></LinearRegression>
      <MultipleLinearRegression></MultipleLinearRegression>
    </div>
  );
}
