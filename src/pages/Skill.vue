<template>
    <div class="skills_panel">
        <img src="../assets/main/bg_zl_1350702.jpg" alt="" class="skillPanel_bg">
        <div class="back_btn" @click="backToMain"></div>
        <div class="nav">
          <ol>
            <li @click="exchangeOfSkillType('command')">指挥</li>
            <li @click="exchangeOfSkillType('active')">主动</li>
            <li @click="exchangeOfSkillType('combo')">追击</li>
            <li @click="exchangeOfSkillType('passive')">被动</li>
          </ol>
        </div>
        <div class="safe_btn" @click="safeData">保存数据</div>
        <div class="main_container">
          <ul class="skill_container" v-show="status.command"> 
            <li v-for="(s,index) in skill.command" :key="s.index" @click="acquiredSkills('command',index)">
              <img src="../assets/main/icon-skill2-092a.png" alt="">
              <div class="name">{{s.name}}</div>
              <div class="sign" v-show="s.sign != 'none'">{{s.sign}}</div>
              <div class="use_time" v-show="s.acquired">
                <span style="color:darkred" v-show="!s.learned.have">-{{s.learned.have}}-</span>
                <span v-show="s.learned.have">-{{s.learned.have}}-</span>
              </div>
              <transition name="fade_in">
              <div class="mask" v-show="!s.acquired"></div>
              </transition>
            </li>
          </ul>
          <ul class="skill_container" v-show="status.active">
            <li v-for="(s,index) in skill.active" :key="s.index" @click="acquiredSkills('active',index)">
              <img src="../assets/main/icon-skill3-9573.png" alt="">
              <div class="name">{{s.name}}</div>
              <div class="sign" v-show="s.sign != 'none'">{{s.sign}}</div>
              <div class="use_time" v-show="s.acquired">
                <span style="color:darkred" v-show="!s.learned.have">-{{s.learned.have}}-</span>
                <span v-show="s.learned.have">-{{s.learned.have}}-</span>
              </div>
              <transition name="fade_in">
              <div class="mask" v-show="!s.acquired"></div>
              </transition>
            </li>
          </ul>
          <ul class="skill_container" v-show="status.combo">
            <li v-for="(s,index) in skill.combo" :key="s.index" @click="acquiredSkills('combo',index)">
              <img src="../assets/main/icon-skill4-27c7.png" alt="">
              <div class="name">{{s.name}}</div>
              <div class="sign" v-show="s.sign != 'none'">{{s.sign}}</div>
              <div class="use_time" v-show="s.acquired">
                <span style="color:darkred" v-show="!s.learned.have">-{{s.learned.have}}-</span>
                <span v-show="s.learned.have">-{{s.learned.have}}-</span>
              </div>
              <transition name="fade_in">
              <div class="mask" v-show="!s.acquired"></div>
              </transition>
            </li>
          </ul>
          <ul class="skill_container" v-show="status.passive">
            <li v-for="(s,index) in skill.passive" :key="s.index" @click="acquiredSkills('passive',index)">
              <img src="../assets/main/icon-skill1-3277.png" alt="">
              <div class="name">{{s.name}}</div>
              <div class="sign" v-show="s.sign != 'none'">{{s.sign}}</div>
              <div class="use_time" v-show="s.acquired">
                <span style="color:darkred" v-show="!s.learned.have">-{{s.learned.have}}-</span>
                <span v-show="s.learned.have">-{{s.learned.have}}-</span>
              </div>
              <transition name="fade_in">
              <div class="mask" v-show="!s.acquired"></div>
              </transition>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import all_skills  from '../mixin/skills.js'
