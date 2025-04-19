
// This is mock data for the Bible Analyzer app
// In a real application, this would come from an API or database

export const bibleBooks = [
  { name: "Genesis", chapters: 50 },
  { name: "Exodus", chapters: 40 },
  { name: "Leviticus", chapters: 27 },
  { name: "Numbers", chapters: 36 },
  { name: "Deuteronomy", chapters: 34 },
  { name: "Joshua", chapters: 24 },
  { name: "Judges", chapters: 21 },
  { name: "Ruth", chapters: 4 },
  { name: "1 Samuel", chapters: 31 },
  { name: "2 Samuel", chapters: 24 },
  { name: "1 Kings", chapters: 22 },
  { name: "2 Kings", chapters: 25 },
  { name: "Matthew", chapters: 28 },
  { name: "Mark", chapters: 16 },
  { name: "Luke", chapters: 24 },
  { name: "John", chapters: 21 },
  { name: "Acts", chapters: 28 },
  { name: "Romans", chapters: 16 },
  { name: "1 Corinthians", chapters: 16 },
  { name: "2 Corinthians", chapters: 13 },
  { name: "Galatians", chapters: 6 },
  { name: "Ephesians", chapters: 6 },
  { name: "Philippians", chapters: 4 },
  { name: "Colossians", chapters: 4 },
  { name: "1 Thessalonians", chapters: 5 },
  { name: "2 Thessalonians", chapters: 3 },
  { name: "1 Timothy", chapters: 6 },
  { name: "2 Timothy", chapters: 4 },
  { name: "Titus", chapters: 3 },
  { name: "Philemon", chapters: 1 },
  { name: "Hebrews", chapters: 13 },
  { name: "James", chapters: 5 },
  { name: "1 Peter", chapters: 5 },
  { name: "2 Peter", chapters: 3 },
  { name: "1 John", chapters: 5 },
  { name: "2 John", chapters: 1 },
  { name: "3 John", chapters: 1 },
  { name: "Jude", chapters: 1 },
  { name: "Revelation", chapters: 22 },
];

