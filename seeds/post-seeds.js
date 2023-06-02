const { Post } = require('../models');

const postData = [
  {
    title: 'Node',
    content: 'I love using node it is so helpful!',
    user_id: 1
    
  },
  {
    title: 'MVC is used by alot of companies!',
    content: 'MVC allows multiple views, has fast development time and is SEO friendly.',
    user_id: 2
  },
  {
    title: 'React',
    content: 'React is the most in demand framework of 2022! Make sure you learn it for the job hunt!',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
