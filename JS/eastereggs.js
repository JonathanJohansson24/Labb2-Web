document.addEventListener('DOMContentLoaded', (event) => {
    // Funktion för att generera en slumpmässig färg
    function generateRandomColor() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }

    document.getElementById('profil').addEventListener('click', function() {
        const newBackgroundColor = generateRandomColor();
        document.body.style.backgroundColor = newBackgroundColor;
    });

    document.getElementById('logo').addEventListener('click', function(){
        document.body.style.backgroundColor = '#fff'
    })
});


function createYouTubeModal(videoId) {
    const modal = document.createElement('div');
    modal.id = 'youtubeModal';
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.width = '400px'; 
    modal.style.height = '300px'; 
    modal.style.backgroundColor = 'black';
    modal.style.padding = '20px';
    modal.style.borderRadius ='10px';
    modal.style.zIndex = '1000';
    modal.style.display = 'none'; // Modalen är dold från början

    const iframe = document.createElement('iframe');
    iframe.width = '400';
    iframe.height = '300';
    iframe.src = `https://www.youtube.com/embed/45p1kvDJ-K0`;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
  
    modal.appendChild(iframe);
  
    const closeButton = document.createElement('button');
    closeButton.textContent = '❌';
    closeButton.onclick = function() {
    modal.style.display = 'none';
      iframe.src = ''; // Rensa src för att stoppa videon från att spela
    };

    modal.appendChild(closeButton);
    
    document.body.appendChild(modal);

    return modal;
}

  // Funktion för att visa modalen
function showModalWithVideo(videoId) {
    let modal = document.getElementById('youtubeModal');
    if (!modal) {
    modal = createYouTubeModal(videoId);
    }
    modal.style.display = 'block';
    modal.querySelector('iframe').src = `https://www.youtube.com/embed/45p1kvDJ-K0?autoplay=1`;
  modal.style.display = 'block';
}

  // Event listener för mitt påskägg
    let inputSequence = [];
    const secretCode = '1337';

window.addEventListener('keydown', function(e) {
    // Lägg till den senast inmatade karaktären i sekvensen (endast siffror).
    if (e.key >= '0' && e.key <= '9') {
    inputSequence.push(e.key);
    }

    // Behåll bara de senaste 4 tecknen (längden av '1337')
    if (inputSequence.length > 4) {
    inputSequence.shift();
    }

    // Kolla om de senaste inmatade tecknen matchar koden
    if (inputSequence.join('') === secretCode) {
      inputSequence = []; // Återställ sekvensen efter en lyckad matchning
      showModalWithVideo('45p1kvDJ-K0'); //  ID:t för min YouTube-video
    }
    closeButton.onclick = function() {
        const iframe = modal.querySelector('iframe');
        iframe.src = ''; // Rensa src för att stoppa videon från att spela
        modal.style.display = 'none'; // Göm modalen
    };
});




//45p1kvDJ-K0 id till youtubevideon