<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Ilex</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <router-link to="/login" class="nav-link"
            >Sign In</router-link
          >
        </li>
        <li class="nav-item" >
          <router-link to="/" class="nav-link" 
            >Home</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
ul.navbar-nav{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
nav {
  font-size: 1.3rem;
}
a.nav-link {
  padding: 0px;
  transition: all 0.4s;
  position: relative;
}
a.nav-link:hover::before {
  content: "";
  width: 100%;
  height: 0.2px;
  background-color: #5d6d7e;
  animation: 0.4s 1 forwards a-animate;
  position: absolute;
  top: 100%;
}
@keyframes a-animate {
  0% {
    left: -60px;
    opacity: 0;
  }
  100% {
    left: 0px;
    opacity: 1;
  }
}
li.nav-item {
  padding: 8px;
}
</style>
