<!--
<template>
    <footer>
        <hr>
        <p>Made in suwon, Korea. Thanks to the open source projects <a href="https://vuejs.org/">VueJS</a>, <a href="https://gridsome.org">Gridsome</a>, <a href="https://github.com/danvega/danvega-dev">Dan Vega</a>.</p>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
</style>
-->

<template>
  <footer>
    <div>
      <hr>
    </div>
    <div class="container">
      <p>Made in suwon, Korea. Thanks to the open source projects <a href="https://vuejs.org/">VueJS</a>,<a href="https://gridsome.org">Gridsome</a>,<a href="https://github.com/danvega/danvega-dev">Dan Vega</a>.</p>
      <div>
        <a
          href="http://twitter.com/alasheep"
          aria-label="twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a
          href="https://github.com/alasheep/"
          aria-label="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: var(--theme-color);
  padding: 10px 0;
}
footer > .container {
  display: flex;
  align-items: center;
}
footer p {
  font-size: 1.1rem;
  color: var(--font-color);
  flex: 1;
}
footer a {
  color: var(--bright-blue);
  font-size: 1.2rem;
  padding: 0.5rem 0.75rem;
}
footer a:hover {
  color: var(--font-color);
}
footer a > svg {
  fill: white;
  width: 1.2rem;
}
@media (max-width: 1024px) {
  .container {
    padding: 0 20px;
  }
}
@media (max-width: 600px) {
  footer > .container {
    flex-direction: column;
  }
}
</style>
