<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menu">
      <ul >
          <li class="menu-item" v-for="(menu,index) in goods" :key="index">
            <span class="menu-text">
              <span class="icon" v-if="menu.type>0" :class="classObjiect[menu.type]"></span>
              {{ menu.name}}
            </span>
          </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foods">
      <ul >
          <li class="foods-list" v-for="(item,index) in goods" :key="index">
            <h1 class="title">{{ item.name}}</h1>
              <ul >
                  <li class="foods-item" v-for="(foods,i) in item.foods" :key="i">
                    <div class="icon">
                        <img :src="foods.image" width="57px" height="57px">
                    </div>
                    <div class="content">
                      <h2 class="name">{{ foods.name}}</h2>
                      <p class="description">{{ foods.description}}</p>
                      <div class="description">
                        <span>月售{{foods.sellCount}}份</span>
                        <span class="rating">好评率{{foods.rating}}%</span>
                      </div>
                      <div class="price-wrapper">
                        <span class="price"><span style="font-size: 10px">￥</span>{{foods.sellCount}}</span>
                        <span class="oldPrice">{{foods.rating}}</span>
                      </div>
                    </div>
                  </li>
              </ul>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
const ERR_OK = 0;
export default{
    props:{
      seller:{
        type:Object
      }
    },
    data(){
      return {
        goods:[]
        
      }
    },
    computed:{
      classObjiect(){
        return ["decrease","discount","special","invoice","guarantee",]
      }
    },
    created(){
     this.$http.get('/api/goods').then((response)=>{
      response=response.body
      if(response.errno===ERR_OK){
        this.goods=response.data
        this.$nextTick(()=>{
          this._initScroll()
        })
      }
    })    
    },
    methods:{
      _initScroll(){
        // console.log(this.$refs.menu)
        // console.log(this.$refs.foods)
        this.menuscroll= new BScroll(this.$refs.menu,{})
        this.foodscroll= new BScroll(this.$refs.foods,{})
       console.log(this.menuscroll)
        console.log(this.foodscroll)
      }
    },
}
</script>

<style lang="less">
@import '../../common/style/mixin.less';
.goods{
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  width: 100%;
  overflow: hidden;
  // height: 100%;
  .menu-wrapper{
    flex: 0 0 80px;
    width: 80px;
    padding: 0 12px;    
    background: #f3f5f7;
    .menu-item{
      display: table;
      height: 54px;
      width: 56px;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      // color:rgb(240,20,20);
      .menu-text{
        display: table-cell;
        vertical-align: middle;
        box-shadow: 0 1px 0 0 rgba(7,17,27,0.1);        
        .icon{
          display: inline-block;
          vertical-align: top;
          // margin-right: 4px;
          width: 12px;
          height: 12px;
          background-size:12px 12px;
          background-repeat: no-repeat;
          &.decrease{
            .bg-image('../../components/goods/decrease_3');  
          }
          &.discount{
            .bg-image('../../components/goods/discount_3');  
          }
          &.special{
            .bg-image('../../components/goods/special_3');  
          }
          &.invoice{
            .bg-image('../../components/goods/invoice_3');  
          }
          &.guarantee{
            .bg-image('../../components/goods/guarantee_3');  
          }        
        }
      }

    }
  }
  .foods-wrapper{
    flex: 1;
    // overflow-y: scroll;
    .foods-list{
      .title{
        height: 26px;
        border-left: 2px solid #d9dde1;
        text-indent: 12px;
        font-size: 12px;
        line-height: 26px;
        color:rgb(147,153,159);
        background: #f3f5f7;
      }
      .foods-item{
        display: flex;
        padding: 18px;
        box-shadow: 0 1px 0 0 rgba(7,17,27,0.1);
        &:last-child{
          box-shadow: none;
        }
        .icon{
          flex: 0 0 57px;
          margin-right: 10px;
        }
        .content{
          flex: 1;
          .name{
            margin: 2px 0 8px; 
            font-size: 14px;
            line-height: 14px;
            color:rgb(7,17,27);
          }
          .description{
            margin: 8px 0;
            font-size: 10px;
            color: rgb(147,153,159);
            line-height: 10px;
            .rating{
              margin-left: 12px;
            }
          }
          .price-wrapper{
            font-size: 10px;
            line-height: 24px;
            color: rgb(147,153,159);
            .price{
              font-weight: 700;
              font-size: 14px;
              color:rgb(240,20,20);
              margin-right:8px;
            }
          }
        }
      }
    }
  }

}
</style>