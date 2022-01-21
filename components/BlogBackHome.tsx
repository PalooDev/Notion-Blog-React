import Link from 'next/link';

import { BiArrowBack } from 'react-icons/bi';

const BlogBackHome = () => {
    return (
        <div id='notion-blog-back-home' className='my-3 mx-auto md:w-3/5 leading-relaxed'>
            <div className='rounded border-2 p-3 dark:text-[#adbac7]'>
                <div className='flex'>
                    <span className='flex flex-row items-center space-x-2 transition duration-500 underline hover:bg-yellow-500 dark:hover:bg-yellow-600'>
                        <BiArrowBack />
                        <Link href='/'>Back Home</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BlogBackHome;
