import { Event } from '../types/event';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Global Faith Conference 2025',
    description: 'Join believers from around the world for three days of inspiring messages, worship, and fellowship.',
    fullDescription: 'The Global Faith Conference is our flagship annual event bringing together Christians from different denominations, cultures, and backgrounds. The conference features internationally renowned speakers, powerful worship sessions, interactive workshops, and networking opportunities. This three-day immersive experience is designed to equip and inspire believers to live out their faith with renewed purpose and passion.',
    date: 'June 15-17, 2025',
    time: '9:00 AM - 9:00 PM',
    location: 'Grace Community Center, New York',
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'Conference',
    categoryKey: 'conference',
    price: '$199',
    organizer: 'Global Faith Ministries',
    speakers: [
      {
        name: 'Dr. Michael Roberts',
        role: 'Senior Pastor, Grace Church',
        bio: 'Internationally recognized speaker and author of "Faith in Action"',
        image: 'https://images.pexels.com/photos/5794825/pexels-photo-5794825.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Sarah Johnson',
        role: 'Worship Leader',
        bio: 'Grammy-nominated Christian artist with a passion for leading others in worship',
        image: 'https://images.pexels.com/photos/7290698/pexels-photo-7290698.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Pastor James Wilson',
        role: 'Bible Teacher',
        bio: 'Known for his deep insights into Scripture and practical teaching style',
        image: 'https://images.pexels.com/photos/10015846/pexels-photo-10015846.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    schedule: [
      {
        time: '9:00 AM - 10:30 AM',
        title: 'Opening Session & Worship',
        speaker: 'Sarah Johnson & Team',
        description: 'Welcome and opening worship service'
      },
      {
        time: '11:00 AM - 12:30 PM',
        title: 'The Power of Faith in Modern Times',
        speaker: 'Dr. Michael Roberts',
        description: 'Keynote address on applying faith principles in today\'s world'
      },
      {
        time: '2:00 PM - 3:30 PM',
        title: 'Breakout Sessions',
        speaker: 'Various Speakers',
        description: 'Choose from multiple workshops on different aspects of faith'
      },
      {
        time: '4:00 PM - 5:30 PM',
        title: 'Panel Discussion: Faith Challenges',
        speaker: 'All Speakers',
        description: 'Interactive panel addressing audience questions'
      },
      {
        time: '7:00 PM - 9:00 PM',
        title: 'Evening Worship & Ministry',
        speaker: 'Sarah Johnson & Pastor James Wilson',
        description: 'Powerful worship and ministry time'
      }
    ],
    accommodations: {
      description: 'We have partnered with local hotels to provide special rates for conference attendees:',
      options: [
        'Faith Hotel - $120/night (0.2 miles from venue)',
        'Blessing Inn - $95/night (0.5 miles from venue)',
        'Grace Suites - $150/night (adjacent to venue)',
        'Hostel options available for students and groups'
      ]
    }
  },
  {
    id: '2',
    title: 'Youth Worship Night',
    description: 'An evening of contemporary worship music, testimonies, and fellowship designed for young adults.',
    fullDescription: 'Our Youth Worship Night is a high-energy, Spirit-filled evening created specifically for teenagers and young adults. This monthly gathering features contemporary Christian music, powerful testimonies from peers, and an encouraging message relevant to the challenges young people face today. It\'s a safe and welcoming environment where youth can connect with God and each other.',
    date: 'May 20, 2025',
    time: '6:30 PM - 9:00 PM',
    location: 'Hope Community Church, Chicago',
    imageUrl: 'https://images.pexels.com/photos/8047023/pexels-photo-8047023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'Worship',
    categoryKey: 'worship',
    price: 'Free',
    organizer: 'Youth for Christ',
    speakers: [
      {
        name: 'Alex Thompson',
        role: 'Youth Pastor',
        bio: 'Dedicated to inspiring the next generation of believers',
        image: 'https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    schedule: [
      {
        time: '6:30 PM - 7:00 PM',
        title: 'Doors Open & Social Time',
        speaker: 'Youth Leadership Team',
        description: 'Games, refreshments, and fellowship'
      },
      {
        time: '7:00 PM - 8:00 PM',
        title: 'Worship Set',
        speaker: 'Hope Church Worship Band',
        description: 'Contemporary worship music'
      },
      {
        time: '8:00 PM - 8:30 PM',
        title: 'Youth Testimonies',
        speaker: 'Various Youth',
        description: 'Personal stories of faith'
      },
      {
        time: '8:30 PM - 9:00 PM',
        title: 'Message & Closing',
        speaker: 'Alex Thompson',
        description: 'Inspiring message for young believers'
      }
    ]
  },
  {
    id: '3',
    title: 'Spiritual Renewal Retreat',
    description: 'A weekend retreat focused on prayer, meditation, and spiritual renewal in a peaceful natural setting.',
    fullDescription: 'Step away from the busyness of life and immerse yourself in a weekend dedicated to spiritual renewal and refreshment. Set in the beautiful countryside, this retreat offers guided prayer experiences, times of silence and reflection, inspiring teaching sessions, and opportunities for spiritual direction. Comfortable accommodations and delicious meals are provided, allowing you to focus fully on your spiritual journey.',
    date: 'July 28-30, 2025',
    time: 'All Day',
    location: 'Peaceful Waters Retreat Center, Vermont',
    imageUrl: 'https://images.pexels.com/photos/6334096/pexels-photo-6334096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'Retreat',
    categoryKey: 'retreat',
    price: '$299 (includes lodging and meals)',
    organizer: 'Renewal Ministries',
    speakers: [
      {
        name: 'Sister Maria Grace',
        role: 'Spiritual Director',
        bio: 'Experienced guide for spiritual formation and contemplative prayer',
        image: 'https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    schedule: [
      {
        time: 'Friday 4:00 PM',
        title: 'Check-in & Welcome',
        speaker: 'Retreat Staff',
        description: 'Settle into accommodations and orientation'
      },
      {
        time: 'Friday 7:00 PM',
        title: 'Opening Session: Finding Inner Stillness',
        speaker: 'Sister Maria Grace',
        description: 'Introduction to contemplative practices'
      },
      {
        time: 'Saturday Morning',
        title: 'Guided Prayer Experiences',
        speaker: 'Various Leaders',
        description: 'Different prayer stations and guided meditations'
      },
      {
        time: 'Saturday Afternoon',
        title: 'Personal Reflection Time',
        speaker: 'Self-guided',
        description: 'Opportunity for solitude in nature'
      },
      {
        time: 'Saturday Evening',
        title: 'Worship & Communion Service',
        speaker: 'Retreat Team',
        description: 'Meaningful worship and communion'
      },
      {
        time: 'Sunday Morning',
        title: 'Closing Session: Taking Renewal Home',
        speaker: 'Sister Maria Grace',
        description: 'Practical steps for continuing spiritual practices'
      }
    ],
    accommodations: {
      description: 'All accommodations are included in the retreat price:',
      options: [
        'Private rooms with ensuite bathroom (limited availability, $50 extra)',
        'Shared double rooms with shared bathroom (standard)',
        'Dormitory-style rooms for groups (discounted rate available)'
      ]
    }
  },
  {
    id: '4',
    title: 'Family Mission Trip: Guatemala',
    description: 'A weeklong mission trip for families to serve communities in Guatemala through building projects and children\'s programs.',
    fullDescription: 'This mission trip is specially designed for families who want to serve together and make a difference in the lives of others. Participants will help with construction projects, run children\'s programs, and support local ministries in Guatemala. The trip includes cultural experiences, team-building activities, and daily devotions. This is an incredible opportunity for families to grow together while serving others.',
    date: 'August 5-12, 2025',
    time: 'Full Week',
    location: 'Antigua, Guatemala',
    imageUrl: 'https://images.pexels.com/photos/3777908/pexels-photo-3777908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'Mission Trip',
    categoryKey: 'mission',
    price: '$1,200 per person (partial scholarships available)',
    organizer: 'Global Missions Foundation',
    speakers: [
      {
        name: 'Pastor David Rodriguez',
        role: 'Mission Team Leader',
        bio: 'Has led over 30 international mission trips and speaks fluent Spanish',
        image: 'https://images.pexels.com/photos/8111311/pexels-photo-8111311.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    schedule: [
      {
        time: 'Day 1',
        title: 'Travel & Orientation',
        speaker: 'Mission Team',
        description: 'Flight to Guatemala and settling into accommodations'
      },
      {
        time: 'Days 2-6',
        title: 'Service Projects',
        speaker: 'Various Leaders',
        description: 'Construction work, children\'s ministry, community outreach'
      },
      {
        time: 'Day 7',
        title: 'Cultural Experience Day',
        speaker: 'Local Guides',
        description: 'Exploring local culture and historical sites'
      },
      {
        time: 'Day 8',
        title: 'Return Travel',
        speaker: 'Mission Team',
        description: 'Departure and travel home'
      }
    ],
    accommodations: {
      description: 'Accommodations are included in the trip cost:',
      options: [
        'Clean, safe mission house with dormitory-style rooms',
        'Families will be housed together when possible',
        'Three meals per day provided by local cooks'
      ]
    }
  },
  {
    id: '5',
    title: 'Women\'s Faith Conference',
    description: 'A special conference designed to empower and encourage women in their faith journey through fellowship and teaching.',
    fullDescription: 'The Women\'s Faith Conference is a two-day event created to inspire, equip, and connect women of all ages and stages of life. Through powerful teaching, vulnerable conversations, and intentional community-building, participants will be encouraged in their spiritual walk and equipped to live out their faith in their homes, workplaces, and communities. The conference includes worship sessions, keynote addresses, breakout workshops, and plenty of time for connection and fellowship.',
    date: 'September 18-19, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'Faith Community Center, Dallas',
    imageUrl: 'https://images.pexels.com/photos/5304824/pexels-photo-5304824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'Conference',
    categoryKey: 'conference',
    price: '$89 (Early bird: $75)',
    organizer: 'Women of Faith Ministry',
    speakers: [
      {
        name: 'Dr. Jennifer Lewis',
        role: 'Author & Speaker',
        bio: 'Bestselling author of "Faith Journey" and advocate for women\'s ministry',
        image: 'https://images.pexels.com/photos/6893988/pexels-photo-6893988.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Lisa Martinez',
        role: 'Bible Teacher',
        bio: 'Passionate about helping women understand and apply Scripture',
        image: 'https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    schedule: [
      {
        time: 'Friday 9:00 AM',
        title: 'Registration & Coffee',
        speaker: 'Staff',
        description: 'Check-in and networking'
      },
      {
        time: 'Friday 10:00 AM',
        title: 'Opening Session: Faith in the Journey',
        speaker: 'Dr. Jennifer Lewis',
        description: 'Keynote address on navigating life\'s challenges with faith'
      },
      {
        time: 'Friday 1:00 PM',
        title: 'Breakout Sessions',
        speaker: 'Various Speakers',
        description: 'Choose from workshops on prayer, Scripture study, family, career, etc.'
      },
      {
        time: 'Saturday 9:00 AM',
        title: 'Worship & Devotional',
        speaker: 'Worship Team & Lisa Martinez',
        description: 'Morning worship and Bible teaching'
      },
      {
        time: 'Saturday 4:00 PM',
        title: 'Closing Session & Commitment',
        speaker: 'Dr. Jennifer Lewis',
        description: 'Final address and prayer'
      }
    ]
  },
  {
    id: '6',
    title: 'Men\'s Wilderness Retreat',
    description: 'A rugged weekend retreat for men combining outdoor adventures, fellowship, and spiritual growth.',
    fullDescription: 'The Men\'s Wilderness Retreat offers a unique opportunity for men to connect with God and each other in the great outdoors. Away from distractions and responsibilities, participants will engage in challenging outdoor activities, authentic conversations around the campfire, and practical Bible teaching relevant to men\'s lives. Whether you\'re an outdoor enthusiast or a city dweller looking for a different experience, this retreat offers something for everyone.',
    date: 'May 12-14, 2025',
    time: 'All Weekend',
    location: 'Mountain Ridge Camp, Colorado',
    imageUrl: 'https://images.pexels.com/photos/6308134/pexels-photo-6308134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    category: 'Retreat',
    categoryKey: 'retreat',
    price: '$175 (includes lodging and meals)',
    organizer: 'Men of Valor Ministry',
    speakers: [
      {
        name: 'John Strickland',
        role: 'Men\'s Ministry Leader',
        bio: 'Former military chaplain passionate about helping men live with purpose and integrity',
        image: 'https://images.pexels.com/photos/5794825/pexels-photo-5794825.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ],
    schedule: [
      {
        time: 'Friday 3:00 PM',
        title: 'Arrival & Camp Setup',
        speaker: 'Retreat Team',
        description: 'Check-in and orientation'
      },
      {
        time: 'Friday Evening',
        title: 'Opening Session & Campfire',
        speaker: 'John Strickland',
        description: 'Introduction and first teaching session'
      },
      {
        time: 'Saturday Morning',
        title: 'Outdoor Activities',
        speaker: 'Activity Leaders',
        description: 'Hiking, fishing, rock climbing (choose your adventure)'
      },
      {
        time: 'Saturday Afternoon',
        title: 'Small Group Discussions',
        speaker: 'Group Leaders',
        description: 'Honest conversations about faith and life challenges'
      },
      {
        time: 'Sunday Morning',
        title: 'Closing Service & Commitment',
        speaker: 'John Strickland',
        description: 'Final message and communion service'
      }
    ],
    accommodations: {
      description: 'This is a rustic retreat with basic accommodations:',
      options: [
        'Shared cabin lodging (4-6 men per cabin)',
        'Camping option available for those who prefer tents',
        'All meals prepared on-site (hearty camp food)'
      ]
    }
  }
];