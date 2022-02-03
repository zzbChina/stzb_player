<template>
    <div class="recruit_panel_container">
        <img src="../assets/main/bg_zl_1350702.jpg" alt="" class="warrior_bg">
        <div class="back_btn" @click="backToRecruit"></div>

        
        <ul class="main_recruit_box">
            <li v-for="c in res" :key="c.index" v-show="c.name" ref="card">
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
        </ul>
        <div class="recruit_btn" ref='btn' @click="recruit">招募5次(950虎符)</div>
        <!-- 底部 -->
        <div class="bottom_container">
            <div class="my_money">
                <img src="../assets/main/reword5_addbb41.png" alt="" class="money_img">
                <div class="number">{{my_money}}</div>
            </div>
        </div>

        <!-- <transition name='fadeIn'> -->
        <div class="five_emerge" v-show="fives.length > 0" @click="confirmGet">
            <div class="five_warriors_card" v-for="(f,index) in fives" :key="f.index" v-show="index == fives.length-1">
                <img :src="f.img" alt="">
                <div class="star_shadow"></div>
                <div class="name">  {{f.name}}</div>
                <div class="card_bottom">
                    <div class="level">Lv.5</div>
                    <div class="cost">cost{{f.cost}}</div>
                    <div class="arms_bu" v-show="f.arms == '步'">{{f.att}}</div>
                    <div class="arms_gong" v-show="f.arms == '弓'">{{f.att}}</div>
                    <div class="arms_qi" v-show="f.arms == '骑'">{{f.att}}</div>
                </div>
                <div class="camp" v-show="f.camp == '蜀'"><img :src="require('../assets/main/shu.png')" alt=""></div>
                <div class="camp" v-show="f.camp == '吴'"><img :src="require('../assets/main/wu.png')" alt=""></div>
                <div class="camp" v-show="f.camp == '魏'"><img :src="require('../assets/main/wei.png')" alt=""></div>
                <div class="camp" v-show="f.camp == '群'"><img :src="require('../assets/main/qun.png')" alt=""></div>
                <div class="camp" v-show="f.camp == '汉'"><img :src="require('../assets/main/han.png')" alt=""></div>
                <div class="red_star">
                    <ul class="red_list">
                        <li v-for="s in f.star" :key="s.index"><img src="../assets/main/star.png" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- </transition> -->

        <!-- 招募纪录 -->
        <div class="recordMyRecruit_btn" @click="checkMyRecordWarriors" ref="recordMyRecruit_btn">招募记录</div>
        <transition name='fade_in'>
        <div class="record_container" v-show="checkMyRecord">
            <img src="../assets/main/bg_01_cd8d39e.jpg" alt="">
            <ol>
                <li v-for="c in my_get" :key="c.index">
                    
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
    </div>
</template>

