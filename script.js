function sendMessage() {
    const input = document.getElementById("messageInput");
    const chatBox = document.getElementById("chatBox");

    if (input.value.trim()) {
        const message = document.createElement("div");
        message.textContent = input.value;
        chatBox.appendChild(message);
        input.value = "";  // 清空输入框
        chatBox.scrollTop = chatBox.scrollHeight;  // 自动滚动到底部
    }
}
