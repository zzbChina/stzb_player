<template>
  <div class="main_panel">
        <img src="../assets/main/bg1.jpg" alt="" class="bg">
        <div class="logo" ref="logo">
            
        </div>
        <div class="my_team" ref="my_team" @click="checkMyTeam">我的队伍</div>
        <div class="my_warriors" @click="checkMyWarrior" ref="my_warrior">我的武将</div>
        <div class="my_skill" ref="my_skill" @click="checkMySkill">我的战法</div>

        <!-- <div class="clearData" @click="clearData">清除数据</div> -->
        <div class="draw_warriors" @click="recruitWarrior" ref="recruit">招募</div>
        <div class="setUp" @click="status.isShowSetup = true" ref="setup">
            <div class="bg"></div>
            <div class="font">设置</div>
        </div>
        <router-view/>
        <div class="setup_panel" v-show="status.isShowSetup">
            <div class="setup_container">
                <img src="../assets/main/login_pop_5561d54.jpg" alt="" class="setup_bg_img">
                <div class="topic">设置</div>
                <div class="close_btn" @click="status.isShowSetup = false"></div>
                <div class="clearData">
                    <div class="title">清除所有数据: 包括所有战法，所有武将信息</div>
                    <div class="clear_btn" @click="clearAllData">清除</div>
                </div>
                <div class="clearTeamData">
                    <div class="title">清除出战队伍: 只清空我的队伍信息&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div class="clear_btn" @click="clearTeamData">清除</div>
                </div>
                <div class="clearRecruit">
                    <div class="title">清除招募记录: 清空我的招募武将数据</div>
                    <div class="clear_btn" @click="clearRecruitData">清除</div>
                </div>
                <div class="footer">
                    图片素材均取自网易-率土之滨
                </div>
                <!-- <img src="../assets/main/role_a555903.png" alt="" class="liru_img"> -->
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name : 'Main',
    
    data(){
        return {
            status:{
                isShowWarriors:false,
                isShowSetup : false
            }
        }
    },
    beforeCreate() {
        //图片预加载
        let pre_imgs = [
            require('../assets/main/main_bg_ef8e68d8.jpg'),
            require('../assets/main/bg_zl_1350702.jpg'),
            require('../assets/main/bg_01_cd8d39e.jpg'),
            require('../assets/main/bg_1f611bf.jpg'),
        ]
        for(let img of pre_imgs){
            let image = new Image();
            image.onload = ()=>{
                console.log(1)
            };
            image.src = img
        }
    },
    methods: {
        clearRecruitData(){
            if(localStorage.getItem('my_record')){
                localStorage.removeItem('my_record')
                this.$bus.$emit('success','数据已清除')
            }else{
                this.$bus.$emit('alert','没有数据可被清除')
            }
        },
        //配置我的队伍
        checkMyTeam(){
            this.$refs.my_team.classList.add('active')
            this.$refs.my_warrior.classList.add('active')
            this.$refs.my_skill.classList.add('active')
            this.$refs.logo.classList.add('active')
            this.$refs.recruit.classList.add('active')
            this.$refs.setup.classList.add('active')
            setTimeout(()=>{
                this.$router.push(
                    {
                        path : '/team',
                        query : {
                            from : 'main'
                        }
                    }
                )
                setTimeout(() => {
                    
                    this.$refs.logo.classList.remove('active')
                    this.$refs.recruit.classList.remove('active')
                    this.$refs.my_team.classList.remove('active')
                    this.$refs.my_warrior.classList.remove('active')
                    this.$refs.my_skill.classList.remove('active')
                    this.$refs.setup.classList.remove('active')
                }, 300);
            },200)
        },
        //查看我的战法
        checkMySkill(){
            this.$refs.my_team.classList.add('active')
            this.$refs.my_warrior.classList.add('active')
            this.$refs.my_skill.classList.add('active')
            this.$refs.logo.classList.add('active')
            this.$refs.recruit.classList.add('active')
            this.$refs.setup.classList.add('active')
            setTimeout(()=>{
                this.$router.push(
                    {
                        path : '/skill',
                        query : {
                            from : 'main'
                        }
                    }
                )
                setTimeout(() => {
                    this.$refs.logo.classList.remove('active')
                    this.$refs.recruit.classList.remove('active')
                    this.$refs.my_team.classList.remove('active')
                    this.$refs.my_warrior.classList.remove('active')
                    this.$refs.my_skill.classList.remove('active')
                    this.$refs.setup.classList.remove('active')
                }, 300);
            },200)
        },
        checkMyWarrior(){
            this.$refs.my_team.classList.add('active')
            this.$refs.my_warrior.classList.add('active')
            this.$refs.my_skill.classList.add('active')
            this.$refs.logo.classList.add('active')
            this.$refs.recruit.classList.add('active')
            this.$refs.setup.classList.add('active')
            setTimeout(() => {
                this.$router.push(
                    {
                        path  :  '/warriors',
                        query:{
                            from : 'main'
                        }
                    }
                )
                setTimeout(()=>{
                    this.$refs.logo.classList.remove('active')
                    this.$refs.recruit.classList.remove('active')
                    this.$refs.my_team.classList.remove('active')
                    this.$refs.my_warrior.classList.remove('active')
                    this.$refs.my_skill.classList.remove('active')
                    this.$refs.setup.classList.remove('active')
                },300)
            }, 200);
            
        },
        recruitWarrior(){
            this.$router.push(
                {
                    path : '/recruit',
                    query : {
                        from : 'main'
                    }
                }
            )
        },
        clearAllData(){
            if(localStorage.getItem('my_warriors')){
                localStorage.removeItem('my_warriors')
            }
            if(localStorage.getItem('my_skill')){
                localStorage.removeItem('my_skill')
            }
            if(localStorage.getItem('my_team')){
                localStorage.removeItem('my_team')
            }
            this.$bus.$emit('success','清除数据成功')
        },
        clearTeamData(){
            if(localStorage.getItem('my_warriors')){
                let temp = JSON.parse(localStorage.getItem('my_warriors'))
                for(let i=0;i<temp.length;i++){
                    if(temp[i].onTeam){
                        temp[i].onTeam = false
                        for(let j=0;j<2;j++){
                            if(temp[i].loadSkill[j].name != ''){
                                temp[i].loadSkill[j].name = '',
                                temp[i].loadSkill[j].type = ''
                            }
                        }
                    }else{
                        for(let j=0;j<2;j++){
                            if(temp[i].loadSkill[j].name != ''){
                                temp[i].loadSkill[j].name = '',
                                temp[i].loadSkill[j].type = ''
                            }
                        }
                    }
                }
                localStorage.setItem('my_warriors',JSON.stringify(temp))
            }
            //对所有我所拥有的战法使用次数进行恢复
            if(localStorage.getItem('my_skill')){
                let temp = JSON.parse(localStorage.getItem('my_skill'))
                for(let i=0;i<temp.command.length;i++){
                    if(temp.command[i].acquired){
                        temp.command[i].learned.have = 1
                        if(temp.command[i].odd == '2'){
                            temp.command[i].learned.have = 2
                        }
                    }
                }
                for(let i=0;i<temp.active.length;i++){
                    if(temp.active[i].acquired){
                        temp.active[i].learned.have = 1
                        if(temp.active[i].odd == '2'){
                            temp.active[i].learned.have = 2
                        }
                    }
                }
                for(let i=0;i<temp.combo.length;i++){
                    if(temp.combo[i].acquired){
                        temp.combo[i].learned.have = 1
                        if(temp.combo[i].odd == '2'){
                            temp.combo[i].learned.have = 2
                        }
                    }
                }
                for(let i=0;i<temp.passive.length;i++){
                    if(temp.passive[i].acquired){
                        temp.passive[i].learned.have = 1
                        if(temp.passive[i].odd == '2'){
                            temp.passive[i].learned.have = 2
                        }
                    }
                }
                localStorage.setItem('my_skill',JSON.stringify(temp))
            }
            if(localStorage.getItem('my_team')){
                localStorage.removeItem('my_team')
                this.$bus.$emit('success','数据清除成功')
            }else{
                this.$bus.$emit('alert','我的队伍里已经没有数据啦')
            }
        }
    },
}
</script>

