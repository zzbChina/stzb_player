<template>
    <div class="my_team_panel">
        <img src="../assets/main/main_bg_ef8e68d8.jpg" alt="" class="team_panel_bg">
        <div class="back_btn" @click="backToHome"></div>
        <div class="safe_my_team" @click="safeThisTeam" ref="safe_my_team">保存阵容</div>
        <div class="add_team_btn" @click="addTeamNumber" ref="add_team_btn">增加队伍</div>
        <div class="make_image_btn" @click="clickGeneratePicture" ref="make_image_btn">生成长图</div>
        <!-- 主版块 -->
        <div class="main_container" ref="container">
            <div class="team_container" v-for="(t,t_index) in all_team" :key="t.index" ref="t_container">
                <img src="../assets/main/gold_mask.png" alt="" class="gold_mask">
                <div class="delete_team_btn" @click="toDeleteThisTeam(t_index)">
                    <img src="../assets/main/tag_7_9be31ee0.png" alt="">
                </div>
                <div class="team_id">第{{t_index+1}}队</div>
                <ul>
                    <li v-for="(w,w_index) in t.warriors" :key="w.index" >
                        <!-- 战法面板 -->
                        <div class="warrior_skill_panel">
                            <div class="skill_box1">
                                <img src="../assets/main/command.png" alt="" v-show="w.skill.type == 'command'">
                                <img src="../assets/main/active.png" alt="" v-show="w.skill.type == 'active'">
                                <img src="../assets/main/combo.png" alt="" v-show="w.skill.type == 'combo'">
                                <img src="../assets/main/passive.png" alt="" v-show="w.skill.type == 'passive'">
                                <div class="skill_name">{{w.skill.name}}</div>
                            </div>
                            <div class="skill_box2" @click="putSkillOnIt(t_index,w_index,0)">
                                <img src="../assets/main/command.png" alt="" v-show="w.loadSkill[0].type == 'command'">
                                <img src="../assets/main/active.png" alt="" v-show="w.loadSkill[0].type == 'active'">
                                <img src="../assets/main/combo.png" alt="" v-show="w.loadSkill[0].type == 'combo'">
                                <img src="../assets/main/passive.png" alt="" v-show="w.loadSkill[0].type == 'passive'">
                                <div class="skill_name">{{w.loadSkill[0].name}}</div>
                            </div>
                            <div class="skill_box3" @click="putSkillOnIt(t_index,w_index,1)">
                                <img src="../assets/main/command.png" alt="" v-show="w.loadSkill[1].type == 'command'">
                                <img src="../assets/main/active.png" alt="" v-show="w.loadSkill[1].type == 'active'">
                                <img src="../assets/main/combo.png" alt="" v-show="w.loadSkill[1].type == 'combo'">
                                <img src="../assets/main/passive.png" alt="" v-show="w.loadSkill[1].type == 'passive'">
                                <div class="skill_name">{{w.loadSkill[1].name}}</div>
                            </div>
                        </div>
                        <img src="../assets/main/baowu-empty-0acd.png" alt="" @click="putWarriorsIntoHere(t_index,w_index,$event)">
                        <div class="position" v-show='w_index == 0'>大营</div>
                        <div class="position" v-show="w_index == 1">中军</div>
                        <div class="position" v-show="w_index == 2">前锋</div>
                        <img :src="w.img" alt="" v-show="w.img" @click="removeThisWarriors(t_index,w_index)">
                        <div class="name">  {{w.name}}</div>
                        <div class="star_shadow"></div>
                        <div class="bottom">
                            <div class="level">Lv.{{w.level}}</div>
                            <div class="cost">COST{{w.cost}}</div>
                            <div class="arms_bu" v-show="!w.current_arm && w.arms == '步'">{{w.att}}</div>
                            <div class="arms_gong" v-show="!w.current_arm && w.arms == '弓'">{{w.att}}</div>
                            <div class="arms_qi" v-show="!w.current_arm && w.arms == '骑'">{{w.att}}</div>
                            <!-- 高级兵种 -->
                            <div class="up_arms" v-show="w.current_arm">
                                <img :src="w.current_arm" alt="">
                            </div>
                            <div class="up_arms_att" v-show="w.current_arm">{{w.att}}</div>
                        </div>
                        <div class="camp" v-show="w.camp == '蜀'"><img :src="require('../assets/main/shu.png')" alt=""></div>
                        <div class="camp" v-show="w.camp == '吴'"><img :src="require('../assets/main/wu.png')" alt=""></div>
                        <div class="camp" v-show="w.camp == '魏'"><img :src="require('../assets/main/wei.png')" alt=""></div>
                        <div class="camp" v-show="w.camp == '群'"><img :src="require('../assets/main/qun.png')" alt=""></div>
                        <div class="camp" v-show="w.camp == '汉'"><img :src="require('../assets/main/han.png')" alt=""></div>
                        <div class="red_star">
                            <ul class="red_list">
                                <li v-for="s in w.red" :key="s.index" class="red"><img src="../assets/main/red_star.png" alt=""></li>
                                <li v-for="s in (5-w.red)" :key="s.index"><img src="../assets/main/star.png" alt=""></li>
                            </ul>
                        </div>
                        <div class="up" v-show="w.isUp.status">
                            <img src="../assets/main/juexing.png" alt="">
                        </div>
                        <img :src="require(`../assets/main/s2.png`)" alt="" class="sign" v-show="w.sign == 's2'">
                        <img :src="require(`../assets/main/s3.png`)" alt="" class="sign" v-show="w.sign == 's3'">
                        <img :src="require(`../assets/main/xp.png`)" alt="" class="sign" v-show="w.sign == 'xp'">
                        <img :src="require(`../assets/main/sp.png`)" alt="" class="sign" v-show="w.sign == 'sp'">
                        
                    </li>
                </ul>
            </div>
        </div>

        <!-- 武将选择面板 -->
        <transition name="fade">
        <div class="warriors_select_panel" v-show="isSelectWarrior">
            <div class="return_mask" @click="isSelectWarrior = false"></div>
            <div class="prompt_title" v-show="current_warriorId == 0">你正在为--第{{current_teamId+1}}队--的--大营--配置武将</div>
            <div class="prompt_title" v-show="current_warriorId == 1">你正在为--第{{current_teamId+1}}队--的--中军--配置武将</div>
            <div class="prompt_title" v-show="current_warriorId == 2">你正在为--第{{current_teamId+1}}队--的--前锋--配置武将</div>
            <div class="warriors_pool">
                <ol>
                    <li v-for="(c,index) in my_warriors" :key="c.index" @click="choseThisPutIntoBox(c,index)" v-show="!c.onTeam">
                        <img :src="c.img" alt="">
                        <div class="name">  {{c.name}}</div>
                        <div class="star_shadow"></div>
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
                        <img :src="require(`../assets/main/s2.png`)" alt="" class="sign" v-show="c.sign == 's2'">
                        <img :src="require(`../assets/main/s3.png`)" alt="" class="sign" v-show="c.sign == 's3'">
                        <img :src="require(`../assets/main/xp.png`)" alt="" class="sign" v-show="c.sign == 'xp'">
                        <img :src="require(`../assets/main/sp.png`)" alt="" class="sign" v-show="c.sign == 'sp'">
                    </li>
                </ol>
            </div>
        </div>
        </transition>

        <!-- 战法选择面板 -->
        <transition name='bottom_to_top_fade'>
        <div class="selectSkillPanel" v-show="isPutSkills">
            <div class="topic">我的战法
                <div class="back_btn" @click='isPutSkills = false'>
                    返回
                </div>
            </div>
            <div class="command_skill">
                <ul>
                    <li v-for="(s,index) in skill.command" :key="s.index">
                        <img src="../assets/main/icon-skill2-092a.png" alt="" @click="putThisIntoWarrior(s,'command',index)">
                        <div class="mask" v-show="!s.acquired || s.learned.have <1"></div>
                        <div class="name">{{s.name}}</div>
                    </li>
                </ul>
            </div>
            <div class="active_skill">
                <ul>
                    <li v-for="(s,index) in skill.active" :key="s.index">
                        <img src="../assets/main/icon-skill3-9573.png" alt="" @click="putThisIntoWarrior(s,'active',index)">
                        <div class="mask" v-show="!s.acquired || s.learned.have <1"></div>
                        <div class="name">{{s.name}}</div>
                    </li>
                </ul>
            </div>
            <div class="combo_skill">
                <ul>
                    <li v-for="(s,index) in skill.combo" :key="s.index">
                        <img src="../assets/main/icon-skill4-27c7.png" alt="" @click="putThisIntoWarrior(s,'combo',index)">
                        <div class="mask" v-show="!s.acquired || s.learned.have <1"></div>
                        <div class="name">{{s.name}}</div>
                    </li>
                </ul>
            </div>
            <div class="passive_skill">
                <ul>
                    <li v-for="(s,index) in skill.passive" :key="s.index">
                        <img src="../assets/main/icon-skill1-3277.png" alt="" @click="putThisIntoWarrior(s,'passive',index)">
                        <div class="mask" v-show="!s.acquired || s.learned.have <1"></div>
                        <div class="name">{{s.name}}</div>
                    </li>
                </ul>
            </div>
            
        </div>
        </transition>

        <!-- 提示面板 -->
        <div class="confirmToDedication" v-show='isSure'>
            <div class="center_box">
                <img src="../assets/main/login_bg_ce29890.png" alt="" class="confirm_bg_img">
                <div class="topic">提示</div>
                <div class="msg">确定移除这支队伍吗？</div>
                <div class="confirm_btn" @click="sureDeleteIt">确定</div>
                <div class="cancel_btn" @click="isSure = false">取消</div>
            </div>
        </div>
        
        <!-- 加载界面 -->
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
import functions from '../mixin/function'
import all_skills  from '../mixin/skills.js'
export default {
    name : 'Team',
    mixins:[functions,all_skills],
    data(){
        return{
            isSelectWarrior : false,
            isPutSkills : false,
            isSure : false,
            all_team:[
                {
                    warriors:[
                        {
                            id :  200,
                            name : '',
                            camp : '',
                            arms : '',
                            gender : '',
                            red : 0,
                            cost : '',
                            att : '',
                            level : '',
                            isUp : {
                                status : false,
                                material_one : '',
                                material_two : '',
                            },
                            isUpArms : {
                                status : false,
                                material_one : '',
                                material_two : '',
                                type : ['b_d','b_j']
                            },
                            current_arm:'',
                            skill:{
                                name : '',
                                type : '',
                                info : ''
                            },
                            getSkill:{
                                name : '',
                                type : '',
                                info : '',
                            },
                            loadSkill:[
                                {
                                    name : '',
                                    type : '',
                                },
                                {
                                    name : '',
                                    type : '',
                                }
                            ],
                            onTeam: false,
                            sign : '',
                            img : ''    
                        },
                        {
                            id :  200,
                            name : '',
                            camp : '',
                            arms : '',
                            gender : '',
                            red : 0,
                            cost : '',
                            att : '',
                            level : '',
                            isUp : {
                                status : false,
                                material_one : '',
                                material_two : '',
                            },
                            isUpArms : {
                                status : false,
                                material_one : '',
                                material_two : '',
                                type : ['b_d','b_j']
                            },
                            current_arm:'',
                            skill:{
                                name : '',
                                type : '',
                                info : ''
                            },
                            getSkill:{
                                name : '',
                                type : '',
                                info : '',
                            },
                            loadSkill:[
                                {
                                    name : '',
                                    type : '',
                                },
                                {
                                    name : '',
                                    type : '',
                                }
                            ],
                            onTeam: false,
                            sign : '',
                            img : ''    
                        },
                        {
                            id :  200,
                            name : '',
                            camp : '',
                            arms : '',
                            gender : '',
                            red : 0,
                            cost : '',
                            att : '',
                            level : '',
                            isUp : {
                                status : false,
                                material_one : '',
                                material_two : '',
                            },
                            isUpArms : {
                                status : false,
                                material_one : '',
                                material_two : '',
                                type : ['b_d','b_j']
                            },
                            current_arm:'',
                            skill:{
                                name : '',
                                type : '',
                                info : ''
                            },
                            getSkill:{
                                name : '',
                                type : '',
                                info : '',
                            },
                            loadSkill:[
                                {
                                    name : '',
                                    type : '',
                                },
                                {
                                    name : '',
                                    type : '',
                                }
                            ],
                            onTeam: false,
                            sign : '',
                            img : ''    
                        },
                    ]
                }
            ],
            my_warriors:[],
            current_teamId:'',
            current_warriorId : '',

            skill : {
                command : [],
                active : [],
                combo  : [],
                passive : []
            },//存储我的战法
            skillTempOb : {
                t_id : '',
                w_id : '',
                s_id : ''
            },
            deleteID:'',
            loading:{
                isLoading:false,
                title : '图片正在生成，请耐心等待...'
            },
        }
    },
    methods:{
        //生成长图
        clickGeneratePicture(){
            this.$refs.make_image_btn.classList.add('active')
            setTimeout(()=>{
                this.$refs.make_image_btn.classList.remove('active')
                this.loading.isLoading = true
            },190)
            setTimeout(()=>{
                this.$refs.container.classList.add('active')
                this.$refs.container.style.height = Math.ceil(this.all_team.length)*24 + 'vw'
                html2canvas(this.$refs.container).then(canvas => {
                    // 转成图片，生成图片地址
                    this.imgUrl = canvas.toDataURL("image/png");  //可将 canvas 转为 base64 格式
                    var eleLink = document.createElement("a");
                    eleLink.href = this.imgUrl; // 转换后的图片地址
                    eleLink.download = "我的队伍";
                    document.body.appendChild(eleLink);
                    // 触发点击
                    eleLink.click();
                    // 然后移除
                    document.body.removeChild(eleLink);
                    this.$refs.container.classList.remove('active')
                    this.$refs.container.style.height = '70vh'
                    this.loading.isLoading = false
                });
            },200)
        },
        //删除一个队列
        sureDeleteIt(){
            for(let i=0;i<3;i++){
                for(let j=0;j<2;j++){
                    if(this.all_team[this.deleteID].warriors[i].loadSkill[j].name != ''){
                        this.returnBackSkill.call(this,this.all_team[this.deleteID].warriors[i].loadSkill[j].name,this.all_team[this.deleteID].warriors[i].loadSkill[j].type)
                    }
                }
            }
            //同时解除我的武将中出战武将的状态
            for(let i=0;i<this.my_warriors.length;i++){
                for(let j=0;j<3;j++){
                    if(this.my_warriors[i].name == this.all_team[this.deleteID].warriors[j].name
                    && this.my_warriors[i].camp == this.all_team[this.deleteID].warriors[j].camp
                    && this.my_warriors[i].arms == this.all_team[this.deleteID].warriors[j].arms
                    && this.my_warriors[i].onTeam){
                        this.my_warriors[i].onTeam = false
                    }
                    for(let k=0;k<2;k++){
                        this.my_warriors[i].loadSkill[k].name =''
                        this.my_warriors[i].loadSkill[k].type =''
                    }
                }
                
            }
            this.all_team.splice(this.deleteID,1)
            this.isSure = false
            this.$bus.$emit('alert','删除成功')
        },
        toDeleteThisTeam(id){
            this.deleteID = id
            this.isSure = true
        },
        //正式将战法放置到目标身上
        putThisIntoWarrior(s,type,id){
            let x = Math.abs(this.skillTempOb.s_id-1)
            if(this.all_team[this.skillTempOb.t_id].warriors[this.skillTempOb.w_id].loadSkill[x].name == s.name){
                this.$bus.$emit('alert','该武将已经配置过该战法')
                this.isPutSkills = false
                return
            }
            if(this.all_team[this.skillTempOb.t_id].warriors[this.skillTempOb.w_id].loadSkill[this.skillTempOb.s_id].name == ''){
                this.all_team[this.skillTempOb.t_id].warriors[this.skillTempOb.w_id].loadSkill[this.skillTempOb.s_id].name = s.name
                this.all_team[this.skillTempOb.t_id].warriors[this.skillTempOb.w_id].loadSkill[this.skillTempOb.s_id].type = type
                if(type == 'command'){
                    this.skill.command[id].learned.have --;
                    if(this.skill.command[id].learned.have < 0){
                        this.skill.command[id].learned.have = 0
                    }
                }else if(type == 'active'){
                    this.skill.active[id].learned.have --;
                    if(this.skill.active[id].learned.have < 0){
                        this.skill.active[id].learned.have = 0
                    }
                }else if(type == 'combo'){
                    this.skill.combo[id].learned.have --;
                    if(this.skill.combo[id].learned.have < 0){
                        this.skill.combo[id].learned.have = 0
                    }
                }else{
                    this.skill.passive[id].learned.have --;
                    if(this.skill.passive[id].learned.have < 0){
                        this.skill.passive[id].learned.have = 0
                    }
                }
                this.$bus.$emit('success',`${this.all_team[this.skillTempOb.t_id].warriors[this.skillTempOb.w_id].name}成功配置【${s.name}】`)
            }
            this.isPutSkills = false
        },
        //放置战法
        putSkillOnIt(t_id,w_id,id){
            this.skillTempOb.t_id = t_id
            this.skillTempOb.w_id = w_id
            this.skillTempOb.s_id = id
            //如果该位置上存在战法则删除该战法，
            if(this.all_team[t_id].warriors[w_id].loadSkill[id].name != ''){
                //调用函数返回战法使用次数
                this.turnBackSkill.call(this,t_id,w_id,id)
                this.all_team[t_id].warriors[w_id].loadSkill[id].name = ''
                this.all_team[t_id].warriors[w_id].loadSkill[id].type = ''
                
                this.$bus.$emit('success','战法移除成功')
            }else{
                this.isPutSkills = true
            }
            
        },
        //移除这个武将
        removeThisWarriors(t_id,w_id){ 
            for(let x=0;x<2;x++){
                this.returnBackSkill.call(this,this.all_team[t_id].warriors[w_id].loadSkill[x].name,this.all_team[t_id].warriors[w_id].loadSkill[x].type)
            }
            for(let i=0;i<this.my_warriors.length;i++){
                if(this.my_warriors[i].name == this.all_team[t_id].warriors[w_id].name
                && this.my_warriors[i].camp == this.all_team[t_id].warriors[w_id].camp
                && this.my_warriors[i].arms == this.all_team[t_id].warriors[w_id].arms
                && this.my_warriors[i].onTeam){
                    for(let k=0;k<2;k++){
                        if(this.my_warriors[i].loadSkill[k].name){
                            this.returnBackSkill.call(this,this.my_warriors[i].loadSkill[k].name,this.my_warriors[i].loadSkill[k].type)
                            this.my_warriors[i].loadSkill[k].name = ''
                            this.my_warriors[i].loadSkill[k].type = ''
                        }
                    }
                    if(this.my_warriors[i].red == this.all_team[t_id].warriors[w_id].red
                    && this.my_warriors[i].isUpArms.status == this.all_team[t_id].warriors[w_id].isUpArms.status
                    && this.my_warriors[i].isUp.status == this.all_team[t_id].warriors[w_id].isUp.status){
                        this.my_warriors[i].onTeam = false
                        let newOb = {
                                id :  200,
                                name : '',
                                camp : '',
                                arms : '',
                                gender : '',
                                red : 0,
                                cost : '',
                                att : '',
                                level : '',
                                isUp : {
                                    status : false,
                                    material_one : '',
                                    material_two : '',
                                },
                                isUpArms : {
                                    status : false,
                                    material_one : '',
                                    material_two : '',
                                    type : ['b_d','b_j']
                                },
                                current_arm:'',
                                skill:{
                                    name : '',
                                    type : '',
                                    info : ''
                                },
                                getSkill:{
                                    name : '',
                                    type : '',
                                    info : '',
                                },
                                loadSkill:[
                                    {
                                        name : '',
                                        type : '',
                                    },
                                    {
                                        name : '',
                                        type : '',
                                    }
                                ],
                                onTeam: false,
                                sign : '',
                                img : ''    
                        }
                        this.transferData.call(this,this.all_team[t_id].warriors[w_id],newOb)
                        return
                    }else{
                        this.my_warriors[i].onTeam = false
                    }
                }
                if(i == this.my_warriors.length-1){
                    let newOb = {
                            id :  200,
                            name : '',
                            camp : '',
                            arms : '',
                            gender : '',
                            red : 0,
                            cost : '',
                            att : '',
                            level : '',
                            isUp : {
                                status : false,
                                material_one : '',
                                material_two : '',
                            },
                            isUpArms : {
                                status : false,
                                material_one : '',
                                material_two : '',
                                type : ['b_d','b_j']
                            },
                            current_arm:'',
                            skill:{
                                name : '',
                                type : '',
                                info : ''
                            },
                            getSkill:{
                                name : '',
                                type : '',
                                info : '',
                            },
                            loadSkill:[
                                {
                                    name : '',
                                    type : '',
                                },
                                {
                                    name : '',
                                    type : '',
                                }
                            ],
                            onTeam: false,
                            sign : '',
                            img : ''    
                    }
                    for(let k=0;k<2;k++){
                        this.returnBackSkill.call(this,this.my_warriors[i].loadSkill[k].name,this.my_warriors[i].loadSkill[k].type)
                        if(this.my_warriors[i].loadSkill[k].name){
                            this.my_warriors[i].loadSkill[k].name = ''
                            this.my_warriors[i].loadSkill[k].type = ''
                        }
                    }
                    this.transferData.call(this,this.all_team[t_id].warriors[w_id],newOb)
                    return
                }
            }
            
        },
        //保存我的阵容
        safeThisTeam(){
            this.$refs.safe_my_team.classList.add('active')
            setTimeout(()=>{
                this.$refs.safe_my_team.classList.remove('active')
            },200)
            let p = new Promise((resolve,reject)=>{
                localStorage.setItem('my_team',JSON.stringify(this.all_team))
                localStorage.setItem('my_warriors',JSON.stringify(this.my_warriors))
                localStorage.setItem('my_skill',JSON.stringify(this.skill))
                resolve();
                reject()
            })
            p.then(
                (response)=>{
                    console.log(response)
                    this.$bus.$emit('success','保存成功')
                },
                (error)=>{
                    console.log(error)
                    this.$bus.$emit('alert','保存失败')
                }
            )
            
        },
        //增加队伍数量
        addTeamNumber(){
            this.$refs.add_team_btn.classList.add('active')
            setTimeout(()=>{
                this.$refs.add_team_btn.classList.remove('active')
            },200)
            let ob = {
                warriors:[
                        {
                            id :  200,
                            name : '',
                            camp : '',
                            arms : '',
                            gender : '',
                            red : 0,
                            cost : '',
                            att : '',
                            level : '',
                            isUp : {
                                status : false,
                                material_one : '',
                                material_two : '',
                            },
                            isUpArms : {
                                status : false,
                                material_one : '',
                                material_two : '',
                                type : ['b_d','b_j']
                            },
                            current_arm:'',
                            skill:{
                                name : '',
                                type : '',
                                info : ''
                            },
                            getSkill:{
                                name : '',
                                type : '',
                                info : '',
                            },
                            loadSkill:[
                                {
                                    name : '',
                                    type : '',
                                },
                                {
                                    name : '',
                                    type : '',
                                }
                            ],
                            onTeam: false,
                            sign : '',
                            img : ''    
                        },
                        {
                            id :  200,
                            name : '',
                            camp : '',
                            arms : '',
                            gender : '',
                            red : 0,
                            cost : '',
                            att : '',
                            level : '',
                            isUp : {
                                status : false,
                                material_one : '',
                                material_two : '',
                            },
                            isUpArms : {
                                status : false,
                                material_one : '',
                                material_two : '',
                                type : ['b_d','b_j']
                            },
                            current_arm:'',
                            skill:{
                                name : '',
                                type : '',
                                info : ''
                            },
                            getSkill:{
                                name : '',
                                type : '',
                                info : '',
                            },
                            loadSkill:[
                                {
                                    name : '',
                                    type : '',
                                },
                                {
                                    name : '',
                                    type : '',
                                }
                            ],
                            onTeam: false,
                            sign : '',
                            img : ''    
                        },
                        {
                            id :  200,
                            name : '',
                            camp : '',
                            arms : '',
                            gender : '',
                            red : 0,
                            cost : '',
                            att : '',
                            level : '',
                            isUp : {
                                status : false,
                                material_one : '',
                                material_two : '',
                            },
                            isUpArms : {
                                status : false,
                                material_one : '',
                                material_two : '',
                                type : ['b_d','b_j']
                            },
                            current_arm:'',
                            skill:{
                                name : '',
                                type : '',
                                info : ''
                            },
                            getSkill:{
                                name : '',
                                type : '',
                                info : '',
                            },
                            loadSkill:[
                                {
                                    name : '',
                                    type : '',
                                },
                                {
                                    name : '',
                                    type : '',
                                }
                            ],
                            onTeam: false,
                            sign : '',
                            img : ''    
                        },
                ]
            }
            
            this.all_team.push(ob)
            setTimeout(()=>{
                this.$refs.container.scrollBy(0,1000)
            },10)
            // console.log(this.$refs.container.scrollBy(0,1000))
            // console.log(this.$refs.t_container[this.$refs.t_container.length-1])
            this.$bus.$emit('success','队伍添加成功')
        },
        //选择这个武将卡放入
        choseThisPutIntoBox(ob,index){
            for(let i=0;i<this.all_team.length;i++){
                for(let j=0;j<this.all_team[i].warriors.length;j++){
                    if(this.all_team[i].warriors[j].name == this.my_warriors[index].name
                    && this.all_team[i].warriors[j].arms == this.my_warriors[index].arms
                    && this.all_team[i].warriors[j].camp == this.my_warriors[index].camp){
                        this.$bus.$emit('alert',`${this.my_warriors[index].camp}-${this.my_warriors[index].name}-${this.my_warriors[index].arms}已存在队伍中`)
                        return
                    }
                }
            }
            this.transferData.call(this,this.all_team[this.current_teamId].warriors[this.current_warriorId],ob)
            this.my_warriors[index].onTeam =  true
            this.isSelectWarrior = false
        },
        putWarriorsIntoHere(t_id,w_id){
            this.current_teamId = t_id
            this.current_warriorId = w_id
            this.isSelectWarrior = true
        },
        backToHome(){
            let p = new Promise((resolve,reject)=>{
                localStorage.setItem('my_team',JSON.stringify(this.all_team))
                localStorage.setItem('my_warriors',JSON.stringify(this.my_warriors))
                localStorage.setItem('my_skill',JSON.stringify(this.skill))
                resolve();
                reject()
            })
            p.then(
                (response)=>{
                    console.log(response)
                },
                (error)=>{
                    console.log(error)
                }
            )
            this.$router.push(
                {
                    path : '/',
                    query : {
                        from : 'team'
                    }
                }
            )
        },
        
    },
    created() {
        if(localStorage.getItem('my_warriors')){
            this.my_warriors = JSON.parse(localStorage.getItem('my_warriors'))
        }
        //获得我的武将
        if(localStorage.getItem('my_team')){
            this.all_team = JSON.parse(localStorage.getItem('my_team'))
        }
        //获得我的战法
        if(localStorage.getItem('my_skill')){
            this.skill = JSON.parse(localStorage.getItem('my_skill'))
        }else{
            this.skill.command = this.command_skills
            this.skill.active = this.active_skills
            this.skill.combo = this.combo_skills
            this.skill.passive = this.passive_skills
        }
        //更新队伍数据，同步到我的武将
        for(let i=0;i<this.all_team.length;i++){
            for(let j=0;j<this.all_team[i].warriors.length;j++){
                for(let k=0;k<this.my_warriors.length;k++){
                    if(this.my_warriors[k].onTeam && this.my_warriors[k].name == this.all_team[i].warriors[j].name
                    && this.my_warriors[k].camp == this.all_team[i].warriors[j].camp
                    && this.my_warriors[k].arms == this.all_team[i].warriors[j].arms){
                        if(this.my_warriors[k].red > this.all_team[i].warriors[j].red){
                            this.all_team[i].warriors[j].red = this.my_warriors[k].red
                        }
                        if(this.my_warriors[k].isUp.status != this.all_team[i].warriors[j].isUp.status){
                            this.all_team[i].warriors[j].isUp.status = this.my_warriors[k].isUp.status
                        }
                        if(this.my_warriors[k].isUpArms.status != this.all_team[i].warriors[j].isUpArms.status){
                            this.all_team[i].warriors[j].isUpArms.status = this.my_warriors[k].isUpArms.status
                        }
                        if(this.my_warriors[k].current_arm != this.all_team[i].warriors[j].current_arm){
                            this.all_team[i].warriors[j].current_arm = this.my_warriors[k].current_arm
                        }
                        break;
                    }
                }
            }
        }
    },
}
</script>

