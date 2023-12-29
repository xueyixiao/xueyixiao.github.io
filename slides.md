---
layout: cover
colorSchema: light
highlighter: shiki
transition: slide-left
---

# 百度地图技术分享
如何使用百度地图与旗舰店项目中示例分享

<div class="uppercase text-sm tracking-widest">
贾龙飞
</div>

<div class="abs-bl mx-14 my-12 flex">
  <img src="https://cdn.rawgit.com/ElemeFE/vue-amap/master/src/docs/assets/images/logo.png" class="h-10">
  <div class="ml-3 flex flex-col text-left">
    <div><b>vue-bmap-gl</b></div>
    <div class="text-sm opacity-50">27. 12, 2023</div>
  </div>
</div>


<div class="abs-br m-10 flex gap-2">
  <a href="https://docs.guyixi.cn/vue-bmap-gl/#/" target="_blank" alt="vue-bmap-gl" 
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-black">
     <img src="https://cdn.rawgit.com/ElemeFE/vue-amap/master/src/docs/assets/images/logo.png" class="h-6">
  </a>
  <a href="https://lbsyun.baidu.com/index.php?title=jspopularGL" target="_blank" alt="baidu" 
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-black">
     <img src="https://lbs.baidu.com/skins/MySkin/resources/img/icon/lbsyunlogo_icon.ico" class="h-6">
  </a>
</div>

---
transition: slide-up
level: 2
---

# 什么是百度地图?

百度地图是百度开发平台旗下的地图服务，提供全球范围内的地图数据、位置搜索和导航服务。通过百度地图，开发者可以在其应用中集成地图展示、定位服务，为用户提供更好的地理信息体验。

<div class='flex gap-1'>
  <img src='/assets/images/bmap.png' class='h-100 w-auto'>
  <iframe src='https://lbsyun.baidu.com/jsdemo/demo/gImageGround.htm' class='h-100 w-100'></iframe>
</div>

---
layout: default
transition: slide-left
class: p-0 flex
---

<img src='/assets/images/demo.png' class='h-100% m-auto'>

<div class='abs-br m-6 flex gap-2'>
 <a href="https://lbsyun.baidu.com/skins/MySkin/resources/iframs/jsDemo.html?20220817" target="_blank" alt="baidu" 
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-black">
   Map Demo
  </a>
</div>

---
layout: center
transition: slide-left
---

# 使用百度地图前 你需要的之至知识

---

# 经纬度与坐标系
## 地址：上海市静安区江场路1228弄

|                      |                  |                                                                                                                       |
| -------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| 121.452950,31.295480 | <kbd>WGS84</kbd> | 地球坐标系，也是目前广泛使用的GPS全球卫星定位系统使用的坐标系。一般常见于 GPS 设备，Google 地图等国际标准的坐标体系。 |
| 121.471028,31.309481 | <kbd>GCJ02</kbd> | 火星坐标系，是由中国国家测绘局制订的地理信息系统的坐标系统。由WGS84坐标系经加密后的坐标系。常见于高德地图。           |
| 121.465058,31.303725 | <kbd>BD09</kbd>  | 百度坐标系，在GCJ02坐标系基础上再次密。                                                                               |

---
transition: slide-left
class:  flex flex-col
---

# 获取百度地图密钥

<div class='flex gap-1 overflow-auto'>
  <p class='flex-1 self-center'>
  <p>公司密钥：</p>
  rWv4NaisCdtWFfGuHQZxxxxxxxxxxxxx
  </p>
  <div class='flex-1 overflow-auto'><img src='/assets/images/key.png'  ></div>
</div>

---

# Demo 展示地图

<div flex="~ gap-4" h='100%'>
```html {0|1-14,23|15-16|17-23|all}
<!DOCTYPE html>
<html>
<head>
   <style>
   body, html, #container {
       overflow: hidden;
       width: 100%;
       height: 100%;
   }
   </style>
</head>
<body>
  <div id="container"></div>
</body>
<script src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=您的密钥">
</script>
<script>
 // 创建Map实例
var map = new BMapGL.Map('container');
// 初始化地图,设置中心点坐标和地图级别
map.centerAndZoom(new BMapGL.Point(116.404, 39.928), 15); 
</script>
</html>
```
<iframe class='w-100%' scrolling="no" frameborder="0" src="https://lbsyun.baidu.com/jsdemo/demo/kMapClickEvent.htm"></iframe>
</div>

---

# Vue-bmap-gl demo 

<div flex="~ gap-4" h='100%'>

<div class='flex-1'>
基于 Vue 2.x 与百度地图GL的地图组件 <br/>
数据状态与地图状态单向绑定，开发者无需关心地图的具体操作

```js {0|1-6|7-12|all}
// 1. 脚本初始化，npm安装
import VueBMap from 'vue-bmap-gl';
import 'vue-bmap-gl/dist/style.css'

Vue.use(VueBMap);
VueBMap.initBMapApiLoader({ ak: 'YOUR_KEY', v: '1.0' });

// 2. 初始化地图，设置中心点坐标和地图级别
<template>
<el-bmap :center="[116.404, 39.928]" :zoom="15" ></el-bmap>
</template>
```
</div>

<iframe class='w-100% flex-1' scrolling="no" frameborder="0" src="https://lbsyun.baidu.com/jsdemo/demo/kMapClickEvent.htm"></iframe>
</div>

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

---
layout: center
---

# 在旗舰店项目中的应用

