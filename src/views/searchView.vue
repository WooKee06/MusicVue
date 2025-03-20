<template>
  <div class="container column-20">
    <div class="input">
      <input type="text" placeholder="Поиск" v-model="searchSong" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 21L17.5 17.5M17 10C17 10.9193 16.8189 11.8295 16.4672 12.6788C16.1154 13.5281 15.5998 14.2997 14.9497 14.9497C14.2997 15.5998 13.5281 16.1154 12.6788 16.4672C11.8295 16.8189 10.9193 17 10 17C9.08075 17 8.1705 16.8189 7.32122 16.4672C6.47194 16.1154 5.70026 15.5998 5.05025 14.9497C4.40024 14.2997 3.88463 13.5281 3.53284 12.6788C3.18106 11.8295 3 10.9193 3 10C3 8.14348 3.7375 6.36301 5.05025 5.05025C6.36301 3.7375 8.14348 3 10 3C11.8565 3 13.637 3.7375 14.9497 5.05025C16.2625 6.36301 17 8.14348 17 10Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <ul v-if="songs.length" class="music-list">
      <li v-for="song in filterSongs" :key="song.id">
        <div class="profile">
          <h2 class="title">{{ song.title }}</h2>
          <span class="autor">{{ song.artist }}</span>
        </div>
        <div class="duration">
          <span>2:23s</span>
        </div>
      </li>
    </ul>
    <p v-else>Песни не найденны</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songs: [],
      searchSong: "",
    };
  },
  computed: {
    filterSongs() {
      return this.songs.filter(
        (song) =>
          song.title.toLowerCase().includes(this.searchSong.toLowerCase()) ||
          song.artist
            .toLowerCase()
            .includes(this.searchSong.toLocaleLowerCase())
      );
    },
  },
  mounted() {
    this.fetchSongs();
  },
  methods: {
    async fetchSongs() {
      try {
        const response = await fetch("http://localhost:3000/songs");
        if (!response.ok) throw new Error("Ошибка в запросе");
        this.songs = await response.json();
      } catch (error) {
        console.log("error axios", error);
      }
    },
  },
};
</script>

<style scoped>
.input {
  background-color: #f1eeee47;
  backdrop-filter: blur(6px);
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px;
  border-radius: 12px;
}

.music-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 0;
  margin: 0;
}

.music-list li {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.music-list li h2 {
  color: #fff;
  margin: 0;

  font-size: 18px;
}
.music-list li span {
  color: #fff;
  font-size: 14px;
  opacity: 0.5;
}

.music-list li {
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f1f12e;
}

.input input {
  width: 90%;
  background: none;
  outline: none;
  border: none;
  color: #fff;
}
</style>
