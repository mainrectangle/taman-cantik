function initDynamicTable({ tableId, addRowButtonId, columns, renderRow }) {
  const tableBody = document.querySelector(`#${tableId} tbody`);
  const addRowBtn = document.getElementById(addRowButtonId);

  addRowBtn.addEventListener("click", () => {
    const newRow = renderRow();
    tableBody.appendChild(newRow);
  });
}

// Table Tiang Listrik
initDynamicTable({
  tableId: "table-kebutuhan-ruang-dan-kapasitas",
  addRowButtonId: "table-kebutuhan-ruang-dan-kapasitas-addRow",
  renderRow: function () {
    const row = document.createElement("tr");

    const cellBaseClass =
      "border border-gray-300 p-4 w-48 lg:w-full text-left break-words align-middle";
    const leftBorderClass = "border-l-0";
    const rightBorderClass = "border-r-0";

    const createEditableCell = (className = cellBaseClass) => {
      const cell = document.createElement("td");
      cell.className = className;
      cell.contentEditable = true;
      return cell;
    };

    const namaCell = createEditableCell(`${cellBaseClass} ${leftBorderClass}`);
    const kapasitasCell = createEditableCell();
    const jumlahruangCell = createEditableCell();
    const standarluasanCell = createEditableCell();
    const totalluasanCell = createEditableCell();

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
      kapasitasCell,
      jumlahruangCell,
      standarluasanCell,
      totalluasanCell,
      actionCell
    );
    return row;
  },
});