<style lang='less'>
.main_panel{
    position: absolute;top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    img{
        width: 100vw;
        height: 100vh;
    }
    .setup_panel{
        position: absolute; top: 0; left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.548);
        .setup_container{
            position: absolute; left: 50%; top : 50%;
            margin: -15vw 0 0 -30vw;
            width: 60vw;
            height: 30vw;
            box-shadow: 0 0 20px white;
            .topic{
                position: absolute; left: 0;top: 0;
                height: 4vw;
                width: 10vw;
                text-align: center;
                line-height: 4vw;
                font-size: 3vw;
                font-weight: bold;
                left: 50%;
                color: rgb(49, 49, 49);
                margin:  0 0 0 -5vw;
            }
            .setup_bg_img{
                position: absolute; left: 0; top: 0;
                width: 100%;
                height: 100%;
            }
            background: white;
            
            animation: toBig .2s ease-out 1;
            .close_btn{
                position: absolute; right: 0; top: 0;
                width: 5vw;
                color: darkred;
                height: 5vw;
                text-align: center;
                line-height: 5vw;
                font-size: 3vw;
            }
            .clearData,.clearTeamData,.clearRecruit{
                position: absolute; top: 5vw; left: 5vw;
                width: 50vw;
                height: 4vw;
                border-bottom: .2vw solid rgb(175, 175, 175);
                .title{
                    width: 35vw;
                    height: 4vw;
                    line-height: 4vw;
                    font-weight: bold;
                    font-size: 1vw;
                    text-align: left;
                }
                .clear_btn{
                    position: absolute; right: 0vw; bottom:1vw ;
                    width: 8vw;
                    height: 3vw;
                    background: #000;
                    text-align: center;
                    line-height: 3vw;
                    border-radius: .5vw;
                    color: white;
                    font-size: 1vw;
                    font-weight: bold;
                }
            }
            .clearTeamData{
                top: 11vw;
            }
            .clearRecruit{
                top : 17vw;
            }
            .liru_img{
                position: absolute;bottom: -2.7vw; left: 0;
                width: 30vw;
                height: 20vw;
            }
            .footer{
                position: absolute; left: 0; bottom: 1vw;
                width: 100%;
                height: 2vw;
                line-height: 2vw;
                text-align: center;
                font-size: 1vw;
                font-weight: bolder;

            }
        }
    }
    .setUp{
        position: absolute; right: 5vw; top: 3vw;
        width: 5vw;
        height: 5vw;
        transition: all .3s linear;
        .bg{
            position: absolute; right: 0; top: 0;
            width: 5vw;
            height: 5vw;
            transform: rotate(45deg);
            background: rgb(39, 39, 39);
        }
        .font{
            position: absolute; left: 50%; top : 50%;
            transform : translate(-50%,-50%);
            width: 4vw;
            font-size: 1vw;
            height: 2vw;
            text-align: center;
            line-height: 2vw;
            color: white;
        }
    }
    .setUp.active{
        opacity: 0;
    }
    .logo{
        width: 30vw;
        height: 30vh;
        position: absolute; left: 35vw; top: 10vh;
        background: url('../assets/main/logo.webp')no-repeat;
        background-size: 100%;
        transition: all .3s;
        transition-delay: .12s;
    }
    .logo.active{
        transform: translateY(-40vh);
    }
    .my_warriors,.my_skill,.my_team{
        position: absolute;bottom: 4vw;left: 0;
        width: 25vw;
        height: 5vw;
        font-size: 2vw;
        text-align: center;
        color: white;
        font-weight: bolder;
        line-height: 5vw;
        
        background: url('../assets/main/tit-bg_506313d.png')no-repeat;
        background-size: cover;
        transition: all .3s ease-in;
    }
    .my_warriors.active,.my_skill.active,.my_team.active{
        transform: translateX(-25vw);
    }
    .my_warriors{
        transition-delay: .05s;
        bottom:11vw;
    }
    .my_team{
        transition-delay: .1s;
        bottom: 18vw;
    }
    .draw_warriors{
        position: absolute; right: 5vw; bottom: 5vw;
        width: 12vw;
        height: 12vw;
        background: url('../assets/main/fhdb_btn_503a216.png')no-repeat;
        background-size: cover;
        text-align: center;
        line-height: 12vw;
        font-weight: bolder;
        color: rgb(95, 4, 4);
        transition: all .3s;
    }
    .draw_warriors.active{
        transform: translateX(17vw);
    }
    
}
</style>