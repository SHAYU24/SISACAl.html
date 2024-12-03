const form = document.getElementById('satisfaction-form');
const stats = {
    "Muy Satisfecho": 0,
    "Satisfecho": 0,
    "Neutral": 0
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedSatisfaction = document.querySelector('input[name="uso"]:checked').value;
    stats[selectedSatisfaction] += 1;

    updateDashboard();
    form.reset();
});

function updateDashboard() {
    document.getElementById('stat-muy-satisfecho').textContent = stats["Muy Satisfecho"];
    document.getElementById('stat-satisfecho').textContent = stats["Satisfecho"];
    document.getElementById('stat-neutral').textContent = stats["Neutral"];
}