<script>
import functions from '../mixin/function'
export default {
    name : 'RecruitPanel',
    mixins:[functions],
    props: ['warriors','my_money','hard','ordinary','easy','three_warriors','four_warriors'],
    data(){
        return{
            res:[
                {
                    name : '',
                    star : '',
                    camp : '',
                    arms : '',
                    att : '',
                    cost : '',
                    img : require('../assets/warrior_4_3/Screenshot_20220127_152119_com.netease.stzb.netea.jpg') ,
                    sign : '',
                    getLevel : 0
                },
                {
                    name : '',
                    star : '',
                    camp : '',
                    arms : '',
                    att : '',
                    cost : '',
                    img : require('../assets/warrior_4_3/Screenshot_20220127_152119_com.netease.stzb.netea.jpg') ,
                    sign : '',
                    getLevel : 0
                },
                {
                    name : '',
                    star : 3,
                    camp : '',
                    arms : '',
                    att : '',
                    cost : '',
                    img : require('../assets/warrior_4_3/Screenshot_20220127_152119_com.netease.stzb.netea.jpg') ,
                    sign : '',
                    getLevel : 0
                },
                {
                    name : '',
                    star : '',
                    camp : '',
                    arms : '',
                    att : '',
                    cost : '',
                    img : require('../assets/warrior_4_3/Screenshot_20220127_152119_com.netease.stzb.netea.jpg') ,
                    sign : '',
                    getLevel : 0
                },
                {
                    name : '',
                    star : '',
                    camp : '',
                    arms : '',
                    att : '',
                    cost : '',
                    img : require('../assets/warrior_4_3/Screenshot_20220127_152119_com.netease.stzb.netea.jpg') ,
                    sign : '',
                    getLevel : 0
                },
            ],
            flag:false,
            my_get:[],
            account : 0,//保底计数

            fives : [],//五星武将的获得特效
            dirty:false,
            checkMyRecord:false
        }
    },
    methods:{
        checkMyRecordWarriors(){
            this.checkMyRecord = !this.checkMyRecord
            this.$refs.recordMyRecruit_btn.classList.add('active')
            setTimeout(() => {
                this.$refs.recordMyRecruit_btn.classList.remove('active')
            }, 200);
        },
        confirmGet(){
            this.fives.pop()
        },
        getFiveCommon(i){
            if(!this.dirty){
                this.dirty = true
            }
            let random2 = Math.floor(Math.random()*6)
            //表示抽到难度为1的武将
            console.log(random2)
            if(random2 == 0){
                let random3 = Math.floor(Math.random()*this.hard.length)
                this.transferResData.call(this,this.res[i],this.hard[random3])
                let empty = {name : '',star : '',camp : '',arms : '',att : '',cost : '',
                    img : require('../assets/warrior_4_3/Screenshot_20220127_152119_com.netease.stzb.netea.jpg') ,
                    sign : '',
                    getLevel : 0
                }
                this.transferResData.call(this,empty,this.hard[random3])
                this.fives.unshift(empty)
                this.sortMyGet.call(this,empty)
            }else if(random2 >= 1 && random2 < 3){
                let random3 = Math.floor(Math.random()*this.ordinary.length)
                this.transferResData.call(this,this.res[i],this.ordinary[random3])
                let empty = {name : '',star : '',camp : '',arms : '',att : '',cost : '',
                    img : require('../assets/warrior_4_3/Screenshot_20220127_152119_com.netease.stzb.netea.jpg') ,
                    sign : '',
                    getLevel : 0
                }
                this.transferResData.call(this,empty,this.ordinary[random3])
                this.fives.unshift(empty)
                this.sortMyGet.call(this,empty)
            }else{
                let random3 = Math.floor(Math.random()*this.easy.length)
                this.transferResData.call(this,this.res[i],this.easy[random3])
                let empty = {name : '',star : '',camp : '',arms : '',att : '',cost : '',
                    img : require('../assets/warrior_4_3/Screenshot_20220127_152119_com.netease.stzb.netea.jpg') ,
                    sign : '',
                    getLevel : 0
                }
                this.transferResData.call(this,empty,this.easy[random3])
                this.fives.unshift(empty)
                this.sortMyGet.call(this,empty)
            }
            //只要抽出五星，保底次数就重置
            this.account = 0;
        },
        recruit(){
            
            if(this.my_money > 950){
                if(!this.flag){
                    this.flag = true
                    this.$refs.btn.classList.add('active')
                    for(let i=0;i<5;i++){
                        this.$refs.card[i].classList.add('active')
                    }
                    this.account ++ ;
                    for(let i=0;i<5;i++){
                        if(this.account == 7){
                            this.getFiveCommon(i)
                        }else{
                            let random = Math.floor(Math.random()*30)
                            if(random == 0){
                                this.getFiveCommon(i)
                            }else if(random > 0 && random < 7){
                                let random2 = Math.floor(Math.random()*this.four_warriors.length)
                                // this.res[i] = this.four_warriors[random2]
                                this.transferResData.call(this,this.res[i],this.four_warriors[random2])
                            }else{
                                let random2 = Math.floor(Math.random()*this.three_warriors.length)
                                // this.res[i] = this.three_warriors[random2]
                                this.transferResData.call(this,this.res[i],this.three_warriors[random2])
                            }
                        }
                        
                    }
                    this.$bus.$emit('consumeMoney',950)
                    
                    setTimeout(()=>{
                        this.$refs.btn.classList.remove('active')
                    },200)
                    setTimeout(()=>{
                        this.flag = false
                        for(let i=0;i<5;i++){
                            this.$refs.card[i].classList.remove('active')
                        }
                    },800)
                }
            }else{
                this.$bus.$emit('alert','虎符不足了,明天再来吧')
            }
        },
        backToRecruit(){
            if(this.dirty){
                localStorage.setItem('my_record',JSON.stringify(this.my_get))
                this.$bus.$emit('success','招募记录已保存')
            }
            this.$bus.$emit('closeRecruitPanel')
        }
    },
    created() {
        
    },
    mounted() {
        if(localStorage.getItem('my_record')){
            this.my_get = JSON.parse(localStorage.getItem('my_record'))
        }
    }
}
</script>

