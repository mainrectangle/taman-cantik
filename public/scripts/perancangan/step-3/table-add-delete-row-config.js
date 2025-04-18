function initDynamicTable({ tableId, addRowButtonId, columns, renderRow }) {
  const tableBody = document.querySelector(`#${tableId} tbody`);
  const addRowBtn = document.getElementById(addRowButtonId);

  addRowBtn.addEventListener("click", () => {
    const newRow = renderRow();
    tableBody.appendChild(newRow);
  });
}

initDynamicTable({
  tableId: "table-diskusi-identifikasi-isu-dan-permasalahan",
  addRowButtonId: "table-diskusi-identifikasi-isu-dan-permasalahan-addRow",
  renderRow: function () {
    const row = document.createElement("tr");

    const cellNumberClass =
      "border border-gray-300 p-4 w-16 text-left break-words align-middle";
    const cellBaseClass =
      "border border-gray-300 p-4 w-48 md:w-full text-left break-words align-middle";
    const leftBorderClass = "border-l-0";
    const rightBorderClass = "border-r-0";

    const createEditableNumberCell = (className = cellNumberClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const createEditableCell = (className = cellBaseClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const numberCell = createEditableNumberCell(
      `${cellNumberClass} ${leftBorderClass}`
    );
    const diskusiCell = createEditableCell();
    const masalahCell = createEditableCell();

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

    row.append(numberCell, diskusiCell, masalahCell, actionCell);
    return row;
  },
});

initDynamicTable({
  tableId: "table-diskusi-identifikasi-kegiatan-yang-dibutuhkan",
  addRowButtonId:
    "table-diskusi-diskusi-identifikasi-kegiatan-yang-dibutuhkan-addRow",
  renderRow: function () {
    const row = document.createElement("tr");

    const cellNumberClass =
      "border border-gray-300 p-4 w-16 text-left break-words align-middle";
    const cellBaseClass =
      "border border-gray-300 p-4 w-48 md:w-full text-left break-words align-middle";
    const leftBorderClass = "border-l-0";
    const rightBorderClass = "border-r-0";

    const createEditableNumberCell = (className = cellNumberClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const createEditableCell = (className = cellBaseClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const numberCell = createEditableNumberCell(
      `${cellNumberClass} ${leftBorderClass}`
    );
    const diskusiCell = createEditableCell();
    const masalahCell = createEditableCell();

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

    row.append(numberCell, diskusiCell, masalahCell, actionCell);
    return row;
  },
});

initDynamicTable({
  tableId: "table-diskusi-identifikasi-fasilitas-yang-dibutuhkan",
  addRowButtonId:
    "table-diskusi-diskusi-identifikasi-fasilitas-yang-dibutuhkan-addRow",
  renderRow: function () {
    const row = document.createElement("tr");

    const cellNumberClass =
      "border border-gray-300 p-4 w-16 text-left break-words align-middle";
    const cellBaseClass =
      "border border-gray-300 p-4 w-48 md:w-full text-left break-words align-middle";
    const leftBorderClass = "border-l-0";
    const rightBorderClass = "border-r-0";

    const createEditableNumberCell = (className = cellNumberClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const createEditableCell = (className = cellBaseClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const numberCell = createEditableNumberCell(
      `${cellNumberClass} ${leftBorderClass}`
    );
    const diskusiCell = createEditableCell();
    const masalahCell = createEditableCell();

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

    row.append(numberCell, diskusiCell, masalahCell, actionCell);
    return row;
  },
});
