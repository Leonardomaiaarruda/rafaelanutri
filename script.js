TMB = 655.1 + (9.563 * peso) + (1.850 * altura) - (4.676 * idade)

const form = document.getElementById('tmbForm');
const resultDiv = document.getElementById('result');
const modal = document.getElementById('tmbModal');
const modalResult = document.getElementById('modalResult');
const closeModal = document.getElementById('closeModal');
const purchaseButton = document.getElementById('purchaseButton');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores do formulário
    let weight = parseFloat(document.getElementById('weight').value.replace(',', '.'));
    let height = parseFloat(document.getElementById('height').value);
    let age = parseInt(document.getElementById('age').value.replace(',', '.'));
    const activityLevel = parseFloat(document.getElementById('activity').value);

    // Define valores padrão se os campos estiverem vazios
    if (isNaN(weight)) weight = 60; // Peso padrão: 60kg
    if (isNaN(age)) age = 30; // Idade padrão: 30 anos

    // Calcula o TMB usando a fórmula de Harris-Benedict
    const tmb = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);

    // Ajusta o TMB pelo nível de atividade física
    const adjustedTMB = tmb * activityLevel;

    // Exibe o resultado no modal
    modalResult.textContent = `Suya necessidade de calorias diariamente é de ${adjustedTMB.toFixed(2)} kcal/dia.`;
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

purchaseButton.addEventListener('click', function() {
    window.location.href = 'https://wa.me/5544988057085?text=Ol%C3%A1%2Cgostaria%20de%20saber%20mais%20sobre%20o%20cardapio%20personalizado';
});
