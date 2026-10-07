export type TimelineItem = {
  date: string
  title: string
  description: string
}

export type MemoryCard = {
  title: string
  caption: string
  image: string
}

export type RomanticContent = {
  recipientName: string
  heroHeadline: string
  heroSubheading: string
  dedication: string
  storyIntro: string
  timeline: TimelineItem[]
  gallery: MemoryCard[]
  loveLetter: string[]
  reasons: string[]
  closingMessage: string
  closingPromise: string
  signature: string
}

export const romanticContent: RomanticContent = {
  recipientName: 'Ryah',
  heroHeadline: 'For Ryah, the softest miracle my heart ever found.',
  heroSubheading:
    'A small universe built from late-night thoughts, favorite memories, and every quiet reason I keep choosing you.',
  dedication:
    'This page is my way of pressing pause on time for a moment, just long enough to tell you that loving you has made my world warmer, brighter, and more alive.',
  storyIntro:
    'Every chapter with you feels like it was written in candlelight: tender, unforgettable, and impossible to rush.',
  timeline: [
    {
      date: 'The first spark',
      title: 'When you quietly became unforgettable',
      description:
        'Somewhere between a conversation and a smile, you stopped being just a person in my life and became the one my thoughts kept returning to.',
    },
    {
      date: 'The comfort stage',
      title: 'When you started to feel like home',
      description:
        'You made closeness feel effortless. Even ordinary moments turned soft and important just because they had your voice, your laugh, and your presence in them.',
    },
    {
      date: 'The certainty',
      title: 'When I knew this love was real',
      description:
        'It was in the little things: caring about your day, remembering your details, and wanting to protect your peace in every way I could.',
    },
    {
      date: 'Every day after',
      title: 'When forever started sounding beautiful',
      description:
        'Now I do not just think about memories with you. I think about future mornings, future jokes, future comfort, and a thousand more reasons to stay close.',
    },
  ],
  gallery: [
    {
      title: 'Golden hour daydream',
      caption: 'The kind of warmth your presence leaves behind even after the moment ends.',
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic%20editorial%20scene%20of%20a%20couple%20walking%20through%20a%20rose%20garden%20at%20golden%20hour%2C%20soft%20sunlight%2C%20cinematic%20depth%2C%20luxury%20photography%2C%20dreamy%20warm%20tones&image_size=landscape_4_3',
    },
    {
      title: 'City lights and quiet promises',
      caption: 'A memory shaped like holding on a little tighter when the world feels loud.',
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=stylish%20romantic%20nighttime%20rooftop%20date%20with%20city%20lights%2C%20elegant%20fashion%2C%20candlelight%2C%20deep%20plum%20and%20gold%20color%20palette%2C%20cinematic%20editorial%20photography&image_size=portrait_4_3',
    },
    {
      title: 'Soft morning tenderness',
      caption: 'The gentle kind of happiness that makes everything else slow down.',
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=intimate%20romantic%20breakfast%20by%20a%20window%2C%20warm%20ivory%20light%2C%20flowers%20on%20table%2C%20editorial%20lifestyle%20photography%2C%20soft%20focus%2C%20elegant%20cozy%20mood&image_size=landscape_4_3',
    },
    {
      title: 'The forever mood',
      caption: 'That rare feeling when love becomes both excitement and peace at the same time.',
      image:
        'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=romantic%20couple%20silhouette%20under%20stars%20with%20soft%20lantern%20glow%2C%20luxury%20editorial%20aesthetic%2C%20dreamlike%20night%20sky%2C%20blush%20and%20gold%20highlights&image_size=portrait_4_3',
    },
  ],
  loveLetter: [
    'Ryah, if I could gather every soft thought I have ever had about you and place it into one room, it would still fall short of how much light you bring into my life.',
    'You have this beautiful way of making things feel safe and exciting at the same time. You make me want to be gentler, better, and more present. You make ordinary days feel touched by something rare.',
    'I love the way you stay in my mind long after the day ends. I love how naturally you matter to me. I love that when I picture happiness, your name is already there.',
    'No matter how many ways I say it, the truth stays simple: I am grateful for you, proud to love you, and endlessly happy that my heart gets to belong with yours.',
  ],
  reasons: [
    'Because your smile can soften even my hardest days.',
    'Because you make comfort feel beautiful instead of ordinary.',
    'Because your presence turns time into something I want more of.',
    'Because even your smallest details feel worth memorizing.',
    'Because loving you feels calm, true, and full of wonder.',
    'Because the future looks gentler whenever I imagine you in it.',
  ],
  closingMessage: 'You are still my favorite thought at the end of every day.',
  closingPromise:
    'And if I had to choose you in every lifetime, every season, and every version of this world, I still would.',
  signature: 'Always yours',
}
