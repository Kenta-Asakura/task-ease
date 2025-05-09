import Article from './Article';
import './Articles.css';

export default function Articles() {
  const articles = [
    {
        "title": "Understanding React Hooks: A Beginner's Guide",
        "content": "Learn how React Hooks can simplify state management and lifecycle methods in your functional components."
    },
    {
        "title": "Building Responsive UIs with React and Tailwind CSS",
        "content": "Learn to use Tailwind CSS with React for responsive and customizable UIs."
    },
    {
        "title": "Optimizing React Performance: Tips and Tricks",
        "content": "Explore techniques to enhance the performance of your React applications, including memoization and code splitting."
    },
    {
        "title": "State Management in React: Redux vs. Context API",
        "content": "A comprehensive comparison of Redux and Context API for managing global state in React applications."
    },
    {
        "title": "React Router v6: Navigating Your Single Page Application",
        "content": "Learn how to use React Router v6 to manage navigation and routing in modern React applications."
    },
    {
      "title": "Understanding React Hooks: A Beginner's Guide",
      "content": "Learn how React Hooks can simplify state management and lifecycle methods in your functional components."
    },
    {
        "title": "Building Responsive UIs with React and Tailwind CSS",
        "content": "Learn to use Tailwind CSS with React for responsive and customizable UIs."
    },
    {
        "title": "Optimizing React Performance: Tips and Tricks",
        "content": "Explore techniques to enhance the performance of your React applications, including memoization and code splitting."
    },
    {
        "title": "State Management in React: Redux vs. Context API",
        "content": "A comprehensive comparison of Redux and Context API for managing global state in React applications."
    },
    {
        "title": "React Router v6: Navigating Your Single Page Application",
        "content": "Learn how to use React Router v6 to manage navigation and routing in modern React applications."
    }
  ];

  return (
    <div className='articles'>
      <h3>Articles</h3>

      <ul className="articles-list">
        {articles.map((article, index) => (
          <Article key={index} title={article.title} content={article.content} />
        ))}
      </ul>
    </div>
  )
};
