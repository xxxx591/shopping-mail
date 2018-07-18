<template>
    <div class="nav-breadcrumb-wrap">
        <div class="container">
          <nav class="nav-breadcrumb">
            <a href="/">首页</a>
            <slot></slot>
          </nav>
        </div>
      </div>
</template>

<script>
export default {
  return() {
    data: {
      msg: "面包屑";
    }
  }
};
</script>
