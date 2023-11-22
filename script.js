function scrollToSection(sectionId) {
	var section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
}
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function scrollToContact() {
  var contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}
function openPDF() {
  var pdfFile = './resume.pdf';
  window.open(pdfFile, '_blank');
}