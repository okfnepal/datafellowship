const navigationMenu = {
    nav: [{ title: "Home", path: '' }, { title: "About", path: "about" }, { title: "Open Data Fellowship", path: "old" }],
};

const aboutFellowship =
    '"Open Data Fellowship - Women Edition" is an initiative of Open Knowledge Nepal. The main motive behind the fellowship is to increase the number of women leaders in the field of open data in Nepal and use the existing expertise of different organizations to provide a good exposure to women and equip them with valuable work experience, confidence and skills that will help them to better understand the data ecosystem and potential opportunities. The fellowships offer the opportunity to connect with business groups, governments and individuals in the data community. \n' +
    "During the time of fellowship, the fellow will visit various host organizations for a half day in-house training which will be followed by the one-month placement in a respective organization. For the first edition, we will be selecting 10 women fellows. The application will be open until 10th March 2019, 12 PM NST.";

const aboutDataFellowship = {
    p1: `"Data for Development Fellowship" is an initiative of Open Knowledge Nepal. The main motive behind the fellowship is to assist municipal bodies in getting the data digitized and better used for decision-making. The fellowships offer the opportunity to work closely with various personnel in municipalities and other stakeholders. During the time of fellowship, the fellow will go through a series of training to sharpen their data skills and be placed at assigned municipalities to administer and operationalize Integrated Data Management System (IDMS). The application will be open until 15th October 2022, 12 PM NPT.`,
    p2: `Data for Development Fellowship (DataDev Fellowship) provides young, qualified, and enthusiastic individuals from 3 project municipalities with an opportunity to gain in-depth experience in IDMS. DataDev Fellowship by Open Knowledge Nepal (OKN) is a D4D funded project that aims to build the technical capacities and operationalization of IDMS and local government. IDMS brings all credible digital data available within municipal bodies into a single platform.`,
    p3: `DataDev Fellowship further builds the next-generation pool of professionals that will be leading the discussion on data management and use at local levels. Given the reality that most of the municipalities lack capacities to collect, manage and use the information for informed decision-making, DataDev Fellowship aims to address this issue by mobilizing technically trained youths with sound knowledge of IDMS in the local governments. DataDev fellows act as a connecting bridge to transfer the technical capacity of using IDMS to the local governments. Throughout the DataDev Fellowship, DataDev fellows will also have exciting opportunities to participate in learning and training events being organized by leading organizations.`,
    p4: `OKN encourages all interested applicants, especially youth from project municipalities including those who identify as women and indigenous community members/ minority caste groups in joining the Data Dev Fellowship 2022 program.  All the applications will be reviewed thoroughly, please follow the given instructions carefully to ensure that qualifications are met and that application components are accurate, complete, and submitted on time.`
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
    },
    {
        title: "Email Us",
        url: "info@oknp.org",
        icon: "icon-email",
    },
    {
        title: "Twitter",
        url: "https://twitter.com/okfn_np",
        icon: "icon-twitter",
    },
    {
        title: "Facebook",
        url: "https://www.facebook.com/okfnepal/",
        icon: "icon-twitter",
    },
];

const applicationSummary = {
    title:
        "Application must be completed online and consists of the following components:",
    items: [
        { title: "Personal information", summary: "Including Personal Identification Documentation.", imageUrl: "/information/information3.png" },
        { title: "Motivation Section", summary: "What you expect to learn and yout motivation for this fellowship.", imageUrl: "/information/motivation1.png" },
        { title: "CV/Resume(in pdf CV no longer than 2 pages)", summary: "in pdf CV no longer than 2 pages", imageUrl: "/information/resume.png" },
    ],
};

const selectionCriteria = {
    title: "Fellow must:",
    items: [
        {
            item:
                "Be of 30 years old or younger by the time of applying for the fellowship.",
        },
        {
            item:
                "Be local from the project municipalities or willing to relocate to the project municipality.",
        },
        {
            item:
                "Have a bachelor’s degree IT related courses - Engineering, BSc CSIT, BCA, BIM, etc.",
        },
        {
            item:
                "Have knowledge of or interest in data sciences, open technology and open data.",
        },
        {
            item:
                "Be curious to work with municipality and Information Technology (IT) officers.",
        },
        {
            item:
                "Have strong knowledge and interest in learning data-related technologies including the software required for data scraping, cleaning, analysis and visualization.",
        },
        {
            item:
                "Have excellent communication skills in Nepali and English. Knowledge of the local language would be preferred.",
        },
        { item: "Have outstanding personal character and integrity." },
        { item: "Have teamwork and collaborative skills." },
    ],
};

const keyResponsibilities = {
    title: "Fellows will be responsible for:",
    items: [
        {
            item:
                "Collaborating with the IT officer and municipal data focal personnel for day-to-day capacity transfer.",
        },
        {
            item:
                "Working closely with the municipal personnel to compile datasets and standardize and integrate them into IDMS.",
        },
        {
            item:
                "Supporting their assigned municipality to administer and operationalize municipal level IDMS.",
        },
        {
            item:
                "Reporting and documenting the progress/challenges and sharing the case studies.",
        },
    ],
};

const benifits = {
    title: "Benifits:",
    items: [
        {
            title: "Upskilling",
            body:
                "Online and in-person training on data pipeline and various other data aspects.",
            imageUrl: "/information/training.png",
            summary: "Upskilling and training on data",
        },
        {
            title: "Earning",
            body: "Stipend NRP 30,000 per month during the course of the Fellowship.",
            imageUrl: "/information/cash.png",
            summary: "Monthly stipend for period of fellowship",
        },
        {
            title: "Networking",
            body:
                "Opportunity to work closely with Mayor, CAO, IT professionals, and Government officials at the working station.",
            imageUrl: "/information/handshake.png",
            summary: "Opportunity to work with Mayor, CAO, IT professionals, and Government officials",
        },
        {
            title: "Trainings",
            body:
                "Opportunity to participate in various capacity-building workshops and training.",
            imageUrl: "/information/training.png",
            summary: "Opportunities for workshops, trainings",
        },
        {
            title: "Certificates",
            body: "Graduation Certificate of the fellowship.",
            imageUrl: "/information/certificate.png",
            summary: "Graduation Certificate of the fellowship.",
        },
        {
            title: "Job",
            body: "Potential job placement.",
            imageUrl: "/information/job.png",
            summary: "Potential job placement.",

        },
    ],
};

const projectMunicipality = [
    {
        Province: "Lumbini Province",
        District: "Dang",
        LocalGovernment: "Tulsipur Sub-Metropolitan City",
    },
    {
        Province: "Madhesh Province",
        District: "Parsa",
        LocalGovernment: "Birgunj Metropolitan City",
    },
    {
        Province: "Karnali Province",
        District: "Surkhet",
        LocalGovernment: "Simta Rural Municipality",
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
        date: 'October 15, 2022',
        category: {
            tag: 'deadline',
            color: '#E17B77'
        },
    },
    {
        text: 'Selected fellows will be informed',
        date: 'October 20, 2022 ',
        category: {
            tag: 'result',
            color: '#1B3E76'
        },
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
    timelineData
};
