import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { profile2, profile3,profile4,profile5,
         member1, member2, member3, member4,building_5,building_6,
         building_7, building_8,building_9,building_10,
        blog_1,blog_2,blog_3} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    
    {name:"app",id:'project'},
    {name:"Testimonial",id:'testimonial'},
    {name:"Posts",id:'blog'},
];

export const services = [
  {
    name:"study",
    icon:<SiBlueprint/>,
    description:`study.`,
  },
  {
    name:"study",
    icon:<FaDrawPolygon/>,
    description:`study.

    `,
  },
  {
    name:"study",
    icon:<GrUserManager/>,
    description:`study.`,
  },
  {
    name:"study",
    icon:<SiHomeassistantcommunitystore/>,
    description:`study.`,
  },
  {
    name:"study",
    icon:<AiOutlineFileProtect/>,
    description:`study.`,
  },
  {
    name:"study",
    icon:<IoConstructSharp/>,
    description:`study.`,
  },
]

export const teams = [
  {
    name:"Oluoma James",
    title:"Technician",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mary Brown",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Lawrence Onu",
    title:"Technician",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Joy Eze",
    title:"Technician",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"Login Interface",
    image:building_5,
    description:`* Username
* Password
* Verification`,
  },
  {
    title:"Login Interface",
    image:building_6,
    description:`* Username
* Password
* Verification.`,
  },
  {
    title:"Login Interface",
    image:building_7,
    description:`* Username
* Password
* Verification.`,
  },
  {
    title:"Login Interface",
    image:building_8,
    description:`* Username
* Password
* Verification.`,
  },
  {
    title:"Login Interface",
    image:building_9,
    description:`* Username
* Password
* Verification.`,
  },
  {
    title:"Login Interface",
    image:building_10,
    description:`* Username
* Password
* Verification.`,
  },
];


export const testimonial = [
  {
    image:profile2,
    name:'Khaed Ahmed',
    review:` Good App`
  },
  {
    image:profile3,
    name:'Atheer Alrobaey',
    review:` Good App`
  },
  {
    image:profile4,
    name:'Khaed Ahmed',
    review:` Good App`
  },
  {
    image:profile5,
    name:'Atheer Alrobaey',
    review:` Good App`
  }

];


export const blogs = [
  {
      title:"First issue launched",
      image:blog_1,
      category:"First issue launched",
      content:`
        As the construction industry continues to evolve, the focus on sustainability 
        has never been more critical. Sustainable construction is not just a trend; 
        it's a necessity for our planet's future. In this blog post, we'll explore 
        the principles of sustainable construction, the benefits it offers, and how 
        our company is leading the way in eco-friendly building practices.
      `,
      date:new Date("January 4, 2025"),
      likeCount:34,
      commentCount:4,
      tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
      poster:{
          name:"Johnson",
      },
  },
  {
      title:"Update latest version",
      image:blog_2,
      category:"Update latest version",
      content:`
        Quality craftsmanship is the cornerstone of any successful construction project.
         It ensures that buildings are not only aesthetically pleasing but also durable 
         and safe. In this blog post, we'll delve into why quality craftsmanship matters 
         and how our company upholds the highest standards in every project we undertake.
      `,
      date:new Date("January 5, 2025"),
      likeCount:201,
      commentCount:123,
      tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
      poster:{
          name:"Bissi",
      },
  },
  {
      title:"Meet user requests",
      image:blog_3,
      category:"Meet user requests",
      content:`
      The construction industry is undergoing a revolution, thanks to the advent of 
      innovative technologies. These advancements are making construction projects 
      more efficient, cost-effective, and sustainable. In this blog post, we'll 
      explore some of the most exciting technologies transforming the way we build 
      and how our company is leveraging them to deliver superior results.
      `,
      date:new Date("January 8, 2025"),
      likeCount:198,
      commentCount:121,
      tags:["CommEdu","CommunityEngagement","EduCommunity"],
      poster:{
          name:"Abisola",
      },
  },
];


export const contacts = [
  {
    name:"Email",
    value:"Educate@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+96407700000000",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"Iraq, Baghdad",
    icon:<IoLocationOutline/>,
  },
]


export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          
          {name:"App",id:'project'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Posts",id:'blog'},
        ]
      },
]


