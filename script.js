document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cgpa-form');
  const addSemesterButton = document.getElementById('add-semester');
  const resetButton = document.getElementById('reset-form');
  const coursesContainer = document.getElementById('courses');
  const resultDiv = document.getElementById('result');

  addSemesterButton.addEventListener('click', addSemester);
  form.addEventListener('submit', calculateCGPA);
  resetButton.addEventListener('click', resetForm);

  function addSemester() {
      const courseDiv = document.createElement('div');
      courseDiv.classList.add('course');
      courseDiv.innerHTML = `
          <input type="number" step="any" placeholder="Total Credit" class="total-credit" required>
          <input type="number" step="any" placeholder="SGPA" class="sgpa" required>
      `;
      coursesContainer.appendChild(courseDiv);
  }

  function calculateCGPA(event) {
      event.preventDefault();
      const totalCreditInputs = document.querySelectorAll('.total-credit');
      const sgpaInputs = document.querySelectorAll('.sgpa');

      let totalCredits = 0;
      let totalPoints = 0;

      totalCreditInputs.forEach((input, index) => {
          const totalCredit = parseFloat(input.value);
          const sgpa = parseFloat(sgpaInputs[index].value);
          if (!isNaN(totalCredit) && !isNaN(sgpa)) {
              totalCredits += totalCredit;
              totalPoints += sgpa * totalCredit;
          }
      });

      if (totalCredits !== 0) {
          const cgpa = totalPoints / totalCredits;
          resultDiv.innerText = `Your CGPA is ${cgpa.toFixed(2)}`;
      } else {
          resultDiv.innerText = "Please enter valid numeric values for total credit and SGPA.";
      }
  }

  function resetForm() {
      // Clear all input fields and results
      coursesContainer.innerHTML = `
          <div class="course">
              <input type="number" step="any" placeholder="Total Credit" class="total-credit" required>
              <input type="number" step="any" placeholder="SGPA" class="sgpa" required>
          </div>
      `;
      resultDiv.innerText = '';
  }
});


  
  
  