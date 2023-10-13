import ReactImg from './../../assets/technologies/React.png'
import HTMLImg from './../../assets/technologies/html.png'
import CSSImg from './../../assets/technologies/css.png'
import TailwindImg from './../../assets/technologies/tailwind.png'
import MongoImg from './../../assets/technologies/mongodb.png'
import TypescriptImg from './../../assets/technologies/typescript.png'
import ExpressImg from './../../assets/technologies/express.png'
import NodeImg from './../../assets/technologies/nodejs.png'
import GithubImg from './../../assets/technologies/github.png'
import GitImg from './../../assets/technologies/git.png'
import JsImg from './../../assets/technologies/js.png'
import NextImg from './../../assets/technologies/nextjs.png'
import RecoilImg from './../../assets/technologies/recoil.svg'
import ReduxImg from './../../assets/technologies/redux.png'
import SqlImg from './../../assets/technologies/sql.png'
import IconSkill from './IconSkill'



const SkillSection = () => {
  return (
    <div className='flex flex-wrap justify-center gap-8 mt-20 md:w-[40%] md:min-w-[550px]'>
        <IconSkill Img = {HTMLImg}/>
        <IconSkill Img = {CSSImg}/>
        <IconSkill Img = {JsImg}/>
        <IconSkill Img = {TailwindImg}/>
        <IconSkill Img = {ReactImg}/>
        <IconSkill Img = {NodeImg}/>
        <IconSkill Img = {ExpressImg}/>
        <IconSkill Img = {MongoImg}/>
        <IconSkill Img = {TypescriptImg}/>
        <IconSkill Img = {GitImg}/>
        <IconSkill Img = {GithubImg}/>
        <IconSkill Img = {NextImg}/>
        <IconSkill Img = {ReduxImg}/>
        <IconSkill Img = {RecoilImg}/>
        <IconSkill Img = {SqlImg}/>
    </div>
  )
}

export default SkillSection
