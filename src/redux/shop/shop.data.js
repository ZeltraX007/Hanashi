const SHOP_DATA = [
  {
    id: 1,
    title: "Science-Fiction",
    routeName: "sci-fi",
    items: [
      {
        id: 1,
        name: "The Time Machine",
        by: "H.G. Wells",
        imageUrl: "https://m.media-amazon.com/images/I/51V3fk728LL.jpg",
        price: 25
      },
      {
        id: 2,
        name: "The Martian Chronicles",
        by: "Ray Bradbury",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333349814l/13259262.jpg",
        price: 18
      },
      {
        id: 3,
        name: "Dune",
        by: "Frank Herbert",
        imageUrl: "https://m.media-amazon.com/images/I/41UZeCEKOBL.jpg",
        price: 35
      },
      {
        id: 4,
        name: "The Moon Is a Harsh Mistress",
        by: "Robert A. Heinlein",
        imageUrl: "https://m.media-amazon.com/images/I/51UBAp4Lo+L.jpg",
        price: 25
      },
      {
        id: 5,
        name: "2001: A Space Odyssey",
        by: "Arthur C. Clarke",
        imageUrl: "https://m.media-amazon.com/images/I/51pHccoWLdL.jpg",
        price: 18
      },
      {
        id: 6,
        name: "Do Androids Dream of Electric Sheep?",
        by: "Philip K. Dick",
        imageUrl: "https://m.media-amazon.com/images/I/31bNBTT29nL.jpg",
        price: 14
      },
      {
        id: 7,
        name: "Slaughterhouse-Five",
        by: "Kurt Vonnegut",
        imageUrl: "https://m.media-amazon.com/images/I/41lFSUzAwiL.jpg",
        price: 18
      },
      {
        id: 8,
        name: " The Female Man",
        by: "Joanna Russ",
        imageUrl: "https://m.media-amazon.com/images/I/51DVN1tpTQL.jpg",
        price: 14
      },
      {
        id: 9,
        name: "The Stand",
        by: "Stephen King",
        imageUrl: "https://m.media-amazon.com/images/I/41ISGxpFzmL.jpg",
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: "Romance",
    routeName: "romance",
    items: [
      {
        id: 10,
        name: "The Invisible Life of Addie LaRue",
        by: "Stephen King",
        imageUrl: "https://m.media-amazon.com/images/I/51OipynKAVL.jpg",
        price: 220
      },
      {
        id: 11,
        name: "It Ends with Us: A Novel",
        by: "Colleen Hoover",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._SX320_BO1,204,203,200_.jpg",
        price: 280
      },
      {
        id: 12,
        name: "A Touch of Darkness (Hades X Persephone Book 1)",
        by: "Scarlett St. Clair",
        imageUrl: "https://m.media-amazon.com/images/I/51khi7TjNwL.jpg",
        price: 110
      },
      {
        id: 13,
        name: "The Wish",
        by: "Nicholas Sparks",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wfzg618CL._SX328_BO1,204,203,200_.jpg",
        price: 160
      },
      {
        id: 14,
        name: "The Seven Husbands of Evelyn Hugo: A Novel",
        by: "Taylor Jenkins Reid",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41FYr12RflL._SX320_BO1,204,203,200_.jpg",
        price: 160
      },
      {
        id: 15,
        name: "Wuthering Heights (Penguin Classics)",
        by: "Emily Brontë",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41dAOQBWAUL._SX325_BO1,204,203,200_.jpg",
        price: 160
      },
      {
        id: 16,
        name: "The Love Hypothesis",
        by: "Ali Hazelwood",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51uq6tDW6SL._SX331_BO1,204,203,200_.jpg",
        price: 190
      },
      {
        id: 17,
        name: "Romeo and Juliet",
        by: "William Shakespeare",
        imageUrl: "https://www.travellingbookjunkie.com/wp-content/uploads/2016/02/Romeo-and-Juilet.jpg",
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: "Mystery",
    routeName: "mystery",
    items: [
      {
        id: 18,
        name: "And Then There Were None",
        by: "Agatha Christie",
        imageUrl: "https://m.media-amazon.com/images/I/41l02vDN4pL.jpg",
        price: 125
      },
      {
        id: 19,
        name: "The Big Sleep",
        by: "Raymond Chandler",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1371584712l/2052.jpg",
        price: 90
      },
      {
        id: 20,
        name: "Gone Girl",
        by: "Gillian Flynn",
        imageUrl: "https://m.media-amazon.com/images/I/414FyC8BAuL.jpg",
        price: 90
      },
      {
        id: 21,
        name: "The Da Vinci Code",
        by: "Dan Brown",
        imageUrl: "https://m.media-amazon.com/images/I/41KuPr7kpZL.jpg",
        price: 165
      },
      {
        id: 22,
        name: "The Girl with the Dragon Tattoo",
        by: "Stieg Larsson",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1368789521l/12182809.jpg",
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: "Horror",
    routeName: "horror",
    items: [
      {
        id: 23,
        name: "The Haunting of Hill House",
        by: "Shirley Jackson",
        imageUrl: "https://prodimage.images-bn.com/pimages/9780143039983_p0_v5_s192x300.jpg",
        price: 25
      },
      {
        id: 24,
        name: "We Need to Talk about Kevin",
        by: "Lionel Shriver",
        imageUrl: "https://prodimage.images-bn.com/pimages/9780062119049_p0_v2_s192x300.jpg",
        price: 20
      },
      {
        id: 25,
        name: "Ring",
        by: "Kōji Suzuki",
        imageUrl: "https://prodimage.images-bn.com/pimages/9781932234411_p0_v2_s192x300.jpg",
        price: 80
      },
      {
        id: 26,
        name: "Penpal",
        by: "Dathan Auerbach",
        imageUrl: "https://prodimage.images-bn.com/pimages/9780985545505_p0_v2_s192x300.jpg",
        price: 80
      },
      {
        id: 27,
        name: "Carrion Comfort",
        by: "Dan Simmons",
        imageUrl: "https://prodimage.images-bn.com/pimages/9780312567071_p0_v4_s192x300.jpg",
        price: 45
      },
      {
        id: 28,
        name: "Exquisite Corpse",
        by: "Poppy Z. Brite",
        imageUrl: "https://prodimage.images-bn.com/pimages/9780684836270_p0_v4_s192x300.jpg",
        price: 135
      },
      {
        id: 29,
        name: "Something Wicked This Way Comes: A Novel",
        by: "Ray Bradbury",
        imageUrl: "https://prodimage.images-bn.com/pimages/9781501167713_p0_v4_s192x300.jpg",
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: "Non-Fiction",
    routeName: "non-fic",
    items: [
      {
        id: 30,
        name: "Scary Smart",
        by: "Mo Gawdat",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529077186.jpg",
        price: 325
      },
      {
        id: 31,
        name: "A Bigger Picture",
        by: "Vanessa Nakate",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529075687.jpg",
        price: 20
      },
      {
        id: 32,
        name: "A World on the Wing",
        by: "Scott Weidensaul",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781509841035.jpg",
        price: 25
      },
      {
        id: 33,
        name: "Wayfinding",
        by: "Michael Bond",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781509841066.jpg",
        price: 25
      },
      {
        id: 34,
        name: "Empire of Pain",
        by: "Patrick Radden Keefe",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529062489.jpg",
        price: 40
      },
      {
        id: 35,
        name: "How to Make an Apple Pie from Scratch",
        by: "Harry Cliff",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529026191.jpg",
        price: 25
      }
    ]
  },
  {
    id: 6,
    title: "Classics",
    routeName: "classics",
    items: [
      {
        id: 36,
        name: "To Kill A Mockingbird",
        by: "Harper Lee",
        imageUrl: "https://www.penguin.co.uk/content/dam/prh/books/108/1088099/9781784752637.jpg.transform/PRHDesktopWide_small/image.jpg",
        price: 325
      },
      {
        id: 37,
        name: "One Hundred Years of Solitude",
        by: "Gabriel Garcia Marquez",
        imageUrl: "https://www.penguin.co.uk/content/dam/prh/books/562/56215/9780241968581.jpg.transform/PRHDesktopWide_small/image.jpg",
        price: 20
      },
      {
        id: 38,
        name: "Brave New World",
        by: "Aldous Huxley",
        imageUrl: "https://www.penguin.co.uk/content/dam/prh/books/111/1110001/9781784870140.jpg.transform/PRHDesktopWide_small/image.jpg",
        price: 25
      },
      {
        id: 39,
        name: "Jane Eyre",
        by: "Charlotte Bronte",
        imageUrl: "https://www.penguin.co.uk/content/dam/prh/books/342/34231/9780141040387.jpg.transform/PRHDesktopWide_small/image.jpg",
        price: 25
      },
      {
        id: 40,
        name: "Crime and Punishment",
        by: "Fyodor Dostoyevsky",
        imageUrl: "https://www.penguin.co.uk/content/dam/prh/books/354/35469/9780140449136.jpg.transform/PRHDesktopWide_small/image.jpg",
        price: 40
      },
      {
        id: 41,
        name: "Persuasion",
        by: "Jane Austen",
        imageUrl: "https://www.penguin.co.uk/content/dam/prh/books/559/55906/9780141197692.jpg.transform/PRHDesktopWide_small/image.jpg",
        price: 25
      }
    ]
  },
  {
    id: 7,
    title: "Fantasy",
    routeName: "fantasy",
    items: [
      {
        id: 42,
        name: "A Game of Thrones (A Song of Ice and Fire, Book 1)",
        by: "George R. R. Martin",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/5163N91r6lL._SX302_BO1,204,203,200_.jpg",
        price: 325
      },
      {
        id: 43,
        name: "The Library of the Dead",
        by: "T. L. Huchu",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529039467.jpg",
        price: 20
      }, 
      {
        id: 44,
        name: "Harry Potter and the Deathly Hallows",
        by: "J.K. Rowling",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474171184l/136251._SY475_.jpg",
        price: 25
      },
      
      {
        id: 45,
        name: "Six of Crows (Six of Crows, 1)",
        by: "Leigh Bardugo",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628438817l/23437156._SX318_.jpg",
        price: 25
      },
      {
        id: 46,
        name: "Assassin's Apprentice (The Farseer Trilogy, Book 1)",
        by: "Robin Hobb",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/519WCvb8SLL._SX303_BO1,204,203,200_.jpg",
        price: 25
      },
      {
        id: 47,
        name: "Kushiel's Dart",
        by: "Jacqueline Carey",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wLYmfwMbL._SX308_BO1,204,203,200_.jpg",
        price: 40
      },
     
    ]
  }
];

export default SHOP_DATA;

