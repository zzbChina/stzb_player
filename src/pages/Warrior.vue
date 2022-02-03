<template>
  <div class="warrior_panel" >
    <img src="../assets/main/bg_zl_1350702.jpg" alt="" class="warrior_bg">
    <div class="add_warriors_btn" @click="status.isShowAddWarriors = true">添加武将</div>
    <div class="safe_info_btn" @click="safeMyWarriors" ref="safe_info_btn">保存</div>
    <div class="load_long_image" @click="clickGeneratePicture" ref="load_long_image">生成长图</div>
    <div class="back_btn" @click="backToMain"></div>
    <ol ref="imageDom">
        <li v-for="(c,index) in my_warriors" :key="c.index" @click="openThisInfo(c,index)" >
            <div class="name">  {{c.name}}</div>
            <div class="star_shadow"></div>
            <div class="on_team" v-show="c.onTeam">
                <img src="../assets/main/ny_titBg_9583403.png" alt="">
                <div class="font">出战</div>
            </div>
            <div class="bottom">
                <div class="level">Lv.{{c.level}}</div>
                <div class="cost">COST{{c.cost}}</div>
                <div class="arms_bu" v-show="!c.current_arm && c.arms == '步'">{{c.att}}</div>
                <div class="arms_gong" v-show="!c.current_arm && c.arms == '弓'">{{c.att}}</div>
                <div class="arms_qi" v-show="!c.current_arm && c.arms == '骑'">{{c.att}}</div>
                <!-- 高级兵种 -->
                <div class="up_arms" v-show="c.current_arm">
                    <img :src="c.current_arm" alt="">
                </div>
                <div class="up_arms_att" v-show="c.current_arm">{{c.att}}</div>
            </div>
            <img :src="c.img" alt="">
            <img :src="require(`../assets/main/s2.png`)" alt="" class="sign" v-show="c.sign == 's2'">
            <img :src="require(`../assets/main/s3.png`)" alt="" class="sign" v-show="c.sign == 's3'">
            <img :src="require(`../assets/main/xp.png`)" alt="" class="sign" v-show="c.sign == 'xp'">
            <img :src="require(`../assets/main/sp.png`)" alt="" class="sign" v-show="c.sign == 'sp'">
            <div class="camp" v-show="c.camp == '蜀'"><img :src="require('../assets/main/shu.png')" alt=""></div>
            <div class="camp" v-show="c.camp == '吴'"><img :src="require('../assets/main/wu.png')" alt=""></div>
            <div class="camp" v-show="c.camp == '魏'"><img :src="require('../assets/main/wei.png')" alt=""></div>
            <div class="camp" v-show="c.camp == '群'"><img :src="require('../assets/main/qun.png')" alt=""></div>
            <div class="camp" v-show="c.camp == '汉'"><img :src="require('../assets/main/han.png')" alt=""></div>
            <div class="red_star">
                <ul class="red_list">
                    <li v-for="s in c.red" :key="s.index" class="red"><img src="../assets/main/red_star.png" alt=""></li>
                    <li v-for="s in (5-c.red)" :key="s.index"><img src="../assets/main/star.png" alt=""></li>
                </ul>
            </div>
            <div class="up" v-show="c.isUp.status">
                <img src="../assets/main/juexing.png" alt="">
            </div>
            
        </li>
    </ol>
      
    <div class="bottom" >{{my_warriors.length}}/250
        <div class="check_my_record_btn" @click="status.isShowMyRecruitRecord = true">
            <img src="../assets/main/bg_nav_btn.1a7015d3.png" alt="">
            <div class="content">我的招募</div>
        </div>
    </div>

    <transition name='fade_in'>
    <div class="add_warriors_panel" v-show="status.isShowAddWarriors">
        <img src="../assets/main/bg_1f611bf.jpg" alt="" class="add_warrior_bg_img">
        <div class="back" @click="status.isShowAddWarriors = false"></div>
        <div class="left_part">
            <ul>
                <li v-for="(s,index) in all_warriors" :key="s.index" @click="choseThis(s,index)" ref="all_warriors">
                    
                    <div class="camp" v-show="s.camp == '蜀'"><img :src="require('../assets/main/shu.png')" alt=""></div>
                    <div class="camp" v-show="s.camp == '吴'"><img :src="require('../assets/main/wu.png')" alt=""></div>
                    <div class="camp" v-show="s.camp == '魏'"><img :src="require('../assets/main/wei.png')" alt=""></div>
                    <div class="camp" v-show="s.camp == '群'"><img :src="require('../assets/main/qun.png')" alt=""></div>
                    <div class="camp" v-show="s.camp == '汉'"><img :src="require('../assets/main/han.png')" alt=""></div>
                    <img :src="s.img" alt="" class="w_img">
                    <div class="name">{{s.name}}</div>
                    <img :src="require(`../assets/main/s2.png`)" alt="" class="sign" v-show="s.sign == 's2'">
                    <img :src="require(`../assets/main/s3.png`)" alt="" class="sign" v-show="s.sign == 's3'">
                    <img :src="require(`../assets/main/xp.png`)" alt="" class="sign" v-show="s.sign == 'xp'">
                    <img :src="require(`../assets/main/sp.png`)" alt="" class="sign" v-show="s.sign == 'sp'">
                </li>
            </ul>
        </div>
        <div class="right_part">
            <ul>
                <li v-for="s in 10" :key="s.index">
                    +
                </li>
            </ul>
            <ul>
                <li v-for="(s,index) in select_warriors" :key="s.index" class="right_part_li" @click="deleteThisSelectWarriors(index)">
                    <img :src="s.img" alt="">
                </li>
            </ul>
            <div class="confirm_btn" @click="confirmAdd">
                <img src="../assets/main/jbwf01_2f83643.jpg" alt="">
            </div>
        </div>
    </div>
    </transition> 

    <!-- 单个武将的面板 -->
    <transition name = 'fade_in'>
    <div class="single_warrior_panel" v-show="status.isShowSingleWarrior">
        <div class="back_btn" @click="backFromWarriorPanel"></div>
        <div class="card_container">
            <div class="card">
                <img :src="current_warrior.img" alt="">
                <div class="star_shadow"></div>
                <img src="../assets/main/warrior_mask.png" alt="">
                <div class="name">  {{current_warrior.name}}</div>
                <div class="bottom">
                    <div class="level">Lv.{{current_warrior.level}}</div>
                    <div class="cost">COST{{current_warrior.cost}}</div>
                    <div class="arms_bu" v-show="!current_warrior.current_arm && current_warrior.arms == '步'">{{current_warrior.att}}</div>
                    <div class="arms_gong" v-show="!current_warrior.current_arm && current_warrior.arms == '弓'">{{current_warrior.att}}</div>
                    <div class="arms_qi" v-show="!current_warrior.current_arm && current_warrior.arms == '骑'">{{current_warrior.att}}</div>
                    <!-- 高级兵种 -->
                    <div class="up_arms" v-show="current_warrior.current_arm">
                        <img :src="current_warrior.current_arm" alt="">
                    </div>
                    <div class="up_arms_att" v-show="current_warrior.current_arm">{{current_warrior.att}}</div>

                </div>
                <div class="camp" v-show="current_warrior.camp == '蜀'"><img :src="require('../assets/main/shu.png')" alt=""></div>
                <div class="camp" v-show="current_warrior.camp == '吴'"><img :src="require('../assets/main/wu.png')" alt=""></div>
                <div class="camp" v-show="current_warrior.camp == '魏'"><img :src="require('../assets/main/wei.png')" alt=""></div>
                <div class="camp" v-show="current_warrior.camp == '群'"><img :src="require('../assets/main/qun.png')" alt=""></div>
                <div class="camp" v-show="current_warrior.camp == '汉'"><img :src="require('../assets/main/han.png')" alt=""></div>
                
                <transition name='to_big'>
                <div class="up" v-show="current_warrior.isUp.status">
                    <img src="../assets/main/juexing.png" alt="">
                </div>
                </transition>
                <div class="red_star">
                    <ul class="red_list">
                        <li v-for="s in current_warrior.red" :key="s.index" class="red"><img src="../assets/main/red_star.png" alt=""></li>
                        <li v-for="s in (5-current_warrior.red)" :key="s.index"><img src="../assets/main/star.png" alt=""></li>
                    </ul>
                </div>
            </div>
            <!-- 红星条 -->
            <div class="star_panel">
                <ol>
                    <div class="t_title">稀有度</div>
                    <li v-for="s in current_warrior.red" :key="s.index" class="red"><img src="../assets/main/red_star.png" alt=""></li>
                    <li v-for="s in (5-current_warrior.red)" :key="s.index"><img src="../assets/main/star.png" alt=""></li>
                    <div class="up_btn" @click="upMyWarrior">进阶</div>
                </ol>
            </div>
            <!-- 兵种条 -->
            <div class="arms_panel">
                <div class="title">兵种</div>
                <div class="arm_img">
                    <div class="arm" v-show="!current_warrior.isUpArms.status"><img :src="require(`../assets/arms/${this.current_warrior.isUpArms.type[0]}.png`)" alt=""></div>
                    <div class="arm" v-show="!current_warrior.isUpArms.status"><img :src="require(`../assets/arms/${this.current_warrior.isUpArms.type[1]}.png`)" alt=""></div>
                    <div class="arm" v-show="current_warrior.isUpArms.status"><img :src="require(`../assets/arms/up_${this.current_warrior.isUpArms.type[0]}.png`)" alt=""></div>
                    <div class="arm" v-show="current_warrior.isUpArms.status"><img :src="require(`../assets/arms/up_${this.current_warrior.isUpArms.type[1]}.png`)" alt=""></div>

                    
                    <div class="up_btn" @click="upMyArms">转换</div>
                </div>
            </div>
            <!-- 等级条 -->
            <div class="level_panel">
                <div class="title">等级</div>
                <div class="sub_btn" @click="changeNumberOfLevel('sub')">-</div>
                <div class="level_num_view">{{current_warrior.level}}</div>
                <div class="add_btn" @click="changeNumberOfLevel('add')">+</div>
            </div>
            <!-- 技能条 -->
            <div class="skill_panel">
                <div class="title">战法</div>
                <div class="self_skill">
                    <img src="../assets/main/icon-skill2-092a.png" alt="" v-show="current_warrior.skill.type == 'command'">
                    <img src="../assets/main/icon-skill3-9573.png" alt="" v-show="current_warrior.skill.type == 'active'">
                    <img src="../assets/main/icon-skill4-27c7.png" alt="" v-show="current_warrior.skill.type == 'combo'">
                    <img src="../assets/main/icon-skill1-3277.png" alt="" v-show="current_warrior.skill.type == 'passive'">
                    <div class="name">{{current_warrior.skill.name}}</div>
                    <div class="info">{{current_warrior.skill.info}}</div>
                </div>
                <!-- <div class="get_skill1">
                    <img src="../assets/main/emptyskill.png" alt="" class="empty_skill">
                </div>
                <div class="get_skill2">
                    <img src="../assets/main/emptyskill.png" alt="" class="empty_skill">
                </div> -->
                <!-- 觉醒按钮 -->
                <div class="up_warrior_btn" @click="upMyWarriorSkill" ref="up_warrior_btn">
                    <img src="../assets/main/bg_nav_btn.1a7015d3.png" alt="">
                    <div class="name">
                        <span v-show="!current_warrior.isUp.status">觉醒武将</span>
                        <span v-show="current_warrior.isUp.status">取消觉醒</span>
                    </div>
                </div>
            </div>
            <div class="delete_warrior_btn" @click="deleteThisWarrior" ref="delete_warrior_btn">
                
            </div>
            <!-- 拆解技能条 -->
            <div class="get_skill"></div>

            

            <!-- 兵种面板 -->
            <transition name='fade_in'>
            <div class="arms_container" v-show="status.isShowUpArmsContainer">
                <div class="exchange_arms_panel">
                    <img src="../assets/main/sitebg_2454597.png" alt="">
                    <div class="arm1" ref="arm1" v-show='!current_warrior.isUpArms.status'>
                        <img :src="require(`../assets/arms/${this.current_warrior.isUpArms.type[0]}.png`)" alt="" @click="exchangeArms(0)">
                    </div>
                    <div class="arm2" ref="arm2" v-show='!current_warrior.isUpArms.status'>
                        <img :src="require(`../assets/arms/${this.current_warrior.isUpArms.type[1]}.png`)" alt="" @click="exchangeArms(1)">
                    </div>
                    <!-- 进阶兵种 -->
                    <div class="arm1" ref="arm3" v-show='current_warrior.isUpArms.status'>
                        <img :src="require(`../assets/arms/up_${this.current_warrior.isUpArms.type[0]}.png`)" alt="" @click="exchangeArms(0)">
                    </div>
                    <div class="arm2" ref="arm4" v-show='current_warrior.isUpArms.status'>
                        <img :src="require(`../assets/arms/up_${this.current_warrior.isUpArms.type[1]}.png`)" alt="" @click="exchangeArms(1)">
                    </div>


                    <div class="up_btn" @click="confirmToUpArm" ref="close_arms_panel_btn">
                        <span v-show="!current_warrior.isUpArms.status">进阶兵种</span>
                        <span v-show="current_warrior.isUpArms.status">取消进阶</span>
                    </div>
                    <div class="close_btn" @click="closeArmMaterialPanel" ref="close_arms_panel_btn1">退出</div>
                </div>
                
                
            </div>
            </transition>
        </div>
    </div>
    </transition>

    <!-- 查看我的招募面板 -->
    <transition name='fade_in'>
    <div class="check_my_recruit_record" v-show="status.isShowMyRecruitRecord">  
        <img src="../assets/main/bg_01_cd8d39e.jpg" alt="" class="check_my_recruit_record_img">
        <div class="back_btn" @click="status.isShowMyRecruitRecord = false"></div>
        <ul>
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
        </ul>
    </div>
    </transition>

    <transition name='fade_in'>
    <div class="loading_mask" v-show="loading.isLoading">
        <div class="loading_ico"></div>
        <div class="loading_title">{{loading.title}}</div>
    </div>
    </transition>
  </div>
