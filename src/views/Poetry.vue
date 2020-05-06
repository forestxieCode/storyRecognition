<template>
    <div class="container" v-horizontal-screen>
        <audio src="" id="buttonAudio"></audio>
        <div class="header">
            <div class="header-left">
                <span class="fn-button"><img src="../assets/顶端按钮/home.png"></span>
                <span class="fn-button"><img src="../assets/顶端按钮/prev.png"></span>
            </div>
            <div class="header-text">
              <span class="num">21</span>
              . 
              <span @click="hzrdFun('小','title1')" :class="{'left-to-right':currenClickNode ==='hzrd' && 'title1' === onlyKey}">小</span>
              <span @click="hzrdFun('羊','title2')" :class="{'left-to-right':currenClickNode ==='hzrd' && 'title2' === onlyKey}">羊</span>
              <span @click="hzrdFun('过','title3')" :class="{'left-to-right':currenClickNode ==='hzrd' && 'title3' === onlyKey}">过</span>
              <span @click="hzrdFun('桥','title4')" :class="{'left-to-right':currenClickNode ==='hzrd' && 'title4' === onlyKey}">桥</span>
            </div>
             <div class="header-right">
                <span class="fn-button"><img src="../assets/顶端按钮/next.png"></span>
                <span class="fn-button"><img src="../assets/顶端按钮/button_back.png"></span>
             </div>
        </div>

        <div class="connect">
           <div class="fn-nav">
              <span @click="handleClick('gsxs')" :class="{'active':currenClickNode ==='gsxs'}"><img src="../assets/左侧按钮图标和声音/gsxs.png"  ></span>
              <span @click="handleClick('qwld')" :class="{'active':currenClickNode === 'qwld'}"><img src="../assets/左侧按钮图标和声音/qwld.png"></span>
              <span @click="handleClick('djbf')" :class="{'active':currenClickNode ==='djbf'}"><img src="../assets/左侧按钮图标和声音/djbf.png"></span>
              <span @click="handleClick('hzrd')" :class="{'active':currenClickNode ==='hzrd'}"><img src="../assets/左侧按钮图标和声音/hzrd.png"></span>
           </div>
           <div class="text">
             <div>
               <div class="paragraph" v-for="(item,index) in words" :key="index+'index'"  :class="{'isZoom':currenClickNode==='hzrd'}"> 
                <span v-for="(item1,index1) in item" :key="index1+'index1'" @click="djbfFun(index,index1+1)"  :class="{'left-to-right':currenClickNode ==='djbf' && timeOut }">
                  <span v-for="(item2,index2) in item1" :key="index2+'index2'" :class="{'blue':tagword.indexOf(item2)!==-1,'left-to-right':currenClickNode ==='hzrd' && 'index2'+index+''+index1+''+index2 === onlyKey }" @click="hzrdFun(item2,'index2'+index+''+index1+''+index2)">
                    {{item2}}
                  </span>
                </span>
             </div>
            </div>
           </div>
        </div>
        <div class="footer">
            <div v-for="(item,index) in tagword" :key="index">
              <span :class="{'isradius':isradius.indexOf(item)!==-1}" @click="hzrdFun(item)">{{item}}</span>
              {{ index + 1}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Poetry',
  data:function(){
    return{
      words:[
       [
         '河上有条小木桥，',
        '小黑羊住在桥的东边，',
        '小白羊住在桥的西边。',

       ],
       [
         '一天，',
        '小黑羊和小白羊来到了桥上。',
        '小黑羊说：“',
        '让我先过去！”',
        '小白羊也说：“',
        '让我先过！”',
        '它们谁也不让谁，',
        '打了起来。',
        '最后，',
        '两个都掉进了河里。'
       ]
     ],
     tagword:['河', '条', '木', '桥', '黑','羊' ,'边','先','最','后','掉'],
     isradius:['木','后'],
     currenClickNode:'',
     timeOut:false,
     onlyKey:''
    }
  },
  methods:{
    handleClick(node){
      this.currenClickNode = node
      this.onlyKey  = ''
      if(node === 'gsxs'){
        this.$router.push({path:'PlayVideo'})
      }else if(node === 'qwld'){
        this.qwldFun()
      }
      this.menuPlay(node)
    },
    menuPlay(fileName){
        this.playFun(require(`../assets/左侧按钮图标和声音/audio_${fileName}.mp3`))
    },
    hzrdFun(word,key){
        if (!(/[\u4e00-\u9fa5]/.test(word) && this.currenClickNode === 'hzrd')) return;
        this.onlyKey = key
        this.playFun(require(`../assets/xygq/${word}.mp3`)) 
    },
    qwldFun(){
      setTimeout(()=>{
        this.playFun(require(`../assets/xygq/xygq.mp3`))
      },1500)
    },
    djbfFun(index,index1){
        if (!(this.currenClickNode === 'djbf')) return;
        let sum = 0;
        let newIndex = index - 1 
        while(newIndex>=0){
          sum += this.words[newIndex].length
          newIndex --
        }
        sum += index1
        this.playFun(require(`../assets/xygq/${sum}line.mp3`))
        // this.timeOut = true
        // setTimeout(()=>{
        //   this.timeOut= false
        // },600)
    },
    playFun(url){
      let buttonAudio = document.getElementById('buttonAudio');
      buttonAudio.setAttribute('src', url);
      buttonAudio.play();
    }
  }
}
</script>
<style>
.container{
  display: flex;
  width: 100%;
  background: url('../assets/bg.png') no-repeat;
  background-size: 100% 100%;
  height: calc(100vh);
  flex-direction: column;
}
.header{
  padding: 10px;
  height: 59px;
  line-height: 35px;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  width: 100%;
}
.header-text{
  flex-grow: 1;
  font-size: 20px;
  font-weight: 600px;
  height: 30px;
  display: flex;
  letter-spacing: 4px;
  justify-content: center;
  font-family: 'JDBS';
}
.header-text .num{
  font-family: 'ANKLEPAN';
}

