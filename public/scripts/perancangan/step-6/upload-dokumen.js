function initPDFUpload({ inputId, uploadAreaId, previewContainerId }) {
  const input = document.getElementById(inputId);
  const uploadArea = document.getElementById(uploadAreaId);
  const previewContainer = document.getElementById(previewContainerId);

  uploadArea.addEventListener("click", () => input.click());

  input.addEventListener("change", () => {
    previewContainer.innerHTML = ""; // Clear previous previews

    Array.from(input.files).forEach((file) => {
      const fileWrapper = document.createElement("div");
      fileWrapper.className =
        "flex items-center justify-between p-4 border border-gray-300 bg-gray-100 rounded-lg";

      // Clickable file name area
      const fileNameWrapper = document.createElement("span");
      fileNameWrapper.className =
        "flex gap-1 items-center font-semibold text-gray-900 truncate w-2/3 cursor-pointer hover:underline";

      const fileIcon = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      fileIcon.setAttribute("class", "w-5 h-5 text-gray-500 dark:text-white");
      fileIcon.setAttribute("aria-hidden", "true");
      fileIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      fileIcon.setAttribute("width", "24");
      fileIcon.setAttribute("height", "24");
      fileIcon.setAttribute("fill", "currentColor");
      fileIcon.setAttribute("viewBox", "0 0 24 24");
      fileIcon.innerHTML = `
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M9 2.221V7H4.221a2 2 0 0 1 .365-.5L8.5 2.586A2 2 0 0 1 9 2.22ZM11 2v5a2 2 0 0 1-2 2H4v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-7Z" />`;

      const fileNameText = document.createElement("span");
      fileNameText.textContent = file.name;

      fileNameWrapper.appendChild(fileIcon);
      fileNameWrapper.appendChild(fileNameText);
      fileNameWrapper.addEventListener("click", () => {
        const url = URL.createObjectURL(file);
        window.open(url, "_blank");
      });

      // Delete (trash) icon
      const deleteBtn = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      deleteBtn.setAttribute(
        "class",
        "w-5 h-5 text-red-500 dark:text-white cursor-pointer"
      );
      deleteBtn.setAttribute("aria-hidden", "true");
      deleteBtn.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      deleteBtn.setAttribute("width", "24");
      deleteBtn.setAttribute("height", "24");
      deleteBtn.setAttribute("fill", "currentColor");
      deleteBtn.setAttribute("viewBox", "0 0 24 24");
      deleteBtn.innerHTML = `
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"/>`;
      deleteBtn.addEventListener("click", () => {
        previewContainer.removeChild(fileWrapper);
      });

      fileWrapper.appendChild(fileNameWrapper);
      fileWrapper.appendChild(deleteBtn);
      previewContainer.appendChild(fileWrapper);
    });
  });
}

// Call the function for PDF upload
initPDFUpload({
  inputId: "dokumen-paparan-final",
  uploadAreaId: "upload-dokumen-paparan-final",
  previewContainerId: "preview-dokumen-paparan-final",
});
