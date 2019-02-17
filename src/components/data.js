const navigationMenu = {
    nav: ['Home', 'About', 'Join Why?', 'Host organization', 'Faq', 'Apply']
};

const aboutFellowship = '"Open Data Fellowship - Women Edition" is an initiative of Open Knowledge Nepal. The main motive behind the fellowship is to increase the number of women leaders in the field of open data in Nepal and use the existing expertise of different organizations to provide a good exposure to women and equip them with valuable work experience, confidence and skills that will help them to better understand the data ecosystem and potential opportunities. The fellowships offer the opportunity to connect with business groups, governments and individuals in the data community. \n' +
    'During the time of fellowship, the fellow will visit various host organizations for a half day in-house training which will be followed by the one-month placement in a respective organization. For the first edition, we will be selecting 10 women fellows. The application will be open until 10th March 2019, 12 PM NST.'

const whyShouldIJoin = [
    {
        title: 'Understand data ecosystem',
        body: 'Fellowship will provide you an opportunity to understand the data ecosystem and its various stakeholders.',
        icon: 'icon-ecosystem'
    }, {
        title: 'Networking',
        body: 'Fellowship will provide you an opportunity to broaden the horizon of your networking circle.\n',
        icon: 'icon-Networking'
    }, {
        title: 'Enhance your confidence and skills',
        body: 'Fellowship will provide you an opportunity to learn, enhance new skills and boost your confidence level through weekly group mentoring and in-house training.',
        icon: 'icon-achievement'
    }, {
        title: 'Gain valuable work experience',
        body: 'During the time of fellowship, you will get an opportunity to work hand to hand with different leading organizations of their respective field.  This one month of valuable work experience will surely help in your career ahead.',
        icon: 'icon-experience'
    }, {
        title: 'Grab potential opportunities',
        body: 'Explore the various potential opportunities in the field of data with the help of mentors. Grab it for the betterment of your career.',
        icon: 'icon-opportunities'
    }, {
        title: 'Be the role model',
        body: 'Be the inspirational role model by being a Open Data Women Fellow of first batch. Also set an example for the next batch.',
        icon: 'icon-role-model'
    },
]

const FAQ = [
    {
        title: ' Who can apply to become a fellow?',
        body: 'Any woman who is a current resident of Nepal are eligible to apply. But we encourage final year students who are currently pursuing their bachelor’s degree.'
    }, {
        title: 'How can I apply?',
        body: 'Complete the online application, selected fellow will be informed by 20th March 2019.'
    }, {
        title: 'How many fellows will be recruited this year?',
        body: 'We will be recruiting only 10 fellows for the first batch.'

    }, {
        title: 'How much time are the fellows expected to dedicate?',
        body: 'Fellows are expected to dedicate one and half months. One month for working in a respective organization  and a half month for training, meetup and various get-together events.'
    }, {
        title: 'How is the training programme structured?',
        body: 'Half day in-house training at the host organization and one month project based placement. The fellows will be provided with some stipend to cover travel and lunch.'
    }, {
        title: 'What kind of activities will the fellows carry out?',
        body: 'Fellows will go through a series of training and workshops to sharpen their data and communication skills before the placement. At host organization, they can work on various kinds of projects like: opening up datasets, case studies, research, data-driven blog posts, developing open source software libraries etc. But we encourage to work on projects that can match with the respective organization’s objectives.'
    },


]

const hostLogos = [
    {
        url: '/hosts/accountabilitylab.png',
        name: 'Accountailtiy Lab',
        order: 1
    }, {
        url: '/hosts/bikashudahyami.png',
        name: 'BikashUdayami',
        order: 1
    }, {
        url: '/hosts/cleanupNepal.png',
        name: 'Cleanup Nepal',
        order: 1
    }, {
        url: '/hosts/F4DM.png',
        name: '',
        order: 1
    }, {
        url: '/hosts/freedomForum.png',
        name: 'Freedom Forum',
        order: 1
    }, {
        url: '/hosts/KLL.png',
        name: 'Kathmandu living Labs',
        order: 1
    }, {
        url: '/hosts/pathway.png',
        name: 'Pathway Technologies',
        order: 1
    }, {
        url: '/hosts/younginnovation.png',
        name: 'Young Innovation',
        order: 1
    }, {
        url: '/hosts/yuwa.png',
        name: 'Yuwa',
        order: 1
    },

];

const footerLink = [
    {
        title: 'About Us',
        url: 'http://oknp.org/',
        icon: 'icon-about-us'
    },
    {
        title: 'Email Us',
        url: 'info@oknp.org',
        icon: 'icon-email'
    },
    {
        title: 'Twitter',
        url: 'https://twitter.com/okfn_np',
        icon: 'icon-twitter'
    },
    {
        title: 'Facebook',
        url: 'https://www.facebook.com/okfnepal/',
        icon: 'icon-twitter'
    },
];
export {
    navigationMenu,
    whyShouldIJoin,
    aboutFellowship,
    FAQ,
    hostLogos,
    footerLink
}