.fn-button{
  display: inline-block;
  text-align: center;
  width: 30px;
  line-height: 28px;
  height: 28px;
  border-radius: 50%;
}
.fn-button img{
  object-fit: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.fn-button + .fn-button{
  margin-left: 7px;
}

.connect{
  display: flex;
  width: 100%;
  padding-left: 25px;
  box-sizing: border-box;
}

.connect .fn-nav{
  display: flex;
  width: 60px;
  flex-direction: column;
}
.connect .fn-nav img{
  width: 100%;
  height: 100%;
}
.connect .fn-nav span{
  display: inline-block;
  width: 50px;
  padding: 2px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  margin-bottom: 6px;
}
.connect .fn-nav .active{
  background: url('../assets/border.png') no-repeat;
  background-size: 100% 100%;
}

.connect .fn-nav span:last-child{
  margin-bottom: 0;
}

.connect .text{
  margin-left: 18px;
  flex: 1;
  height: 140px;
  padding-right: 25px;
  overflow-y: auto;
}
.connect .text div{
  flex: 1;
}
.connect .text .paragraph + .paragraph{
  margin-top: 9px;
}
.connect .text .paragraph{
  letter-spacing: 1.5px;
  text-indent: 30px;
  line-height: 16px;
  font-size: 13px;
  font-weight: 550;
  font-family: 'HYKTJ';
}
.connect .text .isZoom{
  letter-spacing: 3px;
  text-indent: 30px;
  line-height: 19px;
  font-size: 15px;
}
.connect .text .isZoom + .isZoom{
  margin-top: 13px;
}

.blue {
  color: blue;
}

.footer{
  padding-left: 25px;
  box-sizing: border-box;
  margin-top: 10px;
  display: flex;
}
.footer div{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: 6px;
  font-family: 'HYKTJ';
}

.footer div:last-child{
  margin-right: 0px;
}

.footer span{
  display: inline-block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  font-size: 15px;
  text-align: center;
  font-weight: 500;
  font-family: 'HYKTJ';
  background: url('../assets/circular.png') no-repeat;
  background-size: cover;
}
.footer .isradius{
  background: url('../assets/square.png') no-repeat;
  background-size: cover;
}
  @keyframes lineIn {
			from {
				width: 0;
			}
			
			to {
				width: 58%;
			}
		}
	.left-to-right{
    position:relative;
    text-align: center;
  }
  /*使用伪类给a下面添加下划线*/
  /*css3为了区别伪类选择器把::改为:,使用:也会自动转为::*/
  .left-to-right::after{
      content: "";
			display: block;
			width: 0px;
			height: 2px;
			position: absolute;
			left: 0px;
			bottom: -2px;/*==top: 30px;*/ /*用定位的方法设置下划线与标题的距离*/
			background: red;
			-webkit-animation: lineIn 0.9s;
      border-radius: 20px;
			/* Safari 和 Chrome */
			animation: lineIn 0.9s;
			z-index: 10;
  }


@media screen and (min-width:880px) and (max-width:900px){
   .header{
      padding: 12px;
      height: 62px;
      line-height: 38px;
    }
    .header-text{
      font-size: 22px;
    }
    .fn-button{
        width: 34px;
        line-height: 32px;
        height: 32px;
    }
    .connect .fn-nav span{
      height: 28px;
      width: 53px;
    }
   .connect .text{
     height: 160px;
   }
    
   .connect .text .paragraph + .paragraph{
      margin-top: 9px;
   } 
   .connect .text .paragraph{
      letter-spacing: 3px;
      text-indent: 30px;
      line-height: 20px;
      font-size: 16px;
      font-weight: 550;
      font-family: 'HYKTJ';
    }
    .connect .text .isZoom{
      letter-spacing: 2.4px;
      text-indent: 30px;
      line-height: 22px;
      font-size: 18px;
    }
    .connect .text .isZoom + .isZoom{
      margin-top: 13px;
    }
    .footer{
      margin-top: 14px;
    }
    .footer span{
      width: 27px;
      height: 27px;
      line-height: 27px;
      font-size: 18px;
    }
}

@media screen and (min-width:900px) and (max-width:1200px){
    .container{
        background-size:100% 100%;
        background-position:center;
    } 
    .header{
      padding: 13px;
      height: 65px;
      line-height: 40px;
    }
    .header-text{
      font-size: 23px;
      line-height: 30px;
    }
    .fn-button{
        width: 34px;
        line-height: 32px;
        height: 32px;
    }
    .connect .fn-nav{
      width: 63px;
    }
    .connect .fn-nav span{
      height: 28px;
      width: 60px;
      margin-bottom: 10px;
    }
    .connect .text{
       height: 230px;
       padding-right: 30px;
       
    }
    .connect .text .paragraph + .paragraph{
      margin-top: 11px;
    }
    .connect .text .paragraph{
      letter-spacing: 1.8px;
      text-indent: 28px;
      line-height: 21px;
      font-size: 18px;
      font-weight: 550;
      font-family: 'HYKTJ';
    }
    .connect .text .isZoom{
      letter-spacing: 2px;
      text-indent: 28px;
      line-height: 26px;
      font-size: 20px;
    }
    .connect .text .isZoom + .isZoom{
      margin-top: 11px;
    }
    .footer span{
      width: 29px;
      height: 29px;
      line-height: 29px;
      font-size: 18px;
    }
    .footer{
      margin-top: 29px;
    }
    .footer div{
      margin-right: 7.3px;
    }
}


@media screen and (min-width:1200px) and (max-width:1600px){
    .container{
        background-size:100% 100%;
        background-position:center;
    } 
    .header{
      padding: 13px;
      height: 65px;
      line-height: 40px;
    }
    .header-text{
      font-size: 23px;
      line-height: 30px;
    }
    .fn-button{
        width: 34px;
        line-height: 32px;
        height: 32px;
    }
    .connect .fn-nav{
      width: 63px;
    }
    .connect .fn-nav span{
      height: 28px;
      width: 60px;
      margin-bottom: 10px;
    }
    .connect .text{
       height: 230px;
       padding-right: 30px;
       
    }
    .connect .text .paragraph + .paragraph{
      margin-top: 11px;
    }
    .connect .text .paragraph{
      letter-spacing: 1.8px;
      text-indent: 28px;
      line-height: 21px;
      font-size: 18px;
      font-weight: 550;
      font-family: 'HYKTJ';
    }
    .connect .text .isZoom{
      letter-spacing: 2px;
      text-indent: 28px;
      line-height: 26px;
      font-size: 20px;
    }
    .connect .text .isZoom + .isZoom{
      margin-top: 11px;
    }
    .footer span{
      width: 29px;
      height: 29px;
      line-height: 29px;
      font-size: 18px;
    }
    .footer{
      margin-top: 29px;
    }
    .footer div{
      margin-right: 7.3px;
    }
}


</style>