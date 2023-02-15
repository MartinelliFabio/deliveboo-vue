<template>
    <!-- <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 250px; ">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr>
  
  </div> -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.side-bar {
  width: 15%;
  min-width: 250px;
  min-height: 100vh;
  background-color: gray;
  padding: 1rem;

  ul {
    .title {
      color: white;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: bold;
      padding: 0.8rem;
    }

    li {
      font-size: 1.1rem;
      padding: 0.8rem;

      div {
        display: inline-block;
      }

      i {
        margin-right: 10px;
      }
    }
  }

  a {
    color: white;
  }
}

@media screen and (max-width: 992px) and (min-width: 300px) {
  .side-bar {
    width: auto;
    min-width: 80px;

    ul {
      li {
        div {
          display: none;
        }
      }
    }
  }
}
</style>
