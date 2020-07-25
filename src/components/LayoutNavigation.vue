<template>

  <div class="navigation-bar">
  <nav>
    <ul :class="{ show: showMobileMenu }">
      <li>
        <g-link to="/" exact>Home</g-link>
      </li>
      <li>
        <g-link to="/blog" exact>IT</g-link>
      </li>
      <li>
        <g-link to="/life" exact>Life</g-link>
      </li>
      <li>
        <g-link to="/about" exact>About</g-link>
      </li>
      
    </ul>
  </nav>
    <div class="hamburger">
      <font-awesome-icon
        icon="bars"
        size="2x"
        @click="showMobileMenu = !showMobileMenu"
        aria-label="toggle mobile menu"
      />
    </div>
  </div>
</template>

<script>
import SocialLinks from "@/components/SocialLinks";

export default {
  name: "LayoutNavigation",
  components: {
    SocialLinks
  },
  data() {
    return {
      showMobileMenu: false
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.navigation-bar {
  display: flex;
  align-items: center;
}
.navigation-bar nav {
  flex: 1;
}
.navigation-bar > svg {
  margin-right: 20px;
  min-width: 100px;
}
.navigation-bar svg .logo-fill {
  fill: var(--logo-fill);
}
nav {
  flex: 1;
}
nav ul {
  list-style-type: none;
  display: flex;
  margin: 10px 0 0 0;
  padding: 0;
}
nav a {
  font-family: "Oswald", sans-serif;
  font-size: 1.2rem;
  color: var(--font-color);
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
}
nav a:link,
nav a:visited {
  text-decoration: none;
}
nav a:hover {
  color: var(--navigation-background);
  border-bottom: 2px solid var(--navigation-background);
}
nav a.active {
  color: var(--font-color);
}
.logo {
  width: 92px;
  margin-bottom: 8px;
}
.hidden {
  display: none;
}
.fa-moon,
.fa-sun,
.fa-bars {
  cursor: pointer;
}
.fa-moon {
  color: var(--bright-blue);
}
.fa-sun {
  color: #f7dc50;
}
.fa-bars {
  color: var(--bright-blue);
}
.hamburger {
  display: none;
}
.hidden {
  display: none;
}
@media (max-width: 1024px) {
  nav a {
    padding: 0.3rem 0.5rem;
  }
}
@media (max-width: 768px) {
  .navigation-bar {
    flex-direction: column;
  }
  .navigation-bar svg {
    align-self: flex-start;
  }
  .toggle-container {
    align-self: flex-end;
    order: 2;
  }
  .toggle-container {
    position: absolute;
    top: 20px;
    right: 60px;
  }
  .hamburger {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  nav ul {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    background-color: var(--mobile-menu-background);
    height: 100vh;
    width: 80%;
    flex-direction: column;
    z-index: 10;
    opacity: 0.98;
    border-right: 1px #6a6a6a solid;
    padding: 30px;
    transform: translateX(-800px);
    /* transition: transform 0.5s ease-in-out; */
  }
  nav ul.show {
    transform: translateX(0px);
  }
  nav ul li {
    border-bottom: 1px solid #6a6a6a;
    padding: 10px 0;
  }
  nav ul li a:link,
  nav ul li a:visited {
    color: var(--mobile-menu-link-color);
    display: block;
  }
  nav a:hover {
    color: var(--link-color-hover);
    border-bottom: none;
  }
  .hamburger {
    display: block;
    margin-left: 10px;
    cursor: pointer;
  }
  li.mobileLogo {
    padding: 0;
    margin: 0;
  }
}
</style>