---
class: flex flex-col
---
# 简单的点标记展示

<div flex="~ gap-4" class='flex-1'>
<div class='flex-1 h-100%'>
```html
<template>
  <el-bmap :center="center" :zoom="zoom">
     <el-bmap-marker
      :position="marker.position"
      :title="marker.title"
      :label="marker.label"
    ></el-bmap-marker>
  </el-bmap>
</template>
<script>
  data() {
    return {
      zoom: 14,
      center: [121.54748, 31.26991],
      marker: {...}
    };
  },
  created() {
    this.getToiletMarker();
  }
</script>
```
</div>

<iframe class='w-full flex-1' scrolling="no" frameborder="0" src="https://zwdt.sh.gov.cn/qykj/app_area_yp/binjiang/toilet"></iframe>
</div>

<div class='abs-br m-6 flex gap-2'>
 <a href="https://zwdt.sh.gov.cn/qykj/app_area_yp/binjiang/toilet" target="_blank" alt="baidu" 
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-black">
   Map Demo
  </a>
</div>

---

# 多个点标记展示

<div flex="~ gap-4">
<div>
```html
<template>
  <el-bmap :center="center" :zoom="zoom" :heading="heading">
     <el-bmap-marker
      v-for="(marker, index) in markers"
      :key="index"
      :position="marker.position"
      :title="marker.title"
      :label="marker.label"
    ></el-bmap-marker>
  </el-bmap>
</template>
<script>
  data() {
    return {
      zoom: 15,
      heading: -45,
      center: [121.54165, 31.26],
      markers:[...]
    };
  },
  created() {
    this.getToiletMarker();
  }
</script>
```
</div>

<iframe class='w-100%' scrolling="no" frameborder="0" src="https://zwdt.sh.gov.cn/qykj/app_area_yp/binjiang/sightseeing-bus"></iframe>
</div>

<div class='abs-br m-6 flex gap-2'>
 <a href="https://zwdt.sh.gov.cn/qykj/app_area_yp/binjiang/sightseeing-bus" target="_blank" alt="baidu" 
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-black">
   Map Demo
  </a>
</div>

---

# 导航部分展示
使用百度地图 API（BMapGL）进行步行路线搜索的 JavaScript 代码
<div flex="~ gap-4">
<div>

```js
// 创建百度地图 浏览器定位实例
const geolocation = new BMapGL.Geolocation();
// 获取当前位置信息
geolocation.getCurrentPosition((r) => {
    // 检查是否成功获取用户位置信息
   const isUserLocation = r?.point?.lng && r?.point?.lat;
   if (!isUserLocation) return
    // 起点
   let p1 = new BMapGL.Point(r.point.lng, r.point.lat);
   // 终点
   let p2 = new BMapGL.Point(this.dialogContent.lng, this.dialogContent.lat); 
   this.walking.search(p1, p2);
   this.walking.setSearchCompleteCallback((results) => {
     if (this.walking.getStatus() == BMAP_STATUS_SUCCESS) {
       // 正常搜索完成，处理结果
     } else {
       // 路线搜索失败，处理错误
       console.error('步行路线搜索失败：' + this.walking.getStatus());
     }
   });
 });
```
</div>

<iframe class='w-100%' scrolling="no" frameborder="0" src="https://zwdt.sh.gov.cn/qykj/app_area_yp/binjiang/sightseeing-bus"></iframe>
</div>

<div class='abs-br m-6 flex gap-2'>
 <a href="https://zwdt.sh.gov.cn/qykj/app_area_yp/binjiang/sightseeing-bus" target="_blank" alt="baidu" 
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-black">
   Map Demo
  </a>
</div>

---

# 路线获取成功展示

<img src='/assets/images/walking.png' class='h-100% m-auto'>

---
transition: slide-up
---

# 地面叠加层

<div flex="~ gap-4">
<div>

```html
<template>
  <el-bmap :center="[121.54748, 31.26991]" :zoom="zoom">
     <el-bmap-circle v-for="(marker, index) in markers" :key="index" 
     :center="marker.position" :visible="zoom >= 15" :radius="40" 
     :stroke-opacity="0" 
     :fill-opacity="0" >
     </el-bmap-circle>
    <el-bmap-ground-overlay :url="groundimage.url" :visible="true"
    :bounds="groundimage.bounds">
    </el-bmap-ground-overlay>
  </el-bmap>
</template>
<script>
  data() {
    return {
      zoom:14,
      marker: {...},
      groundimage:{ url: require('./v1.png'),
        bounds:[[121.5179316570199, 31.252122284038716],
          [121.57431519364309, 31.298115526378922]]},
    };
  },
</script>
```
</div>

<iframe class='w-100%' scrolling="no" frameborder="0" src="https://zwdt.sh.gov.cn/qykj/app_area_yp/binjiang/sightseeing-tour"></iframe>
</div>

<div class='abs-br m-6 flex gap-2'>
 <a href="https://zwdt.sh.gov.cn/qykj/app_area_yp/binjiang/sightseeing-tour" target="_blank" alt="baidu" 
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-black">
   滨江全景导览
  </a>
</div>
---

<img src='/assets/images/ground-overlay.png' class='h-100% m-auto'>


---
layout: center
---

# 常见问题

---

# 常见问题

- **地面叠加层无法展示？** - 百度文档上没有写，图片大小实际上有限制，5000*5000

- **无法使用路线规划？** - 付费功能，定额定量

---
layout: center
---

# End
