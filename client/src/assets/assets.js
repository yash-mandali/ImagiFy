
import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'

export const assets = {
  logo,
  logo_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  star_icon,
  rating_star,
  sample_img_1,
  sample_img_2,
  email_icon,
  lock_icon,
  cross_icon,
  star_group,
  credit_star,
  profile_icon,
}

export const stepsData = [
  {
    title: 'Describe Your Vision',
    description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
    icon: step_icon_1,
  },
  {
    title: 'Watch the Magic',
    description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
    icon: step_icon_2,
  },
  {
    title: 'Download & Share',
    description: 'Instantly download your creation or share it with the world directly from our platform.',
    icon: step_icon_3,
  },
];

export const testimonialsData = [
  {
    image: profile_img_1,
    name: 'Rahul Sharma',
    role: 'Graphic Designer',
    stars: 3,
    text: `This image generator is seriously impressive. The quality and details are amazing, and it saves me so much time for my creative projects. Super easy to use!`
  },
  {
    image: profile_img_2,
    name: 'Amit Verma',
    role: 'Digital Marketer',
    stars: 5,
    text: `I tried many AI image tools, but this one stands out. The images look realistic and professional. Perfect for social media and design work.`
  },
  {
    image: profile_img_1,
    name: 'Vikram Singh',
    role: ' Content Creator',
    stars: 5,
    text: `Fast, reliable, and high-quality results every time. The customization options are great, and the output looks exactly how I imagined.`
  },
]

export const plans = [
  {
    id: 'Basic',
    price: 199,
    credits: 100,
    desc: 'Best for personal use.'
  },
  {
    id: 'Advanced',
    price: 499,
    credits: 250,
    desc: 'Best for business use.'
  },
  {
    id: 'Business',
    price: 799,
    credits: 500,
    desc: 'Best for enterprise use.'
  },
]