const intros = [
    `The services provided under the public sector accounting (IPSAS compliant) is to
    assist Government agencies and parastatals to develop and install systems that
    will effectively and accurately record financial transactions in books of account so
    as to ensure strict compliance with Government Financial Regulation, Procedures
    and Laws. Services are also provided in the area of revenue collection, monitoring and reconciliations.`,

    `Section 357 (1) of the Companies and Allied Matters Decree No.1 of 1990 makes
    it mandatory for every Limited Liability Company operating in the Nigerian Economy to appoint Statutory Auditors every year to perform the function set out in
    Section 360 of the said Decree. An Audit is the independent examination of, and
    expression of opinion on the financial statement of an enterprise by an appointed
    Auditor in pursuance of that appointment and in compliance with any relevant
    laws and regulations.`,

    `An investigation is an enquiry commissioned for a specific purpose. This is normally required in the following areas:
    . Investment decisions
    . Accountants Reports for prospectus purposes.
    . Report on profit forecast included in a prospectus.
    . Frauds.
    . Loss of profits or the profitability of a specific factory or product.
    . Matter concerning the Inland Revenue e.g. back duty cases.
    . Forensic Reports for Court Cases and Legal Matters.`,

    `Services are provided here for the client to take full advantage of professional tax
    planning so as to enable the corporate and individual tax payer enjoy all the reliefs
    that are provided under the law.`,

    `This provide services in the area of feasibility report writing, personnel recruitment, registration and incorporation of business names and companies respectively, management (staff) audit, budget preparation and cash flow projecting,
    computer hardware and software selection and system implementation.`,

    `Filing of Annual Returns with Corporate Affairs Commission, effecting changes to
    Form Co2 (share capital), Form Co6 (Registered Office), Form Co7 (Directors),
    keeping of the Minutes Book, and taking minutes of the Board Meetings and
    AGM.`
]

const style = [
    'flex w-[100px] h-[110px]',
    'w-[70px] h-[68px]',
    'w-[70px] h-[70px]',
    'text-[19px] text-white font-[Neue-bold] capitalize',
    'line-clamp-4 text-[#d6d5d7] font-[Neue-regular]',
];

const srvc_details = [
    {name: 'Public Sector Accounting', img: '/images/public-sector.png', intro: intros[0], head: style[3], para: style[4], img_style: style[1]},
    {name: 'Statutory Audit', img: '/images/stat-audit.png', intro: intros[1], head: style[3], para: style[4], img_style: style[2]},
    {name: 'Investigation And Forensic Audit', img: '/images/forensic-audit.png', intro: intros[2], head: style[3], para: style[4], img_style: style[2]},
    {name: 'Tax Consultancy', img: '/images/tax.png', intro: intros[3], head: style[3], para: style[4], img_style: style[2]},
    {name: 'Management Consultancy', img: '/images/management.png', intro: intros[4], head: style[3], para: style[4], img_style: style[2]},
    {name: 'Secretarial Services', img: '/images/services.png', intro: intros[5], head: style[3], para: style[4], img_style: style[2]}
]


/* TEAM.js */

const abouts = [
    `She is a seasoned accountant and financial expert with vast
    experience in different sectors of the economy. She has a
    Higher National Diploma from Yaba College of Technology.`,

    `Oladeinde Olawale Sunday is a graduate of accounting from
    Lagos State University with numerous IT (Information Technology) certificates. He also has a post-qualification experience in
    project management Application, Accounting Software and
    Advance Inventory management, he is an associate of the
    Institute of Chartered Accountant of Nigeria and Nigerian
    Institute of Management.`,

    `Taofeeq is an accounting graduate from the prestigious
    University of Lagos, a member of the institute of chartered
    economists with over 12 years practical experience in
    accounting and audit compliance.`
]

const move = [
    'absolute bg-[#0d202b] grid grid-cols-[100px_20px_auto] grid-rows-[20px_20px_30px_30px_65px] w-[400px] h-[200px] p-[20px_10px_20px_10px] rounded-[7px] z-0 left-[20%] drop-shadow-[-5px_2px_5px_rgba(13,13,13,0.5)]',
    'absolute bg-[#0d202b] grid grid-cols-[100px_20px_auto] grid-rows-[20px_20px_30px_30px_65px] w-[400px] h-[200px] p-[20px_10px_20px_10px] rounded-[7px] z-10 left-[35%] drop-shadow-[-5px_2px_5px_rgba(13,13,13,0.5)]',
    'absolute bg-[#0d202b] grid grid-cols-[100px_20px_auto] grid-rows-[20px_20px_30px_30px_65px] w-[400px] h-[200px] p-[20px_10px_20px_10px] rounded-[7px] z-20 left-[50%] drop-shadow-[-5px_2px_5px_rgba(13,13,13,0.5)]'
]

// {name: 'Oladehinde Olawale ', qua: 'B.Sc, ACA, ANIM', pic: '/images/ola.jpg', about: abouts[0], cls: move[0]},
// {name: 'Taofeeq Olabiyi ', qua: 'B.SC AICEN', pic: '/images/sule.jpg', about: abouts[2], cls: [move[2]]}

const about_team = [
    {name: 'Oladehinde Olawale ', qua: 'B.Sc, ACA', pic: '/images/ola.jpg', about: abouts[1], cls: move[0], unq: 2, mv: '', mv2: ''},
    {name: 'Olajumoke Baruwa ', qua: '(Ms.) FCA', pic: '/images/mama.jpeg', about: abouts[0], cls: move[1], unq: 3, idx: 2, mv: '32%', mv2: '46%'},
    {name: 'Taofeeq Olabiyi ', qua: 'B.SC AICEN', pic: '/images/sule.jpg', about: abouts[2], cls: move[2], idx: 3, mv: '51%', mv2: '58%'}
]
const reviewMsg = [
    `The Company is also a registered member of Corporate Affairs Commission. The aim of the firm is to provide quality Professional Services to both private and public sectors of the Nigerian economy.`,
    `The Company is also a registered member of Corporate Affairs Commission. The aim of the firm is to provide quality Professional Services to both private and public sectors of the Nigerian economy.`,
    `The Company is also a registered member of Corporate Affairs Commission. The aim of the firm is to provide quality Professional Services to both private and public sectors of the Nigerian economy.`,
    `The Company is also a registered member of Corporate Affairs Commission. The aim of the firm is to provide quality Professional Services to both private and public sectors of the Nigerian economy.`,
    `The Company is also a registered member of Corporate Affairs Commission. The aim of the firm is to provide quality Professional Services to both private and public sectors of the Nigerian economy.`
]

const review = [
    {repName: 'Doreen James', msg: reviewMsg[0], company: 'Dormai Sign Ltd'},
    {repName: 'Doreen James', msg: reviewMsg[0], company: 'Delexis Healthcare solution'},
    {repName: 'Doreen James', msg: reviewMsg[0], company: 'Ranitax Business Solutions'},
    {repName: 'Doreen James', msg: reviewMsg[0], company: 'Gombot Insurance Brokers Ltd'},
]

const store = [
    {repName: 'Doreen James', msg: reviewMsg[0], company: 'Lagos state Government'}
]

const anime = [
    "animate-[reduce] delay-5s duration-500 direction-normal fill-mode-forwards repeat-1 ease-in flex flex-col justify-between w-[450px] h-[250px] border border-[#0d202b]",
    "animate-[increase] duration-150 direction-normal fill-mode-forwards repeat-1 ease-in flex flex-col justify-between w-[0px] h-[250px] border border-[#0d202b]"
]

export {srvc_details, about_team, review, store, anime};