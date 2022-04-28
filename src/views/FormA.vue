<template>
  <div class="container">
    <div v-if="item === 0">
      <el-checkbox v-model="checkbox" label="option" />
      <el-checkbox v-model="checkbox" label="option2" />
      <el-checkbox v-model="checkbox" label="option3" />
      <h3>{{ checkbox }}</h3>
    </div>
    <div v-else-if="item === 1">
      <h1>颜色</h1>
      <el-color-picker v-model="color1" />
      <el-color-picker v-model="color1" />
      {{ color1 }}
    </div>
    <div v-else-if="item === 2">
      <h1>时间</h1>
      <el-date-picker v-model="date" type="date" placeholder="Pick a day" />
      <el-date-picker
        v-model="date2"
        type="datetime"
        placeholder="Select date and time"
      />
      {{ date }}
      {{ date2 }}
    </div>
    <div v-else-if="item === 3">
      <h1>输入框</h1>
      <el-input v-model="input" placeholder="Please input" clearable />
      {{ input }}
    </div>
    <div v-else-if="item === 4">
      <h1>单选</h1>
      <el-radio v-model="radio1" label="1" size="large">Option 1</el-radio>
      <el-radio v-model="radio1" label="2" size="large">Option 2</el-radio>
      {{ radio1 }}
      <el-rate v-model="rate1" />
      {{ rate1 }}
    </div>
    <div v-else-if="item === 5">
      <h1>Default value</h1>
      <el-slider v-model="slider1" />
      {{ slider1 }}
    </div>
    <div v-else-if="item === 6">
      <h1>table</h1>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>
    <div v-else-if="item === 7">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
    <div v-else-if="item === 8">
      <h1 class="next">NEXT FORM</h1>
      <el-button type="success" @click="$router.push('form-b')">next</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: String,
    show: String,
  },
  data() {
    return {
      slider1: null,
      checkbox: [],
      color1: "red",
      date: null,
      date2: null,
      input: "",
      radio1: null,
      rate1: null,
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
      activities: [
        {
          content: "Event start",
          timestamp: "2018-04-15",
        },
        {
          content: "Approved",
          timestamp: "2018-04-13",
        },
        {
          content: "Success",
          timestamp: "2018-04-11",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  overflow: hidden;
  color: white;
  > div {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;
  }
}
</style>
