<img :src="movie.Poster" alt="poster">
          <h2>{{ movie.Title }}</h2>
          <p>{{ movie.Year }}</p>
          <div class="link">
            <router-link :to="{ name: 'Movie', params: { id: movie.imdbID } }">Details</router-link>
          </div>