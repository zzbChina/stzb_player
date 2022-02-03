let wei_warriors = {
    
    data(){
        return{
            wei_warriors:[
                {
                    id :  5,
                    name : '张辽',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 3.5,
                    att : 3,
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
                        type  : ['q_z','q_q']
                    },
                    current_arm:'',
                    skill:{
                        name : '其疾如风',
                        type : 'command',
                        info : '战斗开始后前3回合，使我军群体速度属性提高41（受谋略属性影响），并使其每回合有35%的机率可以进行两次普通攻击'
                    },
                    getSkill:{
                        name : '避其锋芒',
                        type : 'command',
                        info : '战斗开始后前3回合，使我军群体受到攻击和策略攻击时的伤害降低30%（受谋略属性影响）',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154040_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  6,
                    name : '曹操',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 3.5,
                    att : 2,
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
                        type : ['q_t','q_z']
                    },
                    current_arm:'',
                    skill:{
                        name : '魏武之世',
                        type : 'command',
                        info : '在本场战斗中，使敌军全体攻击属性、防御属性、谋略属性、速度属性下降15%（受谋略属性影响），并使我军全体攻击距离+1'
                    },
                    getSkill:{
                        name : '远攻秘策',
                        type : 'command',
                        info : '使自身攻击属性提高20，谋略属性提高20，攻击距离+1，同时，使友军全体在战斗开始后前3回合也获得与自身同样的增益',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154047_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '贾诩',
                    camp : '魏',
                    arms : '弓',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 4,
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
                        type : ['g_c','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '谋谟帷幄',
                        type : 'command',
                        info : '自身及友军单体每回合首次试图发动主动战法时，有55%几率对敌军单体发动一次策略攻击（伤害率170%，受谋略属性影响）；同时当我军大营、中军低于初始兵力的60%时，其每回合首次试图发动主动战法时会额外对敌军单体发动一次策略攻击（伤害率76%，受谋略属性影响）'
                    },
                    getSkill:{
                        name : '鸟云山兵',
                        type : 'command',
                        info : '战斗开始后，我军群体每回合行动时有30%几率使自身在本回合受到的攻击和策略攻击降低20%，两个效果独立判断,该效果生效几率每回合提升10%',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154241_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '乐进',
                    camp : '魏',
                    arms : '步',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 2,
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
                        type : ['b_d','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '奋疾先登',
                        type : 'command',
                        info : '每回合行动时使自身攻击伤害提升5.0%，自身速度每高于一名武将，则攻击伤害额外提升5.0%。该效果提升至40%时，将对距离3以内的敌军群体发动一次攻击（伤害率160.0%），发动后攻击伤害提升效果消失，同时使目标速度属性降低20.0，该效果可叠加并持续直到战斗结束。'
                    },
                    getSkill:{
                        name : '三军齐出',
                        type : 'passive',
                        info : '每回合行动时90.0%几率使自身进入分兵状态，普通攻击后同时对附近的敌军造成伤害（伤害率70.0%）',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154244_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '曹仁',
                    camp : '魏',
                    arms : '步',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 2,
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
                        type : ['b_d','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '平壑拒吴',
                        type : 'active',
                        info : '对敌军防御属性最低及兵力最低的单体分别发动一次攻击（伤害率210%），同时使敌军群体陷入怯战状态，无法进行普通攻击，持续2回合'
                    },
                    getSkill:{
                        name : '疾击其后',
                        type : 'combo',
                        info : '普通攻击后，随机对敌军单体再发动2次攻击（伤害率80%-140%），每次攻击的目标及伤害率独立判定',
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
                    sign : 'sp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154249_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '荀攸',
                    camp : '魏',
                    arms : '步',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 2,
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
                        type : ['b_d','b_q']
                    },
                    current_arm:'',
                    skill:{
                        name : '谋主',
                        type : 'active',
                        info : '移除我军全体有害效果，并使我军兵力最低单体受到伤害时有50%的机率进入规避状态，持续2回合，同时使我军兵力最高单体每回合有50%的机率在回合内进入洞察、先手状态，持续2回合，每个效果独立判定'
                    },
                    getSkill:{
                        name : '兼弱攻昧',
                        type : 'active',
                        info : '对敌军防御属性最低的武将发动一次攻击（伤害率200%），同时对敌军谋略属性最低的武将发动一次策略攻击（伤害率159%，受谋略属性影响）',
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
                    sign : 'sp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154253_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '典韦',
                    camp : '魏',
                    arms : '步',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 2,
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
                        type : ['b_d','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '古之恶来',
                        type : 'active',
                        info : '对敌军单体发动一次猛攻（伤害率300%），并随机对敌军单体弓兵发动一次攻击（伤害率100%），同时使自身受到所有伤害下降30%（受防御属性影响），持续2回合'
                    },
                    getSkill:{
                        name : '铁戟金戈',
                        type : 'active',
                        info : '1回合准备，对敌军群体2目标发动一次猛烈攻击（伤害率330%）或对敌军全体3目标发动一次猛烈攻击（伤害率225%）',
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
                    sign : 'xp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154258_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '郝昭',
                    camp : '魏',
                    arms : '步',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 2,
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
                        type : ['b_j','b_d']
                    },
                    current_arm:'',
                    skill:{
                        name : '不动如山',
                        type : 'passive',
                        info : '战斗中，行动时会移除所有有害效果，同时防御属性提高100，谋略属性提高25'
                    },
                    getSkill:{
                        name : '白刃',
                        type : 'command',
                        info : '战斗开始后前3回合，使敌我全军进行策略攻击的伤害降低35%，我军全体骑兵及步兵防御属性提高45，此效果结束后，攻击属性提高45，持续3回合',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154302_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '许褚',
                    camp : '魏',
                    arms : '步',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 2,
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
                        type : ['b_d','b_q']
                    },
                    skill:{
                        name : '虎痴嗔怒',
                        type : 'active',
                        info : '使敌军攻击属性最高武将的攻击、防御、谋略、速度属性全部降低37%（受攻击属性影响），持续2回合，并对其发动一次猛攻（伤害率300%）'
                    },
                    current_arm:'',
                    getSkill:{
                        name : '雄兵破敌',
                        type : 'active',
                        info : '1回合准备，对敌军群体发动一次攻击（伤害率210%），并使其防御、谋略属性降低65，持续2回合',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154306_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '司马懿',
                    camp : '魏',
                    arms : '步',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 3,
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
                        type : ['b_d','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '破凰',
                        type : 'active',
                        info : '立即引发敌军全体由破凰带来的剩余妖术效果，同时对敌军单体发动一次策略攻击（伤害率155%，受谋略属性影响），并使其每受到伤害时，额外引发一次妖术伤害（伤害率130%，受谋略属性影响），最多生效3次，持续3回合'
                    },
                    getSkill:{
                        name : '深谋远虑',
                        type : 'passive',
                        info : '使自身进行策略攻击的伤害提高9%，此效果每回合开始时额外叠加一次，持续直到战斗结束',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154310_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '邓艾',
                    camp : '魏',
                    arms : '步',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 2,
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
                        type : ['b_d','b_q']
                    },
                    current_arm:'',
                    skill:{
                        name : '险途暗渡',
                        type : 'active',
                        info : '对敌军群体发动一次攻击（伤害率150%），并使其进行攻击和策略攻击时的伤害降低15%（受谋略属性影响），持续2回合'
                    },
                    getSkill:{
                        name : '掎角之势',
                        type : 'active',
                        info : '对敌军单体发动一次攻击（伤害率180%）和一次策略攻击（143%，受谋略属性影响），每次攻击的目标独立判定',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154314_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '曹彰',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 2,
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
                        type : ['q_q','q_t']
                    },
                    current_arm:'',
                    skill:{
                        name : '五兵之烈',
                        type : 'active',
                        info : '对敌军群体发动一次猛烈的攻击（伤害率280.0%）。当授予曹彰不同种类宝物时，将额外获得以下效果。剑：先移除目标的有益效果再发动攻击；刀：使自身造成的攻击伤害提升12.0%，可叠加并持续直至战斗结束；长兵：使目标攻击距离-1，持续2回合；弓：有50%几率该战法目标数+1；其余宝物或未授予：使目标防御属性降低30.0%（受攻击属性影响），持续2回合'
                    },
                    getSkill:{
                        name : '久战熟谋',
                        type : 'passive',
                        info : '战斗中，使我军群体每造成一次策略伤害后，其策略伤害就提高5.0%（受谋略属性影响），此效果最多叠加5次',
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
                    sign : 'xp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154318_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '徐晃',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 2,
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
                        type : ['q_z','q_q']
                    },
                    current_arm:'',
                    skill:{
                        name : '统军畏慎',
                        type : 'command',
                        info : '战斗开始后，我军全体每回合有80%几率攻击或策略攻击造成的伤害提高25%（受谋略属性影响），此几率每回合降低10%；每回合有30%几率造成伤害时无视敌方60%防御或谋略属性，此几率每回合提升10%。武将获得伤害提高效果与无视目标属性效果的类型由自身攻击与谋略中较高的属性决定'
                    },
                    getSkill:{
                        name : '翕处还张',
                        type : 'active',
                        info : '1回合准备，对敌军群体发动一次策略攻击（伤害率132%，受谋略属性影响），并使敌军群体1~2人下一次造成伤害后，受到一次强力策略攻击（伤害率165%，受谋略属性影响）',
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
                    sign : 'xp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154322_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '夏侯惇',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 1,
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
                        type : ['q_z','q_t']
                    },
                    current_arm:'',
                    skill:{
                        name : '盲侯奋勇',
                        type : 'command',
                        info : '战斗中，攻击无视兵种相克，自身受到伤害后有40%的机率对有效距离4以内的敌方群体发动一次攻击（伤害率60%）'
                    },
                    getSkill:{
                        name : '谋定后动',
                        type : 'passive',
                        info : '战斗中，每当发动需要准备的自带战法时，有100%的机率使自身进入洞察状态，免疫混乱、犹豫、怯战、暴走和挑衅效果，持续2回合；当自身发动主动战法后，有100%的机率使我军群体攻击属性、防御属性、谋略属性提高55，持续2回合',
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
                    sign : 'xp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154326_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '夏侯渊',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 3,
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
                        type : ['q_q','q_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '虎步关右',
                        type : 'active',
                        info : '每回合进行首次攻击时的伤害提高70%'
                    },
                    getSkill:{
                        name : '先驱突击',
                        type : 'command',
                        info : '战斗开始后前3回合，使自身优先行动，每回合可进行两次普通攻击，并使攻击属性提高30',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154330_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '夏侯渊',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 3,
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
                        type : ['q_q','q_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '定军绝战',
                        type : 'active',
                        info : '战斗中，每回合都会损失一定兵力，并对敌军单体发动一次攻击（伤害率170%）%'
                    },
                    getSkill:{
                        name : '先驱突击',
                        type : 'command',
                        info : '战斗开始后前3回合，使自身优先行动，每回合可进行两次普通攻击，并使攻击属性提高30',
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
                    sign : 'sp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154330_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '关羽',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 1,
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
                        type : ['q_q','q_z']
                    },
                    current_arm:'',
                    skill:{
                        name : '千里单骑',
                        type : 'combo',
                        info : '普通攻击后，对攻击目标再次发动攻击（伤害率180%），并借此恢复一定兵力'
                    },
                    getSkill:{
                        name : '无心恋战',
                        type : 'command',
                        info : '战斗开始后前3回合，使敌军群体进行攻击和策略攻击时的伤害降低30%（受谋略属性影响）',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154334_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '荀彧',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 2,
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
                        type : ['q_q','q_z']
                    },
                    skill:{
                        name : '驱虎吞狼',
                        type : 'active',
                        info : '对距离内敌方全军发动策略攻击（伤害率153%，受谋略属性影响），并使其无法恢复兵力，持续2回合'
                    },
                    current_arm:'',
                    getSkill:{
                        name : '怯心夺志',
                        type : 'combo',
                        info : '普通攻击后，对攻击目标再次发动猛攻（伤害率200%），并使其无法发动主动战法，持续1回合',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154338_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '郭皇后',
                    camp : '魏',
                    arms : '弓',
                    gender : '女',
                    red : 0,
                    cost : 2.5,
                    att : 3,
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
                        type : ['g_c','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '文德椒房',
                        type : 'command',
                        info : '战斗中，每回合自身首次发动主动战法后，使我军群体进行策略攻击时的伤害提升10%（受谋略属性影响），此效果最多可叠加3次'
                    },
                    getSkill:{
                        name : '甚陷不惧',
                        type : 'passive',
                        info : '战斗中当自身兵力首次低于初始兵力的90%、70%、50%和30%时，有100%的几率会使自身下次行动时武将主战法发动率提高50%，该效果仅对可造成攻击伤害或策略伤害的战法生效',
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
                    sign : 'xp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155333_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '王朗',
                    camp : '魏',
                    arms : '弓',
                    gender : '男',
                    red : 0,
                    cost : 2.5,
                    att : 3,
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
                        type : ['g_c','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '言出必克',
                        type : 'command',
                        info : '正式回合开始后，使我军全体受到的策略攻击伤害降低40%（受谋略属性影响），每次受到策略攻击伤害后，减伤效果下降1/8。同时，每回合行动时，有60%概率为友军全体分摊一次50%受到的策略伤害'
                    },
                    getSkill:{
                        name : '以直报怨',
                        type : 'command',
                        info : '每回合中，自身首次造成伤害后，使目标造成的所有伤害降低10%；自身首次受到伤害后，使我军单体受到的所有伤害降低10%。以上效果可叠加6次，持续直到战斗结束',
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
                    sign : 'xp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155337_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '张春华',
                    camp : '魏',
                    arms : '弓',
                    gender : '女',
                    red : 0,
                    cost : 2.5,
                    att : 3,
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
                        type : ['g_c','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '强势',
                        type : 'active',
                        info : '使敌军群体进行攻击时的伤害降低32%（受谋略属性影响），并使其陷入犹豫状态，无法发动主动战法，持续2回合'
                    },
                    getSkill:{
                        name : '浑水摸鱼',
                        type : 'active',
                        info : '1回合准备，使敌军群体陷入混乱状态，持续2回合',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155341_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '曹丕',
                    camp : '魏',
                    arms : '弓',
                    gender : '男',
                    red : 0,
                    cost : 2.5,
                    att : 4,
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
                        type : ['g_c','g_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '魏武之泽',
                        type : 'active',
                        info : '使我军群体普通攻击和追击战法造成的伤害提高15%（受谋略属性影响），同时有50%几率使其每回合可以进行两次普通攻击，持续2回合'
                    },
                    getSkill:{
                        name : '浑水摸鱼',
                        type : 'active',
                        info : '1回合准备，使敌军群体陷入混乱状态，持续2回合',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155345_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '张郃',
                    camp : '魏',
                    arms : '步',
                    gender : '男',
                    red : 0,
                    cost : 2.5,
                    att : 2,
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
                        type : ['q_q','b_d']
                    },
                    current_arm:'',
                    skill:{
                        name : '以逸待劳',
                        type : 'active',
                        info : '使敌军群体受到攻击的伤害提高14.8%（受速度属性影响），持续2回合，并对其发动一次攻击（伤害率125%）'
                    },
                    getSkill:{
                        name : '战必断金',
                        type : 'command',
                        info : '战斗开始后前3回合，使敌军群体每回合都有45%的机率陷入怯战状态，无法进行普通攻击',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155349_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '张郃',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 2.5,
                    att : 2,
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
                        type : ['q_q','q_z']
                    },
                    current_arm:'',
                    skill:{
                        name : '以逸待劳',
                        type : 'active',
                        info : '使敌军群体受到攻击的伤害提高14.8%（受速度属性影响），持续2回合，并对其发动一次攻击（伤害率125%）'
                    },
                    getSkill:{
                        name : '战必断金',
                        type : 'command',
                        info : '战斗开始后前3回合，使敌军群体每回合都有45%的机率陷入怯战状态，无法进行普通攻击',
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
                    sign : 'sp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155349_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '曹植',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 2.5,
                    att : 3,
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
                        type : ['q_q','q_t']
                    },
                    current_arm:'',
                    skill:{
                        name : '七步释嫌',
                        type : 'command',
                        info : '战斗中，我军全体发动普通攻击或主动战法每累计7次时，曹植对我军群体恢复一定兵力（恢复率196%，受谋略属性影响）'
                    },
                    getSkill:{
                        name : '三术奇谋',
                        type : 'active',
                        info : '1回合准备，对敌军单体发动3次策略攻击（伤害率178%，受谋略属性影响），并依次使目标的攻击属性、防御属性、谋略属性下降18（受谋略属性影响），持续2回合，每次目标独立判定',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155354_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '卞夫人',
                    camp : '魏',
                    arms : '骑',
                    gender : '女',
                    red : 0,
                    cost : 2,
                    att : 2,
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
                        type : ['q_q','q_z']
                    },
                    current_arm:'',
                    skill:{
                        name : '俭仪蹈和',
                        type : 'command',
                        info : '正式回合开始后，前3回合内使敌军攻击属性最高的武将攻击属性下降100，谋略属性最高武将谋略属性下降100，同时敌军群体每次发动主动战法或普通攻击后有50%几率使自身在下一回合随机陷入犹豫或怯战状态中的一种'
                    },
                    getSkill:{
                        name : '美人计',
                        type : 'command',
                        info : '正式回合开始后，我方3名武将均为女武将时，大营造成的所有伤害提升14%，中军每回合行动前随机使敌军单体男武将下一次攻击或策略攻击造成的伤害降低60%，前4回合前锋首次受到伤害时进入规避状态，免疫该次伤害',
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155445_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '郭嘉',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 2,
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
                        type : ['q_q','g_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '奇佐鬼谋',
                        type : 'active',
                        info : '使自身和友军单体谋略属性提高22%，并使敌军群体随机陷入混乱、暴走、怯战、犹豫状态中的1种，持续2回合'
                    },
                    getSkill:{
                        name : '十面埋伏',
                        type : 'active',
                        info : '1回合准备，对敌军全体发动一次策略攻击（伤害率130%，受谋略属性影响），并随机使敌军单体下一回合造成的所有伤害大幅度降低（受谋略属性影响）',
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
                    sign : 's2',
                    img : require('../assets/warrior_cards/Screenshot_20220125_002954_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '曹纯',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 3,
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
                        type : ['q_q','q_t']
                    },
                    current_arm:'',
                    skill:{
                        name : '虎豹督军',
                        type : 'command',
                        info : '战斗开始后首回合，使我军群体进行攻击的伤害提高40%（受攻击属性影响），此效果每回合降低1/4'
                    },
                    getSkill:{
                        name : '攻其不备',
                        type : 'command',
                        info : '战斗中，使敌军群体在每受到一次攻击的伤害后，其所受到的所有伤害就提高5.2%（受速度属性影响），此效果最多叠加5次',
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
                    sign : 's3',
                    img : require('../assets/warrior_cards/syimg.3dmgame_edit_708848227934542.jpg')    
                },
                {
                    id :  200,
                    name : '钟会',
                    camp : '魏',
                    arms : '弓',
                    gender : '男',
                    red : 0,
                    cost : 3,
                    att : 3,
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
                        type : ['g_n','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '剑关叛立',
                        type : 'active',
                        info : '1回合准备，对敌军群体发动一次策略攻击(伤害率240%，受谋略属性影响)和一次攻击(伤害率240%)，两次目标独立判定。同时使敌军全体和友军全体无法恢复兵力，持续2回合'
                    },
                    getSkill:{
                        name : '全军突击',
                        type : 'active',
                        info : '移除我军全体骑兵及步兵的有害效果，对敌军单体发动一次攻击（伤害率145%），并使我军全体骑兵及步兵接下来2次攻击的伤害提高28%（受谋略属性影响）',
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
                    sign : 'ex',
                    img : require('../assets/warrior_cards/Screenshot_20220125_003001_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '王异',
                    camp : '魏',
                    arms : '弓',
                    gender : '女',
                    red : 0,
                    cost : 2.5,
                    att : 4,
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
                        type : ['g_n','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '世仇',
                        type : 'combo',
                        info : '普通攻击后，对攻击目标再次发动策略攻击（伤害率233%，受谋略属性影响），并使其无法急救和休整以恢复兵力，持续2回合'
                    },
                    getSkill:{
                        name : '妖术',
                        type : 'active',
                        info : '1回合准备，使敌军群体陷入暴走状态，进行无差别攻击，持续2回合',
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
                    sign : 'hy',
                    img : require('../assets/warrior_cards/Screenshot_20220125_003008_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '荀彧＆荀攸',
                    camp : '魏',
                    arms : '步',
                    gender : '男',
                    red : 0,
                    cost : 4,
                    att : 3,
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
                        type : ['b_q','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '辅王抑寇',
                        type : 'command',
                        info : '战斗中，我军单体每发动一次主动战法后，其攻击属性提高11，谋略属性提高13，敌军单体每发动一次主动战法后，其防御属性和速度属性降低7（受谋略属性影响），此效果最多可叠加5次，并在战斗开始后，使我军前锋和中军受到的前2次主动战法伤害降低22%（受谋略属性影响）'
                    },
                    getSkill:{
                        name : '掎角之势',
                        type : 'active',
                        info : '对敌军单体发动一次攻击（伤害率180%）和一次策略攻击（143%，受谋略属性影响），每次攻击的目标独立判定',
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
                    sign : 'ex',
                    img : require('../assets/warrior_cards/Screenshot_20220125_003052_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '侍卫',
                    camp : '魏',
                    arms : '步',
                    gender : '男',
                    red : 0,
                    cost : 1,
                    att : 3,
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
                        type : ['b_d','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '重伤',
                        type : 'active',
                        info : '一次攻击'
                    },
                    getSkill:{
                        name : '重伤',
                        type : 'active',
                        info : '一次攻击',
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
                    sign : 'ex',
                    img : require('../assets/warrior_cards/Screenshot_20220125_113757_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '侍卫',
                    camp : '魏',
                    arms : '骑',
                    gender : '男',
                    red : 0,
                    cost : 1,
                    att : 3,
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
                        type : ['q_q','q_z']
                    },
                    current_arm:'',
                    skill:{
                        name : '重伤',
                        type : 'active',
                        info : '一次攻击'
                    },
                    getSkill:{
                        name : '重伤',
                        type : 'active',
                        info : '一次攻击',
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
                    sign : 'ex',
                    img : require('../assets/warrior_cards/Screenshot_20220125_113757_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '侍卫',
                    camp : '魏',
                    arms : '弓',
                    gender : '男',
                    red : 0,
                    cost : 1,
                    att : 3,
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
                        type : ['g_c','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '重伤',
                        type : 'active',
                        info : '一次攻击'
                    },
                    getSkill:{
                        name : '重伤',
                        type : 'active',
                        info : '一次攻击',
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
                    sign : 'ex',
                    img : require('../assets/warrior_cards/Screenshot_20220125_113757_com.netease.stzb.netea.jpg')    
                },
            ]
        }
    }
}
export default wei_warriors