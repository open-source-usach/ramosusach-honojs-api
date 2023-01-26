import { Hono } from 'hono';
import { z } from 'zod'
import { cors } from 'hono/cors';
import keys from '../../keys'

export interface Env {
    FILES: KVNamespace;
}

export interface Course {
    [key: string]: string
}

const courses = new Hono<{ Bindings: Env }>()

courses.get('/allCourses', async (c) => {
    let allCourses = await c.env.FILES.get("allCourses");
    console.log(allCourses)
    allCourses = JSON.parse(allCourses!);
    return c.json({ 'courses': allCourses });
})

courses.get('/byFaculty', async (c) => {
    let allCourses = await c.env.FILES.get("allCoursesByF");
    allCourses = JSON.parse(allCourses!);
    return c.json({ 'courses': allCourses })
})


courses.get('/byCareer', async (c) => {
    let allCourses = await c.env.FILES.get("allCoursesByC");
    allCourses = JSON.parse(allCourses!);

    return c.json({ 'courses': allCourses })
})


export default courses;
