import { ServiceItem, TeamInfo } from '../types';

export const teamData: TeamInfo = {
  name: 'NOVA SECURITY TEAM',
  slogan: 'نطور اليوم، لنحمي غداً.',
  subSlogan: 'LEARN • BUILD • SECURE',
  question: 'من نحن؟',
  introLines: [
    'نحن فريق تقني شغوف',
    'نحول الأفكار إلى حلول ذكية وآمنة.',
    'نجمع بين الإبداع البرمجي، التصميم الاحترافي، والخبرة في الأنظمة الأمنية لنصنع تجارب رقمية ترتقي بتطلعاتك.'
  ],
  motto: '"نطور اليوم، لنحمي غداً."',
  vision: 'الريادة والتميز في البرمجيات المتقدمة، حماية البيانات، وتمكين الجيل القادم من المهارات الرقمية.',
  instagramHandle: 'nova_security1',
  instagramUrl: 'https://www.instagram.com/nova_security1?igsi=MXBpMWNocDA0cGx3Mg==',
  ctaHeading: 'فكرة لديك؟ دعنا نحولها إلى واقع.',
  ctaButtonText: 'راسلنا عبر الخاص',
  ctaSubtext: 'للتواصل والمزيد من المعلومات',
  footerBrand: 'NOVA SECURITY TEAM',
  footerPillars: 'نبتكر . نطور . نحمي'
};

export const servicesData: ServiceItem[] = [
  {
    id: 'web-app-dev',
    number: '01',
    title: 'برمجة وتطوير مواقع الويب والتطبيقات الذكية',
    description: 'حلول برمجية متكاملة تجمع بين الأداء العالي والتصميم المبتكر.',
    iconName: 'Code2',
    tag: 'تطوير تقني',
    features: ['مواقع ويب متجاوبة وسريعة', 'تطبيقات هواتف ذكية (iOS & Android)', 'أنظمة إدارة مخصصة وسحابية']
  },
  {
    id: 'security-systems',
    number: '02',
    title: 'بناء وتأمين الأنظمة الأمنية',
    description: 'نمتلك الخبرة لحماية أنظمتك وبياناتك من التهديدات الرقمية.',
    iconName: 'ShieldCheck',
    tag: 'أمن سيبراني وحماية',
    features: ['فحص الثغرات واختبار الاختراق', 'تشفير وحماية قواعد البيانات', 'جدران حماية ومراقبة متواصلة']
  },
  {
    id: 'workshops',
    number: '03',
    title: 'ورشات تعليمية تخصصية',
    description: 'نقدم ورشات عملية تفاعلية لتطوير المهارات وصناعة المستقبل.',
    iconName: 'GraduationCap',
    tag: 'تدريب احترافي',
    features: ['تدريب عملي وتطبيقي مباشر', 'شهادات حضور ومواد تعليمية', 'توجيه تقني مستمر']
  },
  {
    id: 'presentations',
    number: '04',
    title: 'تصميم عروض تقديمية احترافية',
    description: 'نعرض أفكارك بأفضل شكل بتصميمات إبداعية تترك أثراً لا ينسى.',
    iconName: 'Presentation',
    tag: 'تصميم إبداعي',
    features: ['عروض PowerPoint & Keynote مميزة', 'تصميم هوية بصرية مخصصة', 'انفوجرافيك وتحريك ديناميكي']
  },
  {
    id: 'ai-learning',
    number: '05',
    title: 'تعلم الذكاء الاصطناعي',
    description: 'دورات ومحتوى عملي لفهم وتطبيق تقنيات الذكاء الاصطناعي.',
    iconName: 'Bot',
    tag: 'ذكاء اصطناعي AI',
    features: ['هندسة الأوامر (Prompt Engineering)', 'أتمتة الأعمال باستخدام AI', 'نماذج تعلم الآلة والروبوتات']
  },
  {
    id: 'innovative-solutions',
    number: '06',
    title: 'حلول وتقنيات مبتكرة',
    description: 'نستخدم أحدث التقنيات لتقديم حلول ذكية تدعم نموك وتفوقك.',
    iconName: 'Lightbulb',
    tag: 'ابتكار رقمي',
    features: ['استشارات تقنية واستراتيجية', 'تحويل رقمي للأعمال', 'حلول مخصصة لحل المشكلات المعقدة']
  }
];
