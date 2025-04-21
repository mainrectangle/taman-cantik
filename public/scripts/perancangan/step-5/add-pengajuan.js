function initDynamicCardList({
  containerId,
  addButtonId,
  drawerId,
  infoCardId,
  statusLabelId,
  defaultAuthor = "Admin",
  section,
  getTitle = (count) => `Belum ada judul ${count}`,
  getStatus = () => "Belum diajukan",
}) {
  let rowCount = 0;

  const container = document.getElementById(containerId);
  const addButton = document.getElementById(addButtonId);
  const drawer = document.getElementById(drawerId);
  const infoCard = document.getElementById(infoCardId);
  const statusLabel = document.querySelector(`#${statusLabelId} span.belum`);

  function getFormattedDateTime() {
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const now = new Date();
    const dayName = days[now.getDay()];
    const date = now.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const time = now.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return `${dayName}, ${date} pukul ${time}`;
  }

  function showDrawer() {
    drawer.classList.remove("translate-x-full");
    drawer.classList.add("translate-x-0");
    drawer.setAttribute("aria-hidden", "false");

    if (!document.getElementById("drawer-backdrop")) {
      const backdrop = document.createElement("div");
      backdrop.id = "drawer-backdrop";
      backdrop.className = "bg-gray-900/50 fixed inset-0 z-30";
      backdrop.addEventListener("click", hideDrawer);
      document.body.appendChild(backdrop);
    }
  }

  function hideDrawer() {
    drawer.classList.add("translate-x-full");
    drawer.classList.remove("translate-x-0");
    drawer.setAttribute("aria-hidden", "true");
    const backdrop = document.getElementById("drawer-backdrop");
    if (backdrop) backdrop.remove();
  }

  // Hook drawer close
  const drawerCloseBtn = drawer.querySelector("[data-drawer-hide]");
  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener("click", hideDrawer);
  }

  addButton.addEventListener("click", () => {
    rowCount++;

    const title = getTitle(rowCount);
    const dateTime = getFormattedDateTime();
    const author = defaultAuthor;
    const sectionname = section;
    const status = getStatus();

    const card = document.createElement("button");
    card.setAttribute("type", "button");
    card.setAttribute("aria-controls", drawerId);
    card.setAttribute("data-drawer-target", drawerId);
    card.setAttribute("data-drawer-show", drawerId);
    card.setAttribute("data-drawer-placement", "right");
    card.className =
      "lg:flex justify-between px-4 py-5 w-full text-left border border-gray-300 rounded-lg";

    card.dataset.title = title;
    card.dataset.datetime = dateTime;
    card.dataset.author = author;
    card.dataset.status = status;
    card.dataset.sectionname = sectionname;

    card.innerHTML = `
      <div>
        <h4 class="font-bold">${title}</h4>
        <p class="mt-1 mb-2 lg:mb-0 text-sm italic text-gray-500 dark:text-gray-400">
          Terakhir diperbarui pada
          <span class="date-time-span">${dateTime}</span>
          oleh
          <span class="text-blue-500 font-bold">${author}</span>
        </p>
      </div>
      <span class="flex gap-1 font-medium w-fit h-fit items-center text-gray-500 text-sm border-2 border-gray-300 bg-gray-50 rounded-full py-1 px-2">
        <svg class="w-4 h-4 text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
        </svg>
        ${status}
      </span>`;

    card.addEventListener("click", function () {
      infoCard.querySelector("p.mb-2").textContent = this.dataset.sectionname;
      infoCard.querySelector("h5").textContent = this.dataset.title;
      infoCard.querySelector(".date-time-span").textContent =
        this.dataset.datetime;
      infoCard.querySelector("span.text-blue-500").textContent =
        this.dataset.author;
      const badge = infoCard.querySelector("span.belum");
      if (badge) {
        badge.innerHTML = `
          <svg class="w-4 h-4 text-gray-500 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"/>
          </svg>
          ${this.dataset.status}`;
      }
      showDrawer();
    });

    container.appendChild(card);
    if (statusLabel) {
      statusLabel.className = `belum flex gap-1 font-medium w-fit h-fit items-center text-gray-500 text-sm border-2 border-gray-300 bg-gray-50 rounded-full py-1 px-2`;
      statusLabel.innerHTML = `
      <svg
                    class="w-4 h-4 text-gray-500 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 3v4a1 1 0 0 1-1 1H5m14-4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"
                    />
                  </svg>
                  <span>${rowCount} ${status}</span>`;
    }
  });
}

