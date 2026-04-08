document.getElementById('age-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const birthInput = document.getElementById('birthdate').value;
    if (!birthInput) return;

    const birthDate = new Date(birthInput);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust days and months if needed
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('result').textContent =
        `You are ${years} years, ${months} months, and ${days} days old.`;
});