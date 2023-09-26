'use client' //중요

import Courses from '@/components/Courses'
import { useEffect, useState } from 'react'
import LoadingPage from '../loading'
import CourseSearch from '@/components/CourseSearch'

const CoursesPage = () => {
  const [courses, setCourses] = useState([]) //courses 변수를 useState로 관리
  const [loading, setLoading] = useState(true) //Loading 초기값 true

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses')
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    }
    fetchCourses()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)} />
      <Courses courses={courses} />
    </div>
  )
}

export default CoursesPage
