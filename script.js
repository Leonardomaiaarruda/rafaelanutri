const heightInput = document.getElementById('height');
const errorMessage = document.getElementById('error-message');

heightInput.addEventListener('input', function(event) {
    // Verifica se o valor contém vírgula ou ponto
    if (/[.,]/.test(this.value)) {
        // Exibe a mensagem de erro
        errorMessage.style.display = 'block';
    } else {
        // Esconde a mensagem de erro caso não haja vírgula ou ponto
        errorMessage.style.display = 'none';
    }

    // Remove qualquer vírgula ou ponto do valor digitado
    this.value = this.value.replace(/[.,]/g, '');
});

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
    modalResult.textContent = `Sua necessidade de calorias diárias é de ${adjustedTMB.toFixed(2)} kcal/dia.`;
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

purchaseButton.addEventListener('click', function() {
    window.location.href = 'https://wa.me/5544988057085?text=ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20cardio%20personalizado';
});