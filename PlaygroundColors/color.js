// rechne die Werte Werte 153, 204, 0, 255 von Dezimal in Hexadezimal um und gib sie auf der Console aus

decimalToHexadecimal(153); // 99
decimalToHexadecimal(204); // cc
decimalToHexadecimal(0); // 0
decimalToHexadecimal(255); //ff
decimalToHexadecimal("Fehler"); // Fehler

// rechne die Werte Werte cc, 0, 66  von Hexadezimal in Dezimal um und gib sie auf der Console aus

hexadecimalToDecimal("cc"); // 204
hexadecimalToDecimal(0); // 0
hexadecimalToDecimal(66); // 102
hexadecimalToDecimal("zz"); //Fehler

// functions
function printResult(valueDecimal, valueHexadecimal) {
  console.log(`Dezimal ${valueDecimal} ist in Hexadezimal ${valueHexadecimal} `);
}

function decimalToHexadecimal(decimalValue) {
  if (typeof decimalValue == "number") {
    let hexValue = decimalValue.toString(16); // Basis 16 für Hexadezimal
    printResult(decimalValue, hexValue);
  } else {
    console.log("Fehler: kein gültiger dezimal-Wert eingegeben!");
  }
}

function hexadecimalToDecimal(hexValue) {
  let decimalValue = parseInt(hexValue, 16); // Basis 16 für Hexadezimal
  if (!isNaN(decimalValue)) {
    printResult(decimalValue, hexValue);
  } else {
    console.log("Fehler: kein gültiger hexadezimal-Wert eingegeben!");
  }
}
