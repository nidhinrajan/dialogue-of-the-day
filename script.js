async function fetchDialogues() {
  const response = await fetch("http://localhost:3000/dialogue");
  const d = await response.json();

  document.getElementById("dialogue").innerText = `"${d.dialogue}"`;
  document.getElementById("details").innerText = `— ${d.actor}, ${d.movie} (Shown ${d.shown_count}x)`;
}

fetchDialogues();