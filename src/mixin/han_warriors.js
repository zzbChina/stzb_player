let han_warriors = {
    
    data(){
        return{
            han_warriors:[
                {
                    id :  14,
                    name : '灵帝',
                    camp : '汉',
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
                        type : [
                            'g_n','g_s'
                        ]
                    },
                    current_arm:'',
                    skill:{
                        name : '帝临回光',
                        type : 'command',
                        info : '战斗开始后第3回合起，以无法恢复兵力为代价，使自身攻击距离+1，并进入分兵状态，普通攻击后对目标附近的敌军造成伤害（伤害率70%），同时令敌军群体处于恐慌中，每回合损失一定兵力（伤害率59%，受谋略属性影响），持续直到战斗结束，恐慌效果造成的伤害无视规避'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154122_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  15,
                    name : '吕布',
                    camp : '汉',
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
                        type : [
                            'q_q','q_s'
                        ],
                    },
                    current_arm:'',
                    skill:{
                        name : '金吾飞将',
                        type : 'active',
                        info : '对敌军单体发动一次猛攻（伤害率275%），并使其陷入混乱状态，持续2回合。若战法发动时目标已处于混乱或暴走状态，对其额外发动一次猛攻（伤害率275%）'
                    },
                    getSkill:{
                        name : '愈战愈勇',
                        type : 'passive',
                        info : '使自身进行攻击的伤害提高8%，此效果每回合开始时额外叠加一次，持续直到战斗结束',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154126_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '刘表',
                    camp : '汉',
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
                        name : '抚民励德',
                        type : 'command',
                        info : '第2、4、6回合自身行动时，使我军全体谋略、防御属性提升80（受谋略属性影响），持续2回合。武将每次造成伤害时，自身该效果降低1/8'
                    },
                    getSkill:{
                        name : '筹策绝道',
                        type : 'active',
                        info : '1回合准备，对敌军群体发动一次策略攻击（伤害率250%，受谋略属性影响），并使其谋略、速度属性下降25（受谋略属性影响），持续2回合',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155234_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '朱儁',
                    camp : '汉',
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
                        name : '西乡武功',
                        type : 'command',
                        info : '战斗前2回合，使我军群体每回合都能优先行动，并使其在第2回合行动前对距离4以内的敌军群体2人发动一次策略攻击（伤害率191%，受谋略属性影响）'
                    },
                    getSkill:{
                        name : '众谋不懈',
                        type : 'command',
                        info : '战斗中，每当自身试图发动主动及追击战法前，有40%的机率对距离5以内的敌军单体发动一次策略攻击（伤害率194%，受谋略属性影响）',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155246_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '张机',
                    camp : '汉',
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
                        name : '金匮要略',
                        type : 'command',
                        info : '战斗开始后前3回合，使我军全体受到的所有伤害降低20.4%（受谋略属性影响），同时使我军全体受到伤害时，有50%的机率能恢复一定兵力（恢复率80%，受谋略属性影响）'
                    },
                    getSkill:{
                        name : '兵无常势',
                        type : 'passive',
                        info : '战斗中，每回合随机获得以下效果中的一种：自身恢复一定兵力（恢复率350%）；自身攻击、防御、谋略属性提高90，持续1回合；自身受到的所有伤害降低50%，持续1回合',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155250_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '皇甫嵩',
                    camp : '汉',
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
                        type  :['b_j','b_q']
                    },
                    current_arm:'',
                    skill:{
                        name : '京观垒冢',
                        type : 'passive',
                        info : '自身造成伤害时，有70%几率对目标额外发动一次攻击（伤害率200%）或策略攻击（伤害率200%，受谋略属性影响）'
                    },
                    getSkill:{
                        name : '垒实迎击',
                        type : 'passive',
                        info : '受到普通攻击时，有50%几率使自身恢复一定兵力（恢复率200%）；有50%几率移除自身由主动及追击战法带来的负面效果；使自身进入规避状态，有50%几率免疫下1次受到的伤害。同时当自身位于中军及前锋时，每回合开始时有50%几率援护友军全体，持续1回合',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155254_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '华佗',
                    camp : '汉',
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
                        name : '去疾',
                        type : 'active',
                        info : '为友军全体恢复一定兵力（恢复率63%，受谋略属性影响），有35%的机率为友军单体额外恢复大量兵力'
                    },
                    getSkill:{
                        name : '擅兵不寡',
                        type : 'passive',
                        info : '战斗中每回合都会恢复一定兵力（恢复率180%），并有30%的机率额外恢复一定兵力（恢复率300%）',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155257_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '袁绍',
                    camp : '汉',
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
                        type  :['b_d','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '四世三公',
                        type : 'active',
                        info : '使友军全体进行攻击和策略攻击时的伤害提高18%，受到攻击和策略攻击时的伤害降低18%，持续2回合'
                    },
                    getSkill:{
                        name : '大赏三军',
                        type : 'command',
                        info : '战斗开始后前3回合，使我军群体进行攻击和策略攻击时的伤害提高30%（受谋略属性影响）',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155302_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '潘凤',
                    camp : '汉',
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
                        name : '上将潘凤',
                        type : 'active',
                        info : '对敌军单体发动一次猛攻（伤害率355%），下一回合内，自身将会陷入混乱'
                    },
                    getSkill:{
                        name : '折戟强攻',
                        type : 'active',
                        info : '对敌军群体发动一次猛攻（伤害率225%），但此后将在本回合内使自身攻击属性降低50%',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155306_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '卢植',
                    camp : '汉',
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
                        type : ['b_j','q_z']
                    },
                    current_arm:'',
                    skill:{
                        name : '中郎尽粹',
                        type : 'active',
                        info : '使自身进行攻击造成的伤害大幅度降低，受到主动、追击战法的伤害降低46%（受防御属性影响），并援护友军全体为其抵挡攻击，持续2回合'
                    },
                    getSkill:{
                        name : '步步为营',
                        type : 'passive',
                        info : '使自身受到的所有伤害降低9%，此效果每回合开始时额外叠加一次，持续直到战斗结束',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155309_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '何太后',
                    camp : '汉',
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
                        type  :['b_j','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '母仪浮梦',
                        type : 'command',
                        info : '战斗开始后，使我军群体在受到首次攻击时可进入规避状态免疫伤害，并使敌军全体在前4回合进行攻击或策略攻击时，有50%的机率使本次攻击的伤害降低30%（受谋略属性影响）'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155432_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '貂蝉',
                    camp : '汉',
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
                        type : ['g_s','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '闭月',
                        type : 'active',
                        info : '1回合准备，使敌军群体陷入暴走状态，进行无差别攻击，并使其防御属性降低29（受谋略属性影响），持续3回合'
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155438_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '蔡文姬',
                    camp : '汉',
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
                        type : ['q_q','q_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '胡笳离愁',
                        type : 'active',
                        info : '恢复友军群体较多兵力（恢复率157%，受谋略属性影响），并使其进入休整状态，每回合再度恢复大量兵力（恢复率206%，受谋略属性影响），持续1回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155450_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '蔡文姬',
                    camp : '汉',
                    arms : '步',
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
                        type : ['b_j','b_d']
                    },
                    current_arm:'',
                    skill:{
                        name : '胡笳离愁',
                        type : 'active',
                        info : '恢复友军群体较多兵力（恢复率157%，受谋略属性影响），并使其进入休整状态，每回合再度恢复大量兵力（恢复率206%，受谋略属性影响），持续1回合'
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
                    sign : 'sp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155450_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '董卓',
                    camp : '汉',
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
                        type : ['b_j','b_d']
                    },
                    current_arm:'',
                    skill:{
                        name : '酒池肉林',
                        type : 'command',
                        info : '战斗开始后前2回合，使我军全体受到的所有伤害降低28%（受防御属性影响），此效果结束后，将在1回合内使我军全体造成的所有伤害大幅度降低，第4回合开始，使自身造成伤害时能够借此恢复相当于伤害值35%的兵力，持续直到战斗结束'
                    },
                    getSkill:{
                        name : '万箭齐发',
                        type : 'active',
                        info : '1回合准备，对敌军全体发动一次攻击（伤害率150%），并随机使敌军单体下一回合进行攻击的伤害大幅度降低',
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
                    img : require('../assets/warrior_cards/Screenshot_20220125_111804_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '司马懿',
                    camp : '汉',
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
                        type  :['g_c','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '冢虎',
                        type : 'active',
                        info : '对敌军群体发动一次策略攻击（伤害率150%，受谋略属性影响）'
                    },
                    getSkill:{
                        name : '步步为营',
                        type : 'passive',
                        info : '使自身受到的所有伤害降低9%，此效果每回合开始时额外叠加一次，持续直到战斗结束',
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
                    img : require('../assets/warrior_cards/Screenshot_20220125_113713_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '十常侍',
                    camp : '汉',
                    arms : '弓',
                    gender : '男',
                    red : 0,
                    cost : 5.5,
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
                        name : '乱政',
                        type : 'active',
                        info : '使敌军单体获得如下10个负面效果中的1个：动摇、恐慌、火攻、妖术、混乱、犹豫、暴走、怯战、挑衅、围困，持续2回合，该效果执行3次，每次的目标和效果独立判定'
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
                    sign : 's3',
                    img : require('../assets/warrior_cards/Screenshot_20220125_114320_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '王昭君',
                    camp : '汉',
                    arms : '骑',
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
                        type : ['q_q','q_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '汉韵旷野',
                        type : 'command',
                        info : '战斗开始后，使敌军全体进行攻击或策略攻击时，有40.0%几率使伤害降低30.0%（受谋略属性影响）。每回合王昭君行动时，使敌军全体伤害降低几率提升3.0%，非汉阵营武将伤害降低几率每回合额外提升3.0%'
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
                    sign : 'hy',
                    img : require('../assets/warrior_cards/mmexport1643080982857_edit_722815326732931.jpg')    
                },
                {
                    id :  200,
                    name : '侍卫',
                    camp : '汉',
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
                    camp : '汉',
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
                    camp : '汉',
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
export default han_warriors