export type LetterMood = 'Soft' | 'Grateful' | 'Playful' | 'Serious' | 'Milestone'

export type LetterTone = 'All' | LetterMood

export type LetterItem = {
  id: string
  title: string
  subtitle: string
  dateLabel: string
  tone: LetterMood
  teaser: string
  pov?: string
  salutation?: string
  paragraphs: string[]
  closing?: string
  signature?: string
  footer?: string
}

export const LETTER_TONES: LetterTone[] = [
  'All',
  'Soft',
  'Grateful',
  'Playful',
  'Serious',
  'Milestone',
]

export const letters: LetterItem[] = [
  {
    id: 'november-09-2025',
    title: 'November 9, 2025',
    subtitle: 'Letter 01',
    dateLabel: 'Monthsary 01',
    tone: 'Milestone',
    teaser:
      'The first monthsary letter — the one where I wrote about what my life would have been like if I never met you.',
    pov: 'JOHN',
    paragraphs: [
      'Here I am again, lost in thought, asking myself the question that lingers in the quiet of my heart. What would my life have been like if I had never met you?',
      'I know the answer, and it terrifies me. I would still be trapped in that dark, lonely place where I had no one to lean on, no hand to reach for when the weight of the world pressed down. I would still be fighting alone, drowning slowly in the endless tide of my emotions, sinking deeper and deeper into shadows I thought I’d never escape. I never even imagined there was a way out… until you.',
      'A heavy sigh escapes me, but this time it’s not of despair. It’s relief. Gratitude. Because I realize just how lucky I am to have you. You, who love me without condition, who make sacrifices without hesitation. You, strong enough to face storms that would break anyone else, resilient enough to rise every time the world tries to pull you down. Even when others doubted you, you stood tall, chin lifted, proving them wrong not with anger, but with undeniable strength.',
      'The little things about you never fail to undo me. The way your hair dances when the wind brushes past. The way your eyes, those alluring, steady eyes, find mine as if I’m the only soul you see. The way your smile lifts the heaviness off my chest, as though light itself bends toward you. You are not perfect, but you are everything I ever dreamed of, my girl, my best friend, my wife. And God, I would do anything for you. Anything for that smile.',
      'I love you not just for your brilliance and your beauty, but for your flaws too, for the mistakes you’ve made, for the bad decisions you’ve stumbled through. Because each one has shaped you, strengthened you, taught you, and you’ve never failed to rise wiser and more determined. That, to me, is more beautiful than perfection ever could be.',
      'To others, you are the hardworking woman who chases her dreams with grit and fire, who falls and bleeds and cries, yet always finds the courage to stand again. They see your victories. But I see something more.',
      'I see the little girl you once were, the one who longed to be loved wholly, not for her mask of strength, but for her true self. I see the fragile child who endured heartbreak but chose to grow braver instead of bitter. I see the courageous woman who wrestles with her fears, who dares to face every obstacle life hurls at her and refuses to surrender.',
      'And when I look at you, I am filled with nothing but pride. Because you didn’t give up. Because you fought to become this version of yourself strong, beautiful, imperfect, real.',
      'And I hope you never forget this, I love you more than words could ever carry. You are my world, my anchor, my everything. Every effort you’ve made, every sacrifice you’ve given, has never gone unnoticed. They were never in vain. No matter what happens, it will always be worth it, because it brought me closer to you.',
      'By the time these words reach you, I want you to hold them close to your heart, you are worth it. Worth every challenge, every trial, every single moment we’ve endured together. Every step of our journey through the joy, through the storms, has been worth it, because it was with you.',
      'I love you endlessly, babe. You are my only one, my forever. Ryah. Hope. Babe. Every name, every version of you, I will love them all. And that’s not just a promise, it’s the truth I’ll spend the rest of my life proving.',
    ],
    footer: 'Happy Monthsary Babe and as always I love you so much!',
  },
  {
    id: 'march-09-2026',
    title: 'March 9, 2026',
    subtitle: 'Letter 02',
    dateLabel: 'Monthsary 02',
    tone: 'Grateful',
    teaser:
      'The monthsary letter for when things were heavy and I just wanted you to know you don’t have to be strong alone.',
    pov: 'John',
    paragraphs: [
      'Things aren’t easy right now. The world seems to be against her testing her strength, pushing her to her limits. Yet there she stands, unbroken. The wounds of her past never held her back; they became the proof of how far she’s come. She carries her scars not as reminders of pain, but as marks of survival. And every time I see her standing tall despite it all, my heart swells with pride. I love her—deeply, endlessly, truly.',
      'She’s my wife, my best friend, the partner I never knew I needed until she came into my life. Even when she’s hurting, even when she’s burdened by her own battles, she still finds the strength to help others before herself. That thought alone brings a bittersweet smile to my face.',
      '“It’s okay to be independent, babe,” I whisper into the silence, as if she can hear me. “But sometimes, you need help too. It’s okay to choose yourself first before everyone else. But then again…” I chuckle softly, shaking my head, “I can’t stop you. That’s just who you are—and I wouldn’t change a thing.”',
      'I pause, my chest tightening with affection. “I just want you to know you’re not alone. You don’t have to face everything by yourself. I’m here. Always. I love you more than anything.”',
      'She loves me unconditionally. She’s tried so hard to become better—not for me, but with me. She’s learning, growing, reaching for her dreams no matter how hard the road gets. She faces every challenge head-on with a courage that humbles me. Honestly, my wife is more of a fighter than I’ll ever be.',
      'And that smile. God, that smile. It never fades, even when she’s hurting inside. She hides her pain behind that soft, radiant grin, not out of pretense, but out of sheer strength no matter what. She faces it with her head held high and her heart unyielding. That’s who she is. That’s the woman I love.',
      'This feeling of loving her, of standing by her side I would never grow tired of it. I want her to know, every single day, that she’s loved, supported, and never alone in what she does.',
      '“Opportunities will always find their way to you, my love,” I whispered as if my lips were near beside her ear, as I saw the flicker of disappointment in her eyes. “You may not have won today, but that defeat doesn’t define your future, it defines you. It defines the strength you carry within.”',
      'I paused as I admired her. “It defines you because, despite the fall, you still chose to stand up. It defines you because, no matter how deep the wounds or how much they hurt, you still found the courage to patch them up and keep going. It defines you because you carried yourself through the weight of it all, even when it felt unbearable.”',
      'I smile, pride swelling in my chest. “That’s who you are, my love. And I am endlessly proud of you today, tomorrow, and always.”',
    ],
    footer: 'Happy Monthsary Babe I love you so much!',
  },
  {
    id: 'june-09-2026',
    title: 'June 9, 2026',
    subtitle: 'Letter 03',
    dateLabel: 'Monthsary 03',
    tone: 'Soft',
    teaser:
      'The letter after eight years of hiding — the one where I wrote about how it finally feels like we can just breathe.',
    pov: 'JOHN',
    paragraphs: [
      'For eight long years, our world was a secret. We existed in the quiet shadows, a beautiful universe built for two, completely hidden from the rest of the world—even our own parents. It wasn’t an easy road. We broke apart, shattered, and somehow found our way back, only to break all over again. There were seasons where the friction grew so intense that we ended up hurting each other, leaving scars from words said and unsaid.',
      'But no matter how catastrophic the endings seemed, no matter how impossible the situation, some invisible gravity always pulled us back together. Again and again.',
      'After everything—the brutal arguments, the exhausting fights, the painful misunderstandings—we still chose each other. When life threw its absolute worst at us, our default instinct was never to run away; it was to run straight into each other’s embrace.',
      '“Damn,” I muttered to the quiet night, looking up as the stars burned brightly across the vast, open sky.',
      'Just the thought of her smile, the echo of her laugh in my mind, brought an immediate warmth to my face. The sheer relief of it all washed over me. We aren’t hiding anymore. The heavy curtain has finally been lifted, and our parents know the truth. It really feels good knowing that her parents accept me, and mine accept her. For the first time in nearly a decade, we can finally just breathe.',
      'I looked down at the strip of photobooth pictures in my hands. Looking at her, I couldn’t help but marvel at the woman she is. She always stands tall, no matter what kind of storm is raging around her. She has this fiercely kind heart, always searching for the good in people, even when it costs her, even when it hurts. She simply doesn’t know how to give up, and she refuses to give in.',
      'I looked down at her face in the photo, a genuine smile tugging at my lips. God, I love her so much.',
      '“I’m so lucky to have her,” I whispered to the quiet night. My thumb gently traced the edges of the glossy paper in my hand. This woman is the most precious thing in my life, and more than anything, I want her to know that she is safe with me. I want her to know, without a shadow of a doubt, that she is enough.',
      'I never want her to question her worth. I want her to feel, deep down, that she doesn’t always have to be the strong one. It’s okay to be fragile sometimes. It’s okay to hurt, it’s okay to cry, and it’s okay to let the armor fall. She can show me every single piece of herself—every version, every mood, every hidden shadow—and I will embrace all of it without a second thought.',
      'I want to take away the loneliness she carries. She needs to know she will never have to face this world alone because I will always be right here, standing by her side. When a storm of thoughts clouds her mind, she doesn’t have to suffer in silence anymore. She can tell me anything and everything, and I will just listen.',
      'I see her. I see the silent battles she fights when she thinks no one is looking. She is incredibly resilient, but she shouldn’t have to carry that burden all the time—because at the end of the day, she is still beautifully human.',
      'She deserves to be loved fiercely. She deserves to be truly heard. She deserves the space to feel every single emotion she needs to feel without apologizing for it. She doesn’t need to change a single thing; she is already perfect just by being herself, and I want her to see that. More than anything in this world, she deserves to be happy.',
      '“I love you so much, baby,” I murmured to the picture, my voice thick with emotion. “And I want you to know that you deserve the world. And also-”',
    ],
    footer: 'Happy Monthsary baby!',
  },
  {
    id: 'july-09-2026',
    title: 'July 9, 2026',
    subtitle: 'Letter 04',
    dateLabel: 'Monthsary 04',
    tone: 'Serious',
    teaser:
      'The monthsary letter when all I wanted was for her to give herself grace and stop questioning if she deserves good things.',
    pov: 'July 9, 2026',
    paragraphs: [
      'I know things haven’t been easy lately. Whenever I look into her eyes, I see a fiercely independent woman who is always trying her absolute best to do better and be better. But I also see a woman who quietly wishes the world would be just a little gentler with her—even if just for a moment. She never asked to be this strong; she never asked for any of this. She just wants to be happy. She wants a life where she feels completely safe, where she is free to let her guard down and be vulnerable. She is so tired of forcing herself to be strong, of saying she’s okay when she’s not. She deserves a space where she can feel every emotion freely and reward herself just for making it through the day.',
      'Whenever I look into her eyes, I see the whole truth of who she is. I see the quiet, exhausting battles she fights every day, the hidden pain she keeps locked safely away, the fears, the doubts, and the endless spirals of overthinking. I see all her heavy burdens.',
      '“I will never stop praying for your heart to find peace,” I said. “I am waiting for the day when you tell me you’re okay, and I can see in your eyes that it’s the absolute truth. I pray for the moment you realize you don’t have to be so hard on yourself anymore—the day you finally give yourself grace and stop punishing yourself just for being human.”',
      'I love her profoundly. I love every single version of the woman she is, and I will never, ever give up on her. I will always cherish her for her truest self, constantly praying for her joy and her triumphs in this world. She is so entirely worth it. She deserves the absolute best this world has to give. I will not stop praying for the moment she finally drops her hesitations, the moment she looks at all the love and goodness around her and stops questioning if she is worthy of it. Because she is. I love her more than words can say, and everyone who surrounds her feels the exact same way.',
    ],
    footer: 'Happy Monthsary baby!',
  },
  {
    id: 'august-09-2026',
    title: 'August 9, 2026',
    subtitle: 'Letter 05',
    dateLabel: 'Monthsary 05',
    tone: 'Soft',
    teaser:
      'Nine years in, and I still get lost just looking at you. The one where I wish you could borrow my eyes for a moment so you could finally see what I see every single day.',
    pov: 'JOHN',
    salutation: 'Hi baby,',
    paragraphs: [
      'There are moments when I just get lost looking at her. I catch myself getting completely swept away in the warmth of her eyes, absolutely captivated by the simple, beautiful sound of her laugh. And because she knows me so well, she always notices when I look at her that way.',
      '“Do I have something on my face, or am I just not that good-looking?” she’ll ask, breaking the quiet.',
      'It always catches me off guard and makes me smile, but beneath that smile, it breaks my heart just a little to know she could ever doubt her own beauty. “No,” I always tell her, wishing she could feel the absolute certainty in my voice. “It’s just me admiring you for the incredible person you are.”',
      'When I look at her, my only thought is how completely blessed I am that she is mine. As I watch her, my mind always drifts back through the years, returning to everything we’ve weathered together since we first found each other back in high school. We have grown up together, navigating through every high and every low, through every frustrating argument, and every unforgettable moment of pure joy. Through it all, our inseparable bond has only grown stronger. Whatever storms life has thrown our way, whatever challenges have tried to pull us apart, we have always, unequivocally, chosen each other.',
      'Now, nine years later, standing where we are today, I cherish her more deeply and more fiercely than I ever thought possible. I love her for her truest, most authentic self. My greatest wish is that she could somehow borrow my eyes, even if just for one fleeting moment. If she could look at herself the way I look at her, she would finally see the breathtaking, extraordinary, and utterly irreplaceable woman I have the privilege of seeing every single day. She would never question her worth again.',
      'She pours so much of her beautiful heart into being there for me. I see every single sacrifice she makes in the background, all the quiet, exhausting effort she puts in just to make sure I am happy and supported. I want her to know, in the deepest part of her soul, that I see it all. None of her love goes unnoticed. I appreciate her more than any arrangement of words could ever possibly hold. She is my entire world, and I am endlessly, overwhelmingly proud to be the one standing beside such an amazing partner.',
    ],
    footer: 'Happy Monthsary Babe and I love you always!',
  },
  {
    id: 'september-09-2026',
    title: 'September 9, 2026',
    subtitle: 'Letter 06',
    dateLabel: 'Monthsary 06',
    tone: 'Soft',
    teaser:
      'The letter about missing her across busy schedules and the quiet prayer that life finally shows her the gentleness she always gives everyone else.',
    pov: 'JOHN',
    paragraphs: [
      '“I miss her so deeply,” I murmur, my thumb tracing the worn edges of our photobooth pictures. Captured in every little frame is an effortless kind of joy, a reminder that with her, happiness isn’t forced—it just happens. She has become my anchor. Life is pulling us in different directions right now, caught between her internship hours, classes, and relentless exams, and my own uphill climb of job hunting. Yet, despite the exhaustion that clings to both of us at the end of the day, our bond never wavers. We always find each other in the margins of our busy schedules, choosing each other every single time.',
      'The rain beats steadily against my windowpane, bringing a cold breeze that makes me pull my shoulders in. But all it takes is a single notification—her name flashing on my screen—and the chill vanishes. She holds that kind of quiet power over me. She doesn’t need to perform; her simple presence is enough to steady my heartbeat and put my restless mind at ease. I miss how easily she fits beside me—the way she hooks her arm into mine, the soothing cadence of her hands that quietly disarms my overthinking, and how the world’s restless chatter simply fades when her hand is in mine.',
      'Catching myself talking aloud, I let out a wry, tender laugh. But the intention behind the words remains unbroken. Looking past the rain and into the clouds, I send my thoughts outward like a quiet prayer: I want her to know that no matter what storms life sends, she will never have to face them without an ally. I will spend my life praying for her happiness, loving every facet of who she is, and standing ready to help her rise whenever her strength falters.',
      'She isn’t just my present comfort or a future dream—she is my partner in growth. Through the sweet ease of our best days and the heavy strain of our hardest, my choice will never waver. It will always, undeniably, be her.',
      'Closing my eyes, I draw in a slow, steady breath, lifting a silent prayer for her happiness and her triumphs, asking the world to finally show her the gentleness she has always given so freely to everyone else. She deserves every piece of beauty this life has to offer.',
      'She is so remarkably strong, this woman. Even on the days when the universe gives her every reason to throw her hands up and walk away, she dusts herself off and rises again to fight for her dreams. I know how to read between the lines of her silence. Behind that genuine smile, I see the quiet battles she wades through. I see the shimmer of unshed tears she forces down just to keep from burdening the people around her, and the practiced calm in her voice whenever she insists she is fine.',
      'More than anything, I pray for the day when those words no longer have to carry the weight of a shield. I long for the moment when she tells me she’s okay, and it isn’t an armor to hide the ache, but a simple, radiant truth.',
      'Until that day comes, I want to be the place where she finally gets to put her strength down. I will keep holding her softly in a world that has been too sharp, loving every hidden fracture, every quiet tear, and every fierce breath until she feels safe enough to just exist—unburdened, deeply cherished, and completely home in my arms.',
    ],
    footer: 'Happy Monthsary my love and I love you so much!',
  },
  {
    id: 'october-09-2026',
    title: 'October 9, 2026',
    subtitle: 'Letter 07',
    dateLabel: 'Monthsary 07',
    tone: 'Serious',
    teaser:
      'The letter about a journey that was never a straight, easy line—and the guarantee that through every hard time, I will never stop fighting for you.',
    pov: 'JOHN',
    paragraphs: [
      'So much has happened between the two of us—a whole lifetime of highs and lows. My hands hover frozen over the keyboard, my eyes lost in the pale glow of the monitor as the memories pull me under. There were seasons when we were so wrapped in effortless joy that the noise of the world completely ceased to exist. There were afternoons when we simply sat side-by-side in total stillness, doing absolutely nothing at all, proving that just breathing the same air was more than enough.',
      'Yet, there have also been nights clouded by misunderstanding—painful hours when frustration simmered into sharp words we never truly meant, leaving quiet bruises on each other’s hearts. There were days when life left us both hollowed out, utterly exhausted and drained. Our journey was never meant to be a straight, easy line; it has been a delicate, messy rhythm between effortless calm and moments that felt impossibly heavy to carry.',
      'Loving each other hasn’t always been simple, and the road we’ve walked has been anything but smooth. But not once has it ever felt unworthy. Every stumble, every quiet tear, and every hard-won reconciliation is woven into the very fabric of who we are today.',
      '“I guarantee that we’ll have tough times,” I whisper into the quiet room, a stray tear breaking free and tracing a warm path down my cheek. “I mean, we’re living through one right now. And I know that at some point down the road, things might feel so overwhelming that one or both of us will want to run. But I also guarantee that if I don’t fight for you to be mine, I will spend the rest of my life drowning in regret. Because deep in my heart, I know you are the only one for me.”',
      'I love her. God, I am so endlessly grateful that I get to love her. She lives in every quiet beat of my chest.',
      '“Before you, I had never known anyone who truly looked at me and believed I was enough,” I murmur, speaking as if the air itself could carry the words to her ears. “Until you came along and gently taught me how to believe it, too. Out of all the billions of souls walking this earth, through all the roads I could have taken and all the alternate lives I could have lived, some impossible, beautiful miracle of timing allowed my story to collide with yours. And if I spend the rest of my days searching for a word deeper, grander, and more sacred than lucky, it still wouldn’t come close to explaining what you are to me.”',
    ],
    footer: 'Happy Monthsary my love and I love you so much!',
  },
]
