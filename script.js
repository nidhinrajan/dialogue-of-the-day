let dialogues = [];

async function fetchDialogues() {
  const response = await fetch("https://ulbslxlrqkoijehuhquz.supabase.co/rest/v1/dialogues", {
    method: "GET",
    headers: {
      apikey: "YOUR_ANON_KEY",
      Authorization: "Bearer YOUR_ANON_KEY"
    }
  });

  dialogues = await response.json();
  showRandomDialogue();
}

function showRandomDialogue() {
  if (dialogues.length === 0) return;
  const randomIndex = Math.floor(Math.random() * dialogues.length);
  const d = dialogues[randomIndex];

  document.getElementById("dialogue").innerText = `"${d.dialogue}"`;
  document.getElementById("details").innerText = `— ${d.actor}, ${d.movie}`;
}

fetchDialogues();