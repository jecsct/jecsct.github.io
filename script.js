document.querySelectorAll('.expandable-box').forEach(box => {
    box.addEventListener('click', () => {
      const content = box.querySelector('.box-content');
      const arrow = box.querySelector('.arrow-icon');  // Select the arrow inside the box
  
      // Toggle the expanded class to trigger the arrow rotation
      box.classList.toggle('expanded');
  
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
  
  function toggleContent(element) {
    element.classList.toggle('expanded');
  }


  

  // function toggleContent(el) {
  //   const details = el.querySelector('.timeline-details');

  //   if (el.classList.contains('active')) {
  //     // Collapse
  //     details.style.maxHeight = details.scrollHeight + 'px';
  //     requestAnimationFrame(() => {
  //       details.style.maxHeight = '0';
  //     });
  //     el.classList.remove('active');
  //   } else {
  //     // Expand
  //     details.style.maxHeight = '0';
  //     el.classList.add('active');
  //     requestAnimationFrame(() => {
  //       details.style.maxHeight = details.scrollHeight + 'px';
  //     });
  //   }
  // }