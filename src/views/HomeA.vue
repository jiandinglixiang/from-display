<template>
  <div class="container">
    <div>my Form this is</div>
    <h3>please enter Form</h3>
    <ul class="form-container">
      <li v-for="(item, i) in color" :key="i">
        <div
          :class="active[i]"
          :style="{ backgroundColor: item }"
          @click="input(i)"
          @animationend="leave(i)"
        >
          {{ item }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
// @ is an alias to /src
import { reactive } from "vue";

const color = reactive([
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "gray",
  "red",
]);
const active = reactive([]);

function input(x) {
  active[x] = active[x] === "enter" ? "leave" : "enter";
}

function leave(x) {
  if (active[x] === "leave") {
    active[x] = null;
  }
}
</script>
<style lang="scss">
$width: 600px;
.container {
  .form-container {
    width: $width;
    height: $width;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-auto-flow: dense; // 排序规则
    color: white;
    position: relative;

    li {
      div {
        width: $width/3;
        height: $width/3;
      }
      > div:nth-child(0) {
        left: 0;
        top: 0;
      }
      > div:nth-child(1) {
        left: $width / 3;
        right: $width / 3;
        top: 0;
      }
    }
  }
}

.enter {
  position: absolute;
  animation: enter 1s ease-in-out both;
}

.leave {
  position: absolute;
  animation: leave 1s ease-in-out both;
}

@keyframes enter {
  from {
    z-index: 2;
  }
  to {
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: $width;
    height: $width;
    z-index: 2;
  }
}

@keyframes leave {
  from {
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: $width;
    height: $width;
    z-index: 2;
  }
  to {
    z-index: 2;
    width: $width/3;
    height: $width/3;
  }
}
</style>
