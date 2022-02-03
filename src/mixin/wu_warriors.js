let wu_warriors = {
    
    data(){
        return{
            wu_warriors:[
                {
                    id :  11,
                    name : '吕蒙',
                    camp : '吴',
                    arms : '弓',
                    gender : '男',
                    red : 0,
                    cost : 3.5,
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
                        type : ['g_s','g_c']
                    },
                    skill:{
                        name : '白衣渡江',
                        type : 'command',
                        info : '战斗开始后前2回合，使敌军群体无法进行普通攻击，在此效果结束后，将对敌军全体发动一次强力策略攻击（伤害率215%，受谋略属性影响），造成的伤害无视规避'
                    },
                    getSkill:{
                        name : '神兵天降',
                        type : 'command',
                        info : '战斗开始后前3回合，使敌军群体受到攻击和策略攻击时的伤害提高30%（受谋略属性影响）',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154110_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  12,
                    name : '小乔＆大乔',
                    camp : '吴',
                    arms : '步',
                    gender : '女',
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
                        type : ['b_j','b_q']
                    },
                    skill:{
                        name : '双艳',
                        type : 'active',
                        info : '使敌军群体陷入暴走状态，并有50%的机率使其攻击距离-1，持续2回合'
                    },
                    getSkill:{
                        name : '道行险阻',
                        type : 'active',
                        info : '使敌军单体防御属性降低50（受攻击属性影响）、谋略属性降低50（受谋略属性影响），持续1回合，同时在目标下一次行动前对其发动一次策略攻击（伤害率150%，受谋略属性影响）和一次攻击（伤害率150%）',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154114_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  13,
                    name : '孙坚',
                    camp : '吴',
                    arms : '步',
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
                        type : ['b_j','b_d']
                    },
                    skill:{
                        name : '遗志',
                        type : 'command',
                        info : '战斗开始后第3回合，使我军前锋步兵或弓兵恢复极大量兵力，此后，受到普通攻击可以进行反击（伤害率85%），同时无法恢复兵力，持续直到战斗结束'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154118_com.netease.stzb.netea.jpg')    
                },        
                {
                    id :  200,
                    name : '蒋钦',
                    camp : '吴',
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
                        type : ['g_n','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '怒浪伐敌',
                        type : 'combo',
                        info : '普通攻击后，对攻击目标发动一次袭击（伤害率220%）。此战法每发动一次，其发动率提高10%，最多叠加3次'
                    },
                    getSkill:{
                        name : '势无虚动',
                        type : 'passive',
                        info : '战斗中，自身每次试图发动追击战法时，使下一次造成伤害无视规避，且下一次发动追击战法造成伤害提升40%，伤害提升效果最多可叠加3次',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154421_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '孙鲁班',
                    camp : '吴',
                    arms : '弓',
                    gender : '女',
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
                        type : ['g_s','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '全主诿异',
                        type : 'active',
                        info : '使敌军全体被施加的燃烧、恐慌和妖术诅咒伤害提升20%（受谋略属性影响），持续3回合，同时对敌军群体1-2目标额外发动1次策略攻击（伤害率197%，受谋略属性影响）'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155006_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '张昭',
                    camp : '吴',
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
                        type : ['g_c','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '竭忠尽智',
                        type : 'active',
                        info : '以自身与友军攻击属性最低的武将下一回合进入怯战状态为代价，使我军群体受到的攻击伤害降低20%（受谋略属性影响），该效果可以叠加1次，持续2回合；并使我军群体下2次造成的策略伤害提高30%（受谋略属性影响）'
                    },
                    getSkill:{
                        name : '飒沓如星',
                        type : 'active',
                        info : '使我军群体骑兵造成的普通攻击伤害提升36%（受谋略属性影响），持续2回合，并使其下2次普通攻击进入分兵状态（伤害率45%）',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155150_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '凌统',
                    camp : '吴',
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
                        type : ['g_n','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '国士无双',
                        type : 'command',
                        info : '战斗开始后前3回合，使自身与友军单体每回合有90%的机率进入洞察状态，免疫混乱、犹豫、怯战、暴走和挑衅效果，同时自身攻击造成的伤害提升25%（受攻击属性影响）'
                    },
                    getSkill:{
                        name : '击势',
                        type : 'passive',
                        info : '战斗中，每回合自身行动时有65%几率获得以下效果：自身攻击时的伤害提升50%，持续1回合；自身攻击时无视敌方60%防御属性，持续1回合。每个效果独立判断',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155155_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '诸葛恪',
                    camp : '吴',
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
                        type : ['g_s','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '智高性愎',
                        type : 'command',
                        info : '战斗中，当中军和大营发动主动战法后，都将为前锋恢复一定兵力（恢复率300%），此效果每个武将最多发动3次，并在战斗开始后前3回合，使自身受到主动战法的伤害降低36%（受防御属性影响）。'
                    },
                    getSkill:{
                        name : '疾风迅雷',
                        type : 'command',
                        info : '战斗中能够优先行动，第3回合开始，当普通攻击命中目标后将有40%的机率使其混乱，持续1回合',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155158_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '周瑜',
                    camp : '吴',
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
                        name : '玄武洰流',
                        type : 'active',
                        info : '1回合准备，对敌军群体发动策略攻击（伤害率150%，受谋略属性影响），并使其陷入怯战状态，无法进行普通攻击，持续2回合'
                    },
                    getSkill:{
                        name : '不攻',
                        type : 'command',
                        info : '在战斗中无法进行普通攻击，使自身发动策略攻击时造成的伤害提高25%，并在每回合都会对有效距离5以内的敌军单体发动一次策略攻击（伤害率83%，受谋略属性影响）',
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
                    img : require('../assets/warrior_cards/Screenshot_20220125_160136_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '孙权',
                    camp : '吴',
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
                        type : ['g_s','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '九锡黄龙',
                        type : 'active',
                        info : '移除我军全体有害效果，并使其进入规避状态，免疫接下来受到的2次伤害'
                    },
                    getSkill:{
                        name : '空城',
                        type : 'command',
                        info : '战斗开始后前2回合，受到伤害时有40%的机率使自身进入规避状态，可以免疫伤害',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155205_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '程普',
                    camp : '吴',
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
                        name : '鏖兵卫主',
                        type : 'command',
                        info : '使我军群体每回合有45.0%几率增加50.0点防御属性（受防御属性影响），持续1回合。同时当自身位于中军及前锋时，大营兵力首次低于初始兵力的90%、70%、50%时，自身必定援护友军群体1回合，且自身下2次受到的伤害大幅度降低'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155210_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '周泰',
                    camp : '吴',
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
                        name : '疮痍累身',
                        type : 'passive',
                        info : '战斗开始后，使自身受到的所有伤害降低84%，每当受到攻击或策略攻击的伤害后，对此类型伤害的减伤效果将降低1/12，位于前锋及中军时前2回合援护友军全体；同时每次受到伤害后有50%几率使攻击属性、防御属性、谋略属性提高20，该效果可叠加，持续直到战斗结束'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155213_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '黄盖',
                    camp : '吴',
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
                        name : '焚舟叩营',
                        type : 'combo',
                        info : '普通攻击后，对攻击目标再次发动攻击（伤害率210%-310%），使其陷入犹豫状态，持续2回合，同时自身攻击属性下降50%，持续1回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155218_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '陆抗',
                    camp : '吴',
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
                        type : ['b_q','b_d']
                    },
                    current_arm:'',
                    skill:{
                        name : '西陵克晋',
                        type : 'command',
                        info : '战斗中，每回合有50%的机率使我军当前攻击属性最高的武将对距离4以内的敌军发动一次攻击（伤害率150%），我军当前谋略属性最高的武将对距离4以内的敌军发动一次策略攻击（伤害率150%，受谋略属性影响），并各自恢复一定兵力'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155221_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '甘宁',
                    camp : '吴',
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
                        name : '侵掠如火',
                        type : 'passive',
                        info : '在战斗中可以优先行动，攻击类主动战法发动率提升20%，进行攻击时有30%的机率使本次攻击伤害提高50%'
                    },
                    getSkill:{
                        name : '疾风迅雷',
                        type : 'command',
                        info : '战斗中能够优先行动，第3回合开始，当普通攻击命中目标后将有40%的机率使其混乱，持续1回合',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155225_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '孙策',
                    camp : '吴',
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
                    current_arm:'',
                    skill:{
                        name : '霸王渡江',
                        type : 'passive',
                        info : '每回合有40%的机率对有效距离5以内的敌军单体发动三次猛烈攻击（伤害率140%），每次攻击目标独立判定，本场战斗中，自身无法发动主动战法，每次攻击造成伤害后可使霸王渡江发动机率提升3%，该效果可叠加5次'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155228_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '小乔',
                    camp : '吴',
                    arms : '弓',
                    gender : '女',
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
                        type : ['g_c','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '鸾凤和鸣',
                        type : 'command',
                        info : '战斗中，自身每回合首次发动主动战法后，使我军群体2目标恢复一定兵力（恢复率85.0%，受谋略属性影响）；每回合自身行动时，使我军全体3目标造成的下一次随机目标的控制效果（混乱、犹豫、暴走、怯战）额外对一个目标生效'
                    },
                    getSkill:{
                        name : '掎角之势',
                        type : 'active',
                        info : '对敌军单体发动一次攻击（伤害率180.0%）和一次策略攻击（伤害率143.0%，受谋略属性影响），每次攻击的目标独立判定',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155413_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '太史慈',
                    camp : '吴',
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
                        type : ['g_n','q_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '方阵突袭',
                        type : 'combo',
                        info : '普通攻击后，对攻击目标再次发动攻击（伤害率200%），并使其陷入混乱状态，持续1回合'
                    },
                    getSkill:{
                        name : '钝兵挫锐',
                        type : 'combo',
                        info : '普通攻击后，对攻击目标再次发动猛攻（伤害率200%），并使其无法进行攻击，持续1回合',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155417_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '太史慈',
                    camp : '吴',
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
                        type : ['g_n','q_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '方阵掩杀',
                        type : 'combo',
                        info : '普通攻击后，对攻击目标再次发动猛攻（伤害率235%），并使其进行下一次攻击的伤害大幅度降低'
                    },
                    getSkill:{
                        name : '钝兵挫锐',
                        type : 'combo',
                        info : '普通攻击后，对攻击目标再次发动猛攻（伤害率200%），并使其无法进行攻击，持续1回合',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155417_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '孙尚香',
                    camp : '吴',
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
                        type : ['g_c','g_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '枭姬',
                        type : 'active',
                        info : '1回合准备，对敌军群体发动一次攻击（伤害率160%），并随机对敌军群体1-2目标再度发动一次攻击（伤害率140%）'
                    },
                    getSkill:{
                        name : '反计之策',
                        type : 'command',
                        info : '战斗开始后前3回合，使敌军群体发动主动战法时造成的伤害大幅下降，并在首回合有50%的机率使其陷入犹豫状态，无法发动主动战法',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155421_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '周姬',
                    camp : '吴',
                    arms : '弓',
                    gender : '女',
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
                        type : ['g_n','g_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '复誓业火',
                        type : 'active',
                        info : '对敌军群体发动一次火攻（伤害率114%，受谋略属性影响），同时使其陷入火攻状态，每回合损失一定兵力（伤害率114%，受谋略属性影响），持续1回合，并使其受到策略攻击时的伤害提高16%（受谋略属性影响），持续2回合'
                    },
                    getSkill:{
                        name : '始计',
                        type : 'command',
                        info : '战斗前4回合，在自身行动前，使我军大营下一次攻击或策略攻击时的伤害提高20%（受谋略属性影响），敌方兵力最多单体下一次攻击或策略攻击时的伤害降低30%（受谋略属性影响），并在自身受到攻击或策略攻击伤害后，于本回合内进入洞察状态，免疫混乱、犹豫、怯战、暴走和挑衅效果',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155425_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '大乔',
                    camp : '吴',
                    arms : '步',
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
                        type : ['b_q','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '巧音唤蝶',
                        type : 'active',
                        info : '对敌军群体发动一次策略攻击（伤害率176%，受谋略属性影响）并使其陷入燃烧状态，当目标兵力高于初始兵力50%时受到一次策略伤害（伤害率86%，受谋略属性影响），持续1回合；同时使我军群体恢复一定兵力（恢复率161%，受谋略属性影响），并使其进入休整状态，当目标兵力低于初始兵力50%时恢复一定兵力（恢复率82%，受谋略属性影响），持续1回合'
                    },
                    getSkill:{
                        name : '三军之众',
                        type : 'active',
                        info : '1回合准备，使我军单体恢复4次兵力（恢复率151.0%，受谋略属性影响），每次目标独立判定',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155429_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '陆逊',
                    camp : '吴',
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
                        type : ['b_q','b_d']
                    },
                    current_arm:'',
                    skill:{
                        name : '火势风威',
                        type : 'active',
                        info : '1回合准备，对敌军全体发动策略攻击（伤害率111%，受谋略属性影响），并使其在受到下一次伤害时，会额外引发一次猛烈火攻（伤害率221%，受谋略属性影响）'
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
                    img : require('../assets/warrior_cards/Screenshot_20220125_111656_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '步皇后',
                    camp : '吴',
                    arms : '步',
                    gender : '女',
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
                        type : ['b_d','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '中宫追玺',
                        type : 'command',
                        info : '战斗开始后，使我军全体受到的所有伤害降低60%，每当受到攻击或策略攻击的伤害后，其对此类型伤害的减伤效果将降低1/5'
                    },
                    getSkill:{
                        name : '胜兵求战',
                        type : 'command',
                        info : '战斗中，每当自身发动需要准备的自带战法时，有80%的机率跳过1回合的准备时间。同时，任意友军发动主动战法后，自身下一次攻击或策略攻击造成的伤害提高15%',
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
                    img : require('../assets/warrior_cards/buhuanghou.jpg')    
                },
                {
                    id :  200,
                    name : '侍卫',
                    camp : '吴',
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
                    camp : '吴',
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
                    camp : '吴',
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
export default wu_warriors