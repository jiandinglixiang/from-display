<template>
  <div class="container">
    <h1>my Form this is</h1>
    <h3>please enter Form</h3>
    <ul class="form-container">
      <li v-for="(item, i) in color" :key="i">
        <div
          :class="active[i]"
          :style="{ backgroundColor: item }"
          @click="input(i)"
          @animationend="leave(i)"
        >
          <FromA :item="i" />
          <span v-show="active[i]" class="icon-close" @click="close(i)">X</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
// @ is an alias to /src
import { reactive } from "vue";
import FromA from "./FormA";

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
]);
const active = reactive([]);

function input(x) {
  if (!active[x]) {
    active[x] = "enter running";
  }
}
function close(x) {
  if (active[x]) {
    active[x] = "leave running";
  }
}
function leave(x) {
  active[x] = active[x].replaceAll(/(leave running)|(.running)/g, "");
}
</script>
<style lang="scss">
$width: 600px;
.container {
  .form-container {
    position: relative;
    width: $width;
    height: $width;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3, 200px);
    grid-auto-flow: dense; // 排序规则
    .icon-close {
      background-color: #a066b7;
      z-index: 3;
      position: absolute;
      right: 0;
      top: 0;
      width: 20px;
      height: 20px;
      border: 1px solid white;
      color: white;
      cursor: pointer;
    }
    li {
      > div {
        padding: 10px;
        width: $width/3;
        height: $width/3;
      }
    }
    li:nth-child(1) > div {
      left: 0;
      top: 0;
    }
    li:nth-child(2) > div {
      left: $width / 3;
      right: $width / 3;
      top: 0;
    }
    li:nth-child(3) > div {
      right: 0;
      top: 0;
      left: $width/3 * 2;
    }
    li:nth-child(4) > div {
      left: 0;
      top: $width/3;
      bottom: $width/3;
    }
    li:nth-child(5) > div {
      left: $width/3;
      top: $width/3;
      bottom: $width/3;
      right: $width/3;
    }
    li:nth-child(6) > div {
      left: $width/3 * 2;
      right: 0;
      top: $width/3;
      bottom: $width/3;
    }
    li:nth-child(7) > div {
      left: 0;
      top: $width/3 * 2;
    }
    li:nth-child(8) > div {
      top: $width/3 * 2;
      bottom: 0;
      left: $width/3;
      right: $width/3;
    }
    li:nth-child(9) > div {
      right: 0;
      bottom: 0;
      left: $width/3 * 2;
      top: $width/3 * 2;
    }
  }
}

.enter {
  position: absolute;
  z-index: 2;
  animation: enter 3s ease-in-out both;
}

.leave {
  position: absolute;
  z-index: 2;
  animation: leave 3s ease-in-out both;
}

@keyframes enter {
  from {
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
