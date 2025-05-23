let dialogues = [];

async function fetchDialogues() {
  const response = await fetch("https://ulbslxlrqkoijehuhquz.supabase.co/rest/v1/dialogues", {
    method: "GET",
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsYnNseGxycWtvaWplaHVocXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5ODIxMTUsImV4cCI6MjA2MzU1ODExNX0.SWXjJp_qfhQ08uPcTsGrzwNPkP6i5umyqvRxd86iE2A",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVsYnNseGxycWtvaWplaHVocXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5ODIxMTUsImV4cCI6MjA2MzU1ODExNX0.SWXjJp_qfhQ08uPcTsGrzwNPkP6i5umyqvRxd86iE2A"
    }
    cache: "no-store"
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