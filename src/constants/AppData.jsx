
export const AppData =
    [
        getPersonalDetail(), getResume(), getContact()
    ]

function getPersonalDetail() {
    return ({
        personal: {
            f_name: 'Samm',
            l_name: 'Wakeni',
            b_date: '05 May 1991',
            gender: 'Male',
            slangs: 'Isixhosa, Isizulu, English',
            status: 'Single',
            c_city: 'East London, South Africa',
            intro: 'I am dedicated to continuously enhancing my skills and staying at the forefront of technological advancements.' +
                'My expertise and experience make me a valuable asset in delivering exceptional software solutions. ',
            info: 'I am an experienced full-stack web developer and freelance digital marketer with a proven track record of ' +
                'over five years in the industry. My professional profile is characterized by strong interpersonal skills, cultural' +
                ' sensitivity, and the ability to establish effective relationships within diverse and multicultural workforces. Notably,' +
                ' I excel in maintaining self-motivation, enabling me to thrive in high-pressure situations and meet aggressive deadlines ' +
                'in any challenging environment. A highly analytical thinker, I possess the capability to swiftly identify, analyze, enhance,' +
                ' and streamline complex work processes, facilitating modernization efforts.  ',
            jobs: [
                "Fullstack Developer", "Graphic Designer",
                "Support Technician", "Digital Marketer",
                "Freelancer", "Startup Entrepreneur"
            ],
            contact: [
                '+27672236813', '+27785639221',
                'origintech.inc@gmail.com',
            ],
            social: [
                'https://www.linkedin.com/in/samkelwe-wakeni-89504920b/',
                'https://github.com/oritech-inc/',
                'https://web.facebook.com/CoolClassCartel/',
                'https://twitter.com/samm80659810',
            ]
        },
    })
}

function getContact() {
    return ({
        contacts: {
            detail: [
                '+27672236813', '+27785639221',
                'origintech.inc@gmail.com',
            ],
            social: [
                'https://www.linkedin.com/in/samkelwe-wakeni-89504920b/',
                'https://github.com/oritech-inc/',
                '+27672236813',
                'https://web.facebook.com/CoolClassCartel/',
                'https://twitter.com/samm80659810',
            ]
        }
    })
}

function getResume() {
    return ({
        experience: {
            _works: {},
            skills: {},
            school: {},
        }
    })
}