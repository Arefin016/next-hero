import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    return (
        <div className='p-24'>
            {
                blogs.map(blog => <div key={blog.slug} className='border-2 p-12'>
                    <h3>{blog.title}</h3>
                    <h3>{blog.description}</h3>
                    <button className='bg-red-400 p-3'>
                        <Link href={`/blogs/${blog.slug}`}>View Details</Link>
                    </button>
                </div>)
            }
        </div>
    );
};

const blogs = [
    {
        "slug": "ultimate-guide-to-travel",
        "title": "The Ultimate Guide to Travel",
        "description": "Explore the world with our comprehensive travel guide. From packing tips to destination ideas, we've got you covered."
    },
    {
        "slug": "healthy-eating-habits",
        "title": "Healthy Eating Habits",
        "description": "Discover the secrets to maintaining a balanced diet. Learn about nutritious foods, meal planning, and more to keep your body healthy."
    },
    {
        "slug": "tech-trends-2024",
        "title": "Tech Trends 2024",
        "description": "Stay ahead of the curve with our analysis of the top technology trends for 2024. From AI advancements to the latest in wearable tech."
    },
    {
        "slug": "home-decor-tips",
        "title": "Home Decor Tips",
        "description": "Transform your living space with our creative home decor ideas. Learn about the latest trends and timeless classics to enhance your home."
    },
    {
        "slug": "financial-freedom-steps",
        "title": "Steps to Financial Freedom",
        "description": "Achieve financial independence with our step-by-step guide. Tips on saving, investing, and planning for a secure future."
    }
]





export default BlogsPage;