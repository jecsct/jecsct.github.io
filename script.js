document.querySelectorAll('.expandable-box').forEach(box => {
    box.addEventListener('click', () => {
      const content = box.querySelector('.box-content');
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
  

document.addEventListener("DOMContentLoaded", function () {
    // Obfuscated email logic
    const user = "📧 jetravassos2001";
    const domain = "gmail.com";
    const email = `${user}@${domain}`;
  
    // Find the email div and insert the mailto link
    const emailDiv = document.getElementById("email");
  
    const mailtoLink = document.createElement("a");
    mailtoLink.href = `mailto:${email}`;
    mailtoLink.textContent = email;
  
    emailDiv.innerHTML = "";  // Clear the existing content (the 📧 emoji)
    emailDiv.appendChild(mailtoLink);  // Add the mailto link
  });
  