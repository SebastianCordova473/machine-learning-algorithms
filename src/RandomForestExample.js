const { RandomForestRegression } = require("ml-random-forest");

const RandomForestExample = () => {
  const categories = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1];
  const subcategories = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1];
  const kilosFlag = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const wastes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const demands = [100, 120, 150, 180, 200, 220, 250, 280, 300, 340];
  const offers = [80, 100, 120, 140, 160, 180, 200, 220, 240, 260];
  const seasons = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2];
  const sales = [
    50000,
    60000,
    70000,
    80000,
    90000,
    100000,
    110000,
    120000,
    130000,
    140000
  ];

  // Combine the features into a single array of arrays
  const features = wastes.map((waste, index) => [
    waste,
    demands[index],
    seasons[index],
    offers[index],
    categories[index],
    subcategories[index],
    kilosFlag[index],
    products[index]
  ]);

  const rf = new RandomForestRegression({
    nEstimators: 10,
    maxFeatures: 8,
    seed: 42
  });

  rf.train(features, sales);

  const x = [[90, 330, 2, 50, 1, 2, 1, 1]];
  const yTrue = [90, 330, 2, 50, 1, 2, 1, 1];
  const yPred = rf.predict(x);

  // Calculate Mean Squared Error
  const mse =
    yTrue.reduce((acc, cur, i) => acc + (cur - yPred[i]) ** 2, 0) /
    yTrue.length;

  // Calculate Mean Absolute Error
  const mae =
    yTrue.reduce((acc, cur, i) => acc + Math.abs(cur - yPred[i]), 0) /
    yTrue.length;

  // Calculate R-squared value
  const yMean = yTrue.reduce((a, b) => a + b) / yTrue.length;
  const ssRes = yTrue.reduce((acc, cur, i) => acc + (cur - yPred[i]) ** 2, 0);
  const ssTot = yTrue.reduce((acc, cur) => acc + (cur - yMean) ** 2, 0);
  const r2 = 1 - ssRes / ssTot;

  return (
    <div>
      {" "}
      <h1>Modelo de Arboles Aleatorios</h1>
      <p>{`Accuracy: ${r2}`} </p>
      <p>{`The predicted price is: ${yPred}`}</p>
      <p>{`Mean Squared Error: ${mse}`}</p>
      <p>{`Mean Absolute Error: ${mae}`}</p>
    </div>
  );
};

export default RandomForestExample;
