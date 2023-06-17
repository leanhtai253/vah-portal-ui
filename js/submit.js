document
    .getElementById("submit-btn")
    .addEventListener("click", submitFunction);

async function submitFunction() {
    email = document.getElementById('emailInput').value
    password = document.getElementById('passwordInput').value
    audio_url = document.getElementById('audioElement').src
    audio = await fetch(audio_url).then(r => r.blob());
    data = {
        'email': email,
        'password': password,
        'audio': audio
    }
    console.log(data)
    saveFile(audio)
}

function saveFile(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      const a = document.createElement('a');
      document.body.appendChild(a);
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = filename;
      a.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }, 0)
    }
  }