const chatForm = document.getElementById("chatForm");
const chatBox = document.getElementById("chatBox");

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = document.getElementById("message").value;

  // عرض رسالة المستخدم
  chatBox.innerHTML += `<div class="msg user">👤 ${message}</div>`;

  // طلب الرد من السيرفر
  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });
  const data = await res.json();

  // عرض رد الذكاء الصناعي
  chatBox.innerHTML += `<div class="msg bot">🤖 ${data.reply}</div>`;
  document.getElementById("message").value = "";
});