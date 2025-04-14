const tableBody = document.querySelector("#table-sketsa-keterangan tbody");
const addRowBtn = document.getElementById("table-sketsa-keterangan-addRow");

function getTableData() {
  const rows = tableBody.querySelectorAll("tr");
  const data = [];

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    if (cells.length >= 3) {
      const nama = cells[0].innerText.trim();
      const ukuran = cells[1].innerText.trim();
      const keterangan = cells[2].innerText.trim();
      if (nama || ukuran || keterangan) {
        data.push({ nama, ukuran, keterangan });
      }
    }
  });

  return data;
}

function addRow() {
  const newRow = document.createElement("tr");

  const cellBaseClass =
    "border border-gray-300 p-4 w-1/4 break-words align-top";
  const leftBorderClass = "border-l-0";
  const rightBorderClass = "border-r-0";

  // Nama
  const namaCell = document.createElement("td");
  namaCell.className = `${cellBaseClass} ${leftBorderClass}`;
  namaCell.contentEditable = "true";
  newRow.appendChild(namaCell);

  // Ukuran
  const ukuranCell = document.createElement("td");
  ukuranCell.className = cellBaseClass;
  ukuranCell.contentEditable = "true";
  newRow.appendChild(ukuranCell);

  // Keterangan
  const keteranganCell = document.createElement("td");
  keteranganCell.className = cellBaseClass;
  keteranganCell.contentEditable = "true";
  newRow.appendChild(keteranganCell);

  // Action (delete icon)
  const actionCell = document.createElement("td");
  actionCell.className = `${cellBaseClass} ${rightBorderClass}`;

  // Create wrapper div for icon
  const iconWrapper = document.createElement("div");
  iconWrapper.className =
    "w-fit border border-gray-300 rounded-md p-2 cursor-pointer hover:bg-gray-100";
  iconWrapper.innerHTML = `
<svg class="w-6 h-6 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
  fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
    stroke-width="2"
    d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>
`;

  iconWrapper.addEventListener("click", () => newRow.remove());
  actionCell.appendChild(iconWrapper);
  newRow.appendChild(actionCell);

  tableBody.appendChild(newRow);
}

addRowBtn.addEventListener("click", addRow);