initDynamicCardList({
  containerId: "pengajuan-gambar-arsitektur",
  addButtonId: "pengajuan-gambar-arsitektur-addRow",
  drawerId: "drawer-belum-diajukan",
  infoCardId: "info-pengajuan",
  statusLabelId: "status-pengajuan-gambar-arsitektur",
  defaultAuthor: "Cahyo Rianto",
  section: "Gambar Arsitektur",
});

initDynamicCardList({
  containerId: "pengajuan-gambar-sipil",
  addButtonId: "pengajuan-gambar-sipil-addRow",
  drawerId: "drawer-belum-diajukan",
  infoCardId: "info-pengajuan",
  statusLabelId: "status-pengajuan-gambar-sipil",
  defaultAuthor: "Cahyo Rianto",
  section: "Gambar Sipil",
});

initDynamicCardList({
  containerId: "pengajuan-gambar-me",
  addButtonId: "pengajuan-gambar-me-addRow",
  drawerId: "drawer-belum-diajukan",
  infoCardId: "info-pengajuan",
  statusLabelId: "status-pengajuan-gambar-me",
  defaultAuthor: "Cahyo Rianto",
  section: "Gambar ME",
});

initDynamicCardList({
  containerId: "pengajuan-gambar-lanskap",
  addButtonId: "pengajuan-gambar-lanskap-addRow",
  drawerId: "drawer-belum-diajukan",
  infoCardId: "info-pengajuan",
  statusLabelId: "status-pengajuan-gambar-lanskap",
  defaultAuthor: "Cahyo Rianto",
  section: "Gambar Lanskap",
});

initDynamicCardList({
  containerId: "pengajuan-analisa-harga",
  addButtonId: "pengajuan-analisa-harga-addRow",
  drawerId: "drawer-belum-diajukan",
  infoCardId: "info-pengajuan",
  statusLabelId: "status-pengajuan-analisa-harga",
  defaultAuthor: "Cahyo Rianto",
  section: "Analisa Harga",
});

initDynamicCardList({
  containerId: "pengajuan-analisa-volume",
  addButtonId: "pengajuan-analisa-volume-addRow",
  drawerId: "drawer-belum-diajukan",
  infoCardId: "info-pengajuan",
  statusLabelId: "status-pengajuan-analisa-volume",
  defaultAuthor: "Cahyo Rianto",
  section: "Analisa Volume",
});

initDynamicCardList({
  containerId: "pengajuan-rencana-anggaran-biaya",
  addButtonId: "pengajuan-rencana-anggaran-biaya-addRow",
  drawerId: "drawer-belum-diajukan",
  infoCardId: "info-pengajuan",
  statusLabelId: "status-pengajuan-rencana-anggaran-biaya",
  defaultAuthor: "Cahyo Rianto",
  section: "Rencana Anggaran Biaya (RAB)",
});

initDynamicCardList({
  containerId: "pengajuan-spesifikasi-teknis",
  addButtonId: "pengajuan-spesifikasi-teknis-addRow",
  drawerId: "drawer-belum-diajukan",
  infoCardId: "info-pengajuan",
  statusLabelId: "status-pengajuan-spesifikasi-teknis",
  defaultAuthor: "Cahyo Rianto",
  section: "Spesifikasi Teknis",
});
