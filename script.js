(() => {
  const year = document.getElementById("y");
  if (year) year.textContent = new Date().getFullYear();

  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");
  const grid = document.getElementById("themesGrid");
  const meta = document.getElementById("resultsMeta");

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalStatus = document.getElementById("modalStatus");
  const modalCategory = document.getElementById("modalCategory");
  const modalClose = document.getElementById("modalClose");

  const boxes = grid ? Array.from(grid.querySelectorAll(".theme-box")) : [];

  const categoryLabel = (key) => {
    const map = {
      tutte: "Tutte",
      servizi: "Servizi digitali",
      anagrafe: "Anagrafe",
      lavoro: "Lavoro & previdenza",
      famiglia: "Famiglia",
      sicurezza: "Sicurezza",
      pa: "Pubblica amministrazione"
    };
    return map[key] || "Categoria";
  };

  const normalize = (s) =>
    (s || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");

  const applyFilter = () => {
    const q = normalize(searchInput?.value || "");
    const cat = categorySelect?.value || "tutte";

    let visible = 0;

    boxes.forEach((b) => {
      const title = normalize(b.dataset.title);
      const desc = normalize(b.dataset.desc);
      const tags = normalize(b.dataset.tags);
      const boxCat = b.dataset.category || "";

      const matchText = !q || title.includes(q) || desc.includes(q) || tags.includes(q);
      const matchCat = cat === "tutte" || boxCat === cat;

      const show = matchText && matchCat;
      b.classList.toggle("hidden", !show);
      if (show) visible++;
    });

    if (meta) {
      const total = boxes.length;
      const label = cat === "tutte" ? "" : ` • ${categoryLabel(cat)}`;
      meta.textContent = `${visible} su ${total}${label}`;
    }
  };

  // Modal open/close
  const openModal = (b) => {
    if (!modal) return;

    modalTitle.textContent = b.dataset.icon ? `${b.dataset.icon} ${b.dataset.title}` : b.dataset.title;
    modalDesc.textContent = b.dataset.desc || "";
    modalStatus.textContent = b.dataset.status || "In arrivo";
    modalCategory.textContent = categoryLabel(b.dataset.category || "tutte");

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    // focus close for accessibility
    setTimeout(() => modalClose?.focus(), 50);
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  // Listeners
  if (searchInput) searchInput.addEventListener("input", applyFilter);
  if (categorySelect) categorySelect.addEventListener("change", applyFilter);

  boxes.forEach((b) => {
    b.addEventListener("click", () => openModal(b));
    b.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(b);
      }
    });
  });

  modalClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Init
  applyFilter();
})();
