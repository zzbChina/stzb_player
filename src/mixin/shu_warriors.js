let shu_warriors = {
    
    data(){
        return{
            shu_warriors:[
                {
                    id : 1,
                    name : '关兴＆张苞',
                    camp : '蜀',
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
                        type  : ['b_j','b_q']
                    },
                    current_arm:'',
                    skill:{
                        name : '将门有将',
                        type : 'passive',
                        info : '每回合自身行动时有30%的概率获得以下效果：进入连击状态，持续1回合；进入分兵状态（伤害率100%），持续1回合。此概率每回合提高10%，每个效果独立判断'
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
                    img : require('../assets/warrior_cards/Screenshot_20220114_123124_com.netease.stzb.netea(1).jpg')
                },
                {
                    id :  7,
                    name : '沙摩柯',
                    camp : '蜀',
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
                        type  :['b_m','g_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '落首箭',
                        type : 'active',
                        info : '1回合准备，对敌军单体发动一次猛攻（伤害率300%），并对敌军大营再度发动一次攻击（伤害率180%），同时使敌军大营陷入混乱状态，持续1回合-2回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154053_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  8,
                    name : '赵云',
                    camp : '蜀',
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
                        type  :['b_q','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '银龙冲阵',
                        type : 'active',
                        info : '随机对敌军单体发动2次攻击（伤害率150%），并使首次受到伤害的敌军单体受到攻击和策略攻击时的伤害提高20%（受攻击属性影响），持续2回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154058_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '赵云',
                    camp : '蜀',
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
                        type  :['b_q','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '银龙孤胆',
                        type : 'active',
                        info : '1回合准备，对随机敌军单体发动7次攻击（首次伤害率80%），每次伤害都递增7%'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154058_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  9,
                    name : '刘备',
                    camp : '蜀',
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
                    current_arm:'',
                    skill:{
                        name : '皇裔流离',
                        type : 'command',
                        info : '本场战斗中，使我军全体受到伤害时，有50%的机率能恢复一定兵力（恢复率68%，受谋略属性影响）'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154102_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  10,
                    name : '张飞',
                    camp : '蜀',
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
                        type : ['q_z','q_q']
                    },
                    current_arm:'',
                    skill:{
                        name : '长坂之吼',
                        type : 'active',
                        info : '2回合准备，对敌军群体2-3目标发动一次无视兵种相克的猛烈攻击（伤害率450%）'
                    },
                    getSkill:{
                        name : '一骑当千',
                        type : 'active',
                        info : '1回合准备，对敌军群体发动一次猛烈攻击（伤害率280%）',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154106_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '夏侯霸',
                    camp : '蜀',
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
                        type : ['b_q','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '虎步陷阵',
                        type : 'passive',
                        info : '对敌军单体发动一次攻击（伤害率120%），并使其受到攻击伤害提升15%，该效果可叠加，持续至战斗结束'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154342_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '魏延',
                    camp : '蜀',
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
                        type : ['g_s','b_q']
                    },
                    current_arm:'',
                    skill:{
                        name : '奇兵拒北',
                        type : 'command',
                        info : '每回合行动时有30%几率对敌军大营和中军分别发动一次攻击（伤害率180%），同时使速度最高的友军单体对敌军大营及中军分别发动一次攻击（伤害率120%-180%）。每回合奇兵拒北未生效时可提升其5%的发动几率，可叠加，生效后发动几率提升效果消失。'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154346_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '黄忠',
                    camp : '蜀',
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
                        name : '定军扬威',
                        type : 'active',
                        info : '战斗中每回合都会对敌军群体发动攻击（伤害率100%）并进行挑衅，同时使自身受到攻击的伤害降低25%（受防御属性影响）'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154350_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '关银屏',
                    camp : '蜀',
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
                        type : ['b_d','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '巾帼战阵',
                        type : 'active',
                        info : '使自身进行攻击时的伤害提高25%，每回合都对敌军群体发动主动战法攻击（伤害率120%），但无法进行普通攻击'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154354_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '诸葛亮',
                    camp : '蜀',
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
                        type : ['b_d','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '诸葛锦囊',
                        type : 'active',
                        info : '使我军群体受到策略攻击时的伤害降低35%（受谋略属性影响），并使其进行攻击和策略攻击时的伤害提高14%（受谋略属性影响），且自身获得先手，持续2回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154358_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '严颜',
                    camp : '蜀',
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
                        name : '断首何怒',
                        type : 'passive',
                        info : '战斗中，自身受到伤害后有60%的机率使伤害来源的下一次攻击和策略攻击伤害下降34%（受防御属性影响)。同时每回合行动时使自身受到的所有伤害降低80%，每当受到攻击或策略攻击伤害后，减伤效果将降低1/4'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154401_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '马岱',
                    camp : '蜀',
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
                        name : '奉令护蜀',
                        type : 'passive',
                        info : '战斗中，任意友军发动普通攻击、主动战法、追击战法后，马岱的下1次普通攻击造成的伤害提升35%（受攻击属性影响），下1次受到的所有伤害降低20%（受防御属性影响），以上效果可叠加5次'
                    },
                    getSkill:{
                        name : '击势',
                        type : 'passive',
                        info : '战斗中，每回合有65%几率获得以下效果：自身攻击时的伤害提升50%，持续1回合；自身攻击时无视敌方40%防御属性，持续1回合。每个效果独立判断',
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154405_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '法正',
                    camp : '蜀',
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
                        name : '难知如阴',
                        type : 'command',
                        info : '战斗中，每2回合有100%的机率使友军单体在1回合内自带主动战法发动率提高至100%，如该自带战法需要准备，则有75%的机率跳过1回合准备时间'
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
                    sign : 'none',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154409_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '徐庶',
                    camp : '蜀',
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
                        name : '破阵强袭',
                        type : 'combo',
                        info : '普通攻击后，对攻击目标再次发动策略攻击（伤害率119%，受谋略属性影响），并有20%的机率使其陷入暴走状态，持续1回合，此战法首次发动后，每次造成伤害时都使自身策略攻击的伤害提高5%，可叠加6次'
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
                    sign : 'sp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_154413_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '关羽',
                    camp : '蜀',
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
                        name : '樊渊泅囚',
                        type : 'active',
                        info : '1回合准备，对敌军全体发动一次猛攻（伤害率190%）,并使其陷入犹豫状态，持续1回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_154417_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '张姬',
                    camp : '蜀',
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
                        type : ['g_c','g_s']
                    },
                    current_arm:'',
                    skill:{
                        name : '将门虎女',
                        type : 'active',
                        info : '对敌军群体发动一次进攻（伤害率190%），使其无法恢复兵力，持续2回合，并在1回合内，使其受到攻击伤害时有75%的机率引发一次动摇效果（伤害率35%）'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155358_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '姜维',
                    camp : '蜀',
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
                        type : ['b_d','b_j']
                    },
                    current_arm:'',
                    skill:{
                        name : '其徐如林',
                        type : 'active',
                        info : '使我军全体攻击、防御、速度、谋略属性提高29.2（受谋略属性影响），持续2回合，同时友军全体受到下3次伤害时有50%几率进入规避状态，免疫该次伤害'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155403_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '姜维',
                    camp : '蜀',
                    arms : '弓',
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
                        type : ['g_c','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '其徐如林',
                        type : 'active',
                        info : '使我军全体攻击、防御、速度、谋略属性提高29.2（受谋略属性影响），持续2回合，同时友军全体受到下3次伤害时有50%几率进入规避状态，免疫该次伤害'
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
                    sign : 'sp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155403_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '黄月英',
                    camp : '蜀',
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
                        type : ['b_d','b_q']
                    },
                    current_arm:'',
                    skill:{
                        name : '匠心不竭',
                        type : 'command',
                        info : '战斗开始后，使敌军全体从第1、3、5回合开始，逐渐陷入恐慌（伤害率34%，受谋略属性影响）、火攻（伤害率41%，受谋略属性影响）与妖术（伤害率44%，受谋略属性影响）的状态，持续直到战斗结束，所造成的伤害无视规避'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155406_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '马云禄',
                    camp : '蜀',
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
                        type : ['q_t','q_q']
                    },
                    current_arm:'',
                    skill:{
                        name : '红颜铁骑',
                        type : 'passive',
                        info : '使自身每回合可以进行两次普通攻击，并使攻击属性提高30'
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
                    img : require('../assets/warrior_cards/Screenshot_20220122_155410_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '庞统',
                    camp : '蜀',
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
                        type : ['b_d','g_n']
                    },
                    current_arm:'',
                    skill:{
                        name : '密谋定蜀',
                        type : 'active',
                        info : '使敌军群体进行攻击和策略攻击的伤害降低30%（受谋略属性影响），并陷入恐慌（伤害率115%，受谋略属性影响），每当其试图发动追击战法将额外受到妖术诅咒（伤害率133%，受谋略属性影响），持续2回合'
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
                    img : require('../assets/warrior_cards/Screenshot_20220125_111818_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '诸葛亮',
                    camp : '蜀',
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
                        name : '明其虚实',
                        type : 'command',
                        info : '战斗中，使敌军全体的谋略降低6%，此效果每回合叠加一次，并在前2回合，使敌军群体陷入犹豫状态，无法发动主动战法'
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
                    img : require('../assets/warrior_cards/Screenshot_20220125_114257_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '孙尚香',
                    camp : '蜀',
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
                    sign : 'sp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155421_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '祝融夫人',
                    camp : '蜀',
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
                    sign : 'sp',
                    img : require('../assets/warrior_cards/Screenshot_20220122_155325_com.netease.stzb.netea.jpg')    
                },
                {
                    id :  200,
                    name : '侍卫',
                    camp : '蜀',
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
                    camp : '蜀',
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
                    camp : '蜀',
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
export default shu_warriors