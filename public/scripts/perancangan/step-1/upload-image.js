function initImageUpload({ inputId, uploadAreaId, previewContainerId }) {
  const input = document.getElementById(inputId);
  const uploadArea = document.getElementById(uploadAreaId);
  const previewContainer = document.getElementById(previewContainerId);
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeModal = document.getElementById("close-modal");

  uploadArea.addEventListener("click", () => input.click());

  input.addEventListener("change", () => {
    Array.from(input.files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const imgWrapper = document.createElement("div");
        imgWrapper.className = "relative w-24 h-24";

        const img = document.createElement("img");
        img.src = reader.result;
        img.className = "object-cover w-full h-full rounded cursor-pointer";
        img.addEventListener("click", () => {
          modalImg.src = reader.result;
          modal.className =
            "fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center";
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.innerHTML = `
        <svg class="w-4 h-4 text-white dark:text-white" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
        </svg>`;
        deleteBtn.className =
          "absolute -top-3 -right-3 bg-red-500 rounded-full p-1 shadow-md";

        deleteBtn.addEventListener("click", () => {
          imgWrapper.remove();
        });

        imgWrapper.appendChild(img);
        imgWrapper.appendChild(deleteBtn);
        previewContainer.appendChild(imgWrapper);
      };
      reader.readAsDataURL(file);
    });
  });

  closeModal.addEventListener(
    "click",
    () => (modal.className = "fixed inset-0 z-50 bg-black bg-opacity-75 hidden")
  );
}

// Call the function for each upload field
initImageUpload({
  inputId: "sketsa-gambar",
  uploadAreaId: "upload-sketsa-gambar",
  previewContainerId: "preview-sketsa-gambar",
});

initImageUpload({
  inputId: "status-kepemilikan-lahan",
  uploadAreaId: "upload-status-kepemilikan-lahan",
  previewContainerId: "preview-status-kepemilikan-lahan",
});

initImageUpload({
  inputId: "gambar-skema-kontur-eksisting",
  uploadAreaId: "upload-gambar-skema-kontur-eksisting",
  previewContainerId: "preview-gambar-skema-kontur-eksisting",
});

initImageUpload({
  inputId: "mapping-posisi-vegetasi",
  uploadAreaId: "upload-mapping-posisi-vegetasi",
  previewContainerId: "preview-mapping-posisi-vegetasi",
});

initImageUpload({
  inputId: "foto-view-dari-luar-site",
  uploadAreaId: "upload-foto-view-dari-luar-site",
  previewContainerId: "preview-foto-view-dari-luar-site",
});

initImageUpload({
  inputId: "foto-view-dari-dalam-site",
  uploadAreaId: "upload-foto-view-dari-dalam-site",
  previewContainerId: "preview-foto-view-dari-dalam-site",
});

initImageUpload({
  inputId: "foto-komponen-lain-yang-ada-di-dalam-site",
  uploadAreaId: "upload-foto-komponen-lain-yang-ada-di-dalam-site",
  previewContainerId: "preview-foto-komponen-lain-yang-ada-di-dalam-site",
});

initImageUpload({
  inputId: "foto-mapping-posisi-perkerasan",
  uploadAreaId: "upload-foto-mapping-posisi-perkerasan",
  previewContainerId: "preview-foto-mapping-posisi-perkerasan",
});
