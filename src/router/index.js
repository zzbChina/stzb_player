//引入路由
import VueRouter from 'vue-router'



import Warrior from '../pages/Warrior'
import Recruit from '../pages/Recruit'
import Skill from '../pages/Skill'
import Team from '../pages/Team'

export default new VueRouter({
    routes:[
        //我的武将路由
        {
            path : '/warriors',
            component : Warrior
        },
        //招募路由
        {
            path : '/recruit',
            component : Recruit
        },
        //我的战法
        {
            path : '/skill',
            component : Skill
        },
        //我的队伍
        {
            path : '/team',
            component : Team
        }
    ]
})