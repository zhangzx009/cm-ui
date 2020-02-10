# Picker 选择器

### 介绍

选择器组件通常与 [弹出层](#/zh-CN/popup) 组件配合使用

### 引入

``` javascript
import Vue from 'vue';
import { Picker } from 'vant';

Vue.use(Picker);
```

## 代码演示

### 基础用法

对于单列选择器，传入数值格式的 columns 即可，同时可以监听选项改变的 change 事件

```html
<cm-picker :columns="columns" @change="onChange" />
```

```javascript
export default {
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    };
  },
  methods: {
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    }
  }
};
```

### 默认选中项

单列选择器可以直接通过`default-index`属性设置初始选中项的索引值

```html
<cm-picker
  :columns="columns"
  :default-index="2"
  @change="onChange"
/>
```

### 展示顶部栏

通常选择器组件会传入`show-toolbar`属性以展示顶部操作栏，并可以监听对应的`confirm`和`cancel`事件

```html
<cm-picker
  show-toolbar
  title="标题"
  :columns="columns"
  @cancel="onCancel"
  @confirm="onConfirm"
/>
```

```javascript
export default {
  data() {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  methods: {
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast('取消');
    }
  }
};
```

### 搭配弹出层使用

```html
<cm-field
  readonly
  clickable
  label="城市"
  :value="value"
  placeholder="选择城市"
  @click="showPicker = true"
/>

<cm-popup v-model="showPicker" position="bottom">
  <cm-picker
    show-toolbar
    :columns="columns"
    @cancel="showPicker = false"
    @confirm="onConfirm"
  />
</cm-popup>
```

```js
export default {
  data() {
    return {
      value: '',
      showPicker: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  }
};
```

### 禁用选项

选项可以为对象结构，通过设置 disabled 来禁用该选项

```html
<cm-picker :columns="columns" />
```

```javascript
export default {
  data() {
    return {
      columns: [
        { text: '杭州', disabled: true },
        { text: '宁波' },
        { text: '温州' }
      ]
    };
  }
};
```

### 多列联动

```html
<cm-picker :columns="columns" @change="onChange" />
```

```javascript
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
};

export default {
  data() {
    return {
      columns: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2
        }
      ]
    };
  },
  methods: {
    onChange(picker, values) {
      picker.setColumnValues(1, citys[values[0]]);
    }
  }
};
```

### 加载状态

若选择器数据是异步获取的，可以通过 `loading` 属性显示加载提示

```html
<cm-picker :columns="columns" loading />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
|------|------|------|------|------|
| columns | 对象数组，配置每一列显示的数据 | *Column[]* | `[]` | - |
| show-toolbar | 是否显示顶部栏 | *boolean* | `false` | - |
| toolbar-position | 顶部栏位置，可选值为`bottom` | *string* | `top` | - |
| title | 顶部栏标题 | *string* | `''` | - |
| loading | 是否显示加载状态 | *boolean* | `false` | - |
| value-key | 选项对象中，文字对应的 key | *string* | `text` | - |
| item-height | 选项高度 | *number* | `44` | - |
| confirm-button-text | 确认按钮文字 | *string* | `确认` | - |
| cancel-button-text | 取消按钮文字 | *string* | `取消` | - |
| visible-item-count | 可见的选项个数 | *number* | `5` | - |
| allow-html | 是否允许选项内容中渲染 HTML | *boolean* | `true` | 2.1.8 |
| default-index | 单列选择器的默认选中项索引，<br>多列选择器请参考下方的 Columns 配置 | *number* | `0` | - |
| swipe-duration | 快速滑动时惯性滚动的时长，单位`ms` | *number*  | `1000` | `2.2.10` |

### Events

Picker 组件的事件会根据 columns 是单列或多列返回不同的参数

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| confirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| cancel | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| change | 选项改变时触发 | 单列：Picker 实例，选中值，选中值对应的索引<br>多列：Picker 实例，所有列选中值，当前列对应的索引 |

### Slots

| 名称 | 说明 |
|------|------|
| default | 自定义顶部栏内容 |
| title | 自定义标题内容 |
| columns-top | 自定义选项上方内容 |
| columns-bottom | 自定义选项下方内容 |

### Column 数据结构

当传入多列数据时，`columns`为一个对象数组，数组中的每一个对象配置每一列，每一列有以下`key`

| 键名 | 说明 | 类型 |
|------|------|------|
| values | 列中对应的备选值 | *string[]*
| defaultIndex | 初始选中项的索引，默认为 0 | *number* |
| className | 为对应列添加额外的类名 | *any* |

### 方法

通过 ref 可以获取到 picker 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
|------|------|------|------|
| getValues | 获取所有列选中的值 | - | values |
| setValues | 设置所有列选中的值 | values | - |
| getIndexes | 获取所有列选中值对应的索引 | - | indexes |
| setIndexes | 设置所有列选中值对应的索引 | indexes | - |
| getColumnValue | 获取对应列选中的值 | columnIndex | value |
| setColumnValue | 设置对应列选中的值 | columnIndex, value | - |
| getColumnIndex | 获取对应列选中项的索引 | columnIndex | optionIndex |
| setColumnIndex | 设置对应列选中项的索引 | columnIndex, optionIndex | - |
| getColumnValues | 获取对应列中所有选项 | columnIndex | values |
| setColumnValues | 设置对应列中所有选项 | columnIndex, values | - |

## 常见问题

### 在桌面端无法操作组件？

参见[在桌面端使用](#/zh-CN/quickstart#zai-zhuo-mian-duan-shi-yong)。
