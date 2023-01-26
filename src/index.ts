import { Hono } from 'hono';
import { cors } from 'hono/cors';
import  courses  from './app/courses/routes'


export interface Env {
	FILES: KVNamespace;
}

const app = new Hono<{Bindings: Env}>()

app.route('/courses', courses)
export default app