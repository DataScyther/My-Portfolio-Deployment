export const downloadResume = () => {
  // Force light theme for professional appearance
  const htmlElement = document.documentElement;
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    // Store theme preference
    localStorage.setItem('theme', 'light');
  }
  
  // Create a temporary anchor element
  const link = document.createElement('a');
  
  // Set the href to the resume file path
  link.href = '/resume.pdf';
  
  // Set the download attribute with the desired filename
  link.download = 'Nishant_Kumar_Resume.pdf';
  
  // Append to the document, trigger the click, and remove the element
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
