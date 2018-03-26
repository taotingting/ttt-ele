<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass,index) in itemClasses" :key="index" :class="itemClass"></span>
  </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';
export default{
   props:{
     size:{
       type:Number
     },
     score:{
       type:Number
     }
   },
   data(){
     return {
      //  itemClasses:[]
     }
   },
   computed:{
     starType(){
       return "starType"+this.size
       //注释部分是我自己的写法 看了别人的想法感觉自己就是智障
      //  switch(this.size){
      //    case 24:
      //         return "starType24"
      //         break;
      //    case 36:
      //         return "starType36"
      //         break;
      //    case 48:
      //         return "starType48"
      //         break;
      //    default:
      //         return "starType24"
      //         break;      
      //  }
     },
     itemClasses(){
        let result=[]
        let scoreTemp=Math.floor(this.score*2)/2
        let halfFlag=scoreTemp % 1 !=0
        for(let i=0;i<parseInt(scoreTemp);i++){
          result.push(CLS_ON)
        }
        if(halfFlag){
          result.push(CLS_HALF)
        }
        while(result.length<LENGTH){
          result.push(CLS_OFF)
        }
        return result
     }

   },
  //  methods:{

  //  },
  //  created(){
  //    let a=Math.floor(this.score*2)/2
  //    let b=a/1
  //    for(let i=0;i<b;i++){
  //      this.itemClasses.push(CLS_ON)
  //    }
  //    if(b){
  //      this.itemClasses.push(CLS_HALF)
  //    }
  //    if(this.itemClasses.length==5){
  //      return 
  //    }else{

  //    }

  //  }

}
</script>

<style lang="less">
@import '../../common/style/mixin.less';
.star{
  display: inline-block;
  &.starType24{
    span{
      display: inline-block;
      margin-right: 6px;
      width: 10px;
      height: 10px;
      background-size: 10px 10px;
      background-repeat: no-repeat;
      &:last-child{
        margin-right: 0;
      }
    }
    .on{
      .bg-image('../../components/star/star24_on')
    }
    .half{
      .bg-image('../../components/star/star24_half')
    }
    .off{
      .bg-image('../../components/star/star24_off')
    }
  }
  &.starType36{
    span{
      display: inline-block;
      margin-right: 12px;
      width: 15px;
      height: 15px;
      background-size: 15px 15px;
      background-repeat: no-repeat;
      &:last-child{
        margin-right: 0;
      }
    }
    .on{
      .bg-image('../../components/star/star36_on')
    }
    .half{
      .bg-image('../../components/star/star36_half')
    }
    .off{
      .bg-image('../../components/star/star36_off')
    }
  }
  &.starType48{
    span{
      display: inline-block;
      margin-right: 18px;
      width: 20px;
      height: 19px;
      background-size: 20px 19px;
      background-repeat: no-repeat;
      &:last-child{
        margin-right: 0;
      }
    }

    .on{
      .bg-image('../../components/star/star48_on')
    }
    .half{
      .bg-image('../../components/star/star48_half')
    }
    .off{
      .bg-image('../../components/star/star48_off')
    }
  }
}
</style>