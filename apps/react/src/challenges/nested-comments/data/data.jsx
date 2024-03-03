export const CommentsData = [
  {
    id: 1,
    name: 'Akshay Omkar',
    comment: 'This is the first comment.',
    replies: [
      {
        id: 101,
        name: 'Vihan',
        comment: 'Lorem Epsum',
        replies: [
          {
            id: 103,
            name: 'Sachin',
            comment: 'Nice Work 😀',
            replies: [
              {
                id: 103.1,
                name: 'John',
                comment: 'Thank You',
                replies: [{ id: 103.2, name: 'Akshay Omkar', comment: 'Thanks John', replies: [] }],
              },
            ],
          },
          { id: 104, name: 'Viraat', comment: 'Lit Bruh 👍', replies: [] },
          {
            id: 105,
            name: 'Sushant',
            comment: 'Very Helpfull',
            replies: [
              {
                id: 106,
                name: 'Akshay Omkar',
                comment: 'Thanks for Support Sir 🙏',
                replies: [{ id: 107, name: 'Sushant', comment: 'Keep Doing 👍', replies: [] }],
              },
            ],
          },
        ],
      },
      {
        id: 102,
        name: 'Aryan',
        comment: 'this is second Reply',
        replies: [
          {
            id: 103,
            name: 'Akshay',
            comment: 'Thanks For your support 😀',
            replies: [],
          },
          { id: 104, name: 'Shubham', comment: 'All the Best Bruh 👍', replies: [] },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Sonam',
    comment: 'Nice Project',
    replies: [
      { id: 201, name: 'Hanuman', comment: 'Thanks', replies: [] },
      { id: 202, name: 'Sandeep', comment: 'Helpfull!!', replies: [] },
    ],
  },
];
