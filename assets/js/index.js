document.addEventListener("DOMContentLoaded", function () {
    // Aplica o clique em todos os botões fixos existentes
    const musicButtons = document.querySelectorAll("#musicList button");
    musicButtons.forEach(button => {
        button.addEventListener("click", function () {
            playMusic(button.innerText);
        });
    });
});


function addMusic() {
    const modal = document.getElementById('musicModal');
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('musicModal');
    modal.classList.add('hidden');
}

function submitMusic() {
    const input = document.getElementById('musicInput');
    const nomeMusica = input.value.trim();

    if (nomeMusica !== "") {
        addMusicToList(nomeMusica);
        input.value = ""; // Limpa o campo
        closeModal();
    } else {
        alert("Por favor, digite o nome da música.");
    }
}

function addMusicToList(texto) {
    const list = document.getElementById("musicList");

    const botao = document.createElement('div');
    botao.className = 'relative bg-pink-200 hover:bg-pink-300 text-pink-800 py-2 px-4 rounded-lg shadow flex items-center justify-between cursor-pointer';

    const label = document.createElement('span');
    label.innerText = texto;

    const close = document.createElement('span');
    close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    close.className = 'text-red-500 hover:text-red-700 cursor-pointer ml-2 text-sm';
    close.addEventListener('click', function (e) {
        e.stopPropagation(); // Impede o clique de propagar e acionar o play
        removeMusicFromList(botao);
    });

    botao.addEventListener('click', function () {
        playMusic(texto);
    });

    botao.appendChild(label);
    botao.appendChild(close);

    list.appendChild(botao);
}


function removeMusicFromList(button) {
    button.remove(); // Remove o botão do DOM
}

function playMusic(musicName) {
    const nowPlaying = document.getElementById("playingNow");
    nowPlaying.innerText = musicName;
}