<style lang='less'>
.recruit_panel_container{
    position: fixed; left: 0; top: 0;
    width: 100vw;
    height: 100vh;
    .record_container{
        position: absolute; left: 0; top: 0;
        width: 100vw;
        height: 100vh;
        background: #000;
        transition: all .2s;
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
                background: rgb(179, 0, 185);
                border: .15vw solid rgb(179, 0, 185);
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
                            background: rgba(0, 0, 0, 0);
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
                    padding: 3vw 0 0 .3vw;
                    width: 2.2vw;
                    height: 14vw;
                    box-sizing: border-box;
                    text-align: center;
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
    .five_emerge{
        position: absolute; left: 0; top: 0;
        width: 100vw;
        height: 100vh;
        background: #000;
        transition: all .1s;
        z-index: 10;
        .five_warriors_card{
            position: absolute;top: 50%; left: 50%;
            margin: -16.05vw 0 0 -11vw;
            animation: lively_emerge .2s ease-out 1;
            width: 22vw;
            height: 32.1vw;
            background: rgb(179, 0, 185);
            box-shadow: 0 0 4vw rgb(179, 0, 185);
            border: .35vw solid rgb(251, 123, 255);
            box-sizing: border-box;
            .card_bottom{
                position: absolute; bottom: 0; left: 0;
                width: 100%;
                height: 3vw;
                background: rgb(15, 15, 15);
                border-top: .1vw solid rgb(119, 119, 119);
                .arms_bu,.arms_qi,.arms_gong{
                    position: absolute; right: .2vw; bottom: 0;
                    width: 5vw;
                    height: 5vw;
                    line-height: 7vw;
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
                    width: 5vw;
                    padding: 0 0 0 .2vw;
                    text-align: left;
                    color: rgb(202, 202, 202);
                    font-size: 2vw;
                    line-height: 3vw;
                }
                .cost{
                    position: absolute; left: 50%; bottom: 0;
                    margin: 0 0 0 -2.5vw;
                    width: 5vw;
                    text-align: center;
                    color: rgb(255, 246, 227);
                    line-height: 3vw;
                    font-size: 1.8vw;
                }
            }
            .red_star{
                position: absolute; right: 1vw; top: .6vw;
                width: 13vw;
                height: 2vw;
                .red_list{
                    position: absolute;left: 0; top: 0;
                    width: 100%;
                    height: 100%;
                    li{
                        position: relative;
                        float: right;
                        width: 2.2vw;
                        height: 2.2vw;
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
                width: 4vw;
                height: 4vw;
            }
            .name{
                position: absolute; left: 0; top: 0;
                padding: 6vw 1vw 0 1vw;
                width: 4vw;
                height: 24vw;
                text-align: center;
                box-sizing: border-box;
                font-size: 1.8vw;
                font-weight: bold;
                line-height: 3vw;
                color: rgb(145, 135, 77);
                background: linear-gradient(to bottom,black,black,rgba(0, 0, 0, 0));
            }
            
            img{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
                z-index: 0;
            }
        }
    }
    .main_recruit_box{
        position: absolute;top:auto; bottom: 15vw; left: 15vw;
        width: 70vw;
        height: 22vw;
        li{
            float: left;
            position: relative;
            width: 10.9vw;
            height: 16vw;
            background: #000;
            margin: 3vw 0 0 2.58vw;
                .bg_3,.bg_4,.bg_5{
                    position: absolute; left: -.15vw; top: -.15vw;
                    width: 100%;
                    height: 100%;
                }
                .bg_3{
                    border: .15vw solid rgb(0, 185, 9);
                }
                .bg_4{
                    border: .15vw solid rgb(0, 96, 185);
                    // background: rgba(0, 96, 185, 0.205);
                }
                .bg_5{
                    border: .15vw solid rgb(179, 0, 185);
                    box-shadow: 0 0 2.8vw rgb(179, 0, 185) ;
                    animation: shadow_change 3s linear infinite;
                    // background: rgb(179, 0, 185);
                }
                @keyframes shadow_change {
                   0%{
                      box-shadow: 0 0 2.8vw rgb(179, 0, 185) ;
                   }
                   50%{
                       box-shadow: 0 0 1vw rgb(179, 0, 185) ;
                   }
                   100%{
                      box-shadow: 0 0 2.8vw rgb(179, 0, 185) ;
                   }
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
                    padding: 3vw 0 0 .2vw;
                    width: 2.2vw;
                    height: 14vw;
                    box-sizing: border-box;
                    text-align: center;
                    font-size: 1vw;
                    color: rgb(255, 244, 181);
                    background: linear-gradient(to bottom,black,black,rgba(0, 0, 0, 0));
                }
                
                img{
                    width: 100%;
                    height: 100%;
                }
        }
        li.active{
            animation: lively_emerge .4s ease-out 1;
        }
        li:nth-of-type(5){
            animation-delay: 0;
        }
        li:nth-of-type(4){
            animation-delay: -.04s;
        }
        li:nth-of-type(3){
            animation-delay: -.08s;
        }
        li:nth-of-type(2){
            animation-delay: -.12s;
        }
        li:nth-of-type(1){
            animation-delay: -.16s;
        }
    }
    .recordMyRecruit_btn{
        position: absolute; top: 2vw; left: 0;
        width: 14vw;
        height: 4vw;
        // background: darkred;
        background: url('../assets/main/card_z_430518b.png')no-repeat center;
        background-size: cover;
        text-align: center;
        line-height: 4vw;
        font-size: 1vw;
        color: white;
        z-index: 5;
        opacity: 1;
        transition: all .2s;
    }
    .recordMyRecruit_btn.active{
        transform: translateX(-6vw);
    }
    .recruit_btn{
        position: absolute; bottom: 8vw; left: 50%;
        width: 14vw;
        height: 4vw;
        text-align: center;
        line-height: 4vw;
        font-size: 1vw;
        color: white;
        background: rgb(107, 1, 1);
        border-radius: .3vw;
        margin:  0 0 0 -7vw;
        overflow: auto;
        box-shadow: .3vw .3vw 1vw #2b2b2b,inset .1vw .1vw rgba(255, 230, 230, 0.4);
    }
    .recruit_btn.active{
        animation: click .2s ease-out 1;
    }
}
</style>