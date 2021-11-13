<template>
  <section class="background">
    <div
      :class="movieSection.isMovie ? 'movie-section' : 'actor-section'"
      v-for="movieSection in movieSections"
      :key="movieSection.title"
    >
      <template v-if="movieSection.isMovie">
         <h2>{{ movieSection.title }}</h2>
        <div class="movie-wrapper">
          <card-comp
            class="movie"
            v-for="movie in movieSection.movies"
            :key="movie.id"
            link="movie.link"
            :title="movie.title"
            :rating="movie.vote_average"
            :image="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
          />
        </div>
      </template>

      <template v-else>
        <actor-tag v-for="actor in movieSection.actors"
        :key="actor.id"
        :link="`https://www.themoviedb.org/person/${actor.id}`"
        :name="actor.name"
        :image="`https://image.tmdb.org/t/p/w92${actor.profile_path}`"
        />
      </template>
     
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CardComp from "@/components/card/CardComp.vue";
import ActorTag from "@/components/actor-tag/ActorTag.vue";
@Component({
  components: {
    CardComp,
    ActorTag,
  },
})
export default class Home extends Vue {
  movieSections: any = [];

  created() {
    const apikey = process.env.VUE_APP_VMDB;
    [
      {
        title: "This Week's Trending Movies",
        apiPath: "trending/movie/week",
        isMovie: true,
        movies: [],
      },
      {
        title: "Today's Trending Movies",
        apiPath: "trending/movie/day",
        isMovie: true,
        movies: [],
      },
      {
        apiPath: "person/popular",
        isMovie: false,
        actors: [],
      },
    ].forEach(async (movie) => {
      const { apiPath, isMovie } = movie;
      const response = await fetch(
        `https://api.themoviedb.org/3/${apiPath}?api_key=${apikey}`
      );
      const responseJSON = await response.json();
      if (isMovie) {
        this.movieSections.push({
          ...movie,
          movies: responseJSON.results,
        });
      } else {
        this.movieSections.push({
          ...movie,
          actors: responseJSON.results.splice(0,12),
        });
      }
    });
  }
}
</script>

<style scoped lang="scss">
.background {
  background-color: #0b0f16;
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.movie-section {
  background-color: #192231;
  color: #fff;
  padding: 15px;
  display: flex;
  flex-flow: column;

  > * {
    width: 70%;
    margin: auto;
  }
}

.movie-wrapper {
  display: inline-flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  max-height: 300px;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #404040;
  }

}

.actor-section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5em;
    width: 70%;
    margin: auto;

    > * {
      flex: 0 1 20%;
    }
  }
</style>