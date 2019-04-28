<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <g-image src="../assets/img/andy-avatar-navigation.png" alt="Dan Vega"/>Home
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <!-- <g-link class="navbar-item is-uppercase" :to="{ name: 'home' }">Home</g-link> -->
        <g-link class="navbar-item" :to="{ name: 'blog' }">Progamming</g-link>
        <g-link class="navbar-item" :to="{ name: 'diary' }">Diary</g-link>
        <g-link class="navbar-item" :to="{ name: 'about' }">About</g-link>
      </div>
    </div>
    <social-links/>
  </nav>
</template>

<script>
import SocialLinks from "@/components/SocialLinks";

export default {
  name: "LayoutNavigation",
  components: {
    SocialLinks
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const navbarBurgers = document.querySelectorAll(".navbar-burger");
    navbarBurgers.forEach(menu => {
      menu.addEventListener("click", () => {
        const target = document.getElementById(menu.dataset.target);
        menu.classList.toggle("is-active");
        target.classList.toggle("is-active");
      });
    });
  }
};
</script>

<style>
.brand {
  margin-left: 5px;
  font-family: "Arial", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
}

.navbar-item {
  font-family: "Arial", sans-serif;
}
</style>
