const workouts = {
    A: [
        {name: 'Voador Frontal', series: 3, reps: 15, rest: 60},
        {name: 'Supino Inclinado com Barra', series: 5, reps: '8-12', rest: 90},
        {name: 'Crucifixo no Cross Polia Alta + Média (Bi set)', series: 3, reps: '8-12', rest: 60},
        {name: 'Tríceps com Barra Reta na Polia', series: 4, reps: '8-12', rest: 60},
        {name: 'Tríceps Francês com Corda na Polia', series: 4, reps: '8-12', rest: 60},
        {name: 'Desenvolvimento Máquina ou com Halteres', series: 3, reps: '8-12', rest: 90},
        {name: 'Elevação Lateral com Halteres + Elevação Frontal (Bi set)', series: 3, reps: '8-12', rest: 60},
        {name: 'Abdominal Reto + Prancha', series: 3, reps: 'max', rest: 60}
    ],
    B: [
        {name: 'Remada curvada com barra pegada pronada', series: 5, reps: '8-12', rest: 60},
        {name: 'Remada unilateral com halteres', series: 3, reps: '8-12', rest: 60},
        {name: 'Remada com pegada neutra ( com drop set )', series: 4, reps: '8-12', rest: 60},
        {name: 'Puxada aberta pronada', series: 4, reps: '8-12', rest: 60},
        {name: 'Facepull na polia', series: 3, reps: '15', rest: 60},
        {name: 'Rosca direta barra W + Rosca martelo', series: 3, reps: '8-12', rest: 60},
        {name: 'Extensão de tronco no banco romano', series: 3, reps: 'max', rest: 60},
        // Adicione mais exercícios conforme necessário
    ],
    C: [
        {name: 'Cadeira extensora', series: 3, reps: '15', rest: 60},
        {name: 'Bi-set agachamento no smith + agachamento sumo com step', series: 3, reps: '8-12', rest: 90},
        {name: 'Leg press 45° ( cluster set na ultima serie (4-4-4)', series: 4, reps: '8-12', rest: 60},
        {name: 'Cadeira flexora', series: 3, reps: '8-12', rest: 60},
        {name: 'Passada (Avanço) com barra', series: 3, reps: '8-12', rest: 60},
        {name: 'Cadeira abdutora', series: 3, reps: '15', rest: 60},
        {name: 'Flexão plantar com carga (Gemeos)', series: 3, reps: 'max', rest: 60},
        // Adicione mais exercícios conforme necessário
    ]
};

function startWorkout(category) {
    const exerciseList = document.getElementById(`exercise-list${category}`);
    exerciseList.innerHTML = '';

    workouts[category].forEach((exercise, index) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.innerHTML = `<h3>${exercise.name}</h3>
                            <p>Séries: ${exercise.series} | Reps: ${exercise.reps} | Pausa: ${exercise.rest} segundos</p>`;
        exerciseList.appendChild(exerciseDiv);

        if (index < workouts[category].length - 1) {
            setTimeout(() => {
                alert(`Pausa de ${exercise.rest} segundos! Próximo exercício em breve.`);
            }, exercise.rest * 1000);
        } else {
            setTimeout(() => {
                alert('Parabéns! Treino concluído.');
            }, exercise.rest * 1000);
        }
    });
}

function pauseWorkout(category) {
    // Adicione lógica para pausar o treino conforme necessário
    alert(`Treino na categoria ${category} pausado.`);
}

function completeWorkout(category) {
    // Adicione lógica para concluir o treino conforme necessário
    alert(`Treino na categoria ${category} concluído.`);
}
