import { PostProps } from '../components';

export const POSTS: PostProps[] = Array.from({ length: 6 }, (_, index) => ({
  author: 'MenSeb',
  date: new Date(`10 ${index + 1} 2023`),
  id: `id-post-${index}`,
  image: {
    label: 'a person reading a blog article',
    name: 'ImageBlogPost',
  },
  time: Math.random() > 0.5 ? 10 : 5,
  text: 'A brief text to introduce the blog article. The subjet your about to read. A small hint on the information found in this article.',
  title: 'A short blog post title',
}));
