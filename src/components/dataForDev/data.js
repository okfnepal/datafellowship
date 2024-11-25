import { LocationCitySharp } from "@material-ui/icons";

const navigationMenu = {
    nav: [{ title: "Home", path: '/' }, { title: "LG Data Fellowship", path: "/lgdatafellowship" },{ title: "Our Fellows", path: "/fellows" }, { title: "Open Data Fellowship", path: "/womendatafellowship" }],
};

const aboutFellowship =
    '"Open Data Fellowship - Women Edition" is an initiative of Open Knowledge Nepal. The main motive behind the fellowship is to increase the number of women leaders in the field of open data in Nepal and use the existing expertise of different organizations to provide a good exposure to women and equip them with valuable work experience, confidence and skills that will help them to better understand the data ecosystem and potential opportunities. The fellowships offer the opportunity to connect with business groups, governments and individuals in the data community. \n' +
    "During the time of fellowship, the fellow will visit various host organizations for a half day in-house training which will be followed by the one-month placement in a respective organization. For the first edition, we will be selecting 10 women fellows. The application will be open until 10th March 2019, 12 PM NST.";

const aboutDataFellowship = {
    p1: `"Local Government (LG) Data Fellowship" is an initiative of Open Knowledge Nepal. The fellowship aims to assist municipal bodies in getting the data digitized and better used for decision-making. It offers the opportunity to work closely with various personnel in municipalities and other stakeholders. During the time of fellowship, the fellow will go through a series of training to sharpen their data skills and be placed at assigned municipalities to administer and operationalize Integrated Data Management System (IDMS). The application will be open until 22nd October 2022, 12 PM NPT.`,
    p2: `Local Government Data Fellowship (LG Data Fellowship) is supported by the Data for Development Programme phase II, as part of the Integrated Data Management System for Local Government project. IDMS brings the data generated by the various departments and systems of the municipal office to the central hub. The fellowship will provide an opportunity for 3 individuals from project municipalities to gain experience in IDMS so that they can provide technical support to operationalize IDMS at the respective municipal offices. The fellowship program will run for 5 months.`,
    p3: `LG Data Fellows will bridge the technical gap and transfer skills of using IDMS to the municipalities. The fellows will also have an opportunity to network and participate in skill-enhancement events hosted by Open Knowledge Nepal and its partners. We encourage all interested and qualified candidates (especially youths, women, and members of an indigenous community) to apply for the fellowship.`
}
const whyShouldIJoin = [
    {
        title: "Understand data ecosystem",
        body:
            "Fellowship will provide you an opportunity to understand the data ecosystem and its various stakeholders.",
        icon: "icon-ecosystem",
    },
    {
        title: "Networking",
        body:
            "Fellowship will provide you an opportunity to broaden the horizon of your networking circle.\n",
        icon: "icon-Networking",
    },
    {
        title: "Enhance your confidence and skills",
        body:
            "Fellowship will provide you an opportunity to learn, enhance new skills and boost your confidence level through weekly group mentoring and in-house training.",
        icon: "icon-achievement",
    },
    {
        title: "Gain valuable work experience",
        body:
            "During the time of fellowship, you will get an opportunity to work hand to hand with different leading organizations of their respective field.  This one month of valuable work experience will surely help in your career ahead.",
        icon: "icon-experience",
    },
    {
        title: "Grab potential opportunities",
        body:
            "Explore the various potential opportunities in the field of data with the help of mentors. Grab it for the betterment of your career.",
        icon: "icon-opportunities",
    },
    {
        title: "Be the role model",
        body:
            "Be the inspirational role model by being a Open Data Women Fellow of first batch. Also set an example for the next batch.",
        icon: "icon-role-model",
    },
];

