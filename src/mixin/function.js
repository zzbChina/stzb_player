let functions = {
    methods:{  
        //转换数据
        transferData(x,y){
            x.id = y.id
            x.name = y.name
            x.camp = y.camp
            x.arms = y.arms
            x.gender = y.gender
            x.red = y.red
            x.cost = y.cost
            x.att = y.att
            x.level = y.level
            x.isUp.status = y.isUp.status
            x.isUp.material_one = y.isUp.material_one
            x.isUp.material_two = y.isUp.material_two
            x.current_arm = y.current_arm
            x.isUpArms.status = y.isUpArms.status
            x.isUpArms.material_one = y.isUpArms.material_one
            x.isUpArms.material_two = y.isUpArms.material_two
            x.isUpArms.type = y.isUpArms.type
            x.skill = y.skill
            x.getSkill = y.getSkill
            x.loadSkill = y.loadSkill
            x.onTeam = y.onTeam
            x.sign = y.sign
            x.img = y.img
        },
        //将数据添加
        addWarriorsToMy(ob,type){
            let newOb = {
                id :  200,
                    name : '',
                    camp : '汉',
                    arms : '',
                    gender : '',
                    red : 0,
                    cost : 0,
                    att : 0,
                    level : 5,
                    isUp : {
                        status : false,
                        material_one : '',
                        material_two : '',
                    },
                    isUpArms : {
                        status : false,
                        material_one : '',
                        material_two : '',
                        type : ['','']
                    },
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
                    current_arm:'',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_132836_com.netease.stzb.netea.jpg')   
            }
            this.transferData(newOb,ob)
            if(type == 'return'){
                this.material_warrior.unshift(newOb)
            }else if(type == 'addToMy'){
                if(this.my_warriors.length > 0){
                    for(let x=0;x<this.my_warriors.length;x++){
                        if(this.my_warriors[x].name == newOb.name && this.my_warriors[x].camp == newOb.camp && this.my_warriors[x].arms == newOb.arms){
                            this.my_warriors.splice(x+1,0,newOb)      
                            return
                        }
                        if(x == this.my_warriors.length-1){
                            this.my_warriors.push(newOb)
                            return
                        }
                    }
                }else{
                    this.my_warriors.push(newOb)
                }
            }
            
        },
        clearWarriorInfo(ob){
            let empty = {
                id :  200,
                name : '',
                camp : '汉',
                arms : '',
                gender : '',
                red : 0,
                cost : 0,
                att : 0,
                level : 5,
                isUp : {
                    status : false,
                    material_one : '',
                    material_two : '',
                },
                isUpArms : {
                    status : false,
                    material_one : '',
                    material_two : '',
                    type : ['','']
                },
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
                current_arm:'',
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
            this.transferData(ob,empty)
        },
        transferResData(x,y){
            x.name = y.name
            x.star = y.star
            x.camp = y.camp
            x.arms = y.arms
            x.att = y.att
            x.cost = y.cost
            x.img = y.img
            x.sign = y.sign
            x.current_arm = y.current_arm
            x.getLevel = y.getLevel
        },
        turnBackSkill(t_id,w_id,id){
            if(this.all_team[t_id].warriors[w_id].loadSkill[id].type == 'command'){
                for(let i=0;i<this.skill.command.length;i++){
                    if(this.skill.command[i].name == this.all_team[t_id].warriors[w_id].loadSkill[id].name){
                        this.skill.command[i].learned.have ++;
                        if(this.skill.command[i].odd == ''){
                            this.skill.command[i].learned.have = 1
                        }else if(this.skill.command[i].odd == '2'){
                            if(this.skill.command[i].learned.have > 2){
                                this.skill.command[i].learned.have = 2
                            }
                        }
                    }
                }
            }
            else if(this.all_team[t_id].warriors[w_id].loadSkill[id].type == 'active'){
                for(let i=0;i<this.skill.active.length;i++){
                    if(this.skill.active[i].name == this.all_team[t_id].warriors[w_id].loadSkill[id].name){
                        console.log('it done')
                        this.skill.active[i].learned.have ++;
                        if(this.skill.active[i].odd == ''){
                            this.skill.active[i].learned.have = 1
                        }else if(this.skill.active[i].odd == '2'){
                            if(this.skill.active[i].learned.have > 2){
                                this.skill.active[i].learned.have = 2
                            }
                        }
                    }
                }
            }
            else if(this.all_team[t_id].warriors[w_id].loadSkill[id].type == 'combo'){
                for(let i=0;i<this.skill.combo.length;i++){
                    if(this.skill.combo[i].name == this.all_team[t_id].warriors[w_id].loadSkill[id].name){
                        this.skill.combo[i].learned.have ++;
                        if(this.skill.combo[i].odd == ''){
                            this.skill.combo[i].learned.have = 1
                        }else if(this.skill.combo[i].odd == '2'){
                            if(this.skill.combo[i].learned.have > 2){
                                this.skill.combo[i].learned.have = 2
                            }
                        }
                    }
                }
            }
            else if(this.all_team[t_id].warriors[w_id].loadSkill[id].type == 'passive'){
                for(let i=0;i<this.skill.passive.length;i++){
                    if(this.skill.passive[i].name == this.all_team[t_id].warriors[w_id].loadSkill[id].name){
                        this.skill.passive[i].learned.have ++;
                        if(this.skill.passive[i].odd == ''){
                            this.skill.passive[i].learned.have = 1
                        }else if(this.skill.passive[i].odd == '2'){
                            if(this.skill.passive[i].learned.have > 2){
                                this.skill.passive[i].learned.have = 2
                            }
                        }
                    }
                }
            }
        },
        //返还技能使用次数
        returnBackSkill(name,type){
            console.log('it done')
            console.log(type)
            if(type == 'command'){
                console.log('it done1')
                for(let x= 0;x<this.skill.command.length;x++){
                    if(this.skill.command[x].name == name){
                        this.skill.command[x].learned.have ++
                        if(this.skill.command[x].odd == '2'){
                            if(this.skill.command[x].learned.have > 2){
                                this.skill.command[x].learned.have =2
                            }
                        }else{
                            this.skill.command[x].learned.have  =1 
                        }
                    }
                }
            }
            else if(type == 'active'){
                for(let x= 0;x<this.skill.active.length;x++){
                    if(this.skill.active[x].name == name){
                        this.skill.active[x].learned.have ++
                        if(this.skill.active[x].odd == '2'){
                            if(this.skill.active[x].learned.have > 2){
                                this.skill.active[x].learned.have =2
                            }
                        }else{
                            this.skill.active[x].learned.have  =1 
                        }
                    }
                }
            }
            else if(type == 'combo'){
                for(let x= 0;x<this.skill.combo.length;x++){
                    if(this.skill.combo[x].name == name){
                        this.skill.combo[x].learned.have ++
                        if(this.skill.combo[x].odd == '2'){
                            if(this.skill.combo[x].learned.have > 2){
                                this.skill.combo[x].learned.have =2
                            }
                        }else{
                            this.skill.combo[x].learned.have  =1 
                        }
                    }
                }
            }
            else if(type == 'passive'){
                for(let x= 0;x<this.skill.passive.length;x++){
                    if(this.skill.passive[x].name == name){
                        this.skill.passive[x].learned.have ++
                        if(this.skill.passive[x].odd == '2'){
                            if(this.skill.passive[x].learned.have > 2){
                                this.skill.passive[x].learned.have =2
                            }
                        }else{
                            this.skill.passive[x].learned.have  =1 
                        }
                    }
                }
            }
        },
        //对我招募的武将进行排序
        sortMyGet(ob){
            if(this.my_get.length>0){
                for(let i=0;i<this.my_get.length;i++){
                    if(this.my_get[i].name == ob.name && this.my_get[i].camp == ob.camp && this.my_get[i].arms == ob.arms){
                        this.my_get.splice(i+1,0,ob)
                        //按统帅值排序
                        this.my_get.sort((a,b)=>{
                            return  b.cost - a.cost
                        })
                        return
                    }
                    if(i == this.my_get.length-1){
                        this.my_get.push(ob)
                        //按统帅值排序
                        this.my_get.sort((a,b)=>{
                            return  b.cost - a.cost
                        })
                        return
                    }  
                }
            }else{
                this.my_get.push(ob)
                //按统帅值排序
                this.my_get.sort((a,b)=>{
                    return  b.cost - a.cost
                })
                
            }
            
        },
        //对武将进行阵容分类
        sortWarriorsByCamp(){
            let temp_shu = []
            let temp_wu = []
            let temp_wei = []
            let temp_han = []
            let temp_qun = []
            let empty = {
                id :  200,
                name : '',
                camp : '汉',
                arms : '',
                gender : '',
                red : 0,
                cost : 0,
                att : 0,
                level : 5,
                isUp : {
                    status : false,
                    material_one : '',
                    material_two : '',
                },
                isUpArms : {
                    status : false,
                    material_one : '',
                    material_two : '',
                    type : ['','']
                },
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
                current_arm:'',
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
                img : require('../assets/warrior_cards/Screenshot_20220122_132836_com.netease.stzb.netea.jpg')   
            }
            
            for(let i=0;i<this.my_warriors.length;i++){
                if(this.my_warriors[i].camp == '群'){
                    this.transferData(empty,this.my_warriors[i])
                    temp_qun.push(this.my_warriors[i])
                }else if(this.my_warriors[i].camp == '汉'){
                    this.transferData(empty,this.my_warriors[i])
                    temp_han.push(this.my_warriors[i])
                }else if(this.my_warriors[i].camp == '魏'){
                    this.transferData(empty,this.my_warriors[i])
                    temp_wei.push(this.my_warriors[i])
                }else if(this.my_warriors[i].camp == '蜀'){
                    this.transferData(empty,this.my_warriors[i])
                    temp_shu.push(this.my_warriors[i])
                }else if(this.my_warriors[i].camp == '吴'){
                    this.transferData(empty,this.my_warriors[i])
                    temp_wu.push(this.my_warriors[i])
                }
            }
            this.my_warriors = []
            if(temp_qun.length>0){
                for(let i=0;i<temp_qun.length;i++){
                    this.my_warriors.push(temp_qun[i])
                }
            }
            if(temp_han.length>0){
                for(let i=0;i<temp_han.length;i++){     
                    this.my_warriors.push(temp_han[i])
                }
            }
            if(temp_wei.length>0){
                for(let i=0;i<temp_wei.length;i++){
                    this.my_warriors.push(temp_wei[i])
                }
            }
            if(temp_shu.length>0){
                for(let i=0;i<temp_shu.length;i++){
                    this.my_warriors.push(temp_shu[i])
                }
            }
            if(temp_wu.length>0){
                for(let i=0;i<temp_wu.length;i++){
                    this.my_warriors.push(temp_wu[i])
                }
            }
        }
    }
}

export default functions