import React from 'react';

const Page = ({params}) => {
    console.log(params.slug);
    const {title, description} = blogs.find((blog) => blog.slug == params.slug)
    return (
        <div className='h-screen'>
            <h5>{title}</h5>
            <h5>{description}</h5>
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

export default Page;