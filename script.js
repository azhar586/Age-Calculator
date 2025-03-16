document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dob1 = new Date(document.getElementById('dob1').value);
    const dob2 = document.getElementById('dob2').value ? new Date(document.getElementById('dob2').value) : null;
    const today = new Date();

    // Calculate age for the first date
    let age1 = today.getFullYear() - dob1.getFullYear();
    let months1 = today.getMonth() - dob1.getMonth();
    let days1 = today.getDate() - dob1.getDate();

    if (months1 < 0) {
        age1--;
        months1 += 12;
    }

    if (days1 < 0) {
        months1--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days1 += lastMonth.getDate();
    }

    document.getElementById('result').textContent = `You are ${age1} years, ${months1} months, and ${days1} days old.`;

    // Calculate and display age for the second date if provided
    if (dob2) {
        let age2 = today.getFullYear() - dob2.getFullYear();
        let months2 = today.getMonth() - dob2.getMonth();
        let days2 = today.getDate() - dob2.getDate();

        if (months2 < 0) {
            age2--;
            months2 += 12;
        }

        if (days2 < 0) {
            months2--;
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days2 += lastMonth.getDate();
        }

        document.getElementById('result2').textContent = `The second person is ${age2} years, ${months2} months, and ${days2} days old.`;

        const ageDiffYears = Math.abs(age1 - age2);
        const ageDiffMonths = Math.abs(months1 - months2);
        const ageDiffDays = Math.abs(days1 - days2);

        document.getElementById('comparison').textContent = `The age difference is ${ageDiffYears} years, ${ageDiffMonths} months, and ${ageDiffDays} days.`;
    } else {
        document.getElementById('result2').textContent = '';
        document.getElementById('comparison').textContent = '';
    }
});