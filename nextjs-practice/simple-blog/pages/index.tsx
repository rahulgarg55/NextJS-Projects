import Link from 'next/link';
import { GetStaticProps } from 'next';
import {Post} from "../types";

interface HomeProps {
    posts: Post[];
}

export const getStaticProps:GetStaticProps =async()=>{
    const res = await fetch('http://localhost:3000/api/posts');
    const posts:Post[] =await res.json();
    return {props:{posts}};
};

const Home:React.FC<HomeProps> = ({posts})=>{
    return (
        <div>
            <h1>Simple Blog</h1>
            <ul>
                {Array.isArray(posts) && posts.map((post)=>(
                <li key = {post.id}>
                    <Link href ={`/posts/${post.id}`}>
                    <a>{post.title}</a>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    )
};
export default Home;