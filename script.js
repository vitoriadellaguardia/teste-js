document.addEventListener('DOMContentLoaded', () => {
    const diaNascimentoInput = document.getElementById('diaNascimento');
    const descobrirBtn = document.getElementById('descobrirBtn');
    const resultadoDiv = document.getElementById('resultado');

    const nomesDeFlores = {
        1: "Girassol",
        2: "Lírio",
        3: "Rosa",
        4: "Margarida",
        5: "Orquídea",
        6: "Tulipa",
        7: "Cravo",
        8: "Violeta",
        9: "Jasmim",
        10: "Gérbera",
        11: "Bromélia",
        12: "Copo-de-Leite",
        13: "Peônia",
        14: "Dália",
        15: "Frésia",
        16: "Lótus",
        17: "Petúnia",
        18: "Crisântemo",
        19: "Hortênsia",
        20: "Íris",
        21: "Amarílis",
        22: "Camélia",
        23: "Gladíolo",
        24: "Narciso",
        25: "Azaleia",
        26: "Magnólia",
        27: "Verbena",
        28: "Campânula",
        29: "Edelweiss",
        30: "Angélica",
        31: "Sempre-Viva"
    };

    descobrirBtn.addEventListener('click', () => {
        const dia = parseInt(diaNascimentoInput.value);

        if (isNaN(dia) || dia < 1 || dia > 31) {
            resultadoDiv.textContent = "Por favor, digite um dia válido (entre 1 e 31).";
            resultadoDiv.style.color = 'red';
        } else {
            const nomeFlor = nomesDeFlores[dia];
            resultadoDiv.textContent = `Seu nome de flor é: ${nomeFlor}!`;
            resultadoDiv.style.color = '#008080'; // Volta para a cor original
        }
    });

    // Opcional: Permitir descobrir apertando Enter no input
    diaNascimentoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            descobrirBtn.click();
        }
    });
});