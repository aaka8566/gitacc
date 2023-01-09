import React from 'react'
import Project from '../components/Project';
const Projects = ({data2}) => {
    const dataa2=data2.items;

 
  return (
    <div>
<h1>Projects</h1>
{dataa2.map((el)=>(
  <Project
  key={el.id}
  name={el.name}
  forks={el.forks_count}
 star={el.stargazers_count}
  lang={el.language}
  url={el.svn_url}
  />
))}

    </div>
  )
}

export default Projects;
export async function getStaticProps(){
  let r=await fetch(`https://api.github.com/search/repositories?q=user:aaka8566+fork:true&sort=updated&per_page=10&type=Repositories`);
let r1=await r.json();
  return{
    props:{
      
      data2:r1
    }
  }
}