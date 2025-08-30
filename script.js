const isAdmin = true; // Change to false before publishing

function openTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabName).classList.add('active');
  event.target.classList.add('active');
}

function uploadFile(type) {
  if (!isAdmin) return;

  const fileInput = document.getElementById(type === "wallpaper" ? "uploadWallpaper" : "uploadCape");
  const grid = document.getElementById(type === "wallpaper" ? "wallpaperGrid" : "capeGrid");

  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerHTML = `
        <img src="${e.target.result}" alt="${file.name}">
        <a href="${e.target.result}" download="${file.name}">Download</a>
      `;
      grid.appendChild(div);
    };

    reader.readAsDataURL(file);
  }
}

// Show upload sections if admin
if (isAdmin) {
  document.getElementById("wallpaperUpload").classList.remove("hidden");
  document.getElementById("capeUpload").classList.remove("hidden");
}