</template>

<script>
import html2canvas from "html2canvas"
import wu_warriors from '../mixin/wu_warriors'
import shu_warriors from '../mixin/shu_warriors'
import wei_warriors from '../mixin/wei_warriors'
import qun_warriors from '../mixin/qun_warriors'
import han_warriors from '../mixin/han_warriors'

import functions from '../mixin/function'
export default {
    name : 'Warrior',
    mixins:[
        wu_warriors,
        shu_warriors,
        wei_warriors,
        qun_warriors,
        han_warriors,

        functions,
    ],
    data(){
      return{
        status:{
          isShowAddWarriors:false,
          isShowSingleWarrior : false,
          isShowUpArmsContainer : false,
          isShowMyRecruitRecord : false
        },
        my_warriors:[],
        all_warriors:[],
        select_warriors:[],
        material_warrior : [],
        newId : '',
        
        current_warrior:{
            name : '',
            level : '',
            arms : '',
            red : 0,
            camp : '',
            isUp:{
                status:false,
            },
            isUpArms:{
              status: false,
              type : ['q_q','q_q']
            },
            skill:{
                name : '',
                type : '',
                info : ''
            },
            sign : 'xp',
            current_arm : '',
            img : ''
        },
        current_index : '',
        whoAddRed  : 0, //添加红星的武将的索引

        //防抖
        flag:{
            exchangeArms : false,
            upArms : false
        },
        my_get:[],
        loading:{
            isLoading:false,
            title : '图片正在生成，请耐心等待...'
        }
      }
    },
    methods:{
        clickGeneratePicture() { //生成图片
            this.$refs.load_long_image.classList.add('active')
            setTimeout(()=>{
                this.loading.isLoading = true
            },190)
            setTimeout(()=>{
                this.$refs.imageDom.classList.add('active')
                this.$refs.imageDom.style.height = Math.ceil(this.my_warriors.length/6)*20 + 'vw'
                html2canvas(this.$refs.imageDom).then(canvas => {
                    // 转成图片，生成图片地址
                    this.imgUrl = canvas.toDataURL("image/png");  //可将 canvas 转为 base64 格式
                    var eleLink = document.createElement("a");
                    eleLink.href = this.imgUrl; // 转换后的图片地址
                    eleLink.download = "我的武将";
                    document.body.appendChild(eleLink);
                    // 触发点击
                    eleLink.click();
                    // 然后移除
                    document.body.removeChild(eleLink);
                    this.$refs.imageDom.classList.remove('active')
                    this.$refs.load_long_image.classList.remove('active')
                    this.$refs.imageDom.style.height = '70vh'
                    this.loading.isLoading = false
                });
            },200)
        }, 
        deleteThisWarrior(){
            this.$refs.delete_warrior_btn.classList.add('active')
            if(!this.current_warrior.onTeam){
                setTimeout(()=>{
                    for(let i=0;i<this.my_warriors.length;i++){
                        if(this.my_warriors[i].id == this.current_warrior.id){
                            this.my_warriors = this.my_warriors.filter((w,id)=>{
                                return id != i
                            })
                            this.$bus.$emit('success','武将删除成功')
                            this.backFromWarriorPanel();
                            this.$refs.delete_warrior_btn.classList.remove('active')

                        }
                    }
                },200)
            }else if(this.current_warrior.onTeam){
                this.$bus.$emit('alert','该武将正在出战队列，无法删除')
                setTimeout(()=>{
                    this.$refs.delete_warrior_btn.classList.remove('active')
                },200)
            }
            
        },
        //改变武将等级
        changeNumberOfLevel(x){
            if(x == 'add'){
                if(this.current_warrior.level < 50){
                    this.current_warrior.level ++;
                }
            }else{
                if(this.current_warrior.level > 1){
                    this.current_warrior.level --;
                }
            }
        },
        //觉醒武将
        upMyWarriorSkill(){
            this.$refs.up_warrior_btn.classList.add('active')
            setTimeout(()=>{
                this.$refs.up_warrior_btn.classList.remove('active')
            },200)
            if(this.current_warrior.isUp.status == false){
                this.$bus.$emit('success','觉醒武将成功')
                this.current_warrior.isUp.status = true
            }else{
                this.$bus.$emit('success','取消觉醒武将成功')
                this.current_warrior.isUp.status = false
            }
        },
        //进阶武将兵种
        confirmToUpArm(){
            if(!this.flag.upArms){
                this.flag.upArms = true
                this.$refs.close_arms_panel_btn.classList.add('active')
                if(this.current_warrior.isUpArms.status){
                    this.current_warrior.isUpArms.status = false
                    this.current_warrior.current_arm = require(`../assets/arms/${this.current_warrior.isUpArms.type[0]}.png`)
                }else{
                    this.current_warrior.isUpArms.status = true
                    this.current_warrior.current_arm = require(`../assets/arms/up_${this.current_warrior.isUpArms.type[0]}.png`)
                    this.current_warrior.isUpArms.material_one = ``
                    this.current_warrior.isUpArms.material_two = ``
                }
                
                setTimeout(()=>{
                    this.$refs.close_arms_panel_btn.classList.remove('active')
                    this.flag.upArms = false
                },200)
                
            }
            
        },
        //返还该武将
        returnThisArmMaterial(index){
            this.addWarriorsToMy.call(this,this.armsMaterials[index],'return')
            this.clearWarriorInfo.call(this,this.armsMaterials[index])
        },
        closeArmMaterialPanel(){
            this.$refs.close_arms_panel_btn1.classList.add('active');
            setTimeout(()=>{
                this.$refs.close_arms_panel_btn1.classList.remove('active');
                this.status.isShowUpArmsContainer = false
            },200)
        },
        //选择并切换兵种
        exchangeArms(value){
            if(!this.flag.exchangeArms){
                if(value == 1){
                    if(this.current_warrior.isUpArms.status){
                        this.$refs.arm4.classList.add('active')
                    }else{
                        this.$refs.arm2.classList.add('active')
                    }
                }else{
                    if(this.current_warrior.isUpArms.status){
                        this.$refs.arm3.classList.add('active')
                    }else{
                        this.$refs.arm1.classList.add('active')
                    }
                }
                this.flag.exchangeArms = true
                if(this.current_warrior.isUpArms.status){
                    this.current_warrior.current_arm = require(`../assets/arms/up_${this.current_warrior.isUpArms.type[value]}.png`)
                }else{
                    this.current_warrior.current_arm = require(`../assets/arms/${this.current_warrior.isUpArms.type[value]}.png`)
                }
                for(let i=0;i<this.my_warriors.length;i++){
                    if(this.current_warrior.id == this.my_warriors[i].id){
                        if(this.current_warrior.isUpArms.status){
                            this.my_warriors[i].current_arm = require(`../assets/arms/up_${this.current_warrior.isUpArms.type[value]}.png`)
                        }else{
                            this.my_warriors[i].current_arm = require(`../assets/arms/${this.current_warrior.isUpArms.type[value]}.png`)
                        }
                        this.material_warrior = []
                    }
                }
                setTimeout(()=>{
                    this.$refs.arm1.classList.remove('active')
                    this.$refs.arm2.classList.remove('active')
                    this.$refs.arm3.classList.remove('active')
                    this.$refs.arm4.classList.remove('active')
                    this.flag.exchangeArms = false
                    //切换成功关闭兵种面板
                    this.status.isShowUpArmsContainer = false
                },200)
            }
        },
        //进阶兵种
        upMyArms(){
            this.status.isShowUpArmsContainer = true
        },
        deleteThisSelectWarriors(index){
            this.select_warriors = this.select_warriors.filter((s,id)=>{
                return id != index
            })
        },
        backFromWarriorPanel(){
            setTimeout(()=>{
                this.current_warrior = {
                    name : '',
                    level : '',
                    arms : '',
                    red : 0,
                    camp : '',
                    isUp:{
                        status:false,
                    },
                    isUpArms:{
                    status: false,
                    type : ['q_q','q_q']
                    },
                    skill:{
                        name : '',
                        type : '',
                        info : ''
                    },
                    sign : '',
                    current_arm : '',
                    img : ''
                }
            },200)
            this.status.isShowSingleWarrior = false
        },
        backToMain(){
            localStorage.setItem('my_warriors',JSON.stringify(this.my_warriors))
            this.$router.push(
                {
                    path : '/',
                    query : {
                        from : '/warriors'
                    }
                }
            )
        },
        //选择这个武将放入添加库中
        choseThis(ob,index){
            if(this.select_warriors.length < 10){
                this.select_warriors.push(ob)
                this.$refs.all_warriors[index].classList.add('active')
                setTimeout(()=>{
                    this.$refs.all_warriors[index].classList.remove('active')
                },200)
            }else{
                this.$bus.$emit('alert','添加的武将数目已达上限')
            }
        },
        //确定将这批武将添加到自己的仓库
        confirmAdd(){
            for(let i=0;i<this.select_warriors.length;i++){
                this.addWarriorsToMy.call(this,this.select_warriors[i],'addToMy')
            }
            this.sortWarriorsByCamp.call(this)
            //按统帅值排序
            this.my_warriors.sort((a,b)=>{
                return  b.cost - a.cost
            })
            if(this.my_warriors.length > 0){
                for(let i=0;i<this.my_warriors.length;i++){
                    this.my_warriors[i].id = i
                }
            }
            //清空添加列队
            this.select_warriors = []
            this.status.isShowAddWarriors = false
        },
        //保存我的武将
        safeMyWarriors(){
            this.$refs.safe_info_btn.classList.add('active')
            localStorage.setItem('my_warriors',JSON.stringify(this.my_warriors))
            this.$bus.$emit('success','保存成功')
            setTimeout(()=>{
                this.$refs.safe_info_btn.classList.remove('active')
            },200)
        },
        //打开这个武将的面板
        openThisInfo(ob,index){
            this.current_warrior = ob
            this.status.isShowSingleWarrior = true
            this.current_index = index
        },
        //进阶我的武将
        upMyWarrior(){
            if(this.current_warrior.red < 5){
                this.current_warrior.red ++
            }else{
                this.current_warrior.red = 0
            }
        },
    },
    
    created() {
        for(let i=0;i<this.qun_warriors.length;i++){
            this.all_warriors.push(this.qun_warriors[i])
        }
        for(let i=0;i<this.wei_warriors.length;i++){
            this.all_warriors.push(this.wei_warriors[i])
        }
        for(let i=0;i<this.shu_warriors.length;i++){
            this.all_warriors.push(this.shu_warriors[i])
        }
        for(let i=0;i<this.wu_warriors.length;i++){
            this.all_warriors.push(this.wu_warriors[i])
        }
        for(let i=0;i<this.han_warriors.length;i++){
            this.all_warriors.push(this.han_warriors[i])
        }

        if(JSON.parse(localStorage.getItem('my_warriors')) ){
            this.my_warriors = JSON.parse(localStorage.getItem('my_warriors'))  
        }
        if(this.my_warriors.length > 0){
            for(let i=0;i<this.my_warriors.length;i++){
                this.my_warriors[i].id = i
            }
        }
        if(localStorage.getItem('my_record')){
            this.my_get = JSON.parse(localStorage.getItem('my_record'))
        }
      
    },
    
}
</script>

