fetch("../education.json")
.then(response => response.json())
.then(values => {
    // Hämta div-elementen där informationen ska visas
    const campusDiv = document.getElementById("campus");
    const gymnasiumDiv = document.getElementById("gymnasium");

    // Skapa och lägg till en paragraf för Campus varberg utbildning
    let campusP = document.createElement('p');
    campusP.innerHTML = `${values.education[0].school}<br>${values.education[0].status}<br>${values.education[0].subject}`;
    campusDiv.appendChild(campusP);

    // Skapa och lägg till en paragraf för Falkenbergs Gymnasieskola utbildning
    let gymnasiumP = document.createElement('p');
    gymnasiumP.innerHTML = `${values.education[1].school}<br>${values.education[1].status}<br>${values.education[1].subject}`;
    gymnasiumDiv.appendChild(gymnasiumP);
})
.catch(error => console.error('Ett fel uppstod vid hämtning av erfarenhetsdata: ', error));