export default {
  name  :'Skill',
  mixins:[
    all_skills,
  ],
  data(){
    return{
      status:{
        command : true,
        active : false,
        combo : false,
        passive : false
      },
      skill:{
        command:[],
        active : [],
        combo : [],
        passive : []
      },
      dirty : false,//脏位，记录页面改动状态
    }
  },
  methods: {
    //保存数据
    safeData(){
      localStorage.setItem('my_skill',JSON.stringify(this.skill))
      setTimeout(()=>{
          this.$bus.$emit('success','保存成功')
      },100)
    },
    //切换战法类别
    exchangeOfSkillType(value){
      if(!this.dirty){
        this.dirty = true
      }
      if(value == 'command'){
        this.status.active = false
        this.status.combo = false
        this.status.passive = false
        this.status.command = true
      }else if(value == 'active'){
        this.status.active = true
        this.status.combo = false
        this.status.passive = false
        this.status.command = false
      }else if(value == 'combo'){
        this.status.active = false
        this.status.combo = true
        this.status.passive = false
        this.status.command = false
      }else{
        this.status.active = false
        this.status.combo = false
        this.status.passive = true
        this.status.command = false
      }
    },
    //获取对应的技能
    acquiredSkills(type,index){
      if(!this.dirty){
        this.dirty = true
      }
      if(type == 'command'){
        if(this.skill.command[index].acquired){
          this.skill.command[index].acquired = false
        }else{
          this.skill.command[index].acquired = true
        }
      }else if(type == 'active'){
        if(this.skill.active[index].acquired){
          this.skill.active[index].acquired = false
        }else{
          this.skill.active[index].acquired = true
        }
        
      }else if(type == 'combo'){
        if(this.skill.combo[index].acquired){
          this.skill.combo[index].acquired = false
        }else{
          this.skill.combo[index].acquired = true
        }
      }else{
        if(this.skill.passive[index].acquired){
          this.skill.passive[index].acquired = false
        }else{
          this.skill.passive[index].acquired = true
        }
      }
    },
    backToMain(){
      if(this.dirty){
        this.safeData()
      }
      this.$router.push(
        {
          path : '/',
          query : {
              from : '/warriors'
          }
        }
      )
    }
  },
  created() {
    if(localStorage.getItem('my_skill')){
      this.skill = JSON.parse(localStorage.getItem('my_skill'))
    }else{
      this.skill.command = this.command_skills
      this.skill.active = this.active_skills
      this.skill.combo = this.combo_skills
      this.skill.passive = this.passive_skills
    }
  },
}
</script>

<style lang='less'>
.skills_panel{
  position: absolute; left: 0; top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  animation: fadeIn .2s linear 1;
  overflow: hidden;
  .skillPanel_bg{
    position: absolute; left: 0; top: 0;
    width: 100vw;
    height: 100vh;
  }
  .back_btn{
    position: absolute; right: 5vw; top: 1vw;
    width: 5vw;
    height: 5vw;
    text-align: center;
    line-height: 5vw;
    font-size: 3vw;
    color: rgb(206, 206, 206);
  }
  .nav{
    position: absolute; left: 15vw; top: 0;
    width: 70vw;
    height: 5vw;
    ol{

      li{
        float: left;
        width: 10vw;
        height: 5vw;
        line-height: 5vw;
        text-align: center;
        font-size: 1.5vw;
        box-sizing: border-box;
        margin: 0 0 0 1vw;
        font-weight: bold;
      }
      li:nth-of-type(1){
        color: rgb(0, 184, 92);
        border-bottom: .3vw solid rgb(0, 184, 92);
      }
      li:nth-of-type(2){
        color: rgb(184, 0, 0);
        border-bottom: .3vw solid rgb(184, 0, 0);
      }
      li:nth-of-type(3){
        color: rgb(101, 0, 184);
        border-bottom: .3vw solid rgb(101, 0, 184);
      }
      li:nth-of-type(4){
        color:rgb(0, 110, 184) ;
        border-bottom: .3vw solid rgb(0, 110, 184);
      }
    }
  }
  .safe_btn{
    position: absolute; left: 65vw; top: 1.5vw;
    width: 8vw;
    height: 3vw;
    background: darkred;
    text-align: center;
    line-height: 3vw;
    font-size: 1vw;
    color: white;
    border-radius: .5vw;
  }
  .main_container{
    position: absolute; top: 15vh; left: 10vw;
    width: 80vw;
    height: 70vh;
    overflow-x: hidden;
    overflow-y: scroll;
    .skill_container{
      position: absolute; left: 0; top: 0;
      width: 100%;
      height: 100%;
      li{
        float: left;
        position: relative;
        width: 10vw;
        height: 10vw;
        margin:0 0 .9vw .9vw;
        background: linear-gradient(to bottom,rgba(70, 70, 70, 0.9),rgba(43, 43, 43, 0.9));
        .mask{
          position: absolute; left: 0; top: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          transition: all .2s;
        }
        .use_time{
          position: absolute; left: 0; bottom: 0;
          width: 100%;
          height: 2vw;
          line-height: 2vw;
          text-align: right;
          color: rgb(160, 160, 160);
          text-shadow: 0 0 5px black;
          font-weight: bold;
          font-size: 1vw;
        }
        .sign{
          position: absolute; right: 0;top: 0;
          width: 3vw;
          height: 3vw;
          text-align: center;
          line-height: 3vw;
          color: rgb(255, 222, 38);
          font-size: 1vw;
          font-weight: bolder;
          img{
            width: 100%;
            height: 100%;
          }
        }
        img{
          position: absolute; left: 50%; top : 50%;
          transform : translate(-50%,-50%);
          width: 70%;
          height: 70%;
        }
        .name{
          position: absolute; left: 0; bottom: 1.2vw;
          width: 100%;
          height: 2vw;
          line-height: 2vw;
          text-align: center;
          color: white;
          text-shadow: 0 0 5px black;
          font-weight: bold;
          font-size: 1.2vw;
        }
      }
    }
  }
}
</style>