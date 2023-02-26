function pergiKeTab2() {
  let numberInput = document.getElementById("numberInput").value;
  if (numberInput >= 1 && numberInput <= 10000) {
    document.getElementById("tab2").classList.add("active");
    document.getElementById("tab2").classList.remove("tab");
    document.getElementById("numberInput").disabled = true;
  }
}

function generateTable() {
  let table = document.getElementById("randomTable");
  let numberInput = document.getElementById("numberInput").value;
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }
  for (var i = 0; i < numberInput; i++) {
    let row = table.insertRow(i);
    let cell = row.insertCell(0);
    let randomNumber = Math.floor(Math.random() * (2000000 + 1)) - 1000000;
    cell.innerHTML = randomNumber;
  }
}

function goToTab3() {
  document.getElementById("tab3").classList.add("active");
  document.getElementById("tab3").classList.remove("tab");
}

function findSmallestPositive() {
  let table = document.getElementById("randomTable");
  let largestNumber = 0;
  let numbers = new Set();

  // mencari nilai terbesar pada tabel dan menyimpan angka-angka pada tabel ke dalam sebuah Set
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      const cellValue = parseInt(table.rows[i].cells[j].innerHTML);
      if (cellValue > largestNumber) {
        largestNumber = cellValue;
      }
      numbers.add(cellValue);
    }
  }

  // mencari nilai terkecil positif yang tidak ada pada tabel
  let smallestPositive = 1;
  while (numbers.has(smallestPositive)) {
    smallestPositive++;
  }

  const result = document.getElementById("result");
  result.innerHTML = `Angka Terkecil yang Tidak Ada di Dalam Tabel Adalah : ${smallestPositive}.`;
}