const FAQ = [
    {
        title: " Who can apply to become a fellow?",
        body:
            "Any woman who is a current resident of Nepal are eligible to apply. But we encourage final year students who are currently pursuing their bachelor’s degree.",
    },
    {
        title: "How can I apply?",
        body:
            "Complete the online application, selected fellow will be informed by 20th March 2019.",
    },
    {
        title: "How many fellows will be recruited this year?",
        body: "We will be recruiting only 10 fellows for the first batch.",
    },
    {
        title: "How much time are the fellows expected to dedicate?",
        body:
            "Fellows are expected to dedicate one and half months. One month for working in a respective organization  and a half month for training, meetup and various get-together events.",
    },
    {
        title: "How is the training programme structured?",
        body:
            "Half day in-house training at the host organization and one month project based placement. The fellows will be provided with some stipend to cover travel and lunch.",
    },
    {
        title: "What kind of activities will the fellows carry out?",
        body:
            "Fellows will go through a series of training and workshops to sharpen their data and communication skills before the placement. At host organization, they can work on various kinds of projects like: opening up datasets, case studies, research, data-driven blog posts, developing open source software libraries etc. But we encourage to work on projects that can match with the respective organization’s objectives.",
    },
];

const hostLogos = [
    {
        url: "/hosts/accountabilitylab.png",
        name: "Accountailtiy Lab",
        order: 1,
    },
    {
        url: "/hosts/bikashudahyami.png",
        name: "BikashUdayami",
        order: 1,
    },
    {
        url: "/hosts/cleanupNepal.png",
        name: "Cleanup Nepal",
        order: 1,
    },
    {
        url: "/hosts/F4DM.png",
        name: "",
        order: 1,
    },
    {
        url: "/hosts/freedomForum.png",
        name: "Freedom Forum",
        order: 1,
    },
    {
        url: "/hosts/KLL.png",
        name: "Kathmandu living Labs",
        order: 1,
    },
    {
        url: "/hosts/pathway.png",
        name: "Pathway Technologies",
        order: 1,
    },
    {
        url: "/hosts/younginnovation.png",
        name: "Young Innovation",
        order: 1,
    },
    {
        url: "/hosts/yuwa.png",
        name: "Yuwa",
        order: 1,
    },
];

const footerLink = [
    {
        title: "About Us",
        url: "http://oknp.org/",
        icon: "icon-about-us",
        img:'/icons/footer/about.png'
    },
    {
        title: "Email Us",
        url: "info@oknp.org",
        icon: "icon-email",
        img:'/icons/footer/mail.png'
    },
    {
        title: "X/Twitter",
        url: "https://twitter.com/okfn_np",
        icon: "icon-twitter",
        img:'/icons/footer/twitter.png'
    },
    {
        title: "Facebook",
        url: "https://www.facebook.com/okfnepal/",
        icon: "icon-facebook",
        img:'/icons/footer/facebook.png'
    },
];

const applicationSummary = {
    title:
        "Application must be completed online and consists of the following components:",
    items: [
        { title: "Personal information", summary: "Include and share personal information", imageUrl: "/information/information.png" },
        { title: "Motivation Section", summary: "Share what motivates you to apply", imageUrl: "/information/goals.png" },
        { title: "CV/Resume", summary: "in pdf CV no longer than 2 pages", imageUrl: "/information/cv.png" },
    ],
};

const selectionCriteria = {
    title: "Fellow must:",
    items: [
        {
            item:
                "Be local residents of the project municipalities or willing to relocate.",
        },
        {
            item:
                "Be 30 years old or younger by the time of applying.",
        },
        {
            item:
                "Completed or Currently pursuing bachelor's or hold diploma degree.",
        },
        {
            item:
                "Possess knowledge of or interest in data sciences, open technology, and open data.",
        },
        {
            item:
                "Demonstrate curiosity to collaborate with municipality and IT officers.",
        },
        {
            item:
                "Have a strong knowledge base and a keen interest in learning data-related technologies.",
        },
        {
            item:
                "Exhibit good communication skills in Nepali and English.",
        },
        { item: "Be team players with collaborative skills." },
    ],
};

