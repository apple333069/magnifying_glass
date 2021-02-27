<template>
  <div class="app-container">
    <el-container class="container mt-1">
      <!-- 頭部導航欄 -->
      <el-header>
        <div class="item1 mt-1">
          <img src="../assets/paw.png">
        </div>
        <div class="item2">
          <el-menu class="el-menu-demo" mode="horizontal">
            <el-menu-item>男款</el-menu-item>
            <el-menu-item>女款</el-menu-item>       
            <el-menu-item>兒童款</el-menu-item>
            <el-menu-item>專屬訂製</el-menu-item>
            <el-menu-item>特惠商品</el-menu-item>
            <el-menu-item class="text-danger h5">SALE</el-menu-item>
          </el-menu>
        </div>
        <div class="item3">
          <el-input
          placeholder="請輸入内容">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
        <div class="item4 ml-3">
          <img src="../assets/heart.png" class="heart mr-3">
          <img src="../assets/shopping-cart.png">
        </div>
      </el-header>
      <el-container class="main mt-5">
        <!-- 放大鏡 -->
        <el-aside width="500px">
          <div id="preview" class="col pr-0">          
            <div class="card bg-transparent mr-5 position-absolute">
              <!-- 左側中圖 -->
              <img   class="card-img-top" :src="imgs[i].md" alt="Card image cap" id="mImg">
              <div id="mask" class="position-absolute" v-show="show" :style="maskStyle"></div>
              <div @mouseover="toggle" @mouseout="toggle" @mousemove="drag" id="super-mask" class="position-absolute"></div> 
              <!-- 下排小圖 -->
              <div class="card-body p-0 text-center">
                <img src="../assets/hover-prev.png" class="btn float-left btn-light border-0 p-1 pt-4 pb-4" :class="times==0?'disabled':''" id="btnLeft" >
                <div class="d-inline-block pt-2 mx-0 m-auto">
                  <ul @mouseover="changei" class="list-unstyled mb-0"  id="ulImgs">
                    <li v-for="(p,i) of imgs" :key="i" class="float-left p-1">
                      <img :data-i="i" :src="p.sm">                     
                    </li>
                  </ul>
                </div>
                <img src="../assets/hover-next.png" class="btn float-right btn-light border-0 p-1 pt-4 pb-4"  id="btnRight" :class="times>=imgs.length-4?'disabled':''">
              </div>
            </div>
          </div>
        </el-aside>
        <!-- 放大圖 -->
        <div id="div-lg" class="position-absolute" v-show="show" :style="{'background-image':`url(${imgs[i].lg})`,'background-position':gbPosition}"></div>
        <!-- 右側資訊欄 -->
        <el-main>            
          <div class="mb-3">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首頁</el-breadcrumb-item>
              <el-breadcrumb-item>男裝</el-breadcrumb-item>
              <el-breadcrumb-item>上衣</el-breadcrumb-item>
              <el-breadcrumb-item>長袖連帽T</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="mt-2">
            <p class="h5 font-weight-bold">男裝基本款連帽上衣(長袖)</p>
          </div>
          <div class="mt-4">
            <el-tag type="info">有大尺碼</el-tag>
          </div>
          <div class="mt-5 mb-4">
            TWD $ <span class="text-danger h3">890</span>
            <img src="../assets/heart 24.png" class="heart24 float-right mt-2">
          </div>
          <hr>
          <div class="mt-5">
            <ul class="d-flex list-unstyled ml-2">
              <li class="mr-2 circle1"></li>
              <li class="circle2"></li>
            </ul>
          </div>
          <div class="sizetext mt-4">
            <span class="size">S</span>
            <span class="size">M</span>
            <span class="size">L</span>
            <span class="size">XL</span>
          </div>
          <div class="mt-4">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
          </div>
          <div class="mt-2">        
            <el-button class="button1 rounded-0" type="info">立即購買</el-button>       
            <el-button class="rounded-0" type="info">加入購物車</el-button>                            
          </div>
          <div class="mt-4">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
              <el-tab-pane label="商品材質" name="first" class="ml-3">
              <p class="p_text">材質 ：棉60%/聚酯纖維40%</p>
              <p class="p_text">厚度 ：厚</p>
              <p class="p_text">內裏 ：磨毛</p>
              <p class="p_text">彈性 ：有</p>
              <p class="p_text">產地 ：台灣</p>
              <p class="p_text">口袋數 ：1</p>
              </el-tab-pane>
              <el-tab-pane label="商品描述" name="second">商品描述</el-tab-pane>
              <el-tab-pane label="尺寸表" name="third">尺寸表</el-tab-pane>            
            </el-tabs>
          </div>        
        </el-main>
      </el-container>
    </el-container>  
  </div>   
