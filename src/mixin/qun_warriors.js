let qun_warriors = {
    
    data(){
        return{
            qun_warriors:[
                {
                    id : 2,
                    name : '袁绍',
                    camp : '群',
                    arms : '弓',
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
                        type : ['g_c','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '威震河朔',
                        type : 'active',
                        info : '对敌军群体发动一次攻击（伤害率200%），使自身与友军单体主动战法伤害提升20%（受攻击属性影响），持续2回合。此战法每发动一次，其发动率降低10%'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_132836_com.netease.stzb.netea.jpg')
                },
                {
                    id :  3,
                    name : '兀突骨',
                    camp : '群',
                    arms : '步',
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
                        type : ['b_m','b_d']
                    },
                    current_arm:'',
                    skill:{
                        name : '藤甲突击',
                        type : 'passive',
                        info : '不受敌方指挥战法的影响，同时每回合首次发动主动战法后，对距离4内敌方群体发动一次攻击（伤害率100%），并使其下一次造成的攻击或策略攻击伤害降低50%'
                    },
                    getSkill:{
                        name : '一夫当关',
                        type : 'command',
                        info : '战斗开始后前2回合，援护友军全体，使自身受到攻击时的伤害降低70%，仅对自身处于前锋位置时生效',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_153916_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  4,
                    name : '华雄',
                    camp : '群',
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
                        type : ['q_q','q_t']
                    },
                    current_arm:'',
                    skill:{
                        name : '将出关西',
                        type : 'active',
                        info : '对随机敌军单体发动2-4次攻击（伤害率250%），每次伤害率递减40%。首次攻击造成的伤害无视规避，并使该目标无法恢复兵力，持续2回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_153922_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  16,
                    name : '于吉',
                    camp : '群',
                    arms : '弓',
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
                        type : ['g_n','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '治众刑咒',
                        type : 'active',
                        info : '恢复距离1以内的友军群体一定兵力（恢复率159%，受谋略属性影响），并使距离2以内的敌军群体进行攻击和策略攻击的伤害降低31%（受谋略属性影响），持续2回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154130_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  17,
                    name : '张宝',
                    camp : '群',
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
                        name : '地公将军',
                        type : 'active',
                        info : '对敌军群体发动策略攻击（伤害率136%，受谋略属性影响），并吸取其24的防御、谋略属性并附加于友军群体（受谋略属性影响），持续2回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154135_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  18,
                    name : '陈宫',
                    camp : '群',
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
                        name : '迟智难酬',
                        type : 'active',
                        info : '对敌军群体发动一次策略攻击（伤害率240%，受谋略属性影响），并使友军群体受到下1次策略攻击的伤害大幅度降低'
                    },
                    getSkill:{
                        name : '利兵谋胜',
                        type : 'active',
                        info : '1回合准备，对敌军群体发动强力策略攻击（伤害率200%，受谋略属性影响），并使自身及友军单体回复一定兵力（恢复率149%，受谋略影响）',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154138_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  19,
                    name : '吕姬',
                    camp : '群',
                    arms : '步',
                    gender : '女',
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
                        name : '缚父临危',
                        type : 'active',
                        info : '35%瞬发；对敌军群体发动一次攻击（伤害率210%），并使自身及友军攻击属性最高的单体下2次攻击造成的伤害提升30%。同时使友军中吕布下一次造成的伤害无视规避'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154143_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  20,
                    name : '张梁',
                    camp : '群',
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
                        name : '人公将军',
                        type : 'command',
                        info : '战斗前4回合，使我军全体的防御属性提高60，并使我军前锋、中军受到普通攻击时会进行反击（伤害率75%）'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154147_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  21,
                    name : '孟获',
                    camp : '群',
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
                        type  :['b_m','b_d']
                    },
                    current_arm:'',
                    skill:{
                        name : '南蛮强袭',
                        type : 'command',
                        info : '战斗开始后前3回合，使自身与友军单体无视敌军的规避效果，进行攻击的伤害提高25%（受攻击属性影响），并于第3回合使自身恢复大量兵力，同时使友军全体蛮兵、象兵、藤甲兵恢复大量兵力'
                    },
                    getSkill:{
                        name : '健卒不殆',
                        type : 'passive',
                        info : '使自身受到普通攻击时能进行反击（伤害率40%），受到所有伤害时都有50%的机率使本次伤害降低50%',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154152_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  22,
                    name : '张宁',
                    camp : '群',
                    arms : '步',
                    gender : '女',
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
                        type : ['b_d','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '黄天余音',
                        type : 'active',
                        info : '战斗中，每回合都会吸取敌军单体26的全属性（受谋略属性影响）并附加于自身与友军单体，持续1回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154156_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  23,
                    name : '贾诩',
                    camp : '群',
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
                        type : ['g_s','b_d']
                    },
                    current_arm:'',
                    skill:{
                        name : '算无遗策',
                        type : 'active',
                        info : '使敌军群体的攻击与谋略属性降低22（受谋略属性影响），持续2回合，在此期间，每当目标试图发动主动战法时，将陷入妖术诅咒，损失一定兵力（伤害率140%，受谋略属性影响）'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154200_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  24,
                    name : '公孙瓒',
                    camp : '群',
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
                        name : '动如雷震',
                        type : 'active',
                        info : '使我军群体追击战法发动率提升100.0%，追击战法伤害提升40.0%（受速度属性影响），持续1回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154204_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  25,
                    name : '高顺',
                    camp : '群',
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
                        type : [
                            'q_z','q_q'
                        ]
                    },
                    current_arm:'',
                    skill:{
                        name : '登锋陷阵',
                        type : 'passive',
                        info : '战斗中使自身处于洞察状态，当自身兵力首次低于初始兵力的90%、70%、50%和30%时，有100%的几率会使自身下次行动时所有攻击类主动战法发动率提高50%'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154208_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  26,
                    name : '张绣',
                    camp : '群',
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
                        name : '宣威再战',
                        type : 'combo',
                        info : '战斗开始后前3回合，普通攻击后对攻击目标发动一次攻击（伤害率150%）；第4回合起，普通攻击后对敌军单体随机发动1-3次攻击（伤害率120%），每次目标独立判定'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154212_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  27,
                    name : '张郃',
                    camp : '群',
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
                        name : '兵行巧变',
                        type : 'active',
                        info : '1回合准备，对敌军群体2目标发动一次攻击（伤害率260%），使其攻击、防御、谋略属性下降40（受攻击属性影响），同时我军群体攻击、防御、谋略属性提升40，持续2回合；或对敌军全体3目标发动一次攻击（伤害率200%），并使其攻击、防御、谋略属性下降80（受攻击属性影响），持续2回合'
                    },
                    getSkill:{
                        name : '风声鹤唳',
                        type : 'active',
                        info : '1回合准备，使敌军群体陷入恐慌状态，每回损失较多兵力（伤害率130%，受谋略属性影响），并使其受到策略攻击时的伤害提高12%（受谋略属性影响），持续2回合',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154216_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  28,
                    name : '庞德',
                    camp : '群',
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
                        name : '令明负榇',
                        type : 'command',
                        info : '战斗开始后前3回合，每回合使我军群体骑兵及步兵攻击造成的伤害提高6%，该效果可叠加3次，持续直到战斗结束，第4回合起进入分兵状态（伤害率50%，受速度属性影响），持续直到战斗结束'
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
                    sign : 'xp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154221_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  29,
                    name : '科比能',
                    camp : '群',
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
                        type : ['q_q','q_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '明法御狄',
                        type : 'command',
                        info : '战斗第2回合，移除我军前锋指挥、主动及追击战法的有益及有害效果，第3回合，移除我军中军指挥、主动及追击战法的有害效果，第4回合起，使我军全体防御属性提升20（受速度属性影响），持续至战斗结束'
                    },
                    getSkill:{
                        name : '利兵谋胜',
                        type : 'active',
                        info : '1回合准备，对敌军群体发动强力策略攻击（伤害率200%，受谋略属性影响），并使自身及友军单体回复一定兵力（恢复率149%，受谋略影响）',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154225_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  30,
                    name : '木鹿大王',
                    camp : '群',
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
                        type  : ['q_x','b_m']
                    },
                    current_arm:'',
                    skill:{
                        name : '夔吼象踏',
                        type : 'passive',
                        info : '战斗中，使自身进入分兵状态（伤害率60%），同时每回合对有效距离4以内的敌军单体发动一次策略攻击（伤害率70.2%，受谋略属性影响）'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154229_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  31,
                    name : '马超',
                    camp : '群',
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
                        type : ['q_t','q_q']
                    },
                    current_arm:'',
                    skill:{
                        name : '血溅黄砂',
                        type : 'passive',
                        info : '以无法发动主动战法为代价，使自身进行攻击时的伤害提高120%'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154233_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  32,
                    name : '董卓',
                    camp : '群',
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
                        name : '逆谋',
                        type : 'passive',
                        info : '使自身受到攻击与策略攻击的伤害降低15.6%（受防御属性影响），在战斗中造成伤害时，能够借此恢复相当于伤害值50%的兵力'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154237_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '李儒',
                    camp : '群',
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
                        name : '计谕废立',
                        type : 'active',
                        info : '对敌方单体发动2次策略攻击（伤害率140%，受谋略属性影响），并使其分别陷入恐慌和燃烧状态（伤害率156%，受谋略属性影响），持续2回合，2次目标独立判定'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155313_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '董白',
                    camp : '群',
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
                        type : ['g_n','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '未笄难言',
                        type : 'active',
                        info : '使敌军群体陷入妖术诅咒，每回合损失一定兵力（伤害率108%，受谋略属性影响），持续2回合；同时使敌军群体进行攻击和策略攻击时的伤害降低18%，该效果可叠加，持续直到战斗结束'
                    },
                    getSkill:{
                        name : '风声鹤唳',
                        type : 'active',
                        info : '1回合准备，使敌军群体陷入恐慌状态，每回损失较多兵力（伤害率130%，受谋略属性影响），并使其受到策略攻击时的伤害提高12%（受谋略属性影响），持续2回合',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155317_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '貂蝉',
                    camp : '群',
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
                        name : '白楼独舞',
                        type : 'command',
                        info : '战斗开始后前3回合，使敌军群体进行攻击和策略攻击时的伤害降低26%（受谋略属性影响），此效果结束后，敌军将陷入暴走状态，进行无差别攻击，持续2回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155321_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '祝融夫人',
                    camp : '群',
                    arms : '骑',
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
                        type : ['q_q','b_m']
                    },
                    current_arm:'',
                    skill:{
                        name : '火兽冲锋',
                        type : 'passive',
                        info : '使自身进行普通攻击时的伤害提高80%，每回合有35%的几率对敌军单体发动一次攻击（伤害率160%），并使自身下一次普通攻击所造成的伤害额外提高160%'
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155325_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '张角',
                    camp : '群',
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
                        name : '黄天当立',
                        type : 'active',
                        info : '1回合准备，对敌军群体发动策略攻击（伤害率176%，受谋略属性影响），并使其陷入妖术诅咒，每回合损失一定兵力（伤害率97%，受谋略属性影响），持续2回合'
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
                    sign : 'sp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155329_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '张角',
                    camp : '群',
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
                        type : ['q_q','g_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '黄天当立',
                        type : 'active',
                        info : '1回合准备，对敌军群体发动策略攻击（伤害率176%，受谋略属性影响），并使其陷入妖术诅咒，每回合损失一定兵力（伤害率97%，受谋略属性影响），持续2回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155329_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '甄洛',
                    camp : '群',
                    arms : '弓',
                    gender : '女',
                    red : 0,
                    cost : 2,
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
                        type  :['g_n','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '洛水佳人',
                        type : 'command',
                        info : '本场战斗中，使我军群体每回合都有75%的机率恢复一定兵力（恢复率85%，受谋略属性影响）'
                    },
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155442_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '甄洛',
                    camp : '群',
                    arms : '弓',
                    gender : '女',
                    red : 0,
                    cost : 2,
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
                        type  :['g_n','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '幽兰洛神',
                        type : 'command',
                        info : '每回合都会恢复友军单体一定兵力（恢复率105%，受谋略属性影响），并使其受到普通攻击的伤害降低33%（受谋略属性影响）'
                    },
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
                    sign : 'sp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155442_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '吕布',
                    camp : '群',
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
                        type : ['g_c','g_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '辕门射戟',
                        type : 'active',
                        info : '对敌军群体发动二次无视兵种相克的攻击（伤害率120%），并使第一次受击的敌军下一回合进行攻击的伤害大幅度降低，每次攻击的目标独立选择'
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
                    img : require('../assets/warrior_cards/3CA0F0F271E962FE25A56AE277BBFD95.jpg')    
                },
                {
                    id :  200,
                    name : '颜良＆文丑',
                    camp : '群',
                    arms : '骑',
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
                        type : ['b_d','q_z']
                    },
                    current_arm:'',
                    skill:{
                        name : '二夫之勇',
                        type : 'active',
                        info : '对敌军群体发动一次攻击（伤害率140%），并使其发动主动战法造成的伤害降低50%，受到主动战法的伤害提高25%，持续2回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220125_111749_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '妲己',
                    camp : '群',
                    arms : '步',
                    gender : '女',
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
                        name : '青丘媚祸',
                        type : 'command',
                        info : '本场战斗中，自身受到伤害后有60%的机率使距离4以内的随机敌军单体在下一回合陷入暴走状态，进行无差别攻击，持续1回合，并使其下一次攻击和策略攻击的伤害下降24%（受谋略属性影响)'
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
                    sign : 'hy',
                    img : require('../assets/warrior_cards/Screenshot_20220131_150543_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '妺喜',
                    camp : '群',
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
                        type  :['q_q','q_z']
                    },
                    current_arm:'',
                    skill:{
                        name : '酩酊不休',
                        type : 'active',
                        info : '使敌军单体受到的伤害提升30%（受谋略属性影响），持续2回合，同时该目标下次行动时，受到一次猛烈的策略攻击（伤害率240%，受谋略属性影响）'
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
                    sign : 'hy',
                    img : require('../assets/warrior_cards/Screenshot_20220131_150604_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '褒姒',
                    camp : '群',
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
                        type  :['q_q','q_z']
                    },
                    current_arm:'',
                    skill:{
                        name : '烽火覆周',
                        type : 'active',
                        info : '对敌军单体发动一次火攻（伤害率95%，受谋略属性影响），烽火覆周每次发动火攻后有60%概率再次发动火攻，此概率每次降低20%，每次目标独立判定'
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
                    sign : 'hy',
                    img : require('../assets/warrior_cards/Screenshot_20220131_150557_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '骊姬',
                    camp : '群',
                    arms : '弓',
                    gender : '女',
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
                        type  :['g_n','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '陷储立齐',
                        type : 'command',
                        info : '战斗中，我军全体每回合首次受到伤害后会随机吸取伤害来源的攻击、防御、谋略属性中的一种70并附加于自身，持续2回合'
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
                    sign : 'hy',
                    img : require('../assets/warrior_cards/Screenshot_20220131_150538_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '西施',
                    camp : '群',
                    arms : '弓',
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
                        type  :['g_n','g_c']
                    },
                    current_arm:'',
                    skill:{
                        name : '绮阁飘香',
                        type : 'command',
                        info : '战斗中，每回合以损失自身一定兵力为代价，令敌军当前最高兵力单体武将攻击，谋略，防御下降6%，该效果可以叠加，持续至战斗结束；当该武将属性值低于自身时，令其下一次造成的策略伤害大幅降低'
                    },
                    getSkill:{
                        name : '合纵连横',
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
                    sign : 'hy',
                    img : require('../assets/warrior_cards/Screenshot_20220131_150530_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '侍卫',
                    camp : '群',
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
                    camp : '群',
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
                    camp : '群',
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
export default qun_warriors