const keyResponsibilities = {
    title: "Fellows will be responsible for:",
    items: [
        {
            item:
                "Working closely with the municipal personnel to clean, standardize and integrate datasets into IDMS.",
        },
        {
            item:
                "Collaborating with the IT officer and municipal data focal personnel.",
        },
        {
            item:
                "Supporting assigned municipality to administer and operationalize IDMS.",
        },
        {
            item:
                "Reporting and documenting the progress, challenges, and learning",
        },
    ],
};

const benifits = {
    title: "Fellowship Benefits",
    items: [
        {
            title: "Upskilling",
            body:
                "Training on data pipeline and various other data management aspects.",
            imageUrl: "/information/training.png",
            summary: "Enhance your data skill via training and workshop",
        },
        {
            title: "Earning",
            body: "Monthly stipend of NPR 15,000 per month.",
            imageUrl: "/information/money.png",
            summary: "Receive a monthly stipend for the duration of the fellowship",
        },
        {
            title: "Networking",
            body:
                "Opportunity to work closely with government officials",
            imageUrl: "/information/networking.png",
            summary: "Have the opportunity to work closely with government officials",
        },
        {
            title: "Mentoring",
            body:
                "Resolute mentoring from OKN team members.",
            imageUrl: "/information/team.png",
            summary: "Receive dedicated mentoring from OKN team members",
        },
        {
            title: "Certificate",
            body: "Graduation certificate of the fellowship.",
            imageUrl: "/information/certification.png",
            summary: "Obtain a graduation certificate upon completion of the fellowship",
        },
        {
            title: "Placement",
            body: "Opportunity for potential job placement.",
            imageUrl: "/information/interview.png",
            summary: "Be considered for potential job placements",

        },
    ],
};

const projectMunicipality = [
    {
        Location: "Parsa, Madhesh Province",
        LocalGovernment: "Birgunj Metropolitan City",
        Province:"Madhesh Province",
        District:"Parsa"

    },
    {
        Location: "Dang, Lumbini Province",
        LocalGovernment: "Tulsipur Sub-Metropolitan City",
        Province:"Lumbini Province",
        District:"Dang"
    },
    {
        Location: "Dhanusha, Madhesh Province",
        LocalGovernment: "Janakpurdham Sub-Metropolitan City",
        Province:"Madhesh Province",
        District:"Dhanusha"
    },
    {
        Location: "Surkhet, Karnali Province",
        LocalGovernment: "Lekbesi Municipality",
        Province:"Karnali Province",
        District:"Surkhet"
    },
    {
        Location: "Rupandehi, Lumbini Province",
        LocalGovernment: "Suddhodhan Rural Municipality",
        Province:"Lumbini Province",
        District:"Rupandehi"
    },
];

const timelineData = [
    {
        text: 'Application Opens',
        date: 'September 25, 2022',
        category: {
            tag: 'opening',
            color: '#018f69'
        },
        // link: {
        //     url:
        //         'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
        //     text: 'Read more'
        // }
    },
    {
        text: 'Application Deadline',
        date: 'October 22, 2022',
        category: {
            tag: 'deadline',
            color: '#E17B77'
        },
    },
    {
        text: 'Selected Fellows Announcement',
        date: 'November 4, 2022 ',
        category: {
            tag: 'result',
            color: '#1B3E76'
        },
    },
]

const heroContent = {
    description: "The LG Data Fellowship aims to assist municipal bodies in digitizing their data for improved decision-making. It offers the opportunity to work closely with various personnel in municipalities and other stakeholders. During the fellowship, participants will undergo a series of training sessions to enhance their data skills. They will then be placed at assigned municipalities to administer and operationalize the Integrated Data Management System (IDMS)."
}

