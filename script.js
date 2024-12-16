// TMB = 655.1 + (9.563 * peso) + (1.850 * altura) - (4.676 * idade)

const form = document.getElementById('tmbForm');
const resultDiv = document.getElementById('result');
const modal = document.getElementById('tmbModal');
const modalResult = document.getElementById('modalResult');
const closeModal = document.getElementById('closeModal');
const purchaseButton = document.getElementById('purchaseButton');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores do formulário
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activityLevel = parseFloat(document.getElementById('activity').value);

    // Calcula o TMB usando a fórmula de Harris-Benedict
    const tmb = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);

    // Ajusta o TMB pelo nível de atividade física
    const adjustedTMB = tmb * activityLevel;

    // Exibe o resultado no modal
    modalResult.textContent = `Sua TMB ajustada é ${adjustedTMB.toFixed(2)} kcal/dia.`;
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

purchaseButton.addEventListener('click', function() {
    window.location.href = 'https://wa.me/5544988057085?text=ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20cardio%20personalizado';
});
