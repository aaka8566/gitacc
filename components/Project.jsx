import React from 'react'
import Link from "next/link";
const Project = ({name,forks,star,lang,url}) => {
  return (
    <Link href={url} target="_blank">
    <div>
      <h1>Project name={name}</h1>
      <h2>Number of Forks={forks}</h2>
      <h3>Stars={star}</h3>
      <h3>Language={lang}</h3>
    </div>
    </Link>
  )
}

export default Project