const fellows = [
    {
        name :"Bibek Gaha",
        id:"bibek",
        time:'Dec 2022 - now',
        location: "LG Data Fellow, Lekbesi Municipality",
        imgSrc: "/lg_fellows/bibek.png",
        bio: "Bibek Gaha is an undegraduate student, currently engaged as LG Data Fellow for Lekbeshi. He is energetic, friendly and enjoys solving complex problems. He is a quick learner and thirsty for learning new things. He loves playing games, cooking, helping others, and listening to music. He is based in Lekbeshi Municipality, Surkhet."

    },
    {
        name :"Drishya KC",
        id:"drishya",
        time:'Sept 2023 - now',
        location: "LG Data Fellow, Tulsipur Sub-Metropolitan City",
        imgSrc:"/lg_fellows/drishya.png",
        bio: "Drishya K.C is an agriculture graduate who loves nature and enjoys learning new things. She worked as a Data Fellow with Tuslipur Sub-Metropolitan City, where she used data to help make decisions for the community. Drishya grew up surrounded by nature, which inspired her to study agriculture and care for the environment. She's curious and loves reading books and traveling to different places. In her free time, you can find her hiking or exploring cities. Drishya is determined to make a positive impact in her field and hopes to create a better world for everyone by using her knowledge and passion for nature."

    },
    {
        name :"Suraj Kumar Mahato",
        id:"suraj",
        time:'Dec 2022 - now',
        location: "LG Data Fellow, Birgunj Metropolitan City",
        imgSrc:"/lg_fellows/suraj.png",
        bio: "Suraj Kumar Mahato is currently pursuing a Bachelor of Business Studies (BBS) degree from Thakur Ram Multiple Campus, Birgunj. He is energetic, friendly, and loves nature. He enjoys solving complex problems and always tries to help others with his persuasive communication and decision-making skills."

    },
    {
        name :"Ganga Kandel",
        id:"ganga",
        time:'Dec 2022 - Jun 2023',
        location: "LG Data Fellow, Tulsipur Sub-Metropolitan City",
        imgSrc:"/lg_fellows/ganga.png",
        bio: "Ganga Kandel is a forestry graduate from the Institute of Forestry, Pokhara. Being a technical subject student, she is a nature enthusiast and concerned about nature conservation. She is an ambivert girl and a quick learner who is always thirsty of learning new things. She loves exploring new places, reading books of various genres, gardening, cooking, helping others, and learning new things."

    },
    {
        name :"Kamlesh Kumar Thakur",
        id:"kamlesh",
        time:'Jun 2024 - now',
        location: "LG Data Fellow, Janakpurdham Sub-Metropolitan City",
        imgSrc:"/lg_fellows/kamlesh.png",
        bio: "Kamlesh Kumar Thakur, from Janakpurdham-09, Dhanusha, Madhesh Province, is pursuing a Bachelor's in Journalism and Mass Communication (BJMC) at Makwanpur Multiple College, Tribhuvan University. Passionate about journalism, he has a strong educational background, practical experience, and various certifications in data analysis and news fact-checking. Proficient in Maithili, Nepali, English, and Hindi, Kamlesh excels in communication and has expertise in branding, training, and community mobilization. His dedication, adaptability, and innovative spirit make him a valuable asset for NGOs and broadcast media, poised for mid-level roles in journalism and communication."

    },
    {
        name :"Saurav Khanal",
        id:"saurav",
        time:'November - now',
        location: "LG Data Fellow, Suddhodhan Rural Municipality",
        imgSrc:"/lg_fellows/saurav.jpeg",
        bio: "Saurav Khanal is the Local Government (LG) Data Fellow for Suddhodhan Municipality. He has a background in various computer skills and three years of experience providing IT services and creating digital marketing content. At the Local Government (LG) Data Fellowship, he collaborates closely with the IT officer and municipal data focal personnel, focusing on reporting, documenting progress, addressing challenges, and capturing learnings."

    },
]

export {
    navigationMenu,
    whyShouldIJoin,
    aboutFellowship,
    FAQ,
    hostLogos,
    footerLink,
    applicationSummary,
    projectMunicipality,
    selectionCriteria,
    keyResponsibilities,
    benifits,
    aboutDataFellowship,
    timelineData,
    heroContent,
    fellows
};