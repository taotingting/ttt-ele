<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <div class="brand"></div>
          <div class="name">{{seller.name}}</div>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟到达</div>
        <div class="supports" v-if="seller.supports">
          <div class="icon"></div>
          <div class="text">{{seller.supports[0].description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    props:{
      seller:{
        type:Object
      }
    },
    created(){
      console.log(this.seller)
    }
}
</script>

<style lang='less'>
@import '../../common/style/mixin.less';
.header{
  .content-wrapper{
    padding: 24px 0 18px 24px;
    background: #000;
    color: #fff;    
    font-size: 0;
    .avatar{
      display: inline-block;
      vertical-align: top;
      img{
        width: 64px;
        height: 64px;
        border-radius: 2px;
      }
    }
    .content{
      display: inline-block; 
      margin-left: 16px;     
      .title{
        margin-top: 2px;
        .brand{
          display: inline-block;
          vertical-align: top;
          margin-right: 6px;
          width: 30px;
          height: 18px;
          background-size: 30px 18px;
          background-repeat: no-repeat;
          .bg-image('../../components/header/brand');
        }
        .name{
            display: inline-block;          
            font-size: 16px;
            font-weight: bold;
            line-height: 18px;
        }

      }
    }
    .description{
      margin: 8px 0 10px;
      font-size: 12px;
      line-height: 12px;
      font-weight: 200;
    }
    .supports{
      .icon{
        display: inline-block;
        vertical-align: top;
        margin-right: 4px;
        width: 30px;
        height: 18px;
        background-size: 30px 18px;
        background-repeat: no-repeat;
        .bg-image('../../components/header/bulletin');  
      }
      .text{
        display: inline-block;
        font-size: 10px;
        font-weight: 200;
        line-height: 12px;
      }
    }
  }

}
</style>