<style lang='less'>
.my_team_panel{
    position: absolute; left:0;top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    overflow: hidden;
    animation: fadeIn .2s linear 1;
    .selectSkillPanel{
        position: absolute; left: 0; top: 0;
        width: 100vw;
        height: 100vh;
        transition: all .15s;
        background: rgba(0, 0, 0, 0.9);
        .topic{
            position: absolute; left: 0; top: 0;
            width: 100%;
            height: 9vh;
            text-align: center;
            line-height: 9vh;
            color: white;
            font-size: 1.6vw;
            font-weight: bolder;
            // background:linear-gradient(to bottom,rgb(94, 0, 0),rgb(179, 0, 0),rgb(94, 0, 0));
            background: url('../assets/main/header_6f1eb10.jpg')no-repeat center;
            background-size:100vw 9vh;
            .back_btn{
                position: absolute; right: .3vw; top: 0;
                width: 9vw;
                height: 9vh;
                text-align: center;
                line-height: 9vh;
                color: rgb(212, 212, 212);
                font-size: 1vw;
                
            }
        }
        .command_skill,.active_skill,.passive_skill,.combo_skill{
            position: absolute; left: 10vw; top: 12vh;
            width: 39vw;
            height: 50vh;
            background: rgba(52, 92, 25, 0.2);
            border-radius: 1.2vw;
            box-shadow: .5vw .5vw 1vw #000000,inset .1vw .1vw 1vw rgba(238, 238, 238, 0.61);
            ul{
                overflow-y:scroll ;
                position: absolute; top: 5vh; left: 4.5vw;
                width: 30vw;
                height: 40vh;
                li{
                    position: relative;
                    width: 5vw;
                    height: 5vw;
                    background: rgb(75, 75, 75);
                    border-radius: 1vw;
                    float: left;
                    opacity: 1;
                    margin: 0 0 2vw 2vw;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                    .mask{
                        position: absolute; left: 0; top: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.7);
                        border-radius: 1vw;
                    }
                    .name{
                        position: absolute; left: -1vw; bottom: -.9vw;
                        width: 7vw;
                        height: 1.2vw;
                        text-align: center;
                        line-height: 1.2vw;
                        color: white;
                        text-shadow: 0 0 10px black;
                        font-size: 1vw;
                    }
                }
            }
        }
        .active_skill{
            left: 51vw;
            background: rgba(102, 42, 42, 0.2);
        }
        .combo_skill{
            top: 65vh;
            height: 30vh;
            background: rgba(78, 37, 105, 0.2);
            ul{
                height: 20vh;
            }
        }
        .passive_skill{
            left: 51vw;
            top: 65vh;
            height: 30vh;
            background: rgba(40, 74, 97, 0.2);
            ul{
                height: 20vh;
            }
        }
    }
    .warriors_select_panel{
        position: absolute; left: 0; top: 0;
        width: 100vw;
        height: 100vh;
        transition: all .2s;
        background: rgba(0, 0, 0, 0.5);
        .return_mask{
            position: absolute; left: 0; top: 0;
            width: 100%;
            height: 50vh;
        }
        .prompt_title{
            position: absolute; left: 0; top: 0;
            width: 100vw;
            height: 4vw;
            font-size: 1.5vw;
            font-weight: bolder;
            text-align: center;
            line-height: 4vw;
            color:white;
            background:linear-gradient(to bottom,rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.0));
        }
        .warriors_pool{
            position: absolute; left: 0; bottom: 0;
            width: 100vw;
            height: 50vh;
            animation: slideFromBottom .2s linear 1;
            // animation-delay: .1s;
            background: url('../assets/main/bg2_2197d51.jpg')no-repeat;
            background-size: cover;
            ol{
                position: absolute; left: 10vw; top: 5vh;
                width: 80vw;
                height: 38vh;
                padding: 2vh 0 0 0;
                overflow-y: scroll;
                overflow-x: hidden;
                li{
                    position: relative;
                    float: left;
                    width: 11vw;
                    height: 16vw;
                    box-sizing: border-box;
                    margin: .5vw 0 1.5vw 2vw;
                    border: .15vw solid rgb(179, 0, 185);
                    .sign{
                        position: absolute; right: 0; bottom: 3.5vw;
                        width: 3.6vw;
                        height: 1.9vw;
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
        }
    }
    .back_btn{
      position: absolute; right: 5vw; top: 1vw;
      width: 5vw;
      height: 5vw;
      text-align: center;
      line-height: 5vw;
      font-size: 3vw;
      color: rgb(110, 0, 0);
    }
    .add_team_btn{
        position: absolute; left: 3vw; top: 50%;
        width: 8vw;
        height: 3vw;
        background: darkred;
        text-align: center;
        line-height: 3vw;
        font-size: 1vw;
        color: white;
        margin: -1.5vw 0 0 0;
    }
    .add_team_btn.active{
        animation: click .2s ease-out 1;
    }
    .safe_my_team{
        position: absolute; left: 3vw; top: 50%;
        width: 8vw;
        height: 3vw;
        background: darkred;
        text-align: center;
        line-height: 3vw;
        font-size: 1vw;
        color: white;
        margin: -6vw 0 0 0;
    }
    .safe_my_team.active{
        animation: click .2s ease-out 1;
    }
    .team_panel_bg{
        position: absolute; left: 0; top: 0;
        width: 100vw;
        height: 100vh;
    }
    .main_container{
        position: absolute; top: 50%; left: 50%;
        width: 80vw;
        height: 36vw;
        margin: -18vw 0 0 -40vw;
        overflow-y: scroll;
        overflow-x: hidden;
        .team_container{
            position: relative;
            width: 70vw;
            height: 21vw;
            background: url('../assets/main/bg13_5adb812.jpg')no-repeat;
            background-size: cover;
            margin: 2vw 0 0 4.5vw;
            transition: all .2s;
            animation: rotateX .2s ease-out 1;
            .delete_team_btn{
                position: absolute; right: -6.5vw; top: 50%;
                width: 10vw;
                height: 4.6vw;
                margin: -2.3vw 0 0 0;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .team_id{
                position: absolute; left: 50%; top: -1.5vw;
                font-size: 1.5vw;
                line-height: 3vw;
                width : 8vw;
                height: 3vw;
                color: rgb(92, 0, 0);
                font-weight: bold;
                margin: 0 0 0 -4vw;
            }
            .gold_mask{
                position: absolute; left: 24.5vw; top: -24.5vw;
                transform: rotate(90deg);
                width: 21vw;
                height: 70vw;
            }
            ul{
                position: absolute; left: 5vw; top: 2vw;
                height: 16vw;
                li{
                    float: left;
                    width: 10.9vw;
                    height: 16vw;
                    box-sizing: border-box;
                    border: .1vw solid darkred;
                    background: darkred;
                    position: relative;
                    margin:  0 9vw 0 0;
                    .sign{
                        position: absolute;left: auto;top: auto; right: 0; bottom: 3.5vw;
                        width: 3.6vw;
                        height: 1.9vw;
                    }
                    .warrior_skill_panel{
                        position: absolute; left: 10.8vw; top: -.1vw;
                        width: 8vw;
                        height: 16vw;
                        box-sizing: border-box;
                        background: rgb(51, 51, 51);
                        border: .1vw solid darkred;
                        border-left-color: transparent;
                        
                        .skill_box1,.skill_box2,.skill_box3{
                            position: absolute; top: 1vw; left: 1vw;
                            width: 6vw;
                            height: 4vw;
                            color: rgb(255, 217, 0);
                            background: #000;
                            overflow: hidden;
                            .skill_name{
                                position: absolute; left:0;bottom: 0;
                                width: 100%;
                                height : 2vw;
                                text-align: center;
                                font-size: 1vw;
                                text-shadow: 0 0 5px black;
                                line-height: 2vw;
                                background:linear-gradient(to top;rgb(34, 34, 34),rgba(0, 0, 0, 0));
                            }
                            
                        }
                        .skill_box2{
                            top: 5.5vw;
                            img{
                                animation: skill .2s ease-out 1;
                            }
                        }
                        .skill_box3{
                            top : 10vw;
                            img{
                                animation: skill .2s ease-out 1;    
                            }
                        }
                        @keyframes skill {
                           0%{
                              transform: scale(0);
                           }
                        //    50%{
                        //       transform: scale(2);
                        //    }
                           100%{
                              transform: scale(1);
                           }
                        }
                    }
                    .position{
                        position: absolute; bottom: -1.9vw; left: 0;
                        width: 100%;
                        height: 1.7vw;
                        line-height: 1.7vw;
                        text-align: center;
                        background: rgb(82, 0, 0);
                        color: white;
                        font-size: 1vw;
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
                                color: yellow;
                                margin: .13vw 0 0 0;
                                background: rgba(0, 0, 0, 0);
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
                        position: absolute; left: 0; top: 0;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
    .main_container.active{
        background: url('../assets/main/imgdom_body.jpg')no-repeat;
        background-size: cover;
    }
    .make_image_btn{
        position: absolute; left: 3vw; top: 50%;
        width: 8vw;
        height: 3vw;
        background: rgb(0, 120, 201);
        text-align: center;
        line-height: 3vw;
        font-size: 1vw;
        color: white;
        margin: 6vw 0 0 0;
    }
    .make_image_btn.active{
        animation: click .2s linear 1;
    }
}
</style>