export const getScripture = (book: string, chapter: number) => {
  // Mock data for John 3
  if (book === "John" && chapter === 3) {
    return [
      { verse: 1, text: "Now there was a Pharisee, a man named Nicodemus who was a member of the Jewish ruling council." },
      { verse: 2, text: "He came to Jesus at night and said, \"Rabbi, we know that you are a teacher who has come from God. For no one could perform the signs you are doing if God were not with him.\"" },
      { verse: 3, text: "Jesus replied, \"Very truly I tell you, no one can see the kingdom of God unless they are born again.\"" },
      { verse: 4, text: "\"How can someone be born when they are old?\" Nicodemus asked. \"Surely they cannot enter a second time into their mother's womb to be born!\"" },
      { verse: 5, text: "Jesus answered, \"Very truly I tell you, no one can enter the kingdom of God unless they are born of water and the Spirit.\"" },
      { verse: 6, text: "Flesh gives birth to flesh, but the Spirit gives birth to spirit." },
      { verse: 7, text: "You should not be surprised at my saying, 'You must be born again.'" },
      { verse: 8, text: "The wind blows wherever it pleases. You hear its sound, but you cannot tell where it comes from or where it is going. So it is with everyone born of the Spirit.\"" },
      { verse: 9, text: "\"How can this be?\" Nicodemus asked." },
      { verse: 10, text: "\"You are Israel's teacher,\" said Jesus, \"and do you not understand these things?\"" },
      { verse: 11, text: "Very truly I tell you, we speak of what we know, and we testify to what we have seen, but still you people do not accept our testimony." },
      { verse: 12, text: "I have spoken to you of earthly things and you do not believe; how then will you believe if I speak of heavenly things?" },
      { verse: 13, text: "No one has ever gone into heaven except the one who came from heaven—the Son of Man." },
      { verse: 14, text: "Just as Moses lifted up the snake in the wilderness, so the Son of Man must be lifted up," },
      { verse: 15, text: "that everyone who believes may have eternal life in him.\"" },
      { verse: 16, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
      { verse: 17, text: "For God did not send his Son into the world to condemn the world, but to save the world through him." },
    ];
  }
  
  // Mock data for 1 John 1
  if (book === "1 John" && chapter === 1) {
    return [
      { verse: 1, text: "That which was from the beginning, which we have heard, which we have seen with our eyes, which we have looked at and our hands have touched—this we proclaim concerning the Word of life." },
      { verse: 2, text: "The life appeared; we have seen it and testify to it, and we proclaim to you the eternal life, which was with the Father and has appeared to us." },
      { verse: 3, text: "We proclaim to you what we have seen and heard, so that you also may have fellowship with us. And our fellowship is with the Father and with his Son, Jesus Christ." },
      { verse: 4, text: "We write this to make our joy complete." },
      { verse: 5, text: "This is the message we have heard from him and declare to you: God is light; in him there is no darkness at all." },
      { verse: 6, text: "If we claim to have fellowship with him and yet walk in the darkness, we lie and do not live out the truth." },
      { verse: 7, text: "But if we walk in the light, as he is in the light, we have fellowship with one another, and the blood of Jesus, his Son, purifies us from all sin." },
      { verse: 8, text: "If we claim to be without sin, we deceive ourselves and the truth is not in us." },
      { verse: 9, text: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." },
      { verse: 10, text: "If we claim we have not sinned, we make him out to be a liar and his word is not in us." },
    ];
  }
  
  // Mock data for Romans 8
  if (book === "Romans" && chapter === 8) {
    return [
      { verse: 1, text: "Therefore, there is now no condemnation for those who are in Christ Jesus," },
      { verse: 2, text: "because through Christ Jesus the law of the Spirit who gives life has set you free from the law of sin and death." },
      { verse: 3, text: "For what the law was powerless to do because it was weakened by the flesh, God did by sending his own Son in the likeness of sinful flesh to be a sin offering. And so he condemned sin in the flesh," },
      { verse: 4, text: "in order that the righteous requirement of the law might be fully met in us, who do not live according to the flesh but according to the Spirit." },
      { verse: 5, text: "Those who live according to the flesh have their minds set on what the flesh desires; but those who live in accordance with the Spirit have their minds set on what the Spirit desires." },
      { verse: 6, text: "The mind governed by the flesh is death, but the mind governed by the Spirit is life and peace." },
      { verse: 7, text: "The mind governed by the flesh is hostile to God; it does not submit to God's law, nor can it do so." },
      { verse: 8, text: "Those who are in the realm of the flesh cannot please God." },
      { verse: 9, text: "You, however, are not in the realm of the flesh but are in the realm of the Spirit, if indeed the Spirit of God lives in you. And if anyone does not have the Spirit of Christ, they do not belong to Christ." },
      { verse: 10, text: "But if Christ is in you, then even though your body is subject to death because of sin, the Spirit gives life because of righteousness." },
    ];
  }
  
  // Default return for other books/chapters
  return Array.from({ length: 10 }, (_, i) => ({
    verse: i + 1,
    text: `Sample verse text for ${book} ${chapter}:${i + 1}.`,
  }));
};

export const getCommentary = (book: string, chapter: number, verse?: number) => {
  // Mock commentary for John 3:16
  if (book === "John" && chapter === 3 && (!verse || verse === 16)) {
    return {
      title: "John 3:16 - God's Love for the World",
      content: "This verse has been called 'the gospel in a nutshell' because it provides a stunningly succinct summary of the gospel's essential content. The love of God is the source of salvation, the Son of God is the means of salvation, and faith is the way this salvation is received. The verse reveals the incredible generosity of God - that God gave his 'only begotten Son', a phrase that emphasizes Christ's uniqueness.",
      references: [
        { text: "Rom 5:8", link: "#" },
        { text: "1 John 4:9-10", link: "#" },
        { text: "Rom 8:32", link: "#" }
      ],
      greekWords: [
        { 
          original: "ἀγαπάω", 
          transliteration: "agapaō", 
          definition: "To love, value, esteem, feel or manifest generous concern for, be faithful towards." 
        },
        { 
          original: "κόσμος", 
          transliteration: "kosmos", 
          definition: "The world, universe; worldly affairs; the inhabitants of the world; adornment." 
        },
        { 
          original: "μονογενής", 
          transliteration: "monogenēs", 
          definition: "Only begotten, only, unique, of only one kind." 
        }
      ]
    };
  }
  
  // Mock commentary for Romans 8:1
  if (book === "Romans" && chapter === 8 && (!verse || verse === 1)) {
    return {
      title: "Romans 8:1 - No Condemnation in Christ",
      content: "This powerful declaration begins one of the most significant chapters in Scripture on the work of the Holy Spirit in the believer's life. Having discussed the struggle with sin in chapter 7, Paul now transitions to the solution found in Christ Jesus. 'Therefore' connects back to Paul's thanksgiving for deliverance through Jesus Christ (7:25) and points forward to the reason for that deliverance.",
      references: [
        { text: "John 3:18", link: "#" },
        { text: "Rom 5:1", link: "#" },
        { text: "Rom 8:33-34", link: "#" }
      ],
      greekWords: [
        { 
          original: "κατάκριμα", 
          transliteration: "katakrima", 
          definition: "Condemnation, punishment following sentence." 
        },
        { 
          original: "ἐν Χριστῷ Ἰησοῦ", 
          transliteration: "en Christō Iēsou", 
          definition: "In Christ Jesus - a key Pauline phrase indicating the believer's union with Christ." 
        }
      ]
    };
  }
  
  // Default commentary for other verses
  return {
    title: `Commentary on ${book} ${chapter}${verse ? `:${verse}` : ""}`,
    content: "This passage reflects important theological themes within the biblical narrative. The text invites readers to consider both the historical context and the spiritual applications for contemporary faith communities.",
    references: [
      { text: "Reference 1", link: "#" },
      { text: "Reference 2", link: "#" }
    ]
  };
};

export const recentlyViewed = [
  { book: "John", chapter: 3, verse: 16 },
  { book: "Romans", chapter: 8, verse: 1 },
  { book: "1 John", chapter: 1, verse: 9 },
  { book: "Philippians", chapter: 4, verse: 13 }
];

export const bookmarkedVerses = [
  { book: "John", chapter: 3, verse: 16, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
  { book: "Romans", chapter: 8, verse: 28, text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
  { book: "Philippians", chapter: 4, verse: 13, text: "I can do all this through him who gives me strength." }
];
