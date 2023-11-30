export class Book {
  bookId: number;
  title: string;
  isbn: string;
  publicationYear: number;
  genre: string;
  language: string;
  pageCount: number;
  description: string;
  price: number;

  available: boolean;
  // private RentalInfo rentalInfo;
  author: string;
  publisher: string;
  rented: boolean;
  sellerEmailId: string;
  imageURL?: string;

  constructor(
    bookId: number,
    title: string,
    isbn: string,

    publicationYear: number,
    genre: string,
    language: string,
    pageCount: number,
    description: string,
    price: number,
    available: boolean,
    // private RentalInfo rentalInfo;
    author: string,
    publisher: string,
    rented: boolean,

    sellerEmailId: string,
    imageURL?: string
  ) {
    this.bookId = bookId;
    this.title = title;
    this.isbn = isbn;
    this.publicationYear = publicationYear;
    this.genre = genre;
    this.language = language;
    this.pageCount = pageCount;
    this.description = description;
    this.price = price;
    this.available = available;
    // private RentalInfo rentalInfo;
    this.author = author;
    this.publisher = publisher;
    this.rented = rented;
    this.sellerEmailId = sellerEmailId;
    this.imageURL = imageURL;
  }
}

// export const BOOKS: Book[]=[
//     {
//         bookId: 1,
//         title: 'Life Simplified',
//         isbn: '978-1-4828-1880-2',
//         publicationYear: 2014,
//         genre: 'Self-Help Book',
//         language:'English',
//        pageCount: 139,
//        description: 'The goal of this book is to keep you up and going at all times, orienting you toward your goals, empowering your life, empowering your decisions, resolving your mental conflicts, building a sound decision-making foundation on your mind, giving you an extra edge with the right attitudes, and eventually simplifying your life. This is a simple, unique, easy-to-read, and comprehensible piece of quality work, which is a treat even for nonreaders.',
//        price: 254,
//        available: false,
//        // private RentalInfo rentalInfo;
//        author:'Sujit Lalwani',
//        publisher: 'Partridge Publishing',
//        rented: false,
//        imageURL:'../../assets/images/life-simplified.jpg'

