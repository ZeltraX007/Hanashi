const SHOP_DATA = [
  {
    id: 1,
    title: "Science-Fiction",
    routeName: "scifi",
    items: [
      {
        id: 1,
        name: "The Time Machine",
        by: "H.G. Wells",
        desc: "a",
        imageUrl: "https://m.media-amazon.com/images/I/51V3fk728LL.jpg",
        price: 25
      },
      {
        id: 2,
        name: "The Martian Chronicles",
        by: "Ray Bradbury",
        desc: "a",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333349814l/13259262.jpg",
        price: 18
      },
      {
        id: 3,
        name: "Dune",
        by: "Frank Herbert",
        desc: "a",
        imageUrl: "https://m.media-amazon.com/images/I/41UZeCEKOBL.jpg",
        price: 35
      },
      {
        id: 4,
        name: "The Moon Is a Harsh Mistress",
        by: "Robert A. Heinlein",
        desc: "a",
        imageUrl: "https://m.media-amazon.com/images/I/51UBAp4Lo+L.jpg",
        price: 25
      },
      {
        id: 5,
        name: "2001: A Space Odyssey",
        by: "Arthur C. Clarke",
        desc: "a",
        imageUrl: "https://m.media-amazon.com/images/I/51pHccoWLdL.jpg",
        price: 18
      },
      {
        id: 6,
        name: "Do Androids Dream of Electric Sheep?",
        by: "Philip K. Dick",
        desc: "a",
        imageUrl: "https://m.media-amazon.com/images/I/31bNBTT29nL.jpg",
        price: 14
      },
      {
        id: 7,
        name: "Slaughterhouse-Five",
        by: "Kurt Vonnegut",
        desc: "a",
        imageUrl: "https://m.media-amazon.com/images/I/41lFSUzAwiL.jpg",
        price: 18
      },
      {
        id: 8,
        name: " The Female Man",
        by: "Joanna Russ",
        desc: "a",
        imageUrl: "https://m.media-amazon.com/images/I/51DVN1tpTQL.jpg",
        price: 14
      },
      {
        id: 9,
        name: "The Stand",
        by: "Stephen King",
        desc: "a",
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
        by: "V.E. Schwab",
        desc: "a",
        imageUrl: "https://m.media-amazon.com/images/I/51OipynKAVL.jpg",
        price: 220
      },
      {
        id: 11,
        name: "It Ends with Us: A Novel",
        by: "Colleen Hoover",
        desc: "a",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51irsfz72HL._SX320_BO1,204,203,200_.jpg",
        price: 280
      },
      {
        id: 12,
        name: "A Touch of Darkness",
        by: "Scarlett St. Clair",
        desc: "a",
        imageUrl: "https://m.media-amazon.com/images/I/51khi7TjNwL.jpg",
        price: 110
      },
      {
        id: 13,
        name: "The Wish",
        by: "Nicholas Sparks",
        desc: "a",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wfzg618CL._SX328_BO1,204,203,200_.jpg",
        price: 160
      },
      {
        id: 14,
        name: "The Seven Husbands of Evelyn Hugo: A Novel",
        by: "Taylor Jenkins Reid",
        desc: "a",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41FYr12RflL._SX320_BO1,204,203,200_.jpg",
        price: 160
      },
      {
        id: 15,
        name: "Wuthering Heights (Penguin Classics)",
        by: "Emily Brontë",
        desc: "a",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41dAOQBWAUL._SX325_BO1,204,203,200_.jpg",
        price: 160
      },
      {
        id: 16,
        name: "The Love Hypothesis",
        by: "Ali Hazelwood",
        desc: "a",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51uq6tDW6SL._SX331_BO1,204,203,200_.jpg",
        price: 190
      },
      {
        id: 17,
        name: "Romeo and Juliet",
        by: "William Shakespeare",
        desc: "a",
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
        desc: "a",
        imageUrl: "https://m.media-amazon.com/images/I/41l02vDN4pL.jpg",
        price: 125
      },
      {
        id: 19,
        name: "The Big Sleep",
        by: "Raymond Chandler",
        desc: "a",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1371584712l/2052.jpg",
        price: 90
      },
      {
        id: 20,
        name: "Gone Girl",
        by: "Gillian Flynn",
        desc: "a",
        imageUrl: "https://m.media-amazon.com/images/I/414FyC8BAuL.jpg",
        price: 90
      },
      {
        id: 21,
        name: "The Da Vinci Code",
        by: "Dan Brown",
        desc: "a",
        imageUrl: "https://m.media-amazon.com/images/I/41KuPr7kpZL.jpg",
        price: 165
      },
      {
        id: 22,
        name: "The Girl with the Dragon Tattoo",
        by: "Stieg Larsson",
        desc: "a",
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
        desc: "a",
        imageUrl: "https://prodimage.images-bn.com/pimages/9780143039983_p0_v5_s192x300.jpg",
        price: 25
      },
      {
        id: 24,
        name: "We Need to Talk about Kevin",
        by: "Lionel Shriver",
        desc: "a",
        imageUrl: "https://prodimage.images-bn.com/pimages/9780062119049_p0_v2_s192x300.jpg",
        price: 20
      },
      {
        id: 25,
        name: "Ring",
        by: "Kōji Suzuki",
        desc: "a",
        imageUrl: "https://prodimage.images-bn.com/pimages/9781932234411_p0_v2_s192x300.jpg",
        price: 80
      },
      {
        id: 26,
        name: "Penpal",
        by: "Dathan Auerbach",
        desc: "a",
        imageUrl: "https://prodimage.images-bn.com/pimages/9780985545505_p0_v2_s192x300.jpg",
        price: 80
      },
      {
        id: 27,
        name: "Carrion Comfort",
        by: "Dan Simmons",
        desc: "a",
        imageUrl: "https://prodimage.images-bn.com/pimages/9780312567071_p0_v4_s192x300.jpg",
        price: 45
      },
      {
        id: 28,
        name: "Exquisite Corpse",
        by: "Poppy Z. Brite",
        desc: "a",
        imageUrl: "https://prodimage.images-bn.com/pimages/9780684836270_p0_v4_s192x300.jpg",
        price: 135
      },
      {
        id: 29,
        name: "Something Wicked This Way Comes: A Novel",
        by: "Ray Bradbury",
        desc: "a",
        imageUrl: "https://prodimage.images-bn.com/pimages/9781501167713_p0_v4_s192x300.jpg",
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: "Non-Fiction",
    routeName: "nonfic",
    items: [
      {
        id: 30,
        name: "Scary Smart",
        by: "Mo Gawdat",
        desc: "a",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529077186.jpg",
        price: 325
      },
      {
        id: 31,
        name: "A Bigger Picture",
        by: "Vanessa Nakate",
        desc: "a",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529075687.jpg",
        price: 20
      },
      {
        id: 32,
        name: "A World on the Wing",
        by: "Scott Weidensaul",
        desc: "a",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781509841035.jpg",
        price: 25
      },
      {
        id: 33,
        name: "Wayfinding",
        by: "Michael Bond",
        desc: "a",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781509841066.jpg",
        price: 25
      },
      {
        id: 34,
        name: "Empire of Pain",
        by: "Patrick Radden Keefe",
        desc: "a",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529062489.jpg",
        price: 40
      },
      {
        id: 35,
        name: "How to Make an Apple Pie from Scratch",
        by: "Harry Cliff",
        desc: "a",
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
        desc: "a",
        imageUrl: "https://www.penguin.co.uk/content/dam/prh/books/108/1088099/9781784752637.jpg.transform/PRHDesktopWide_small/image.jpg",
        price: 325
      },
      {
        id: 37,
        name: "One Hundred Years of Solitude",
        by: "Gabriel Garcia Marquez",
        desc: "a",
        imageUrl: "https://www.penguin.co.uk/content/dam/prh/books/562/56215/9780241968581.jpg.transform/PRHDesktopWide_small/image.jpg",
        price: 20
      },
      {
        id: 38,
        name: "Brave New World",
        by: "Aldous Huxley",
        desc: "a",
        imageUrl: "https://www.penguin.co.uk/content/dam/prh/books/111/1110001/9781784870140.jpg.transform/PRHDesktopWide_small/image.jpg",
        price: 25
      },
      {
        id: 39,
        name: "Jane Eyre",
        by: "Charlotte Bronte",
        desc: "a",
        imageUrl: "https://www.penguin.co.uk/content/dam/prh/books/342/34231/9780141040387.jpg.transform/PRHDesktopWide_small/image.jpg",
        price: 25
      },
      {
        id: 40,
        name: "Crime and Punishment",
        by: "Fyodor Dostoyevsky",
        desc: "a",
        imageUrl: "https://www.penguin.co.uk/content/dam/prh/books/354/35469/9780140449136.jpg.transform/PRHDesktopWide_small/image.jpg",
        price: 40
      },
      {
        id: 41,
        name: "Persuasion",
        by: "Jane Austen",
        desc: "a",
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
        name: "A Game of Thrones",
        by: "George R. R. Martin",
        desc: "a",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/5163N91r6lL._SX302_BO1,204,203,200_.jpg",
        price: 325
      },
      {
        id: 43,
        name: "The Library of the Dead",
        by: "T. L. Huchu",
        desc: "a",
        imageUrl: "https://ik.imagekit.io/panmac/tr:q-75,di-placeholder_portrait_aMjPtD9YZ.jpg,w-350,pr-true,bl/edition/9781529039467.jpg",
        price: 20
      }, 
      {
        id: 44,
        name: "Harry Potter and the Deathly Hallows",
        by: "J.K. Rowling",
        desc: "a",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474171184l/136251._SY475_.jpg",
        price: 25
      },
      
      {
        id: 45,
        name: "Six of Crows (Six of Crows, 1)",
        by: "Leigh Bardugo",
        desc: "a",
        imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1628438817l/23437156._SX318_.jpg",
        price: 25
      },
      {
        id: 46,
        name: "Assassin's Apprentice (The Farseer Trilogy, Book 1)",
        by: "Robin Hobb",
        desc: "a",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/519WCvb8SLL._SX303_BO1,204,203,200_.jpg",
        price: 25
      },
      {
        id: 47,
        name: "Kushiel's Dart",
        by: "Jacqueline Carey",
        desc: "a",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wLYmfwMbL._SX308_BO1,204,203,200_.jpg",
        price: 40
      },
     
    ]
  }
];

export default SHOP_DATA;

