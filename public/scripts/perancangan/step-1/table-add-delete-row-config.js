function initDynamicTable({ tableId, addRowButtonId, columns, renderRow }) {
  const tableBody = document.querySelector(`#${tableId} tbody`);
  const addRowBtn = document.getElementById(addRowButtonId);

  addRowBtn.addEventListener("click", () => {
    const newRow = renderRow();
    tableBody.appendChild(newRow);
  });
}

// Table Keterangan Sketsa
initDynamicTable({
  tableId: "table-sketsa-keterangan",
  addRowButtonId: "table-sketsa-keterangan-addRow",
  renderRow: function () {
    const row = document.createElement("tr");

    const cellBaseClass =
      "border border-gray-300 p-4 w-32 md:w-full break-words align-top";
    const leftBorderClass = "border-l-0";
    const rightBorderClass = "border-r-0 w-16";

    const createEditableCell = (className = cellBaseClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const namaCell = createEditableCell(`${cellBaseClass} ${leftBorderClass}`);
    const ukuranCell = createEditableCell();
    const keteranganCell = createEditableCell();

    const actionCell = document.createElement("td");
    actionCell.className = `${cellBaseClass} ${rightBorderClass}`;
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
    iconWrapper.addEventListener("click", () => row.remove());
    actionCell.appendChild(iconWrapper);

    row.append(namaCell, ukuranCell, keteranganCell, actionCell);
    return row;
  },
});

// Table Zonasi
let table2RowIndex = 8; // Starting index based on initial static rows
initDynamicTable({
  tableId: "table-zonasi-sekitar-site",
  addRowButtonId: "table-zonasi-sekitar-site-addRow",
  renderRow: function () {
    table2RowIndex++;
    const row = document.createElement("tr");

    const cellClass = "border border-gray-300 p-4 text-center align-top";

    const namaCell = document.createElement("td");
    namaCell.className =
      "border border-l-0 border-gray-300 p-4 w-64 md:w-full break-words align-top";
    namaCell.contentEditable = true;

    const adaCell = document.createElement("td");
    adaCell.className = cellClass;
    adaCell.innerHTML = `<input type="radio" name="status-row-${table2RowIndex}" value="Ada" class="w-5 h-5 text-blue-500" />`;

    const tidakAdaCell = document.createElement("td");
    tidakAdaCell.className = cellClass;
    tidakAdaCell.innerHTML = `<input type="radio" name="status-row-${table2RowIndex}" value="Tidak Ada" class="w-5 h-5 text-blue-500" />`;

    const actionCell = document.createElement("td");
    actionCell.className =
      "border border-r-0 border-gray-300 p-4 w-16 break-words align-top";
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
    iconWrapper.addEventListener("click", () => row.remove());
    actionCell.appendChild(iconWrapper);

    row.append(namaCell, adaCell, tidakAdaCell, actionCell);
    return row;
  },
});

// Table Bangunan Penting
let table3RowIndex = 5;
initDynamicTable({
  tableId: "table-bangunan-penting-sekitar-site", // <- Your new table ID
  addRowButtonId: "table-bangunan-penting-sekitar-site-addRow", // <- Your new button ID
  renderRow: function () {
    table3RowIndex++;
    const row = document.createElement("tr");

    const cellClass = "border border-gray-300 p-4 text-center align-top";

    const namaCell = document.createElement("td");
    namaCell.className =
      "border border-l-0 border-gray-300 p-4 w-64 md:w-full break-words align-top";
    namaCell.contentEditable = true;

    const adaCell = document.createElement("td");
    adaCell.className = cellClass;
    adaCell.innerHTML = `<input type="radio" name="status-dalam-row-${table3RowIndex}" value="Ada" class="w-5 h-5 text-blue-500" />`;

    const tidakAdaCell = document.createElement("td");
    tidakAdaCell.className = cellClass;
    tidakAdaCell.innerHTML = `<input type="radio" name="status-dalam-row-${table3RowIndex}" value="Tidak Ada" class="w-5 h-5 text-blue-500" />`;

    const actionCell = document.createElement("td");
    actionCell.className =
      "border border-r-0 border-gray-300 p-4 w-16 break-words align-top";

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
    iconWrapper.addEventListener("click", () => row.remove());
    actionCell.appendChild(iconWrapper);

    row.append(namaCell, adaCell, tidakAdaCell, actionCell);
    return row;
  },
});

// Table Aksesibilitas
initDynamicTable({
  tableId: "table-aksesibilitas",
  addRowButtonId: "table-aksesibilitas-addRow",
  renderRow: function () {
    const row = document.createElement("tr");

    const cellBaseClass =
      "border border-gray-300 p-4 w-48 md:w-full text-left break-words align-middle";
    const leftBorderClass = "border-l-0";
    const rightBorderClass = "border-r-0";

    const createEditableCell = (className = cellBaseClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const keteranganCell = createEditableCell(
      `${cellBaseClass} ${leftBorderClass}`
    );
    const jarakCell = createEditableCell();

    const actionCell = document.createElement("td");
    actionCell.className = `${cellBaseClass} ${rightBorderClass}`;
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
    iconWrapper.addEventListener("click", () => row.remove());
    actionCell.appendChild(iconWrapper);

    row.append(keteranganCell, jarakCell, actionCell);
    return row;
  },
});

// Table Perkerasan Eksisting
initDynamicTable({
  tableId: "table-perkerasan-eksisting",
  addRowButtonId: "table-perkerasan-eksisting-addRow",
  renderRow: function () {
    const row = document.createElement("tr");

    const cellBaseClass =
      "border border-gray-300 p-4 w-48 md:w-full text-left break-words align-middle";
    const leftBorderClass = "border-l-0";
    const rightBorderClass = "border-r-0";

    const createEditableCell = (className = cellBaseClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const namaCell = createEditableCell(`${cellBaseClass} ${leftBorderClass}`);
    const panjangCell = createEditableCell();
    const lebarCell = createEditableCell();
    const tinggiCell = createEditableCell();
    const keteranganCell = createEditableCell();

    const actionCell = document.createElement("td");
    actionCell.className = `${cellBaseClass} ${rightBorderClass}`;
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
    iconWrapper.addEventListener("click", () => row.remove());
    actionCell.appendChild(iconWrapper);

    row.append(
      namaCell,
      panjangCell,
      lebarCell,
      tinggiCell,
      keteranganCell,
      actionCell
    );
    return row;
  },
});

// Table Drainase Riol Kota
initDynamicTable({
  tableId: "table-drainase-riol-kota",
  addRowButtonId: "table-drainase-riol-kota-addRow",
  renderRow: function () {
    const row = document.createElement("tr");

    const cellBaseClass =
      "border border-gray-300 p-4 w-48 md:w-full text-left break-words align-middle";
    const leftBorderClass = "border-l-0";
    const rightBorderClass = "border-r-0";

    const createEditableCell = (className = cellBaseClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const keteranganCell = createEditableCell(
      `${cellBaseClass} ${leftBorderClass}`
    );
    const jarakCell = createEditableCell();

    const actionCell = document.createElement("td");
    actionCell.className = `${cellBaseClass} ${rightBorderClass}`;
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
    iconWrapper.addEventListener("click", () => row.remove());
    actionCell.appendChild(iconWrapper);

    row.append(keteranganCell, jarakCell, actionCell);
    return row;
  },
});

// Table Genangan/Potensi Genangan
initDynamicTable({
  tableId: "table-genangan-potensi-genangan",
  addRowButtonId: "table-genangan-potensi-genangan-addRow",
  renderRow: function () {
    const row = document.createElement("tr");

    const cellBaseClass =
      "border border-gray-300 p-4 w-48 md:w-full text-left break-words align-middle";
    const leftBorderClass = "border-l-0";
    const rightBorderClass = "border-r-0";

    const createEditableCell = (className = cellBaseClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const keteranganCell = createEditableCell(
      `${cellBaseClass} ${leftBorderClass}`
    );
    const jarakCell = createEditableCell();

    const actionCell = document.createElement("td");
    actionCell.className = `${cellBaseClass} ${rightBorderClass}`;
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
    iconWrapper.addEventListener("click", () => row.remove());
    actionCell.appendChild(iconWrapper);

    row.append(keteranganCell, jarakCell, actionCell);
    return row;
  },
});

// Table Tiang Listrik
initDynamicTable({
  tableId: "table-tiang-listrik-di-dalam-site",
  addRowButtonId: "table-tiang-listrik-di-dalam-site-addRow",
  renderRow: function () {
    const row = document.createElement("tr");

    const cellBaseClass =
      "border border-gray-300 p-4 w-48 md:w-full text-left break-words align-middle";
    const leftBorderClass = "border-l-0";
    const rightBorderClass = "border-r-0";

    const createEditableCell = (className = cellBaseClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const keteranganCell = createEditableCell(
      `${cellBaseClass} ${leftBorderClass}`
    );
    const jarakCell = createEditableCell();

    const actionCell = document.createElement("td");
    actionCell.className = `${cellBaseClass} ${rightBorderClass}`;
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
    iconWrapper.addEventListener("click", () => row.remove());
    actionCell.appendChild(iconWrapper);

    row.append(keteranganCell, jarakCell, actionCell);
    return row;
  },
});
