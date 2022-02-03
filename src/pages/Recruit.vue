<template>
  <div class="recruit_panel">
        <img src="../assets/main/bg_zl_1350702.jpg" alt="" class="recruit_bg">
        <div class="back_btn" @click="back"></div>

        <div class="head_nav">
            <ol>
                <li v-for="(n,index) in card_table" :key="n.index" @click="choseSeason(n.season,index)">
                    {{n.season}}
                    <transition name='fade_in'>
                    <div class="current_mask" v-show="n.season == current_season">{{n.season}}</div>
                    </transition>
                </li>
            </ol>
        </div>


        <!-- 备战区 -->
        <div class="card_table_container" ref="container">
            <ul v-for="s in card_table" :key="s.index" v-show="s.season == current_season" ref="ul">
                <li v-for="c in s.pages" :key="c.index">
                    <img :src="c.img" alt="" @click="openRecruitWarriorsPanel(c)">
                    <div class="title">{{c.name}}</div>
                    <div class="show" >
                        <img src="../assets/main/reword3_274ceaf.png" alt="" @click="checkWarriorPool(c)">
                    </div>
                </li>
            </ul>
        </div>
        


        <!-- 底部 -->
        <div class="bottom_container">
            <div class="my_money">
                <img src="../assets/main/reword5_addbb41.png" alt="" class="money_img">
                <div class="number">{{my_money}}</div>
            </div>
        </div>
        <!-- 预览武将卡池 -->
        <transition name='fade_in'>
        <div class="show_warriors_pool" v-show="status.isShowWarriors">
                <img src="../assets/main/bg_zl_1350702.jpg" alt="" class="recruit_bg">
                <div class="title">
                    <img src="../assets/main/p12titbg_1.png" alt="" class="show_title_bg">
                    <div class="info">预览</div>
                </div>
                <div class="back_btn" @click="backToMain"></div>
                <ol>
                    <li v-for="c in warriors.current" :key="c.index">
                        <div class="bg_3" v-show="c.star == 3"></div>
                        <div class="bg_4" v-show="c.star == 4"></div>
                        <div class="bg_5" v-show="c.star == 5"></div>
                        <div class="star_shadow"></div>
                        <div class="name">  {{c.name}}</div>
                        <div class="bottom">
                            <div class="level">Lv.5</div>
                            <div class="cost">cost{{c.cost}}</div>
                            <div class="arms_bu" v-show="c.arms == '步'">{{c.att}}</div>
                            <div class="arms_gong" v-show="c.arms == '弓'">{{c.att}}</div>
                            <div class="arms_qi" v-show="c.arms == '骑'">{{c.att}}</div>
                        </div>
                        <img :src="c.img" alt="">
                        <div class="camp" v-show="c.camp == '蜀'"><img :src="require('../assets/main/shu.png')" alt=""></div>
                        <div class="camp" v-show="c.camp == '吴'"><img :src="require('../assets/main/wu.png')" alt=""></div>
                        <div class="camp" v-show="c.camp == '魏'"><img :src="require('../assets/main/wei.png')" alt=""></div>
                        <div class="camp" v-show="c.camp == '群'"><img :src="require('../assets/main/qun.png')" alt=""></div>
                        <div class="camp" v-show="c.camp == '汉'"><img :src="require('../assets/main/han.png')" alt=""></div>
                        <div class="red_star">
                            <ul class="red_list">
                                <li v-for="s in c.star" :key="s.index"><img src="../assets/main/star.png" alt=""></li>
                            </ul>
                        </div>
                        
                    </li>
                </ol>
        </div>
        </transition>

        <!-- 抽奖界面 -->
        <RecruitPanel v-show="status.isRecruit"
        :warriors = 'warriors.current'
        :my_money="my_money"
        :hard = 'hard'
        :ordinary = 'ordinary'
        :easy = 'easy'
        :four_warriors = 'four_warriors'
        :three_warriors = 'three_warriors'
        />
  </div>
</template>

<script>

import warriors_three from '../mixin/enlist_warrior3.js'
import warriors_four from '../mixin/enlist_warrior4.js'
import warriors_five from '../mixin/enlist_warrior5.js'

