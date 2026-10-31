const canciones = [
  "Billie Jean.mpeg",
  "Durin.mpeg",
  "ella y yo.mpeg",
  "FlinsLuz.mpeg",
  "FREAKED OUt.mpeg",
  "LatinMafia.mpeg",
  "playDate.mpeg",
  "pollitopio.mpeg",
  "Thiller.mpeg",
  "Yoquisisera.mpeg"
];

const rutaCanciones = new URL("Canciones/", document.currentScript.src);
const audios = document.querySelectorAll(".miAudio");

audios.forEach((audio, indice) => {
  const nombreCancion = canciones[indice];
  const seccion = audio.closest(".seccion-lista");
  const botonReproducir = seccion.querySelector(".btn-reproducir");
  const botonPausar = seccion.querySelector(".btn-pausar");

  if (!nombreCancion) return;

  audio.src = new URL(nombreCancion, rutaCanciones).href;

  botonReproducir.addEventListener("click", () => {
    audios.forEach((otroAudio) => {
      if (otroAudio !== audio) otroAudio.pause();
    });

    audio.play().catch((error) => {
      console.error(`No se pudo reproducir ${nombreCancion}:`, error);
    });
  });

  botonPausar.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
  });
});