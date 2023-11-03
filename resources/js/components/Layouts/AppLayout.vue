<template>
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg navbar-light border-bottom">
    <div class="container">
        <router-link class="navbar-brand" to="/">
            <img :src="logo" alt=""> CardName 
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
            <router-link  class="nav-link" to="/">Home</router-link >
            </li>
            <li class="nav-item">
            <router-link  class="nav-link" to="/services">Services</router-link >
            </li>
            <li class="nav-item">
            <router-link  class="nav-link" to="/about-us">About us</router-link >
            </li>
        </ul>
        </div>
    </div>
  </nav>
    <!-- Navbar End -->
    
    <!-- Content section -->
    <main id="content">
      <slot name="content"></slot>    
    </main>
    <!-- Content section End -->

     <!-- Footer section -->
    <footer id="footer">
       2022 copyrights  
    </footer>
    <!-- Footer section End -->
</template>

<script>

export default {
    name: 'AppLayout',
    setup() {
     
    },
}
</script>