import RecruitPanel from '../components/RecruitPanel.vue'
import card_table from '../mixin/cardpool/card_table'
export default {
    name : 'Recruit',
    mixins:[
        warriors_three,
        warriors_four,
        warriors_five,

        card_table
    ],
    components:{
        RecruitPanel,
    },
    data(){
        return{
            status:{
                isShowWarriors:false,
                whichSeason : '备战区',
                isRecruit : false,
            },
            current_season:'第一赛季',
            warriors:{
                all:[],
                current:[]
            },
            my_money : 50000,
            time : '',
            cost : 0,

            hard:[],
            ordinary : [],
            easy : []
        }
    },
    methods: {
        //打开抽奖界面
        openRecruitWarriorsPanel(value){
            this.warriors.current = []
            this.hard = []
            this.ordinary =[]
            this.easy = []
            //获取出其中的5星卡
            for(let i=0;i<this.warriors.all.length;i++){
                if(value.type == 'ex'){
                    for(let j=0;j<value.content.length;j++){
                        if(this.warriors.all[i].name == value.content[j].name
                        && this.warriors.all[i].camp == value.content[j].camp
                        && this.warriors.all[i].arms == value.content[j].arms){
                            if(value.type == 'ex'){
                                this.warriors.all[i].getLevel = value.content[j].getLevel
                                this.warriors.current.push(this.warriors.all[i])
                            }else{
                                this.warriors.current.push(this.warriors.all[i])
                            }
                            
                        }
                    }
                }else if(value.type == 'all'){
                    for(let j=0;j<value.except.length;j++){
                        if(this.warriors.all[i].sign == value.except[j].type){
                            break;
                        }
                        if(j == value.except.length -1){
                            this.warriors.current.push(this.warriors.all[i])
                        }
                    }
                    // if(this.warriors.all[i].sign != value.except[0].type
                    // && this.warriors.all[i].sign != value.except[1].type
                    // && this.warriors.all[i].sign != value.except[2].type
                    // && this.warriors.all[i].star == 5){
                    //     this.warriors.current.push(this.warriors.all[i])
                    // }
                }else if(value.type == 'large'){
                    if(this.warriors.all[i].sign != value.except[0].type
                    && this.warriors.all[i].sign != value.except[1].type
                    && this.warriors.all[i].sign != value.except[2].type
                    && this.warriors.all[i].sign != value.except[3].type
                    && this.warriors.all[i].sign != value.except[4].type
                    && this.warriors.all[i].star == 5){
                        this.warriors.current.push(this.warriors.all[i])
                    }
                }
            }
            //根据获取难度进行筛选
            for(let i=0;i<this.warriors.current.length;i++){
                if(this.warriors.current[i].getLevel == 1){
                    this.hard.push(this.warriors.current[i])
                }else if(this.warriors.current[i].getLevel == 2){
                    this.ordinary.push(this.warriors.current[i])
                }else if(this.warriors.current[i].getLevel == 3){
                    this.easy.push(this.warriors.current[i])
                }
            }
            this.status.isRecruit = true
        },
        //选择赛季
        choseSeason(ob){
            this.current_season = ob
            this.$nextTick(()=>{
                this.$refs.container.scrollTo(0,0)                 
            })
        },
        back(){
            let date = new Date()
            let dateString = `${date.getYear()}_${date.getMonth()+1}_${date.getDate()}`
            let ob = {
                money : this.my_money,
                time : dateString
            }
            localStorage.setItem('my_money',JSON.stringify(ob))
            this.$router.push(
                {
                    path : '/',
                    query : {
                        from : 'recruit'
                    }
                }
            )
        },
        //查看武将卡池
        checkWarriorPool(value){
            this.warriors.current = []
            if(value.type == 'ex'){
                for(let i=0;i<this.warriors.all.length;i++){
                    for(let j=0;j<value.content.length;j++){
                        if(this.warriors.all[i].name == value.content[j].name
                        && this.warriors.all[i].camp == value.content[j].camp
                        && this.warriors.all[i].arms == value.content[j].arms){
                            this.warriors.current.push(this.warriors.all[i])
                        }
                    }
                    if(this.warriors.all[i].star == 4 || this.warriors.all[i].star == 3){
                        this.warriors.current.push(this.warriors.all[i])
                    }
                }
            }else if(value.type == 'all'){
                for(let i=0;i<this.warriors.all.length;i++){
                    for(let j=0;j<value.except.length;j++){
                        if(this.warriors.all[i].sign == value.except[j].type){
                            break;
                        }
                        if(j == value.except.length -1){
                            this.warriors.current.push(this.warriors.all[i])
                        }
                    }
                    // if(this.warriors.all[i].sign != value.except[0].type
                    // && this.warriors.all[i].sign != value.except[1].type
                    // && this.warriors.all[i].sign != value.except[2].type
                    // && this.warriors.all[i].star == 5){
                    //     this.warriors.current.push(this.warriors.all[i])
                    // }
                    if(this.warriors.all[i].star == 4 || this.warriors.all[i].star == 3){
                        this.warriors.current.push(this.warriors.all[i])
                    }
                }
            }else if(value.type == 'large'){
                for(let i=0;i<this.warriors.all.length;i++){
                    
                    if(this.warriors.all[i].sign != value.except[0].type
                    && this.warriors.all[i].sign != value.except[1].type
                    && this.warriors.all[i].sign != value.except[2].type
                    && this.warriors.all[i].sign != value.except[3].type
                    && this.warriors.all[i].sign != value.except[4].type
                    && this.warriors.all[i].star == 5){
                        this.warriors.current.push(this.warriors.all[i])
                    }
                    if(this.warriors.all[i].star == 4 || this.warriors.all[i].star == 3){
                        this.warriors.current.push(this.warriors.all[i])
                    }
                }
            }
                
                
            
            
            this.status.isShowWarriors = true
        },
        //返回招募主界面
        backToMain(){
            this.status.isShowWarriors = false
        },
        //消耗金币
        consumeMoney(val){
            this.my_money -= val
            this.cost += val
        },
        //关闭抽奖界面
        closeRecruitPanel(){
            this.status.isRecruit = false
        }
    },
    created() {
        for(let i=0;i<this.five_warriors.length;i++){
            this.warriors.all.push(this.five_warriors[i])
        }
        for(let i=0;i<this.four_warriors.length;i++){
            this.warriors.all.push(this.four_warriors[i])
        }
        for(let i=0;i<this.three_warriors.length;i++){
            this.warriors.all.push(this.three_warriors[i])
        }   
    },
    mounted() {
        let nowDate = new Date()
        let nowDateString = `${nowDate.getYear()}_${nowDate.getMonth()+1}_${nowDate.getDate()}`
        if(localStorage.getItem('my_money')){
            let temp = JSON.parse(localStorage.getItem('my_money'))  
            if(temp.time != nowDateString){
                this.my_money = 50000
            }else{
                this.my_money = temp.money
            }
        }
        this.$bus.$on('consumeMoney',this.consumeMoney)
        this.$bus.$on('closeRecruitPanel',this.closeRecruitPanel)
    },
}
</script>

