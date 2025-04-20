function initDynamicTable({ tableId, addRowButtonId, columns, renderRow }) {
  const tableBody = document.querySelector(`#${tableId} tbody`);
  const addRowBtn = document.getElementById(addRowButtonId);

  addRowBtn.addEventListener("click", () => {
    const newRow = renderRow();
    tableBody.appendChild(newRow);
  });
}

// Table Zonasi
let table2RowIndex = 0; // Starting index based on initial static rows
initDynamicTable({
  tableId: "table-ukuran-gerak-dalam-desain-universal",
  addRowButtonId: "table-ukuran-gerak-dalam-desain-universal-addRow",
  renderRow: function () {
    table2RowIndex++;
    const row = document.createElement("tr");

    const enableClass = "border border-gray-300 p-4 text-center align-top";
    const disabledClass =
      "border border-gray-300 p-4 text-center align-top text-gray-400 bg-gray-200";

    const disabledPojokClass = `${disabledClass} border-r-0`;

    const numberCell = document.createElement("td");
    numberCell.className =
      "border border-l-0 border-gray-300 p-4 w-64 md:w-full break-words align-top";

    const namaCell = document.createElement("td");
    namaCell.className =
      "border border-l-0 border-gray-300 p-4 w-64 md:w-full break-words align-top";

    const adaCell = document.createElement("td");
    adaCell.className = enableClass;
    adaCell.innerHTML = `<input type="radio" name="ptjp-aplikasi-row-8-${table2RowIndex}" value="true" class="w-5 h-5 text-blue-500" />`;

    const tidakAdaCell = document.createElement("td");
    tidakAdaCell.className = enableClass;
    tidakAdaCell.innerHTML = `<input type="radio" name="ptjp-aplikasi-row-8-${table2RowIndex}" value="false" class="w-5 h-5 text-blue-500" />`;

    const sesuaiCell = document.createElement("td");
    sesuaiCell.className = disabledClass;
    sesuaiCell.innerHTML = `<input type="radio" name="ptjp-kesesuaian-row-8-${table2RowIndex}" value="true" class="w-5 h-5 text-blue-500 bg-gray-200" />`;

    const tidakSesuaiCell = document.createElement("td");
    tidakSesuaiCell.className = disabledPojokClass;
    tidakSesuaiCell.innerHTML = `<input type="radio" name="ptjp-kesesuaian-row-8-${table2RowIndex}" value="false" class="w-5 h-5 text-blue-500 bg-gray-200" />`;

    row.append(
      numberCell,
      namaCell,
      adaCell,
      tidakAdaCell,
      sesuaiCell,
      tidakSesuaiCell
    );
    return row;
  },
});

// Table RBRA
let table4RowIndex = 0; // Starting index based on initial static rows
initDynamicTable({
  tableId: "table-persyaratan-rbra-bagian-3",
  addRowButtonId: "table-persyaratan-rbra-bagian-3-addRow",
  renderRow: function () {
    table4RowIndex++;
    const row = document.createElement("tr");

    const enableClass = "border border-gray-300 p-4 text-center align-top";
    const disabledClass =
      "border border-gray-300 p-4 text-center align-top text-gray-400 bg-gray-200";

    const disabledPojokClass = `${disabledClass} border-r-0`;

    const numberCell = document.createElement("td");
    numberCell.className =
      "border border-l-0 border-gray-300 p-4 w-64 md:w-full break-words align-top";

    const namaCell = document.createElement("td");
    namaCell.className =
      "border border-gray-300 p-4 w-64 md:w-full break-words align-top";

    const kriteriaCell = document.createElement("td");
    kriteriaCell.className =
      "border border-gray-300 p-4 w-64 md:w-full break-words align-top";

    const wajibCell = document.createElement("td");
    wajibCell.className = disabledClass;
    wajibCell.innerHTML = `<input type="radio" name="rbra-bag3-wajib-row-1-3-${table4RowIndex}" value="true" class="w-5 h-5 text-blue-500 bg-gray-200" disabled />`;

    const tidakWajibCell = document.createElement("td");
    tidakWajibCell.className = disabledClass;
    tidakWajibCell.innerHTML = `<input type="radio" name="rbra-bag3-wajib-row-1-3-${table4RowIndex}" value="false" class="w-5 h-5 text-blue-500 bg-gray-200" disabled />`;

    const adaCell = document.createElement("td");
    adaCell.className = enableClass;
    adaCell.innerHTML = `<input type="radio" name="rbra-bag3-aplikasi-row-1-3-${table4RowIndex}" value="true" class="w-5 h-5 text-blue-500" />`;

    const tidakAdaCell = document.createElement("td");
    tidakAdaCell.className = enableClass;
    tidakAdaCell.innerHTML = `<input type="radio" name="rbra-bag3-aplikasi-row-1-3-${table4RowIndex}" value="false" class="w-5 h-5 text-blue-500" />`;

    const sesuaiCell = document.createElement("td");
    sesuaiCell.className = disabledClass;
    sesuaiCell.innerHTML = `<input type="radio" name="rbra-bag3-kesesuaian-row-1-3-${table4RowIndex}" value="true" class="w-5 h-5 text-blue-500 bg-gray-200" disabled />`;

    const tidakSesuaiCell = document.createElement("td");
    tidakSesuaiCell.className = disabledPojokClass;
    tidakSesuaiCell.innerHTML = `<input type="radio" name="rbra-bag3-kesesuaian-row-1-3-${table4RowIndex}" value="false" class="w-5 h-5 text-blue-500 bg-gray-200" disabled />`;

    row.append(
      // numberCell,
      // namaCell,
      kriteriaCell,
      wajibCell,
      tidakWajibCell,
      adaCell,
      tidakAdaCell,
      sesuaiCell,
      tidakSesuaiCell
    );
    return row;
  },
});
