async function checkResult() {
  const roll = document.getElementById('roll').value;
  const res = await fetch('results.json');
  const data = await res.json();
  const found = data.find(d => d.roll === roll);
  
  if (found) {
    document.getElementById('resultBox').innerHTML = 
      `<h2>${found.name}</h2><p>Roll: ${found.roll}</p><p>GPA: ${found.gpa}</p>`;
  } else {
    document.getElementById('resultBox').innerHTML = 
      `<p style="color:red;">Result not found!</p>`;
  }
}
