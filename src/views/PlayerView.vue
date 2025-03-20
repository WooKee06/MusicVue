<template>
  <div class="player">
    <div class="body">
      <div class="profile">
        <div
          class="profile-img"
          :style="{ backgroundImage: `url(${song.cover})` }"
        ></div>
        <div class="profile-name">
          <div class="title">
            <h2>{{ song.title }}</h2>
            <span>{{ song.artist }}</span>
          </div>

          <div class="range-cintrol">
            <div class="sliders">
              <div class="range">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 8.75C11 8.55109 10.921 8.36032 10.7803 8.21967C10.6397 8.07902 10.4489 8 10.25 8C10.0511 8 9.86032 8.07902 9.71967 8.21967C9.57902 8.36032 9.5 8.55109 9.5 8.75V15.25C9.5 15.4489 9.57902 15.6397 9.71967 15.7803C9.86032 15.921 10.0511 16 10.25 16C10.4489 16 10.6397 15.921 10.7803 15.7803C10.921 15.6397 11 15.4489 11 15.25V8.75ZM17 8.75C17 8.55109 16.921 8.36032 16.7803 8.21967C16.6397 8.07902 16.4489 8 16.25 8C16.0511 8 15.8603 8.07902 15.7197 8.21967C15.579 8.36032 15.5 8.55109 15.5 8.75V15.25C15.5 15.4489 15.579 15.6397 15.7197 15.7803C15.8603 15.921 16.0511 16 16.25 16C16.4489 16 16.6397 15.921 16.7803 15.7803C16.921 15.6397 17 15.4489 17 15.25V8.75ZM14 10.25C14 10.0511 13.921 9.86032 13.7803 9.71967C13.6397 9.57902 13.4489 9.5 13.25 9.5C13.0511 9.5 12.8603 9.57902 12.7197 9.71967C12.579 9.86032 12.5 10.0511 12.5 10.25V13.75C12.5 13.9489 12.579 14.1397 12.7197 14.2803C12.8603 14.421 13.0511 14.5 13.25 14.5C13.4489 14.5 13.6397 14.421 13.7803 14.2803C13.921 14.1397 14 13.9489 14 13.75V10.25ZM8 10.75C8 10.5511 7.92098 10.3603 7.78033 10.2197C7.63968 10.079 7.44891 10 7.25 10C7.05109 10 6.86032 10.079 6.71967 10.2197C6.57902 10.3603 6.5 10.5511 6.5 10.75V13.25C6.5 13.4489 6.57902 13.6397 6.71967 13.7803C6.86032 13.921 7.05109 14 7.25 14C7.44891 14 7.63968 13.921 7.78033 13.7803C7.92098 13.6397 8 13.4489 8 13.25V10.75ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM3.5 12C3.5 9.74566 4.39553 7.58365 5.98959 5.98959C7.58365 4.39553 9.74566 3.5 12 3.5C14.2543 3.5 16.4163 4.39553 18.0104 5.98959C19.6045 7.58365 20.5 9.74566 20.5 12C20.5 14.2543 19.6045 16.4163 18.0104 18.0104C16.4163 19.6045 14.2543 20.5 12 20.5C9.74566 20.5 7.58365 19.6045 5.98959 18.0104C4.39553 16.4163 3.5 14.2543 3.5 12Z"
                    fill="white"
                  />
                </svg>

                <div class="slider-container">
                  <input
                    type="range"
                    ref="progressSlider"
                    class="progress-slider"
                    @input="onSliderInput"
                  />
                  <span></span>
                </div>

                <span> {{ songDuration }}</span>
              </div>

              <div class="range">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.15808 13.93C3.80815 13.347 3.62329 12.6799 3.62329 12C3.62329 11.3201 3.80815 10.6529 4.15808 10.07C4.26562 9.89051 4.40952 9.73551 4.58053 9.61496C4.75155 9.4944 4.94589 9.41096 5.15108 9.36999L6.84408 9.03099C6.94504 9.011 7.03611 8.957 7.10208 8.87799L9.17008 6.39499C10.3521 4.97499 10.9441 4.26599 11.4711 4.45699C11.9981 4.64799 12.0001 5.57199 12.0001 7.41999V16.582C12.0001 18.429 12.0001 19.352 11.4721 19.544C10.9451 19.734 10.3531 19.025 9.17108 17.606L7.10008 15.122C7.03436 15.0432 6.94368 14.9892 6.84308 14.969L5.15008 14.63C4.94489 14.589 4.75055 14.5056 4.57953 14.385C4.40852 14.2645 4.26562 14.1095 4.15808 13.93Z"
                    fill="white"
                  />
                  <path
                    d="M14.5361 8.46399C15.4692 9.39698 15.9956 10.661 16.0006 11.9804C16.0057 13.2999 15.489 14.5679 14.5631 15.508M18.6571 6.34299C20.15 7.83565 20.9923 9.85787 21.0005 11.9689C21.0088 14.08 20.1823 16.1087 18.7011 17.613"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>

                <div class="slider-container">
                  <input
                    type="range"
                    ref="volumeSlider"
                    class="progress-slider"
                    @input="onVolumeChange"
                  />
                  <span></span>
                </div>
              </div>
            </div>
            <audio
              ref="audioPlayer"
              :src="currentSongUrl"
              controls
              v-if="currentSongUrl"
            ></audio>
            <div class="controls">
              <div>
                <button class="prev-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.90495 21C4.10386 21 4.29463 20.921 4.43528 20.7803C4.57593 20.6397 4.65495 20.4489 4.65495 20.25V3.75C4.65495 3.55109 4.57593 3.36032 4.43528 3.21967C4.29463 3.07902 4.10386 3 3.90495 3C3.70604 3 3.51527 3.07902 3.37462 3.21967C3.23397 3.36032 3.15495 3.55109 3.15495 3.75V20.25C3.1536 20.3489 3.17208 20.447 3.2093 20.5386C3.24651 20.6302 3.30171 20.7134 3.37162 20.7833C3.44153 20.8532 3.52475 20.9084 3.61635 20.9457C3.70795 20.9829 3.80609 21.0013 3.90495 21ZM7.30495 11.411C7.29596 11.7595 7.36807 12.1053 7.51558 12.4211C7.66309 12.737 7.88196 13.0142 8.15495 13.231L17.2649 20.321C17.5909 20.568 17.9779 20.721 18.3849 20.761H18.6149C18.9612 20.7697 19.3043 20.6942 19.6149 20.541C19.9848 20.3605 20.2966 20.0799 20.5149 19.731C20.7323 19.3833 20.8468 18.9811 20.8449 18.571V5.421C20.8439 5.02663 20.7368 4.6398 20.5349 4.301C20.3269 3.9642 20.0337 3.68825 19.6849 3.501C19.3375 3.31321 18.9456 3.22332 18.5511 3.24093C18.1566 3.25855 17.7742 3.383 17.4449 3.601L8.32495 9.681C8.03495 9.872 7.79495 10.129 7.62495 10.431C7.4455 10.7292 7.33609 11.0643 7.30495 11.411Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button class="play-pause-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    @click="playSong"
                    v-if="!isPlaying"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.409 9.353C21.8893 9.60841 22.291 9.98969 22.5712 10.456C22.8514 10.9223 22.9994 11.456 22.9994 12C22.9994 12.544 22.8514 13.0777 22.5712 13.544C22.291 14.0103 21.8893 14.3916 21.409 14.647L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033C4 2.723 6.534 1.264 8.597 2.385L21.409 9.353Z"
                      fill="white"
                    />
                  </svg>

                  <svg
                    v-else
                    @click="stopSong"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.5 1C5.83696 1 5.20107 1.33112 4.73223 1.92052C4.26339 2.50992 4 3.30932 4 4.14286V19.8571C4 20.6907 4.26339 21.4901 4.73223 22.0795C5.20107 22.6689 5.83696 23 6.5 23H7.75C8.41304 23 9.04893 22.6689 9.51777 22.0795C9.98661 21.4901 10.25 20.6907 10.25 19.8571V4.14286C10.25 3.30932 9.98661 2.50992 9.51777 1.92052C9.04893 1.33112 8.41304 1 7.75 1H6.5ZM15.25 1C14.587 1 13.9511 1.33112 13.4822 1.92052C13.0134 2.50992 12.75 3.30932 12.75 4.14286V19.8571C12.75 20.6907 13.0134 21.4901 13.4822 22.0795C13.9511 22.6689 14.587 23 15.25 23H16.5C17.163 23 17.7989 22.6689 18.2678 22.0795C18.7366 21.4901 19 20.6907 19 19.8571V4.14286C19 3.30932 18.7366 2.50992 18.2678 1.92052C17.7989 1.33112 17.163 1 16.5 1H15.25Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button class="next-btn">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0951 21C19.8961 21 19.7054 20.921 19.5647 20.7803C19.4241 20.6397 19.3451 20.4489 19.3451 20.25V3.75C19.3451 3.55109 19.4241 3.36032 19.5647 3.21967C19.7054 3.07902 19.8961 3 20.0951 3C20.294 3 20.4847 3.07902 20.6254 3.21967C20.766 3.36032 20.8451 3.55109 20.8451 3.75V20.25C20.8464 20.3489 20.8279 20.447 20.7907 20.5386C20.7535 20.6302 20.6983 20.7134 20.6284 20.7833C20.5585 20.8532 20.4752 20.9084 20.3836 20.9457C20.292 20.9829 20.1939 21.0013 20.0951 21ZM16.6951 11.411C16.704 11.7595 16.6319 12.1053 16.4844 12.4211C16.3369 12.737 16.118 13.0142 15.8451 13.231L6.73505 20.321C6.40905 20.568 6.02205 20.721 5.61505 20.761H5.38505C5.03883 20.7697 4.69567 20.6942 4.38505 20.541C4.01519 20.3605 3.70338 20.0799 3.48505 19.731C3.26765 19.3833 3.15323 18.9811 3.15505 18.571V5.421C3.15613 5.02663 3.2632 4.6398 3.46505 4.301C3.67308 3.9642 3.96628 3.68825 4.31505 3.501C4.66247 3.31321 5.05437 3.22332 5.44889 3.24093C5.84342 3.25855 6.22575 3.383 6.55505 3.601L15.6751 9.681C15.9651 9.872 16.2051 10.129 16.3751 10.431C16.5545 10.7292 16.6639 11.0643 16.6951 11.411Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
              <button class="add-liked">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C7.03 22 3 19.418 3 15V14.912C3 12.794 4.338 11.1 6.375 10C8.324 8.948 9.476 7.01 9.188 5L8.625 2L10.711 2.795C14.468 4.225 17.597 6.707 19.625 9.861C20.5164 11.2312 20.9938 12.8294 21 14.464V15C21 16.562 20.496 17.895 19.625 18.965"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 22C10.343 22 9 20.567 9 18.8C9 17.4 10.016 16.279 10.91 15.252L12 14L13.09 15.252C13.984 16.28 15 17.4 15 18.8C15 20.567 13.657 22 12 22Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="player-text">
        <div>
          <p v-if="loading">Загружается текст...</p>
          <pre>{{ formattedTitle(song.lyrics) }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PlayerPage",
  data() {
    return {
      song: {},
      audioPlayer: null,
      isPlaying: false,
      songDuration: "0:00", // Форматированная длина песни
      currentTime: 0, // Текущее время песни
    };
  },
  mounted() {
    this.fetchLyrics(); // Загружаем песню (если нужно)
  },
  methods: {
    async fetchLyrics() {
      const response = await axios.get(
        "https://6533f11ae1b6f4c590466830.mockapi.io/musics",
        {
          params: { id: 1 },
        }
      );

      this.song = response.data.length ? response.data[0] : {};
      this.setupAudioPlayer();
    },
    setupAudioPlayer() {
      // Создаем объект аудио только один раз
      if (this.song && this.song.songUrl) {
        this.audioPlayer = new Audio(this.song.songUrl);

        // Когда аудио загружено, получаем его длительность
        this.audioPlayer.onloadedmetadata = () => {
          const durationInSeconds = this.audioPlayer.duration;
          const minutes = Math.floor(durationInSeconds / 60);
          let seconds = Math.floor(durationInSeconds % 60);
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
          this.songDuration = `${minutes}:${seconds}`;

          // Устанавливаем максимальное значение для слайдера
          this.$refs.progressSlider.max = this.audioPlayer.duration;
        };

        // Обновляем текущее время на слайдере
        this.audioPlayer.ontimeupdate = () => {
          this.currentTime = this.audioPlayer.currentTime;
          this.updateSlider();
        };

        // Когда песня закончится, сбрасываем флаг воспроизведения
        this.audioPlayer.onended = () => {
          this.isPlaying = false;
          this.currentTime = 0;
          this.updateSlider();
        };
      }
    },
    playSong() {
      if (this.audioPlayer) {
        this.audioPlayer.play();
        this.isPlaying = true;
      }
    },
    formattedTitle(lyrics) {
      return lyrics ? lyrics.trim() : "";
    },
    stopSong() {
      if (this.audioPlayer) {
        this.audioPlayer.pause();
        this.isPlaying = false;
      }
    },
    updateProgress(event) {
      // Обновляем текущее время песни в зависимости от положения слайдера
      const sliderValue = event.target.value;
      this.currentTime = sliderValue;
    },
    seekSong() {
      // Перемещаем песню на новую позицию
      if (this.audioPlayer) {
        this.audioPlayer.currentTime = this.currentTime;
      }
    },
    onSliderInput() {
      // Когда пользователь перемещает слайдер, устанавливаем новое значение для currentTime
      if (this.audioPlayer) {
        this.audioPlayer.currentTime = this.$refs.progressSlider.value;
      }
    },
    updateSongDuration() {
      if (this.audioPlayer) {
        const minutes = Math.floor(this.audioPlayer.currentTime / 60);
        const seconds = Math.floor(this.audioPlayer.currentTime % 60);
        this.songDuration =
          minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
      }
    },
    updateSlider() {
      // Обновляем положение слайдера в зависимости от текущего времени песни
      this.$refs.progressSlider.value = this.currentTime;
    },
    onVolumeChange() {
      this.audioPlayer.volume = this.$refs.volumeSlider.value / 100;
    },
  },
};
</script>