<style lang='less'>
.warrior_panel{
    position: absolute; left:0;top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    .check_my_recruit_record{
        position: absolute;left:0;top:0;
        width : 100vw;
        height : 100vh;
        z-index: 2;
        transition: all .2s;
        .check_my_recruit_record_img{
            position: absolute;top: 0;left: 0;
            width: 100%;
            height: 100%;
        }
        ul{
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
    animation: fadeIn .2s linear 1;
    overflow: hidden;
    .single_warrior_panel{
        background: rgba(10, 10, 10, 0.8);
        box-shadow: 0 0 30px white;
        transition: all .2s ease-out;
        .card_container{
            border: .3vw solid rgb(165, 165, 165);
            background: url('../assets/main/bg_stbj_277a3bc.jpg')no-repeat;
            background-size: cover;
            .delete_warrior_btn{
                position: absolute; left: -4.5vw; bottom: 0;
                width: 4vw;
                height: 4vw;
                border-radius: .5vw;
                border: .3vw solid gray;
                background: #000;
                line-height: 4vw;
                text-align: center;
                font-weight: bolder;
                box-sizing: border-box;
                color: white;
                font-size: 1.5vw;
            }
            .delete_warrior_btn.active{
                animation: click .2s linear 1;
            }
            .card{
                border: 0 solid rgba(179, 0, 185, 0);
                .red_star{
                    position: absolute; right: .5vw; top: .8vw;
                    width: 11vw;
                    height: 2vw;
                    .red_list{
                        position: absolute;left: 0; top: 0;
                        width: 100%;
                        height: 100%;
                        li{
                            float: left;
                            position: relative;
                            width: 2vw;
                            height: 2vw;
                            font-size: 1vw;
                            margin: .13vw 0 0 0;
                            border: 0 solid rgba(179, 0, 185, 0);
                            box-shadow: none;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .red{
                            color: rgb(241, 0, 0);
                            text-shadow: 0 0 .2vw red;
                        }
                    }
                }
                .name{
                    position: absolute; left: .4vw; top: 0;
                    padding: 4.5vw 0 0 0;
                    width: 2vw;
                    height: 15vw;
                    text-align: center;
                    font-size: 1.5vw;
                    color: rgb(255, 244, 181);
                }
                .bottom{
                    position: absolute; bottom: 0; left: 0;
                    width: 100%;
                    height: 1.6vw;
                    background: rgba(0, 0, 0, 0);
                    .up_arms{
                        position: absolute; right: .3vw; bottom: 0;
                        width: 5vw;
                        height: 5vw;
                        line-height: 8vw;
                        color: white;
                        font-size: 1.5vw;
                        text-align: right;
                    }
                    .up_arms_att{
                        position: absolute; right: .4vw; bottom: .2vw;
                        width: 2vw;
                        height: 2vw;
                        line-height: 2vw;
                        font-size: 1.8vw;
                        color: rgb(228, 228, 228);
                        font-weight: bolder;
                        text-align: right;
                    }
                    .arms_bu,.arms_qi,.arms_gong{
                        position: absolute; right: .3vw; bottom: 0;
                        width: 3.5vw;
                        height: 3.5vw;
                        line-height: 5vw;
                        color: white;
                        font-size: 1.5vw;
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
                        width: 4vw;
                        padding: 0 0 0 1vw;
                        text-align: left;
                        color: rgb(202, 202, 202);
                        font-size: 1.6vw;
                        line-height: 2.5vw;
                    }
                    .cost{
                        position: absolute; left: 1vw; bottom: 0;
                        width: 5vw;
                        width: 100%;
                        text-align: center;
                        color: rgb(255, 246, 227);
                        line-height: 2.5vw;
                        font-size: 1.5vw;
                    }
                }
                .camp{
                    position: absolute; left: .2vw; top: .2vw;
                    width: 4vw;
                    height: 4vw;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .up{
                    position: absolute; right: -2.5vw; top: -2.5vw;
                    width: 5.5vw;
                    height: 5.5vw;
                    transition: all .2s ease-out;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .star_panel{
                .up_btn{
                    position: absolute;right: 1vw; bottom: .5vw;
                    width: 8vw;
                    height: 2.6w;
                    line-height: 2.6vw;
                    text-align: center;
                    border-radius: .5vw;
                    color: white;
                    font-size: 1.5vw;
                    background: linear-gradient(to right bottom,rgb(255, 102, 0),rgb(102, 46, 0));
                    box-shadow: 2px 2px 5px rgb(37, 37, 37);
                }
            }
            .arms_panel{
                overflow: auto;
                .up_btn{
                    position: absolute;right: 1vw; bottom: .5vw;
                    width: 8vw;
                    height: 2.6w;
                    line-height: 2.6vw;
                    text-align: center;
                    border-radius: .5vw;
                    color: white;
                    font-size: 1.5vw;
                    background: linear-gradient(to right bottom,red,rgb(102, 0, 0));
                    box-shadow: 2px 2px 5px rgb(37, 37, 37);
                }
                
            }
            .arms_container{
                background: linear-gradient(to bottom,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.8));
                .exchange_arms_panel{
                    background: rgba(0, 0, 0, 0);
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .remove_btn{
                    position: absolute;right: 1vw; bottom: .5vw;
                    width: 8vw;
                    height: 2.6w;
                    line-height: 2.6vw;
                    text-align: center;
                    border-radius: .5vw;
                    color: white;
                    font-size: 1.5vw;
                    background: linear-gradient(to right bottom,red,rgb(102, 0, 0));
                    box-shadow: 2px 2px 5px rgb(37, 37, 37);
                }
            }
            .level_panel{
                position: absolute; top: 13vw; left: 25vw;
                width: 40vw;    
                height: 4vw;
                font-size: 1vw;
                text-align: center;
                line-height: 3vw;
                font-weight: bold;
                border-bottom: .1vw solid rgb(121, 121, 121);
                .title{
                    position: absolute; top: 0; left: 0;
                    width: 10vw;
                    height: 3vw;
                    color: rgb(119, 0, 0);
                    font-size: 1.5vw;
                    font-weight: bold;
                    text-align: center;
                }
                .level_num_view{
                    width: 5vw;
                    height: 3vw;
                    background: rgb(190, 190, 190);
                    border-radius: .5vw;
                    box-sizing: border-box;
                    line-height: 2.4vw;
                    border: .3vw solid rgb(99, 99, 99);
                    position: absolute; top: 0; left: 17.5vw;
                }
                .add_btn{
                    box-sizing: border-box;
                    width: 3vw;
                    height: 3vw;
                    background: linear-gradient(to right bottom,rgb(179, 0, 0),rgb(97, 0, 0));
                    border-radius: .5vw;
                    color: white;
                    line-height: 2vw;
                    box-shadow: 2px 2px 3px rgb(66, 66, 66);
                    border: .3vw solid rgb(110, 110, 110);
                    position: absolute; top: 0; left: 24vw;
                }
                .sub_btn{
                    box-sizing: border-box;
                    background: linear-gradient(to right bottom,rgb(179, 72, 0),rgb(97, 47, 0));
                    width: 3vw;
                    height: 3vw;
                    border-radius: .5vw;
                    border: .3vw solid rgb(110, 110, 110);
                    box-shadow: 2px 2px 3px rgb(66, 66, 66);
                    color: white;
                    line-height: 2vw;
                    position: absolute; top: 0; left: 13vw;
                }

            }
            .skill_panel{
                position: absolute; top: 20vw; left: 25vw;
                width: 40vw;
                height: 8vw;
                .title{
                    position: absolute; left: 0; top: 0;
                    width: 3vw;
                    height: 8vw;
                    background: rgb(77, 0, 0);
                    text-align: center;
                    font-size: 1.6vw;
                    line-height: 4vw;
                    color: white;
                    box-shadow:  0 0 2px rgb(85, 85, 85);
                }
                .self_skill{
                    position: absolute; left: 5vw; top: 0;
                    width: 8vw;
                    height: 8vw;
                    border: .5vw solid rgb(77, 0, 0);
                    box-sizing: border-box;
                    background: rgb(51, 51, 51);
                    img{
                        position: absolute; left: 50%; top : 40%;
                        transform : translate(-50%,-50%);
                        width: 80%;
                        height: 80%;
                    }
                    .name{
                        position: absolute; left: 0; bottom: .5vw;
                        width: 100%;
                        height: 2vw;
                        text-align: center;
                        line-height: 2vw;
                        color: white;
                        text-shadow : 0 0 10px black;
                        font-size: 1.2vw;
                        font-weight: bold;
                    }
                    .info{
                        position: absolute; left: 7vw; top: -.5vw;
                        width: 28vw;
                        height: 8vw;
                        overflow-y: scroll;
                        border: .5vw solid rgb(77, 0, 0);
                        box-sizing: border-box;
                        background: rgb(51, 51, 51);
                        color: aliceblue;
                        font-size: 1vw;
                        font-weight: bolder;
                        text-indent: 2em;
                    }
                }
                .get_skill1,.get_skill2{
                    position: absolute; left: 14vw; top: 0;
                    width: 8vw;
                    height: 8vw;
                    border: .5vw solid rgb(77, 0, 0);
                    box-sizing: border-box;
                    background: rgb(77, 0, 0);
                    .empty_skill{
                        position: absolute; left: 0; top: 0;
                        width: 100%;
                        height: 100%;
                    }
                }
                .get_skill2{
                    left: 23vw;
                }
                .up_warrior_btn{
                    position: absolute; left: 31vw; top: -7vw;
                    width: 8vw;
                    height: 3vw;
                    text-align: center;
                    // border: .5vw solid rgb(160, 144, 0);
                    box-sizing: border-box;
                    border-radius: .5vw;
                    line-height: 3.5vw;
                    color: rgb(255, 251, 188);
                    font-size: 1.2vw;
                    background: url('../assets/main/bg_nav_btn.1a7015d3.png')no-repeat;
                    background-size: cover;
                    img{
                        width: 100%;
                        height : 100%;
                    }
                    .name{
                        position: absolute; left: 0; top: 0;
                        width: 100%;
                        height: 3vw;
                        line-height: 3vw;
                        color: rgb(104, 47, 0);
                        font-size: 1vw;
                        font-weight: bolder;
                    }
                }
                .up_warrior_btn.active{
                    animation: click .2s linear 1;
                }
            }

        }
    }
    .add_warriors_panel{
      position: absolute; left:0;top: 0;
      width: 100vw;
      height: 100vh;
      transition: all .2s ease-out;
      .add_warrior_bg_img{
        width: 100%;
        height: 100%;
      }
      .back{
        position: absolute; right: 5vw; top: 1vw;
        width: 5vw;
        height: 5vw;
        text-align: center;
        line-height: 5vw;
        font-size: 3vw;
        color: rgb(139, 139, 139);
      }
      li.active{
          animation: click .2s ease-out 1;
      }
      li{
          .name{
              position:absolute;bottom: 0; left: 0;
              width: 100%;
              height: 1.5vw;
              font-size: 1vw;
              text-align: center;
              line-height: 1.5vw;
              color: white;
              background: rgba(0, 0, 0, 0.664);
              border-radius: 0 0 .5vw .5vw;
          }
          .sign{
            position: absolute; right: 0; bottom: 1.5vw;
            width: 2.5vw;
            height: 1.4vw;
            img{
                width: 100%;
                height: 100%;
            }
          }
      }
    }
    .warrior_bg{
      position: absolute; left: 0; top: 0;
      width: 100vw;
      height: 100vh;
    }
    .back_btn{
      position: absolute; right: 5vw; top: 2vw;
      width: 4vw;
      height: 4vw;
      text-align: center;
      line-height: 4vw;
      font-size: 2.5vw;
      color: rgb(209, 101, 0);
      background: #000;
      border-radius: 50%;
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
                border: .15vw solid rgb(179, 0, 185);
                .sign{
                    position: absolute; right: 0; bottom: 3.5vw;
                    width: 3.6vw;
                    height: 1.9vw;
                }
                .on_team{
                    position: absolute; left: 50%; top: 50%;
                    margin: -1.5vw 0 0 -3vw;
                    width: 6vw;
                    height: 3vw;
                    font-size: 1.5vw;
                    text-align: center;
                    line-height: 3vw;
                    text-shadow: 0 0 5vw black;
                    color: rgb(255, 210, 62);
                    background:linear-gradient(to right,rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.1));
                    img{
                        position: absolute; left:.5vw;top: .25vw;
                        width: 5vw;
                        height: 2.5vw;
                        opacity: 1;
                        
                    }
                }
                .up{
                    position: absolute; right: -1.7vw; top: -1.7vw;
                    width: 3vw;
                    height: 3vw;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .bottom{
                    position: absolute; bottom: 0; left: 0;
                    width: 100%;
                    height: 1.6vw;
                    background: rgba(15, 15, 15, 0.904);
                    border-top: .1vw solid rgb(119, 119, 119);
                    .up_arms{
                        position: absolute; right: 0; bottom: 0;
                        width: 3.3vw;
                        height: 3.3vw;
                        img{
                            width: 100%;
                            height : 100%
                        }
                    }
                    .up_arms_att{
                        position: absolute; right: .2vw; bottom: 0;
                        width: 2.5vw;
                        height: 2.5vw;
                        line-height: 3vw;
                        color: rgb(194, 194, 194);
                        font-size: 1vw;
                        font-weight: bolder;
                        text-align: right;
                    }
                    .arms_bu,.arms_qi,.arms_gong{
                        position: absolute; right: .2vw; bottom: 0;
                        width: 2.5vw;
                        height: 2.5vw;
                        line-height: 3vw;
                        color: rgb(194, 194, 194);
                        font-size: 1vw;
                        font-weight: bolder;
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
                    position: absolute; right: .1vw; top: 0;
                    width: 6.3vw;
                    height: 2vw;
                    .red_list{
                        position: absolute;left: 0; top: 0;
                        width: 100%;
                        height: 100%;
                        li{
                            position: relative;
                            width: 1.2vw;
                            height: 1.2vw;
                            font-size: 1vw;
                            // border-radius: 50%;
                            color: yellow;
                            
                            // text-shadow: 0 0 .5vw red;
                            margin: .13vw 0 0 0;
                            border: 0 solid rgba(179, 0, 185, 0);
                            box-shadow: none;
                            img{
                                width: 100%;
                                height: 100%;
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
                    width: 2vw;
                    height: 2vw;
                    img{
                        width: 2vw;
                        height: 2vw;
                    }
                }
                .name{
                    position: absolute; left: 0; top: 0;
                    padding: 3vw 0 0 0;
                    width: 2vw;
                    height: 10vw;
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
    ol.active{
        background: url('../assets/main/imgdom_body.jpg')no-repeat;
        background-size: cover;
    }
    .bottom{
        position: absolute; bottom: 0; left: 0;
        width: 100vw;
        height: 5vw;
        background: rgba(82, 82, 82, 0.9);
        line-height: 5vw;
        font-size: 1vw;
        color: rgb(199, 199, 199);
        text-align: center;
        .check_my_record_btn{
            position: absolute;left:10vw;top: 1vw;
            width: 10vw;
            height: 3vw;
            font-size: 1vw;
            font-weight: bold;
            .content{
                position: absolute;left:0;top: 0;
                width: 10vw;
                height: 3vw;
                text-align: center;
                line-height: 3vw;
                color: rgb(97, 63, 0);
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .add_warriors_btn{
        position: absolute; left: 10vw; top: 1.5vw;
        // margin: -1.5vw 0 0 0;
        height: 3vw;
        width: 10vw;
        background: rgb(156, 0, 0);
        text-align: center;
        color: white;
        font-size: 1vw;
        line-height: 3vw;
        border-radius: 1vh;
    }
    .safe_info_btn{
        position: absolute; left: 22vw; top: 1.5vw;
        // margin: -1.5vw 0 0 0;
        height: 3vw;
        width: 6vw;
        background: rgb(211, 102, 0);
        text-align: center;
        color: white;
        font-size: 1vw;
        line-height: 3vw;
        border-radius: 1vh;
    }
    .load_long_image{
        position: absolute; left: 30vw; top: 1.5vw;
        // margin: -1.5vw 0 0 0;
        height: 3vw;
        width: 8vw;
        background: rgb(162, 0, 211);
        text-align: center;
        color: white;
        font-size: 1vw;
        line-height: 3vw;
        border-radius: 1vh;
    }
    .load_long_image.active,.safe_info_btn.active{
        animation: click .2s linear 1;
    }
}
</style>