<style lang='less'>
.recruit_panel{
    position: absolute; left: 0; top: 0;
    width: 100vw;
    height: 100vh;
    .recruit_bg{
        width: 100vw;
        height: 100vh;
    }
    .head_nav{
        position: absolute; top: 0; left: 10vw;
        width: 80vw;
        height: 6vw;
        overflow-x: scroll;
        overflow-y: hidden;
        ol{
            width: 240vw;
            height: 6vw;
            li{
                position: relative;
                float: left;
                height: 4vw;
                padding: 0 3vw;
                margin: 1vw 3vw 0 0;
                box-sizing: border-box;
                border-bottom: .1vw solid rgb(114, 114, 114);
                line-height: 3.9vw;
                text-align: center;
                color: rgb(173, 173, 173);
                font-size: 1vw;
                font-weight: bold;
            }
            .current_mask{
                position: absolute; left: 0; top: 0;
                height: 4vw;
                padding: 0 3vw;
                box-sizing: border-box;
                border-bottom: .1vw solid rgb(255, 255, 255);
                line-height: 3.9vw;
                text-shadow: 0 0 5vw white;
                text-align: center;
                color: rgb(255, 255, 255);
                font-size: 1vw;
                font-weight: bold;
                transition: all .2s;
            }
        }
    }
    .bottom_container{
        position: absolute; bottom: 0; left: 0;
        width: 100vw;
        height: 5vw;
        background: rgb(37, 37, 37);
        .my_money{
            position: absolute; left: 5vw; top: 1vw;
            width: 12vw;
            height: 3vw;
            background: rgb(17, 17, 17);
            box-shadow: .1vw .1vw .2vw #646464,inset .1vw .1vw rgba(0, 0, 0, 0.61);
            .money_img{
                position: absolute; left: .5vw; top: 0;
                width: 3vw;
                height: 3vw;
                border-radius: 50%;
            }
            .number{
                position: absolute; left: 4vw; top: 0;
                width: 8vw;
                height: 3vw;
                line-height: 3vw;
                font-size: 1vw;
                color: rgb(255, 196, 0);
            }
        }
    }
    .show_warriors_pool{
        position: absolute; left: 0; top: 0;
        width: 100vw;
        height: 100vh;
        transition: all .2s;
        .title{
            position: absolute; left: 1vw; top: 2vw;
            width: 16vw;
            height: 3vw;
            .show_title_bg{
                width: 100%;
                height: 100%;
            }
            .info{
                position: absolute;left: 0;top: 0;
                width: 12vw;
                height: 100%;
                color: rgb(255, 218, 148);
                font-size: 1.5vw;
                text-align: center;
                line-height: 3vw;
                font-weight: bold;
            }
        }
        ol{
            position: absolute; top: 15vh; left: 10vw;
            width: 80vw;
            height: 70vh;
            overflow-x: hidden;
            overflow-y: scroll;
            li{
                position: relative;
                float: left;
                width: 11vw;
                height: 16vw;
                box-sizing: border-box;
                margin: 2vw 0 0 2vw;
                border: .15vw solid rgba(0, 185, 9, 0);
                .bg_3,.bg_4,.bg_5{
                    position: absolute; left: -.15vw; top: -.15vw;
                    width: 100%;
                    height: 100%;
                }
                .bg_3{
                    border: .15vw solid rgb(0, 185, 9);
                    // background: rgb(0, 185, 9);
                }
                .bg_4{
                    border: .15vw solid rgb(0, 96, 185);
                    // background: rgba(0, 96, 185, 0.205);
                }
                .bg_5{
                    border: .15vw solid rgb(179, 0, 185);
                    // background: rgb(179, 0, 185);
                }
                .bottom{
                    position: absolute; bottom: 0; left: 0;
                    width: 100%;
                    height: 1.6vw;
                    background: rgba(15, 15, 15, 0.904);
                    border-top: .1vw solid rgb(119, 119, 119);
                    .arms_bu,.arms_qi,.arms_gong{
                        position: absolute; right: .2vw; bottom: 0;
                        width: 2.5vw;
                        height: 2.5vw;
                        line-height: 3vw;
                        color: white;
                        font-size: 1vw;
                        text-align: right;
                    }
                    .arms_bu{
                        background: url('../assets/main/type_01_497c5ed.png')no-repeat;
                        background-size: cover;
                    }
                    .arms_qi{
                        background: url('../assets/main/type_02_d126442.png')no-repeat;
                        background-size: cover;
                    }
                    .arms_gong{
                        background: url('../assets/main/type_03_d2f793e.png')no-repeat;
                        background-size: cover;
                    }
                    .level{
                        position: absolute; left: 0; bottom: 0;
                        width: 3vw;
                        padding: 0 0 0 .2vw;
                        text-align: left;
                        color: rgb(202, 202, 202);
                        font-size: 1vw;
                        line-height: 1.6vw;
                    }
                    .cost{
                        position: absolute; left: 3vw; bottom: 0;
                        width: 5vw;
                        text-align: center;
                        color: rgb(255, 246, 227);
                        line-height: 1.6vw;
                        font-size: 1vw;
                    }
                }
                .red_star{
                    position: absolute; right: .2vw; top: .1vw;
                    width: 6.3vw;
                    height: 2vw;
                    .red_list{
                        position: absolute;left: 0; top: 0;
                        width: 100%;
                        height: 100%;
                        li{
                            position: relative;
                            float: right;
                            width: 1.2vw;
                            height: 1.2vw;
                            font-size: 1vw;
                            color: yellow;
                            margin: .13vw 0 0 0;
                            border: 0 solid rgba(179, 0, 185, 0);
                            box-shadow: none;
                            img{
                                width: 100%;
                                height: 100%;
                                z-index: 1;
                            }
                        }
                        .red{
                            color: rgb(241, 0, 0);
                            text-shadow: 0 0 .2vw red;
                        }
                    }
                }
                .camp{
                    position: absolute; left: 0; top: 0;
                    width: 2.2vw;
                    height: 2.2vw;
                }
                .name{
                    position: absolute; left: 0; top: 0;
                    padding: 3vw .25vw;
                    width: 2.2vw;
                    height: 12.5vw;
                    text-align: center;
                    box-sizing: border-box;
                    font-size: 1vw;
                    color: rgb(255, 244, 181);
                    background: linear-gradient(to bottom,black,black,rgba(0, 0, 0, 0));
                }
                
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .back_btn{
      position: absolute; right: 5vw; top: 1vw;
      width: 5vw;
      height: 5vw;
      text-align: center;
      line-height: 5vw;
      font-size: 3vw;
      color: rgb(139, 139, 139);
    }
    .card_table_container{
        position: absolute; left: 10vw; top: 15vh;
        width: 80vw;
        height: 70vh;
        overflow-x: scroll;
        overflow-y: hidden;
        ul{
            position: absolute; left: 0; top: 0;
            // width: 200vw;
            width: 390vh;
            height: 70vh;
            @keyframes img_emerge {
               0%{
                //   transform: rotateX(90deg);
                transform: scale(0);
                  opacity: 0;
               }
               100%{
                //   transform: rotate(0);
                transform: scale(1);

                  opacity: 1;
               }
            }
            li{
                position: relative;
                height: 64vh;
                width: 38vh;
                float: left;
                margin: 3vh 5vh 0 0;
                overflow: hidden;
                animation: img_emerge .8s ease-out 1;
                box-shadow: 0 0 5px rgb(77, 2, 92);
                .title{
                    position: absolute; left: 0; top : 0;
                    width: 8vh;
                    height: 60vh;
                    padding: 10vh 3vh 0 3vh;
                    color: white;
                    text-align: center;
                    box-sizing: border-box;
                    font-size: 2vh;
                    
                    background:linear-gradient(to bottom,black,rgba(0, 0, 0, 0));
                }
                img{
                    position: absolute;left: -2vh; top: 0;
                    width: 44vh;
                    height: 100%;
                }
                h1{
                    position: absolute; left: 50%; bottom: 15vh;
                    margin: 0 0 0 -10vh;
                    width: 20vh;
                    height: 5vw;
                    font-size: 2vw;
                    text-align: center;
                    line-height: 5vw;
                    color: rgb(192, 192, 192);
                }
                .show{
                    position: absolute; right: 0; bottom: 0;
                    width: 5vw;
                    height: 5vw;
                    img{
                        width: 100%;
                        height: 100%;
                        // opacity: 0.5;
                        border-radius: 50%;
                    }
                }
            }
            li:nth-of-type(1){
                // animation-delay: -.4s;
                animation-duration: .4s;
            }
            li:nth-of-type(2){
                // animation-delay: -.3s;
                animation-duration: .5s;
            }
            li:nth-of-type(3){
                // animation-delay: -.2s;
                animation-duration: .6s;
            }
            li:nth-of-type(4){
                // animation-delay: -.1s;
                animation-duration: .7s;
            }
            
        }
    }
    
}
</style>