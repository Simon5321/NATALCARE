document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});

document.querySelectorAll('input[name="type"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        var label = document.getElementById('identificadorLabel');
        var input = document.getElementById('identificador');
        if (this.value === 'clinica') {
            label.textContent = 'CNPJ';
            input.placeholder = 'Digite o CNPJ';
        } else {
            label.textContent = 'CPF';
            input.placeholder = 'Digite o CPF';
        }
    });
});
