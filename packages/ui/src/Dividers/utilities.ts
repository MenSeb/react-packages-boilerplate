export const ratioFullScreen = [400, 300];
export const ratioWideScreen = [1600, 900];

export function fixedNumber(number: number, digits = 2) {
  return Number.isInteger(number) ? number : number.toFixed(digits);
}

export function createPathCommands({
  height,
  width,
  numberOfWaves,
  ratioStart,
  ratioEnd,
}: {
  height: number;
  numberOfWaves: number;
  ratioEnd: number;
  ratioStart: number;
  width: number;
}) {
  const points = [`M0 ${height}`];

  const step = width / (numberOfWaves + 1);

  const heightStart = ratioStart * height;

  if (heightStart !== height) points.push(`V${fixedNumber(heightStart)}`);

  for (let i = 0; i < numberOfWaves; i++) {
    const x = fixedNumber(step * (i + 1));
    const y = fixedNumber(Math.random() * height);
    const point = `L${x} ${y}`;

    points.push(point);
  }

  const heightEnd = ratioEnd * height;

  points.push(
    `L${width} ${heightEnd === height ? height : fixedNumber(heightEnd)}`,
  );

  if (heightEnd !== height) points.push(`V${height}`);

  return points.join('') + 'z';
}
