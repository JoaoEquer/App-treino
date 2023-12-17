const workouts = {
    A: [
        {name: 'Voador Frontal', series: 3, reps: 15},
        {name: 'Supino Inclinado com Barra', series: 5, reps: '8-12'},
        {name: 'Crucifixo no Cross Polia Alta + Média (Bi set)', series: 3, reps: '8-12'},
        {name: 'Tríceps com Barra Reta na Polia', series: 4, reps: '8-12'},
        {name: 'Tríceps Francês com Corda na Polia', series: 4, reps: '8-12'},
        {name: 'Desenvolvimento Máquina ou com Halteres', series: 3, reps: '8-12'},
        {name: 'Elevação Lateral com Halteres + Elevação Frontal (Bi set)', series: 3, reps: '8-12'},
        {name: 'Abdominal Reto + Prancha', series: 3, reps: 'max'}
    ],
    B: [
        {name: 'Remada curvada com barra pegada pronada', series: 5, reps: '8-12'},
        {name: 'Remada unilateral com halteres', series: 3, reps: '8-12', rest: 60},
        {name: 'Remada com pegada neutra ( com drop set )', series: 4, reps: '8-12'},
        {name: 'Puxada aberta pronada', series: 4, reps: '8-12', rest: 60},
        {name: 'Facepull na polia', series: 3, reps: '15', rest: 60},
        {name: 'Rosca direta barra W + Rosca martelo', series: 3, reps: '8-12'},
        {name: 'Extensão de tronco no banco romano', series: 3, reps: 'max'},
        // Adicione mais exercícios conforme necessário
    ],
    C: [
        {name: 'Cadeira extensora', series: 3, reps: '15', rest: 60},
        {name: 'Bi-set agachamento no smith + agachamento sumo com step', series: 3, reps: '8-12'},
        {name: 'Leg press 45° ( cluster set na ultima serie (4-4-4)', series: 4, reps: '8-12'},
        {name: 'Cadeira flexora', series: 3, reps: '8-12'},
        {name: 'Passada (Avanço) com barra', series: 3, reps: '8-12'},
        {name: 'Cadeira abdutora', series: 3, reps: '15'},
        {name: 'Flexão plantar com carga (Gemeos)', series: 3, reps: 'max'},
        // Adicione mais exercícios conforme necessário
    ]
};
// Função para exibir os exercícios de uma categoria
function displayExercises(category) {
    const exerciseList = document.getElementById(`exercise-list${category}`);
    exerciseList.innerHTML = '';

    workouts[category].forEach((exercise) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.innerHTML = `<h3>${exercise.name}</h3>
                                <p>Séries: ${exercise.series} | Reps: ${exercise.reps}</p>`;
        exerciseList.appendChild(exerciseDiv);
    });
}

// Chamadas para exibir os exercícios de cada categoria
displayExercises('A');
displayExercises('B');
displayExercises('C');
