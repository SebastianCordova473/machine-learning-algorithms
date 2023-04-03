import { Matrix } from "ml-matrix";
import moment from "moment"; // Importar Moment.js

const Correlacion = () => {
  // Datos de entrenamiento
  const rawData = [
    [10, 100, "2022-01-01", 1, 1, 1, 1, 1, 0, 0, 1],
    [20, 200, "2022-02-01", 2, 2, 2, 2, 1, 1, 0, 1],
    [30, 300, "2022-03-01", 3, 3, 3, 3, 1, 1, 0, 0],
    [40, 400, "2022-04-01", 4, 4, 4, 4, 1, 1, 0, 0],
    [50, 500, "2022-05-01", 5, 5, 5, 5, 1, 1, 1, 0]
  ];

  // Convertir la fecha en formato "YYYY-MM-DD" a "mes", "día" y "año"
  const data = rawData.map((row) => {
    const date = moment(row[2], "YYYY-MM-DD");
    return [
      ...row.slice(0, 2),
      date.month() + 1,
      date.date(),
      date.year(),
      ...row.slice(3)
    ];
  });

  // Crear una matriz a partir de los datos preprocesados
  const X = new Matrix(data);

  // Calcular la matriz de correlación
  const corrMatrix = X.transpose().mmul(X).div(X.rows);

  // Seleccionar las características con alta correlación
  const selectedFeatures = [];
  const threshold = 0.8; // Umbral de correlación
  for (let i = 0; i < corrMatrix.rows; i++) {
    for (let j = i + 1; j < corrMatrix.columns; j++) {
      const corr = corrMatrix.get(i, j);
      if (corr > threshold) {
        selectedFeatures.push(j);
        break;
      }
    }
  }

  // Seleccionar las características en el eje X
  const selectedFeaturesX = selectedFeatures.filter((i) => i < X.columns);

  console.log("Características seleccionadas:", selectedFeaturesX);
};

export default Correlacion;
