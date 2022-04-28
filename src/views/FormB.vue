<template>
  <div class="container">
    <h1>My Form</h1>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-Form"
      label-position="top"
    >
      <div class="top-container">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select v-model="ruleForm.gender" placeholder="点击选择">
            <el-option label="男" :value="0" />
            <el-option label="女" :value="1" />
          </el-select>
        </el-form-item>
        <el-form-item class="areas-head" label="头像" prop="name">
          <el-avatar
            shape="square"
            :size="100"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          />
        </el-form-item>
        <el-form-item label="民族" prop="nationality">
          <el-select v-model="ruleForm.nationality" placeholder="点击选择">
            <el-option
              v-for="item in rules.nationality[1].enum"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="籍贯" prop="hometown">
          <el-select-v2
            v-model="ruleForm.hometown"
            :options="hometownData"
            value-key="label"
            placeholder="点击选择"
            clearable
          />
        </el-form-item>
      </div>
      <div class="middle-container">
        <el-form-item class="areas-f" label="年龄" prop="age">
          <el-input
            v-model.number="ruleForm.age"
            placeholder="输入"
            max="100"
            min="1"
            @change="bothChange1"
          />
        </el-form-item>
        <el-form-item class="areas-g" label="出生日期" prop="birthday">
          <el-date-picker
            v-model="ruleForm.birthday"
            type="date"
            :disabled-date="disabledDate"
            placeholder="选择出生日期"
            @change="bothChange2"
          />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input
            type="text"
            v-model="ruleForm.email"
            placeholder="输入邮箱"
          />
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="输入手机号" />
        </el-form-item>
        <el-form-item class="areas-h" label="最高学历" prop="education">
          <el-select v-model="ruleForm.education" placeholder="点击选择">
            <el-option
              v-for="item in rules.education.list"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="专业" prop="profession">
          <el-input v-model="ruleForm.profession" />
        </el-form-item>
        <el-form-item label="毕业院校" prop="graduatedSchool">
          <el-input v-model="ruleForm.graduatedSchool" />
        </el-form-item>
        <el-form-item class="areas-i" label="身高体重" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item class="areas-j" label="婚姻状况" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
      </div>
      <el-form-item label="求职意向" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item class="areas-h" label="家庭住址" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">Create</el-button>
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import moment from "moment";

const ruleFormRef = ref();
const ruleForm = reactive({
  name: null,
  gender: null,
  nationality: null,
  hometown: null,
  age: null,
  birthday: null,
  email: null,
  phone: null,
  education: null,
  profession: null,
  graduatedSchool: null,
});
const hometownData = [
  "北京市",
  "天津市",
  "上海市",
  "重庆市",
  "湖北省",
  "河北省",
  "福建省",
  "广东省",
  "海南省",
  "台湾省",
  "四川省",
  "湖南省",
  "安徽省",
  "江苏省",
  "云南省",
  "新疆维吾尔自治区",
  "内蒙古自治区",
  "甘肃省",
  "广西壮族自治区",
  "宁夏回族自治区",
  "香港特别行政区",
  "澳门特别行政区",
  "浙江省",
  "辽宁省",
  "黑龙江省",
  "山东省",
  "江西省",
  "山西省",
  "陕西省",
  "吉林省",
  "贵州省",
  "青海省",
  "西藏自治区",
].map((val) => ({ value: val, label: val }));
const rules = {
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  gender: [
    {
      type: "number",
      required: true,
      message: "请选择gender",
      trigger: "change",
    },
  ],
  nationality: [
    { required: true, message: "请选择民族", trigger: "change" },
    {
      type: "enum",
      enum: ["汉", "唐", "宋", "元", "明", "清"],
      message: "请选择民族",
      trigger: "change",
    },
  ],
  hometown: [
    {
      required: true,
      message: "请选择籍贯",
      trigger: "change",
      type: "enum",
      enum: hometownData.map((v) => v.value),
    },
  ],
  age: [
    { required: true, message: "请输入年龄", trigger: "blur" },
    {
      type: "number",
      min: 1,
      max: 100,
      message: "最大100岁最小1岁",
      trigger: ["change", "blur"],
    },
  ],
  birthday: [
    { required: true, message: "请选择出生日期", trigger: "blur" },
    {
      type: "date",
      message: "请选择100年内",
      trigger: "change",
      validate(rule, ...value) {
        console.log(rule, value);
        return false;
      },
    },
  ],
  email: [
    { required: true, message: "请输入联系邮箱", trigger: "blur" },
    {
      type: "string",
      message: "邮箱格式错误",
      pattern: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
      trigger: ["blur", "change"],
    },
  ],
  phone: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    {
      message: "手机号码格式错误",
      pattern:
        /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
      trigger: ["blur", "change"],
    },
  ],
  education: {
    required: true,
    message: "请选择学历",
    trigger: ["blur", "change"],
    list: ["博士", "硕士", "本科", "高中", "初中", "小学"],
  },
  profession: { required: true, message: "输入院校", trigger: "blur" },
};

function bothChange1(value) {
  ruleFormRef.value
    .validateField(["age"])
    .then((val) => {
      console.log(val);
      //  设置 出生年
      ruleForm.birthday = moment().subtract(value, "years").toDate();
    })
    .catch((err) => {
      // 清除 出生
      console.log(err);
      ruleForm.birthday = null;
    });
}

const disabledDate = (time) => {
  return time.getTime() > Date.now();
};

function bothChange2(value) {
  const diff = moment(value).locale("cn").fromNow(true);
  console.log(diff);
  if (diff.includes("years")) {
    const y = diff.split(" ")?.[0];
    if (y) {
      ruleForm.age = parseInt(y);
    }
  }
}
const submitForm = async () => {
  if (!ruleFormRef.value) return;
  await ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = () => {
  if (!ruleFormRef.value) return;
  ruleFormRef.value.resetFields();
};
</script>
<style lang="scss" scoped>
.container {
  padding: 10px;
  width: 600px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }

  .top-container {
    display: grid;
    grid-gap: 0 20px;
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  .areas-head {
    grid-area: 1 / 3 / 3 / 4;
  }

  .middle-container {
    display: grid;
    grid-gap: 0 20px;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
