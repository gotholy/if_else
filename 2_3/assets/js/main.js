function diff(num) {
  let differenz = num - 27;
  if (differenz > 0) {
    differenz *= 2;
  }
  return differenz;
}

const zahlen = [35, 74, 123];
zahlen.forEach((zahl) => {
  const ergebnis = diff(zahl);
  console.log(`Für die Zahl ${zahl}: ${ergebnis}`);
});
