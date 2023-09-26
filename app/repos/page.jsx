//import { github_user } from '@/components/const'
import Link from 'next/link'
import React from 'react'
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'


async function fetchRepos() {
  const username = 'bradtraversy'
  const url = `http://api.github.com/users/${username}/repos`
  
  //1. SSG: static site generation
  //const response = await fetch(url)

  //2. SSR : server side redering, 변경내용 실시간 반영
  //const response = await fetch(url, { cache : 'no-store' })

  //3. ISR : incrremental static regeneration 
  const response = await fetch(url, { next: {revalidate: 60} })

  await new Promise((resolve) => setTimeout(resolve,1000))

  const repos = await response.json()
  return repos
}

const ReposPage = async () => {
  const username = 'bradtraversy'
  const repos = await fetchRepos()

  return (
    <div>
      <h2 className='text-2x1 font-bold mb-4'>
        Github Repositories of {username}
        </h2>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id} className='bg-gray-100 m-4 p-8 rounded-md'>
              <Link href={`/repos/${repo.name}`}>
                <h3 className='text-xl font-bold'>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className='flex justify-between items-center'>
                  <span className='flex items-center gap-1'>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span className='flex items-center gap-1'>
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span className='flex items-center gap-1'>
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          ))
          }
        </ul>
    </div>
  )
}

export default ReposPage