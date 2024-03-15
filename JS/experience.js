    fetch("../experience.json")
    .then(response => response.json())
    .then(values => {
        // Hämta div-elementen där informationen ska visas
        const silentiaDiv = document.getElementById("silentia");
        const falkenbergsDiv = document.getElementById("falkenbergs");

        // Skapa och lägg till en paragraf för Silentias erfarenhet
        let silentiaP = document.createElement('p');
        silentiaP.innerHTML = `${values.work[0].company}<br>${values.work[0].role}<br>${values.work[0].year}`;
        silentiaDiv.appendChild(silentiaP);

        // Skapa och lägg till en paragraf för Falkenbergs Plåtslageris erfarenhet
        let falkenbergsP = document.createElement('p');
        falkenbergsP.innerHTML = `${values.work[1].company}<br>${values.work[1].role}<br>${values.work[1].year}`;
        falkenbergsDiv.appendChild(falkenbergsP);
    })
    .catch(error => console.error('Ett fel uppstod vid hämtning av erfarenhetsdata: ', error));

