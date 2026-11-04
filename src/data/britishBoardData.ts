export interface NewsArticle {
  id: string;
  reference: string;
  title: string;
  category: 'governance' | 'cpd' | 'standards' | 'expansion' | 'technology';
  categoryLabel: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  tags: string[];
  content: string[];
}

export const OFFICIAL_ARTICLES: BlogArticle[] = [
  {
    id: 'art-kuwait',
    slug: 'we-are-in-the-state-of-kuwait',
    title: 'We are in the State of Kuwait',
    date: 'May 05, 2023',
    category: 'International Presence',
    readTime: '3 min read',
    tags: ['Kuwait', 'International Expansion', 'Middle East', 'Accreditation'],
    summary: 'The British Board for Training and Consulting establishes its official operational presence and partner network in the State of Kuwait.',
    content: [
      'The British Board for Training and Consulting (BBTC) is proud to announce the active strengthening of its institutional representation in the State of Kuwait, providing accredited training packages and trainer certifications across the Gulf region.',
      'Through partnerships with premier Kuwaiti educational institutes and professional training firms, the British Board brings its rigorous United Kingdom accreditation standards directly to local professionals, corporate leaders, and academic educators.',
      'Our presence in Kuwait facilitates direct registration for the International Standards for the Adoption of Trainers (ISAT™) and the International Standards for the Design of Training Packages (ISDTP™), ensuring top-tier continuing professional development.'
    ]
  },
  {
    id: 'art-personality-dev',
    slug: 'five-great-tips-personality-development',
    title: 'Five great tips to help you progress on the personality development front.',
    date: 'May 05, 2023',
    category: 'Professional Development',
    readTime: '4 min read',
    tags: ['Personal Growth', 'Soft Skills', 'Leadership', 'Communication'],
    summary: 'Essential strategies for personal and professional growth, emotional intelligence, and self-confidence in leadership roles.',
    content: [
      'Personal development is the foundation of professional excellence. Whether you are leading a corporation, delivering high-stakes training, or managing a specialized team, continuous refinement of your personal attributes is vital.',
      '1. Practice Intentional Self-Awareness: Regularly evaluate your communication habits, stress responses, and cognitive strengths. Solicit candid feedback from peers and mentors.',
      '2. Master Active Listening & Emotional Agility: Communication is not just speaking eloquently; it is understanding unstated needs and responding with empathy and composure.',
      '3. Cultivate Intellectual Curiosity: Read widely outside your primary specialization. Cross-disciplinary insights sharpen problem-solving and critical thinking skills.',
      '4. Strengthen Body Language and Voice Modality: Non-verbal cues carry significant weight in professional credibility. Project confidence through posture and measured pacing.',
      '5. Embrace Consistent Micro-Habits: Sustainable transformation occurs through daily disciplined rituals rather than sporadic bursts of ambition.'
    ]
  },
  {
    id: 'art-good-standing',
    slug: 'good-standing-certificate',
    title: 'Good Standing Certificate',
    date: 'May 05, 2023',
    category: 'Corporate Governance',
    readTime: '3 min read',
    tags: ['Companies House', 'UK Government', 'Good Standing', 'Compliance'],
    summary: 'Confirmation of the continuous Certificate of Good Standing issued by the United Kingdom Government Companies House.',
    content: [
      'The British Board for Training and Consulting has been formally re-issued its Certificate of Good Standing by the Registrar of Companies for England and Wales (Companies House, UK Government).',
      'This statutory certification confirms that the British Board has been in continuous, uninterrupted legal operation, has fulfilled all annual statutory filing requirements, and remains in full compliance with United Kingdom company law.',
      'For our international partners, universities, and accredited training centers, the Certificate of Good Standing serves as verifiable proof of institutional integrity, reliability, and governance adherence.'
    ]
  },
  {
    id: 'art-rip',
    slug: 'rip-tribute',
    title: 'RIP',
    date: 'Sep 09, 2022',
    category: 'Memorial Tribute',
    readTime: '2 min read',
    tags: ['Tribute', 'United Kingdom', 'Heritage', 'Royal Memorial'],
    summary: 'A solemn tribute to Her Majesty Queen Elizabeth II, honoring seventy years of selfless duty, grace, and dedication to the United Kingdom and the Commonwealth.',
    content: [
      'The British Board for Training and Consulting joins the United Kingdom, the Commonwealth, and the global community in expressing our deepest sorrow following the passing of Her Majesty Queen Elizabeth II.',
      'Throughout her remarkable reign of seven decades, Her Majesty was the embodiment of selfless service, dignified leadership, and unwavering commitment to public duty.',
      'Her enduring legacy of integrity, patience, and devotion will continue to inspire educational and cultural institutions for generations to come. We extend our heartfelt condolences to the Royal Family.'
    ]
  },
  {
    id: 'art-google-play',
    slug: 'download-our-application-now-from-google-play',
    title: 'Download our application now from Google Play',
    date: 'Jul 20, 2019',
    category: 'Mobile & Digital',
    readTime: '2 min read',
    tags: ['Mobile App', 'Google Play', 'Digital Tools', 'Accessibility'],
    summary: 'Access British Board certifications, training frameworks, and educational news on mobile devices via Google Play.',
    content: [
      'The British Board for Training and Consulting officially announced the launch of its dedicated mobile application on the Google Play Store.',
      'The application enables trainers, educators, and partner centers to browse upcoming professional qualifications, explore the ISAT™ and ISDTP™ criteria, and receive real-time dispatches from our London secretariat directly on Android devices.',
      'This digital initiative reflects our ongoing drive to make professional accreditation tools readily accessible across global jurisdictions.'
    ]
  },
  {
    id: 'art-solve-problems',
    slug: 'the-right-way-to-solve-problems',
    title: 'The Right Way to Solve Problems',
    date: 'Apr 07, 2018',
    category: 'Management & Strategy',
    readTime: '4 min read',
    tags: ['Problem Solving', 'Critical Thinking', 'Business Strategy', 'Decision Making'],
    summary: 'A structured, analytical approach to diagnosing organizational challenges, generating alternatives, and implementing sustainable solutions.',
    content: [
      'In high-velocity business environments, the instinct is often to rush into reactive fixes without diagnosing the root cause. Effective leaders adopt a systematic methodology.',
      'Step 1: Define the Root Problem Clearly. Separate the visible symptoms from the underlying systemic bottleneck using techniques like the 5 Whys.',
      'Step 2: Collect Unbiased Empirical Data. Avoid assumptions. Analyze factual metrics, process flow bottlenecks, and direct frontline stakeholder feedback.',
      'Step 3: Generate and Stress-Test Alternatives. Encourage divergent thinking before converging on the optimal intervention. Evaluate risks and resource costs.',
      'Step 4: Execute with Clear Milestones and Accountability. Define key performance indicators (KPIs) to measure whether the intervention achieved the desired objective.',
      'Step 5: Standardize the Solution to Prevent Recurrence. Institutionalize the corrected workflow into standard operating procedures and staff training.'
    ]
  },
  {
    id: 'art-motivate-team',
    slug: '4-ways-you-can-motivate-your-team-to-do-better-work',
    title: '4 Ways You Can Motivate Your Team to Do Better Work',
    date: 'Apr 07, 2018',
    category: 'Leadership & Culture',
    readTime: '4 min read',
    tags: ['Team Motivation', 'Leadership', 'Workplace Culture', 'Productivity'],
    summary: 'Practical managerial techniques to boost team morale, foster autonomous ownership, and elevate operational output.',
    content: [
      'High-performing teams are rarely driven solely by financial incentives. Enduring motivation stems from autonomy, purpose, mastery, and mutual psychological safety.',
      '1. Connect Daily Tasks to a Greater Organizational Purpose: Help team members visualize how their individual contributions impact broader company goals and end beneficiaries.',
      '2. Grant Autonomous Decision-Making Power: Micromanagement erodes enthusiasm. Provide clear guardrails and objectives, then empower professionals to choose the optimal path.',
      '3. Provide Transparent, Immediate Recognition: Celebrate incremental breakthroughs publicly. Consistent appreciation for diligence builds sustained engagement.',
      '4. Invest in Continuous Professional Development: Support your staff in earning recognized certifications and acquiring new skills. A culture of growth is inherently motivating.'
    ]
  },
  {
    id: 'art-isdtp',
    slug: 'international-standards-of-design-the-training-packages',
    title: 'International Standards of Design the Training Packages™',
    date: 'Jul 25, 2017',
    category: 'Quality Standards',
    readTime: '5 min read',
    tags: ['ISDTP™', 'Curriculum Design', 'Quality Frameworks', 'Training Packages'],
    summary: 'The definitive blueprint for engineering standardized, measurable, and accredited training packages under the ISDTP™ trademark.',
    content: [
      'The International Standards for the Design of Training Packages (ISDTP™) represents a trademarked, peer-reviewed engineering framework pioneered by the British Board for Training and Consulting.',
      'Under ISDTP™, a complete training package must incorporate six mandatory instructional artifacts: (1) Comprehensive Trainer Guide with timing grids, (2) Interactive Trainee Workbook, (3) Standardized Multimedia Slide Decks, (4) Practical Case Study Exercises, (5) Objective Assessment Tools tied to Bloom taxonomy, and (6) Post-training Action Roadmaps.',
      'Adhering to ISDTP™ guarantees that whether a course is delivered in London, Kuwait, or Singapore, the instructional rigor and pedagogical efficacy remain universally consistent.'
    ]
  },
  {
    id: 'art-isat',
    slug: 'international-standards-for-adoption-of-trainers',
    title: 'International Standards for Adoption of Trainers ™',
    date: 'Jul 25, 2017',
    category: 'Trainer Accreditation',
    readTime: '5 min read',
    tags: ['ISAT™', 'Trainer Certification', 'Andragogy', 'Pedagogy Standards'],
    summary: 'The globally recognized accreditation framework establishing competency benchmarks for corporate instructors, educators, and master trainers.',
    content: [
      'The International Standards for the Adoption of Trainers (ISAT™) provides the authoritative global benchmark for qualifying adult education specialists and corporate instructors.',
      'The framework assesses instructors across four key dimensions: Andragogic Knowledge (understanding adult learning psychology), Instructional Design (structuring measurable learning objectives), Platform Eloquence (engagement, facilitation, and objection handling), and Objective Assessment Integrity.',
      'Trainers certified under the ISAT™ framework earn the Certified Professional Trainer (CPT) or Advanced Professional Trainer (APT) credential, distinguishing them in international consulting and academic markets.'
    ]
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-good-standing',
    reference: 'ANN-UK-2025/01',
    title: 'Certificate of Good Standing Issued by UK Government Companies House',
    category: 'governance',
    categoryLabel: 'Official Governance',
    date: 'January 2025',
    readTime: '3 min read',
    summary: 'The British Board for Training and Consulting has been granted a Certificate of Good Standing from the UK Government Companies House, confirming full regulatory compliance.',
    content: [
      'The British Board for Training and Consulting (BBTC) is pleased to confirm receipt of the official Certificate of Good Standing from Companies House, the registrar of companies for the United Kingdom government.',
      'This certificate validates that the British Board remains continuously registered, fully compliant with statutory corporate governance requirements, and officially recognized under United Kingdom law.',
      'This recognition reinforces our institutional credibility as an international body delivering trusted accreditation and certification services globally.'
    ]
  },
  {
    id: 'news-cpd-provider',
    reference: 'ANN-UK-2024/09',
    title: 'British Board Registered as an International CPD Training Provider',
    category: 'cpd',
    categoryLabel: 'CPD Accreditation',
    date: 'December 2024',
    readTime: '3 min read',
    summary: 'The British Board has secured registered status as a recognized Continuing Professional Development (CPD) training provider, validating international standards.',
    content: [
      'In commitment to continuous lifelong learning, the British Board for Training and Consulting has obtained formal registration as a recognized Continuing Professional Development (CPD) training provider.',
      'Our accredited programs now grant standardized CPD hours and credits that professionals can submit toward their annual professional development requirements worldwide.',
      'All qualifying certificates issued through our accredited network prominently reflect recognized CPD credits, boosting global employability for all certificate holders.'
    ]
  },
  {
    id: 'news-isat-standards',
    reference: 'ANN-UK-2024/07',
    title: 'Adoption of the ISAT™ and ISDTP™ International Quality Standards',
    category: 'standards',
    categoryLabel: 'Quality Standards',
    date: 'October 2024',
    readTime: '4 min read',
    summary: 'Official implementation of the International Standards for Adoption of Trainers (ISAT™) and Design of Training Packages (ISDTP™) across all affiliated academies.',
    content: [
      'The British Board Standards Committee has finalized the international rollout of two key quality benchmarks: the ISAT™ framework for trainer qualifications and the ISDTP™ framework for training package engineering.',
      'These standards establish unified criteria for evaluating instructor competence (CPT and APT levels) and ensuring that course materials adhere to systematic instructional design rules.',
      'Affiliated training centers across the UK and internationally have transitioned to the updated frameworks, guaranteeing consistent quality across all endorsed programs.'
    ]
  },
  {
    id: 'news-regional-expansion',
    reference: 'ANN-UK-2024/04',
    title: 'International Network Expansion: New Accredited Regional Branches & Partners',
    category: 'expansion',
    categoryLabel: 'Global Expansion',
    date: 'August 2024',
    readTime: '3 min read',
    summary: 'The British Board has expanded its accredited network, partnering with authorized training academies across the Middle East (including Kuwait and Egypt) and North Africa.',
    content: [
      'As part of our commitment to accessible international accreditation, the British Board has formally approved partner training academies and established regional branch representations in key hubs including Kuwait, Egypt, and the UAE.',
      'These accredited centers operate under the direct oversight of British Board quality auditing, allowing regional professionals to earn authentic British Board credentials locally.',
      'Representatives from newly accredited institutions completed rigorous auditor orientation sessions in London before commencing authorized program delivery.'
    ]
  }
];

export const INSTITUTIONAL_INFO = {
  name: 'British Board for Training and Consulting',
  shortName: 'British Board',
  tagline: 'International Accreditation & Professional Qualifications',
  country: 'United Kingdom',
  officialWebsite: 'british-board.uk',
  officialEmail: 'info@british-board.uk',
  pillars: [
    {
      title: 'ISAT™ Trainer Certification',
      desc: 'Accreditation under International Standards for the Adoption of Trainers, validating pedagogical mastery and andragogy skills.'
    },
    {
      title: 'ISDTP™ Curriculum Packaging',
      desc: 'Systematic auditing and endorsement of training packages under International Standards for the Design of Training Packages.'
    },
    {
      title: 'Registered CPD Provider',
      desc: 'Delivering internationally recognized Continuing Professional Development credits accepted across industries.'
    },
    {
      title: 'International Partner Network',
      desc: 'Accrediting premier training academies and corporate institutions across the United Kingdom, Middle East, and worldwide.'
    }
  ]
};