</template>

<script>
export default {
  name: 'magnifying glass page',
  data(){
    return {     
      imgs:[
        {sm:require("../assets/S__2441262.jpg"),md:require("../assets/S__2441262.jpg"),lg:require("../assets/S__2441262.jpg")},
        {sm:require("../assets/S__2441259.jpg"),md:require("../assets/S__2441259.jpg"),lg:require("../assets/S__2441259.jpg")},
        {sm:require("../assets/S__2441261.jpg"),md:require("../assets/S__2441261.jpg"),lg:require("../assets/S__2441261.jpg")},  
        {sm:require("../assets/S__2433043.jpg"),md:require("../assets/S__2433043.jpg"),lg:require("../assets/S__2433043.jpg")} 
      ],
      show:false,
      i:0,
      maskStyle:{left:0, top:0},
      num: 1,
      activeName: 'first'
    };
  },
  methods:{
    handleChange(value) {
      console.log(value);
    },
    drag(e){     
      var left=e.offsetX-88;
      var top=e.offsetY-88;
      if(left<0){left=0}
      else if(left>176){left=176}
      if(top<0){top=0}
      else if(top>297){top=297}
      left=left+"px";
      top=top+"px";
      this.maskStyle={left,top};
    },
    toggle(){
      this.show=!this.show;
    },
    changei(e){
      if(e.target.nodeName=="IMG"){
        this.i=e.target.dataset.i;
      }
    }
  },
  computed:{
    gbPosition(){
      return `${-parseInt(this.maskStyle.left)*25/8}px ${-parseInt(this.maskStyle.top)*301/100}px`;
    }
  },
  watch:{
    // 監視地址欄的商品編號，如果更改，圖片重置回開始位置
    $route(){
      this.i=0;
      this.maskStyle={left:0,top:0};
      this.show=false;
      this.load();
    }
  }
}
</script>
<style scoped>
  .app-container{
    padding-top:10px;
    padding-bottom:50px;      
  }
  .mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-tao .mui-icon~.mui-tab-label {
    font-size:11px;
    display:block;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .el-header{
    background-color: #fff;
    color: #333;
    line-height: 60px;
    display: flex;
  }
  .item2,.item3{margin-left: 100px;}
  .el-aside {
    background-color: #fff;
    color: #333;
    margin-left: 30px;   
  }
  .el-main {
    background-color: #fff;
    color: #333; 
  }
  .el-input-number>>> .el-input-number__decrease{
    background: #fff;
    color: #000;
    font-size: 17px;
  }
  .el-input-number>>> .el-input-number__increase {
    background: #fff;
    color: #000;    
    font-size: 17px;
  }
  .button1{
    width: 100px; height: 42px;
    background: #000;
  } 
  .circle1,.circle2{
    background: rgb(26, 26, 26);
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .circle2{
    background: rgb(158, 92, 17);
  }
  .p_text{
    font-size: 14px;
    margin-bottom: 10px;
    color: #666666;
  }
  .size{    
    text-align: center;
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 4px;
    border: 1px solid #e0e0e0;
    cursor: pointer;  
    margin-right: 8px;
    padding: 6px 6px;
    }
  .container{
    height:700px;
    width:1200px;
    margin: 0 auto;
  }
   /*放大镜樣式*/
  #preview>.card>.card-body>div{
    width:248px;
    overflow:hidden;
  }
  #preview>.card>.card-body>div>ul{
    transition:margin-left .5s linear;
  }
  #preview>.card>.card-body>div>ul>li{
    width:62px; height:62px;
  }
  #preview>.card>.card-body>div>ul img{
    width:55px; height:60px;
  }
  #preview>.card>.card-body>div>ul img:hover{
    border:1px solid #e4393c;
  }
  #preview>div>img{width:352px}
  #mask{
    width:176px; height:176px;
    background-color:#ffa;
    opacity:.5;
  }
  #super-mask{
    width:352px; height:473px;   
  }
  #div-lg{
    width:500px; height:500px;
    left:525px;
    top:100px;
    z-index:1000;
    border: 1px solid rgba(0, 0, 0, 0.125)
  }
</style>
