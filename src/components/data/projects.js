const projects = [
  {
    projectId: 21,
    name: "8-Puzzle",
    shortDescription: "Apply AI to solve  the  eight puzzle game",
    description:
      "Implementing A-star search with different distance heuristics such as Manhattan, RowCol, MisPlaced Tile and None. With the GUI, users easily play the game.  The game can be solved automatically by AI. ",
    date: "2019",
    type: ["python", "AI", "PyQt", "GUI"],
    gif: [["Example", "RuIoLmQrzC.gif"]],
    sourceCode: "https://github.com/okrymus/8-puzzle"
  },
  {
    projectId: 22,
    name: "N-Queen",
    shortDescription: "",
    description: "",
    date: "2019",
    type: ["python", "AI", "PyQt", "GUI"],
    gif: [["Example", "RuIoLmQrzC.gif"]],
    sourceCode: ""
  },
  {
    projectId: 1,
    name: "Discourz",
    shortDescription:
      "Build a debate website. Users allows to interact with in real time",
    description:
      "Our team decided to create an application where you could have discussions, debates and polls about various topics with different users of the application. Users would be able to create their own profiles, their own debates, and their own polls that other users could interact with in real time. This is innovative because it makes the debate more interesting since it is in real time between two people. They can interact quickly for an unlimited amount of time until one of them ends a the debate. It is also innovative because it allows other users to give their opinion on who won the debate with a vote that is counted in real time. In order for the debate and discussion section to work the redits server must be used.",
    date: "Dec 12, 2018",
    type: ["django", "python"],
    img: [
      "login.png",
      "sign_up.png",
      "poll.png",
      "pastpolls.png",
      "profile.png",
      "UI_discussion.png"
    ],
    sourceCode: "https://github.com/Number535/Discourz_404",
    team: [
      "Dhruv Khurana",
      "Panupong Leenawarat",
      "Jared Pina",
      "Prakrit Saetang",
      "Patrick Conway",
      "Chen Xie"
    ]
  },
  {
    projectId: 19,
    name: "A Reliable Transport Protocol",
    shortDescription:
      "A reliable transport protocol for a messaging application",
    description:
      "Use UDP-based sender and receiver chat client programs that communicate through a chat server. Allow to run the chat server yourself on your local machine. The chat server can do one of exactly three things with the datagrams it receives: 1. process control commands and return response messages 2.relay messages to another client 3.echo messages(the default option).",
    date: "2019",
    type: ["python", "Networking", "Protocol"],
    sourceCode: "https://github.com/okrymus/a-reliable-transport-protocol"
  },
  {
    projectId: 20,
    name: "Socket Programming",
    shortDescription:
      "A program to download files using a client/server and a peer-to-peer approach.",
    description:
      "A program to download files using a traditional client/server approach (like HTTP) and compare it to a peer-to-peer approach (like BitTorrent).",
    date: "2019",
    type: ["python", "Networking", "Protocol"],
    sourceCode: "https://github.com/okrymus/socket-programming"
  },
  {
    projectId: 2,
    name: "With Me",
    shortDescription:
      "Created a social media web app. The web reverse normal social network websites' trend",
    description:
      "Today, with social media we are more connected than ever, yet we are also more alone than ever. Our project is a social media site that is optimized for meeting people in real life",
    award:
      "Prize from HERE.com. We intregated HERE api in our project to provide a great user's experience",
    date: "October 13-14, 2018",
    type: ["angular"],
    img: ["img.png", "img_2.png"],
    link: ""
  },
  {
    projectId: 3,
    name: "Okrymus Github io",
    shortDescription:
      "My personal website was developed with React. The propose is to collect my projects and to introduce myself ",
    description:
      "The website was develop with react and node.js. For the user interface, I decided to use Semantic UI React node to simplify the process to give a good user's experience. Moreover, the website will contain my journeys, and my projects including my personal contact's information.",

    date: "January 21-31, 2019",
    type: ["react", "node.js", "github"],
    sourceCode: "https://github.com/okrymus/okrymus.github.io",

    link: ""
  },
  {
    projectId: 4,
    name: "K-means Image Compression",
    description:
      "Applied k-means method in ML to reduce the size of image. In order to do so, replace each pixel in the original image with the centroid of the cluster assigned to that pixel. The program is able to reduce the size of image around 96% of the original image. However, the reconstructed image will contain only two colors black and white. For reconstructed image without loss, it can reduce around 70% of the original image's size",
    date: "December 14, 2018",
    type: ["sklearn", "python", "machine learning"],
    link: "",
    img: ["IMG_0.jpg", "IMG_1.png"]
  },
  {
    projectId: 5,
    name: "An Evening of Lively Arts",
    shortDescription: "Design an evening of performances and visual art",
    description:
      "This is a very imaginative project. The exhibit includes installation, music, poetry, essence",
    date: "December 12, 2018",
    type: ["word"],
    link: "",
    pdf: "Perfectly Imperfection.pdf"
  },
  {
    projectId: 6,
    name: "History Final Research Paper",
    shortDescription:
      "Computers used to wear a skirt during Sir Isaac Newton period",
    description:
      "The first computerized mechanism was invented in the 1820s by Charlse Babbage. However, computers used to wear a skirt during Sir Isaac Newton period. The word “computer” came out around 1613. In early 17th century, computers did not consume electricity but food. Computers were not made of microchips or CPUs. At that time, they were human. Human computers were much powerful for many tasks, such as performing mathematical calculations. Large problems were broken down into discrete parts that were process by hands. Human computers were used in various fields in history of science; physic, astronomy, mathematics, and chemistry.",
    date: "April 26, 2018",
    type: ["word"],
    link: "",
    pdf: "Human Computer.pdf"
  },
  {
    projectId: 7,
    name: "Disturbo tax",
    shortDescription: "Create the program to compute taxes",
    description:
      "Design a Windows Forms Application and implement controls to compute taxes. The application allows users to input, edit and delete their taxes information,. It stores user's data in xml file.",
    date: "April 26, 2018",
    type: ["c#", "Visual Studio", "xml"],
    link: "",
    gif: [["", "9TOhr6sTox.gif"]]
  },
  {
    projectId: 8,
    name: "Big Bucks Bank",
    shortDescription: "XML User Account Management in C#",
    description:
      "Design a Windows Forms Application and implement controls to perform as a ATM machine. The application allows users to deposit, check balance and transfer between accounts and withdrawal their mock money. It stores user's data in xml file.",
    date: "2017",
    type: ["c#", "Visual Studio", "xml"],
    link: "",
    gif: [
      ["Deposit", "deposit.gif"],
      ["Transfer", "transfer.gif"],
      ["Withdrawal", "withdrawal.gif"]
    ]
  },
  {
    projectId: 9,
    name: "Blackjack",
    shortDescription: "Simple game in python with an animation",
    description: "Created simple game in python",
    date: "2017",
    type: ["python"],
    link: "",
    gif: [["", "yLLN7eO4n5.gif"]]
  },
  {
    projectId: 10,
    name: "Online Hardware Store",
    shortDescription: "Shopping software",
    description:
      "The application reproduces online store that allows us uses to add the cart, view cart, and check out the cart. The program was written in C++ on visual studio. For the UI, I decided to design with the windows Form. On the toolbar, users can choose which actions he/she wants to process. For inventory, it updates and stores into a file everytime a user checked out products.    ",
    date: "2017",
    type: ["c++", "BinaryTree"],
    link: "",
    gif: [
      ["View Inventory", "view inventory.gif"],
      ["Add to cart", "add to cart.gif"],
      ["Checkout", "checkout.gif"],
      ["Remove from cart", "remove from cart.gif"]
    ]
  },
  {
    projectId: 11,
    name: "WindowMania",
    shortDescription: "The application reproduces a operating system",
    description:
      "The program initializes with splach window with warm welcome messages. Inside the program, it provides file operation such as copy, rename, delete, move ,set attribute a file. And Directory Operation such as copy, delete, move, new and rename a directory. File Shel Extension, it is a tree for a user's computer directory, allow user to select and open a file from here. A small text editor inside to program allows to edit, save and print texts. ",
    date: "2017",
    type: ["c++", "Shell command", "File management"],
    sourceCode: "https://github.com/okrymus/WindowMania",
    gif: [
      ["Splash window and view", "intro.gif"],
      ["File Operation", "File Operation.gif"],
      ["Directory Operation", "Directory Operation.gif"],
      ["File Shell Extension", "File Shell Extension.gif"],
      ["Text Edit and Print", "Text Edit and Print.gif"],
      ["Toolbar", "Toolbar.gif"],
      ["Splach window", "Shutdown.gif"]
    ]
  },
  {
    projectId: 12,
    name: "Lack of Laws to Protect Patients’ Biomedical Specimens",
    shortDescription:
      "The idea of “acquisition of specimens” has created controversy.",
    description:
      " Many people think that this acquisition impacts individual rights. I would like to know how the different is now from during the time of Henriatta and what the responsibilities of the medical profession for protecting the patients’ biomedical specimens are. I want to know about laws concerning patients’ biomedical specimens. If there is no law, what the laws should be?",
    date: "2017",
    type: ["word"],
    pdf: "Lack of Laws to Protect Patients’ Biomedical Specimens.pdf"
  },
  {
    projectId: 13,
    name: "Vigenère Cipher",
    shortDescription: "Vigenère Cipher is a technique in Cryptography.",
    description: "The program can perform encryption and decryption of Cypher",
    date: "2016",
    type: ["Java", "NetBeans"],
    gif: [["", "7GFwjVt7xj.gif"]],
    sourceCode: "https://github.com/okrymus/Vigen-re-Cipher",
    team: ["Prakrit S.", "Panupong L.", "Emerson M"]
  },
  {
    projectId: 14,
    name: "Cryptography And Note",
    shortDescription:
      "The program is focusing on the information security and the way to hide information.",
    description:
      "The program is focusing on the information security and the way to hide information. It uses the Vigenere cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution. The program performs as note program that allows the user to write a note on a date and export note between dates. In addition, we know that the binary file is not readable but if we can the file type to .txt, it will be readable some of its information. Therefore, before saving the file, the program will decode all information and then save it.",
    date: "2016",
    type: ["c++"],
    sourceCode: "https://github.com/okrymus/Cryptography-And-Note"
  },
  {
    projectId: 15,
    name: "The Currency Maintenance application",
    shortDescription:
      "The program is focusing on database and data organization.",
    description:
      "This program displays exchange rates. It allows users to add and delete currency",
    date: "2016",
    type: ["Java", "xml"],
    img: ["Capture.PNG"],
    sourceCode: "https://github.com/okrymus/Currency-Exchange"
  },
  {
    projectId: 16,
    name: "Word Cloud",
    shortDescription:
      "The program is focusing on database and data organization.",
    description:
      "The program enlarges or highlights size of the words which occurrence multiple time and display on the monitor. It doesn’t change font size for punctuation and superfluous words. Version 1: Only enlarge size of the words which occurrence multiple times and keep the sentence as appearing in the text file. Version 2: It selects only the words in the text file and display the words with enlarged size.If the word is occurrence the greatest times, its size will biggest too.",
    date: "2016",
    type: ["Java"],
    sourceCode: "https://github.com/okrymus/Word-Cloud"
  },
  {
    projectId: 17,
    name: "Amath Game",
    shortDescription: "Multi-Player game like Scabble",
    description:
      "Amath Game is a multi- player game. It allows users to play this game over the internet. The users need to create accout and sign in to play the game.The game stores users' records and statistics in mySQL database. Moreover, every users can see his/her rank.",
    date: "2016",
    type: ["Java", "mail", "mySQL"],
    sourceCode: "https://github.com/okrymus/Amath"
  },
  {
    projectId: 18,
    name: "German-English Dictionary",
    shortDescription: "Simple Dictionary Android App",
    description: "",
    date: "2017",
    type: ["android", "Java", "Android Studio"],
    sourceCode: "https://github.com/okrymus/Ger-EngDictionary"
  }
];

export default projects;