<style scoped>
.player {
  width: 50vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 20px;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.head > div {
  display: flex;
  align-items: center;
  gap: 20px;
}

.head button {
  border: none;
  background-color: #08080899;
  backdrop-filter: blur(15px);
  width: 30px;
  height: 30px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.head svg path {
  stroke: #fff;
}

.body {
  display: flex; /* Используем flexbox для размещения элементов */
  flex-direction: row; /* Горизонтальное выравнивание блоков */
  gap: 20px; /* Расстояние между элементами */

  box-sizing: border-box; /* Учитываем padding в размере контейнера */
}

.profile {
  width: 300px; /* Фиксированная ширина профиля */

  border-radius: 8px;
  display: flex;
  flex-direction: column; /* Элементы внутри располагаются вертикально */
  align-items: center; /* Центрируем содержимое по горизонтали */
  gap: 10px; /* Расстояние между элементами внутри профиля */
}

.profile-img {
  width: 100%;
  height: 350px;

  border-radius: 50%; /* Круглая форма */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Скрываем всё, что выходит за границы */
}

.profile-name h2 {
  font-size: 1.2rem;
  color: #555;
}

.profile-name {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  text-align: center;
}

.player-text {
  flex-grow: 1; /* Этот блок занимает оставшуюся ширину */
  background-color: #08080899;
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #444;
  width: 50%;
}

.profile {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
}
.profile-img {
  /* background-image: url(https://avatars.yandex.net/get-music-content/4796762/8407f21e.a.16018543-1/m1000x1000?webp=false); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Скрываем всё, что выходит за границы */
}
.profile-name .title {
  margin: 0;
  color: #fff;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.profile-name > div h2 {
  margin: 0;
  font-size: 21px;
  color: #fff;
}
.profile-name > div span {
  margin: 0;
  font-size: 14px;
  color: #fff;
  opacity: 0.6;
}
.profile-name {
  width: 100%;
  background: #08080899;
  backdrop-filter: blur(15px);
  padding: 15px;
  border-radius: 20px;
  height: 140px;
}

.player-text {
  flex-grow: 1;
  background-color: #08080899;
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  color: #444;
  height: 505px; /* Высота блока */
  overflow-y: auto; /* Прокрутка по вертикали */
}

.player-text::-webkit-scrollbar {
  opacity: 0;
}

.lyrics-line {
  margin-bottom: 10px;
}

.lyrics-line p {
  font-size: 1.2rem;
  margin: 5px 0;
  color: gray;
}

.lyrics-line p.active {
  color: white; /* Цвет активных предложений */
  font-weight: bold;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 16px;
  color: #ffffffa1;
  text-align: left;
}

.controls {
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  gap: 5px;
}

button {
  font-size: 16px;
  cursor: pointer;

  background: none;
  border: none;
}

.progress-slider {
  margin: 10px 0;
  width: 100%;
}

.sliders {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}
.sliders .slider-container {
  width: 90%;
}
.sliders .slider-container:nth-child(2) {
  width: 90%;
}
.progress-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 16px;
  border: none;
}

.range-cintrol {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.progress-slider::-webkit-slider-runnable-track {
  height: 6px;
  background: #080808b9;
  border-radius: 16px;
}

.progress-slider::-moz-range-track {
  height: 6px;
  background: #ccc;
  border-radius: 16px;
}

.progress-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  width: 10px;
  background-color: #fff;
  border-radius: 0 50% 50% 0;

  box-shadow: -407px 0 0 400px #fff;
}

.progress-slider::-moz-range-thumb {
  height: 6px;
  width: 10px;
  background-color: #fff;
  border-radius: 50%;

  box-shadow: -407px 0 0 400px #fff;
}

.range {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 70%;
}
.range:nth-child(2) {
  width: 30%;
}
.add-liked {
  opacity: 0.4;
}
</style>

<style>
@media (max-width: 768px) {
  .wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  .player-text {
    display: none;
  }

  .player,
  .container {
    width: 90vw !important;
  }

  .profile {
    width: 100% !important;
  }
}
</style>
