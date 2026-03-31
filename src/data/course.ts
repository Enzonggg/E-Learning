import type { Course } from '@/types';

export const COURSE: Course = {
  id: 'web-fundamentals',
  title: 'Web Development Fundamentals',
  description: 'Master the essentials of HTML and CSS — from your first tag to fully styled web pages.',
  lessons: [
    {
      id: 1,
      slug: 'lesson-1',
      title: 'Introduction to HTML',
      shortTitle: 'Intro to HTML',
      videoId: 'dD2EISBDjWM',
      duration: '~15 minutes',
      questions: [
        {
          id: 'l1q1',
          text: 'What does HTML stand for?',
          options: [
            { value: 'a', label: 'Hyper Text Markup Language' },
            { value: 'b', label: 'Home Tool Markup Language' },
            { value: 'c', label: 'Hyperlinks and Text Markup Language' },
          ],
          correctAnswer: 'a',
        },
        {
          id: 'l1q2',
          text: 'Who is making the Web standards?',
          options: [
            { value: 'a', label: 'Mozilla' },
            { value: 'b', label: 'Microsoft' },
            { value: 'c', label: 'The World Wide Web Consortium' },
          ],
          correctAnswer: 'c',
        },
        {
          id: 'l1q3',
          text: 'Choose the correct HTML element for the largest heading:',
          options: [
            { value: 'a', label: '<heading>' },
            { value: 'b', label: '<h1>' },
            { value: 'c', label: '<h6>' },
          ],
          correctAnswer: 'b',
        },
        {
          id: 'l1q4',
          text: 'What is the correct HTML element for inserting a line break?',
          options: [
            { value: 'a', label: '<break>' },
            { value: 'b', label: '<br>' },
            { value: 'c', label: '<lb>' },
          ],
          correctAnswer: 'b',
        },
        {
          id: 'l1q5',
          text: 'Which character is used to indicate an end tag?',
          options: [
            { value: 'a', label: '^' },
            { value: 'b', label: '/' },
            { value: 'c', label: '*' },
          ],
          correctAnswer: 'b',
        },
      ],
    },
    {
      id: 2,
      slug: 'lesson-2',
      title: 'HTML Tags and Structure',
      shortTitle: 'HTML Tags',
      videoId: 'qz0aGYrrlhU',
      duration: '~20 minutes',
      questions: [
        {
          id: 'l2q1',
          text: 'Which HTML tag is used to define a paragraph?',
          options: [
            { value: 'a', label: '<para>' },
            { value: 'b', label: '<p>' },
            { value: 'c', label: '<text>' },
          ],
          correctAnswer: 'b',
        },
        {
          id: 'l2q2',
          text: 'What is the correct HTML element for inserting a line break?',
          options: [
            { value: 'a', label: '<br>' },
            { value: 'b', label: '<lb>' },
            { value: 'c', label: '<line>' },
          ],
          correctAnswer: 'a',
        },
        {
          id: 'l2q3',
          text: 'Which tag is used to create a hyperlink in HTML?',
          options: [
            { value: 'a', label: '<link>' },
            { value: 'b', label: '<a>' },
            { value: 'c', label: '<href>' },
          ],
          correctAnswer: 'b',
        },
        {
          id: 'l2q4',
          text: 'What is the correct HTML for creating a numbered list?',
          options: [
            { value: 'a', label: '<ul>' },
            { value: 'b', label: '<ol>' },
            { value: 'c', label: '<list>' },
          ],
          correctAnswer: 'b',
        },
        {
          id: 'l2q5',
          text: 'Which is the correct HTML for inserting an image?',
          options: [
            { value: 'a', label: '<img src="image.jpg" alt="description">' },
            { value: 'b', label: '<image src="image.jpg">' },
            { value: 'c', label: '<img href="image.jpg">' },
          ],
          correctAnswer: 'a',
        },
      ],
    },
    {
      id: 3,
      slug: 'lesson-3',
      title: 'Introduction to CSS',
      shortTitle: 'Intro to CSS',
      videoId: '1PnVor36_40',
      duration: '~20 minutes',
      questions: [
        {
          id: 'l3q1',
          text: 'What does CSS stand for?',
          options: [
            { value: 'a', label: 'Creative Style Sheets' },
            { value: 'b', label: 'Cascading Style Sheets' },
            { value: 'c', label: 'Colorful Style Sheets' },
          ],
          correctAnswer: 'b',
        },
        {
          id: 'l3q2',
          text: 'Where is the correct place to link an external CSS file?',
          options: [
            { value: 'a', label: 'At the end of the document' },
            { value: 'b', label: 'Inside the <body> tag' },
            { value: 'c', label: 'Inside the <head> tag' },
          ],
          correctAnswer: 'c',
        },
        {
          id: 'l3q3',
          text: 'Which property is used to change the text color?',
          options: [
            { value: 'a', label: 'font-color' },
            { value: 'b', label: 'color' },
            { value: 'c', label: 'text-color' },
          ],
          correctAnswer: 'b',
        },
        {
          id: 'l3q4',
          text: 'How do you add a background color in CSS?',
          options: [
            { value: 'a', label: 'background-color: red;' },
            { value: 'b', label: 'bg-color: red;' },
            { value: 'c', label: 'background: color red;' },
          ],
          correctAnswer: 'a',
        },
        {
          id: 'l3q5',
          text: 'Which is the correct CSS syntax to make all <p> elements bold?',
          options: [
            { value: 'a', label: 'p { text-weight: bold; }' },
            { value: 'b', label: 'p { font-weight: bold; }' },
            { value: 'c', label: 'p: bold;' },
          ],
          correctAnswer: 'b',
        },
      ],
    },
    {
      id: 4,
      slug: 'lesson-4',
      title: 'HTML Forms',
      shortTitle: 'HTML Forms',
      videoId: 'fNcJuPIZ2WE',
      duration: '~18 minutes',
      questions: [
        {
          id: 'l4q1',
          text: 'Which HTML tag is used to create a form?',
          options: [
            { value: 'a', label: '<form>' },
            { value: 'b', label: '<input>' },
            { value: 'c', label: '<fieldset>' },
          ],
          correctAnswer: 'a',
        },
        {
          id: 'l4q2',
          text: 'Which input type is used for passwords?',
          options: [
            { value: 'a', label: 'text' },
            { value: 'b', label: 'password' },
            { value: 'c', label: 'email' },
          ],
          correctAnswer: 'b',
        },
        {
          id: 'l4q3',
          text: 'What does the <label> tag do?',
          options: [
            { value: 'a', label: 'Displays bold text' },
            { value: 'b', label: 'Defines a caption for a table' },
            { value: 'c', label: 'Defines a label for an input element' },
          ],
          correctAnswer: 'c',
        },
        {
          id: 'l4q4',
          text: 'Which attribute specifies where to send the form data?',
          options: [
            { value: 'a', label: 'target' },
            { value: 'b', label: 'action' },
            { value: 'c', label: 'method' },
          ],
          correctAnswer: 'b',
        },
        {
          id: 'l4q5',
          text: 'What is the default method used to send form data?',
          options: [
            { value: 'a', label: 'GET' },
            { value: 'b', label: 'POST' },
            { value: 'c', label: 'PUT' },
          ],
          correctAnswer: 'a',
        },
      ],
    },
    {
      id: 5,
      slug: 'lesson-5',
      title: 'CSS – Styling Your Web Page',
      shortTitle: 'CSS Styling',
      videoId: 'yfoY53QXEnI',
      duration: '~22 minutes',
      questions: [
        {
          id: 'l5q1',
          text: 'What does CSS stand for?',
          options: [
            { value: 'a', label: 'Computer Style Sheets' },
            { value: 'b', label: 'Cascading Style Sheets' },
            { value: 'c', label: 'Creative Style System' },
          ],
          correctAnswer: 'b',
        },
        {
          id: 'l5q2',
          text: 'Which property is used to change the text color of an element?',
          options: [
            { value: 'a', label: 'font-color' },
            { value: 'b', label: 'color' },
            { value: 'c', label: 'text-color' },
          ],
          correctAnswer: 'b',
        },
        {
          id: 'l5q3',
          text: 'How do you apply an external CSS file to an HTML document?',
          options: [
            { value: 'a', label: '<script src="style.css">' },
            { value: 'b', label: '<link rel="stylesheet" href="style.css">' },
            { value: 'c', label: '<style src="style.css">' },
          ],
          correctAnswer: 'b',
        },
        {
          id: 'l5q4',
          text: 'Which CSS property controls the size of text?',
          options: [
            { value: 'a', label: 'font-size' },
            { value: 'b', label: 'text-style' },
            { value: 'c', label: 'text-size' },
          ],
          correctAnswer: 'a',
        },
        {
          id: 'l5q5',
          text: 'What is the correct syntax to select all <p> elements in CSS?',
          options: [
            { value: 'a', label: 'p { }' },
            { value: 'b', label: '#p { }' },
            { value: 'c', label: '.p { }' },
          ],
          correctAnswer: 'a',
        },
      ],
    },
  ],
};

export const STATS = [
  { value: 5,   suffix: '',  label: 'Lessons'        },
  { value: 25,  suffix: '',  label: 'Quiz Questions'  },
  { value: 100, suffix: '%', label: 'Free'            },
] as const;

export const FEATURES = [
  {
    icon: 'laptop',
    title: 'Learn Anywhere',
    description: 'Access your lessons on any device — laptop, tablet, or phone — whenever inspiration strikes.',
    colorClass: 'icon-a' as const,
  },
  {
    icon: 'quiz',
    title: 'Interactive Quizzes',
    description: 'Reinforce your understanding with instant-feedback quizzes designed to make concepts stick.',
    colorClass: 'icon-b' as const,
  },
  {
    icon: 'verified',
    title: 'Track Progress',
    description: 'See your learning journey unfold with clear progress indicators across all 5 lessons.',
    colorClass: 'icon-c' as const,
  },
] as const;