//     },
//     {
//         bookId: 2,
//         title: 'You Can Win',
//         isbn: '9382951717',
//         publicationYear: 2014,
//         genre: 'Self-Help Book',
//         language:'English',
//        pageCount: 314,
//        description: 'An easy-to-read, practical, common-sense guide that will take you from ancient wisdom to modern-day thinking, You Can Win helps you establish new goals, develop a new sense of purpose, and generate new ideas about yourself and your future. It guarantees, as the title suggests, a lifetime of success. The book enables you to translate positive thinking into attitude, ambition and action to give you the winning edge.This book will help you to:· Build confidence by mastering the seven steps to positive thinking· Be successful by turning weaknesses into strengths· Gain credibility by doing the right things for the right reasons· Take charge by controlling things instead of letting them control you· Build trust by developing mutual respect with people around you· Accomplish more by removing the barriers to effectiveness.',
//          price: 299,
//        available: false,
//        // private RentalInfo rentalInfo;
//        author:'Shiv Khera',
//        publisher: 'Bloomsbury India',
//        rented: false,
//        imageURL:'../../assets/images/you-can-win.jpg'
//     },
//     {
//         bookId: 3,
//         title: 'Ikigai',
//         isbn: '178633089X',
//         publicationYear: 2017,
//         genre: 'Self-Help Book',
//         language:'English',
//        pageCount: 208,
//        description: 'We all have an ikigai.Its the Japanese word for a reason to live or a reason to jump out of bed in the morning',
//          price: 279,
//        available: false,
//        // private RentalInfo rentalInfo;
//        author:'Francesc Miralles',
//        publisher: 'Hutchinson',
//        rented: false,
//        imageURL:'../../assets/images/ikigai-novel-book.jpg'
//     },
//     {
//         bookId: 4,
//         title: 'Follow Your Heart',
//         isbn: '9383888016',
//         publicationYear: 2015,
//         genre: 'Self-Help Book',
//         language:'English',
//        pageCount: 146,
//        description: 'FOLLOW YOUR HEART is about doing what you love and finding peace of mind. It is about dealing with disasters and not blaming others for them! It is about how happy people think, why rich people make money - even by accident - and it^s about what losers do, and how not to be like them! This book has touched the lives of millions of readers world-wide and helped them turn their life around. It shows you in a simple way of dealing with problems. Packed with stories, most of them from real life experience, that inspire you to find your own purpose in life. It shows you how to discover and pursue the things you love in life and find your own personal success. Illustrated with fun cartoons drawn by Andrew Matthews which are a treat for readers. Over two million copies sold in 42 languages.',
//          price: 270,
//        available: false,
//        // private RentalInfo rentalInfo;
//        author:'Andrew Matthews',
//        publisher: 'Embassy Books',
//        rented: false,
//        imageURL:'../../assets/images/follow-your-heart.jpg'
//     },
//     {
//         bookId: 5,
//         title: 'ROMEO AND JULIET',
//         isbn: '9789380816272',
//         publicationYear: 2010,
//         genre: 'Tragedy',
//         language:'English',
//        pageCount: 144,
//        description: '*?For never was a story of more woe than this of Juliet and her Romeo.?* *Romeo and Juliet is one of the most popular and frequently enacted plays penned by Shakespeare. Despite the violent feud between families, the play weaves a fated love story between two young lovers, the ?Montague? Romeo and the ?Capulet? Juliet. Their intense love leads to inseparability between lovers and open warfare between families, as ?Violent delights have violent ends.?* *Written at an early stage of Shakespeare?s literary career, every line breathes a certain passion and newness. It is beautifully adorned in imagery and symbolism. The play is often quoted, even today, as a quintessential example of immortality of love',
//          price: 98,
//        available: false,
//        // private RentalInfo rentalInfo;
//        author:'William Shakespeare',
//        publisher: 'Maple Press',
//        rented: false,
//        imageURL:'../../assets/images/romeo-and-juliet.jpg'
//     },
//     {
//         bookId: 6,
//         title: 'Inferiority Complex',
//         isbn: '9789386116536',
//         publicationYear: 2016,
//         genre: 'Self-Help Book',
//         language:'English',
//        pageCount: 127,
//        description: ' Many readers have transformed themselves after reading the book. This book deals with the unique qualities each individual possesses and focusses on the positive perspectives of human life.',
//          price: 90,
//        available: false,
//        // private RentalInfo rentalInfo;
//        author:'Snehalata Rohidekar',
//        publisher: 'Wisdom World',
//        rented: false,
//        imageURL:'../../assets/images/inferiority-complex.jpg'
//     },
//     {
//         bookId: 7,
//         title: 'The Four Agreements',
//         isbn: '9781878424310',
//         publicationYear: 1997,
//         genre: 'Personal Development, spiritual',
//         language:'English',
//        pageCount: 160,
//        description: 'n The Four Agreements, bestselling author don Miguel Ruiz reveals the source of self-limiting beliefs that rob us of joy and create needless suffering. Based on ancient Toltec wisdom, The Four Agreements offer a powerful code of conduct that can rapidly transform our lives to a new experience of freedom, true happiness, and love. • A New York Times bestseller for over a decade • Over 6.5 million copies sold in the U.S. • Translated into 40 languages worldwide"This book by don Miguel Ruiz, simple yet so powerful, has made a tremendous difference in how I think and act in every encounter." — Oprah Winfrey"Don Miguel Ruiz’s book is a roadmap to enlightenment and freedom." — Deepak Chopra, Author, The Seven Spiritual Laws of Success"An inspiring book with many great lessons." — Wayne Dyer, Author, Real Magic"In the tradition of Castaneda, Ruiz distills essential Toltec wisdom, expressing with clarity and impeccability what it means for men and women to live as peaceful warriors in the modern world." — Dan Millman, Author, Way of the Peaceful Warrior',
//          price: 645,
//        available: false,
//        // private RentalInfo rentalInfo;
//        author:'Don Miguel Ruiz',
//        publisher: 'Hay House',
//        rented: false,
//        imageURL:'../../assets/images/the-four-agreements.jpg'
//     },
//     {
//       bookId: 8,
//       title: 'Half Girlfriend ',
//       isbn: '8129135523',
//       publicationYear: 2014,
//       genre: 'comedy ,romance, drama ',
//       language:'English',
//      pageCount: 280,
//      description: 'Half Girlfriend is a story of Bihari boy Madhav, a Hindi speaking Bihari who falls in love with Riya, an influential Delhi girl on the campus of prestigious St. Stephen’s College. Madhav belongs to middle class family, while Riya is from higher class and both have different lifestyles. Madhav proposes her, but Riya rejects the proposal because she thinks they are good as a friend only. A romance novel for the young adults, Half Girlfriend is a story that has been set in different locations including Bihar, Delhi and New York; it revolves around a boy who comes from Bihar in India and his deep longing to dazzle out the girl he is in love with.',
//        price: 188,
//      available: false,
//      // private RentalInfo rentalInfo;
//      author:'Chetan Bhagat',
//      publisher: 'Rupa Publications India',
//      rented: false,
//      imageURL:'../../assets/images/half girlfriend.jpg'
//   },
//     {
//         bookId: 9,
//         title: 'Tenali Raman Story Book for Kids',
//         isbn: '9350338459',
//         publicationYear: 2017,
//         genre: 'Moral Book',
//         language:'English',
//        pageCount: 72,
//        description: 'This book consists of interesting stories about Tenali Raman, the Vikatakavi (jester poet) in the court of king Krishnadeva Raya during his reign in South India. Each tale in this book reveals some or all facets of Tenali’s characterwit, wisdom and fair play. He was the favourite courtier of king Krishnadeva Raya, advising him in matters of the state along with being a poet by profession. These stories will teach valuable morals to children through humorous anecdotes.',
//          price: 106,
//        available: false,
//        // private RentalInfo rentalInfo;
//        author:'Maple press',
//        publisher: 'Maple press',
//        rented: false,
//        imageURL:'../../assets/images/Tenali-Raman-Stories-For-Kids.jpg'
//     },
//     {
//         bookId: 10,
//         title: '2 STATES THE STORY OF MY MARRIAGE',
//         isbn: '8129135523',
//         publicationYear: 2014,
//         genre: 'comedy ,romance, drama',
//         language:'English',
//        pageCount: 269,
//        description: 'Reading books is a kind of enjoyment. Reading books is a good habit. We bring you a different kinds of books. You can carry this book where ever you want. It is easy to carry. It can be an ideal gift to yourself and to your loved ones. Care instruction keep away from fire.',
//          price: 212,
//        available: false,
//        // private RentalInfo rentalInfo;
//        author:'Chetan Bhagat',
//        publisher: 'Rupa Publications India',
//        rented: false,
//        imageURL:'../../assets/images/2_States_-_The_Story_Of_My_Marriage.jpg'
//     },

// ]
