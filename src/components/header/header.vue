<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟到达</div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" :class="classObjiect[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" v-if="seller.supports" @click="showDetials">
        <span>{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i> 
      </div>
    </div>
    <div class="bulletin-wrapper" @click="showDetials">
      <span class="icon"></span>
      <span class="text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>      
    </div>
    <div class="header-bg">
      <img width="100%" height="100%" :src="seller.avatar">
    </div>
    <div class="detials" v-show="detialsShow">
      <div class="detials-content clearfix">
        <div class="details-main">
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :score="seller.score" :size="48"></star>
          </div>
          <div class="title-wrapper">
              <div class="title-line"></div>
              <div class="title-text">优惠信息</div>
              <div class="title-line"></div>
          </div>
          <div class="supports-wrapper" v-if="seller.supports">
            <div class="supports" v-for="(support,index) in seller.supports" :key="index">
              <span class="icon" :class="classObjiect[support.type]"></span>
              <span class="text">{{support.description}}</span>
            </div>
          </div>
          <div class="title-wrapper">
              <div class="title-line"></div>
              <div class="title-text">商家公告</div>
              <div class="title-line"></div>
          </div>
          <div class="bulletin">{{seller.bulletin}}</div>
        </div>
      </div>
      <div class="details-footer">
        <i class="icon-close" @click="closeDetials"></i>         
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
    data(){
      return {
        detialsShow:false
      }
    },
    computed:{
      classObjiect(){
        return ["decrease","discount","special","invoice","guarantee",]
      }
    },
    methods:{
      showDetials(){
        this.detialsShow=true
      },
      closeDetials(){
        this.detialsShow=false
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
  position: relative;
  overflow: hidden;
  color:#fff;
  .content-wrapper{
    position: relative;
    padding: 24px 0 18px 24px; 
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
    }
    .supports{
      .icon{
        display: inline-block;
        vertical-align: top;
        margin-right: 4px;
        width: 12px;
        height: 12px;
        background-size:12px 12px;
        background-repeat: no-repeat;
        &.decrease{
          .bg-image('../../components/header/decrease_1');  
        }
        &.discount{
          .bg-image('../../components/header/discount_1');  
        }
        &.special{
          .bg-image('../../components/header/special_1');  
        }
        &.invoice{
          .bg-image('../../components/header/invoice_1');  
        }
        &.guarantee{
          .bg-image('../../components/header/guarantee_1');  
        }        
      }
      .text{
        display: inline-block;
        font-size: 10px;
        line-height: 12px;
      }
    }
    .support-count{
      position: absolute;
      right: 12px;
      bottom: 20px;
      padding: 7px 8px;
      font-size: 10px;
      line-height: 12px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 13px;
    }
  }
  .bulletin-wrapper{
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: rgba(7, 17, 27, 0.2);
    .icon{
      display: inline-block;
      vertical-align: top;
      margin-top: 7px;
      width: 22px;
      height: 12px;
      background-size: 22px 12px;
      background-repeat: no-repeat;
      .bg-image('../../components/header/bulletin');  
    }
    .text{
      vertical-align: top;
      margin: 0 4px;
      font-size: 10px;
      line-height: 28px;
    }
    .icon-keyboard_arrow_right{
      position: absolute;
      right: 12px;
      top: 9px;     
      width: 10px;
      height: 10px;
      font-size: 10px;
    }
  }
  .header-bg{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(7, 17, 27, 0.5);
    filter: blur(10px);
  }
  .detials{
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
    z-index: 100;
    width:100%;
    height: 100%;
    background-color: rgba(7, 17, 27, 0.6);
    backdrop-filter: blur(10px);
    .detials-content{
      width: 100%;
      min-height: 100%;
      .details-main{
        // width:100%;
        margin-top: 64px;
        padding-bottom: 64px;
        .name{
          font-size: 16px;
          line-height: 16px;
          font-weight: 700px;
          text-align: center;
        }
        .star-wrapper{
          height: 24px;
          margin: 16px auto 18px;
          text-align: center;
        }
        .title-wrapper{
          display: flex;
          padding: 0 36px;
          margin: 28px 0 24px;
          .title-line{
            flex: 1;
            margin-top: 6px;
            height: 0;
            border-bottom: 2px solid rgba(255,255,255,0.2);
          }
          .title-text{
            // flex: 1;
            margin: 0 12px;
            font-size: 14px;
            line-height: 14px;
            font-weight: 200;
            text-align: center;
          }
        }
        .supports-wrapper{
          margin: 24px 36px 28px 48px;
          .supports{
            height: 16px;
            margin-bottom: 12px;
            line-height: 16px;
            &:last-child{
              margin-bottom: 0;
            }           
            .icon{
              display: inline-block;
              vertical-align: top;
              margin-right: 6px;
              width: 16px;
              height: 16px;
              background-size:16px 16px;
              background-repeat: no-repeat;
              &.decrease{
                .bg-image('../../components/header/decrease_2');  
              }
              &.discount{
                .bg-image('../../components/header/discount_2');  
              }
              &.special{
                .bg-image('../../components/header/special_2');  
              }
              &.invoice{
                .bg-image('../../components/header/invoice_2');  
              }
              &.guarantee{
                .bg-image('../../components/header/guarantee_2');  
              }        
            }
            .text{
              display: inline-block;
              font-size: 12px;
            }
          }
        }
        .bulletin{
          margin: 0 48px;
          font-size: 12px;
          line-height: 24px;
        }
      }
    }
    .details-footer{
      position: relative;
      clear: both;
      margin-top: -64px;
      height: 64px;
      text-align: center;
      font-size: 32px;
      color: rgba(255, 255, 255, 0.5)
    }
  }
}
</style>