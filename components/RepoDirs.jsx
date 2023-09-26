import Link from 'next/link'
import React from 'react'

const username = 'bradtraversy'

async function fetchRepoContents(name) {
  const url = `http://api.github.com/repos/${username}/${name}/contents`
  const response = await fetch(url)
  const contents = await response.json()
  await new Promise((resolve) => setTimeout(resolve,2000))
  return contents
}

const RepoDirs = async ({name}) => {
  const contents = await fetchRepoContents(name)
  console.log(contents)
  const dirs = contents.filter((content) => content.type === 'dir')
  return (
  <div className="mt-2 ">
    <h3 className="text-xl font-bold">Directories</h3>
    <ul>
      {dirs.map((dir) => (
      <li key={dir.path}>
        <Link className="underline" href={`https://github.com/${username}/${name}/tree/master/${dir.path}`} >
          {dir.path}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)
}

export default RepoDirs