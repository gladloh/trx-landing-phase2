const CONTENT = {
  // Brand
  pageTitle: "TRX Residences II",
  logoAlt: "TRX Residences",
  logoSrc: "./assets/img/trx-logo.png",
  phaseTag: "II",

  // Hero
  headlineLine1: "The Next Chapter",
  headlineLine2: "of. Life at the Centre",

  // Bottom bar
  whatToExpectLabel: "What to Expect",
  features: [
    { number: "① ", title: "Unrivalled Address", body: "In the heart of Kuala Lumpur's International Financial District." },
    { number: "② ", title: "Integrated City Living", body: "A 17-acre master-planned development of residences, retail, hospitality and business." },
    { number: "③ ", title: "Curated Residences", body: "1-3 bedroom homes designed for modern urban living." },
    { number: "④ ", title: "Exceptional Amenities", body: "Over 100,000 sq ft of lifestyle, wellness and social spaces." },
    { number: "⑤ ", title: "Sustainability Leadership", body: "TRX Residences I is the only residential project in Malaysia to be certified LEED Gold." },
  ],
  ctaButton: "Register your interest",

  // Form labels
  formFields: {
    salutation: "Salutation",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    nationality: "Nationality",
    unitType: "Preferred Unit Type",
  },

  // Form
  submitButton: "Secure your early access",
  disclaimer: "*By submitting, you agree to receive updates from TRX Residences. Your details will be kept strictly confidential.",
  successHeader: "Thank You.",
  successMessage: "We will reach out soon regarding your interest in TRX Residences II.",
  errorHeader: "Sorry.",
  errorMessage: "Please try again.",

  // Checkbox consent (HTML strings — contain inline links with data attributes)
  checkboxPrivacy: {
    en: 'I agree to be bound by the terms of the <a href="#" class="checkbox__link" data-open-privacy>Privacy Policy</a> and to receive news, promotions and marketing materials from you.',
    ms: 'Saya bersetuju untuk diikat dengan terma-terma <a href="#" class="checkbox__link" data-open-privacy>Dasar Privasi</a> dan untuk menerima berita, bahan-bahan promosi &amp; pemasaran daripada anda.',
  },
  checkboxDisclaimer: {
    en: 'By continuing to use and browse this Website, I agree to be bound by the terms of the <a href="#" class="checkbox__link" data-open-disclaimer>Website Disclaimer</a>.',
    ms: 'Dengan penggunaan dan pelayaran Laman Web ini, saya bersetuju untuk diikat dengan terma-terma <a href="#" class="checkbox__link" data-open-disclaimer>Penafian Laman Web</a>.',
  },

  // Policy view titles
  privacyPolicyTitle: "Privacy Policy",
  websiteDisclaimerTitle: "Website Disclaimer",

  // Salutation options
  salutations: ["Mr.", "Ms.", "Mrs.", "Miss.", "Dr."],

  // Dropdown options
  unitTypes: [
    "1BR",
    "2BR",
    "3BR",
  ],

  nationalities: [
    "Malaysian",
    "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguans",
    "Argentinean", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian",
    "Bahraini", "Bangladeshi", "Barbadian", "Barbudans", "Batswana", "Belarusian",
    "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Brazilian",
    "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese", "Burundian", "Cambodian",
    "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean",
    "Chinese", "Colombian", "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban",
    "Cypriot", "Czech", "Danish", "Djibouti", "Dominican", "Dutch", "East Timorese",
    "Ecuadorean", "Egyptian", "Emirian", "Equatorial Guinean", "Eritrean", "Estonian",
    "Ethiopian", "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian",
    "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinea-Bissauan",
    "Guinean", "Guyanese", "Haitian", "Herzegovinian", "Honduran", "Hungarian", "Icelander",
    "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian",
    "Jamaican", "Japanese", "Jordanian", "Kazakhstani", "Kenyan", "Kittian and Nevisian",
    "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan",
    "Liechtensteiner", "Lithuanian", "Luxembourger", "Macedonian", "Malagasy", "Malawian",
    "Maldivan", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian",
    "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", "Moroccan", "Mosotho",
    "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander",
    "Ni-Vanuatu", "Nicaraguan", "Nigerien", "North Korean", "Northern Irish", "Norwegian",
    "Omani", "Pakistani", "Palauan", "Panamanian", "Papua New Guinean", "Paraguayan",
    "Peruvian", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan",
    "Saint Lucian", "Salvadoran", "Samoan", "San Marinese", "Sao Tomean", "Saudi",
    "Scottish", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean",
    "Slovakian", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean",
    "Spanish", "Sri Lankan", "Sudanese", "Surinamer", "Swazi", "Swedish", "Swiss",
    "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan",
    "Trinidadian or Tobagonian", "Tunisian", "Turkish", "Tuvaluan", "Ugandan", "Ukrainian",
    "Uruguayan", "Uzbekistani", "Venezuelan", "Vietnamese", "Welsh", "Yemenite", "Zambian",
    "Zimbabwean",
  ],

  // Privacy Policy
  privacyPolicy: [
    'This Website Privacy Statement applies to this website which is owned by Lendlease Development Malaysia Sdn Bhd (formerly known as Lend Lease Development Malaysia Sdn Bhd) ("Company") under the domain name http://trxresidences.my ("Website"), and the Company is part of the Lendlease Group, which also includes the operating entities which are listed at www.lendlease.com.',
    'Information collected through the Website may be collected by the Company and/or any member of the Lendlease Group (referred to as "we", "us", "our" or "Lendlease Group"), which means Lendlease Corporation Ltd, its subsidiaries, affiliates and/or associated companies in accordance with this Website Privacy Statement. The Lendlease Group treats personal data with respect and integrity. Respect and integrity form part of our core values, which are the foundation for the conduct of the business in all parts of the globe. To that end we have published a Global Privacy Policy which can be viewed at www.lendlease.com The Global Privacy Policy relates generally to the protection of personal data (being information which is capable of identifying an individual) and is applicable to the use of this Website, in addition to this Website Privacy Statement. This Website Privacy Statement explains how personal data will be treated by us (i.e. how we collect, record, hold, use, store, disclose and/or process such personal data) as you access and interact with this Website and your choice with respect to such treatment of your personal data. In the event of any inconsistency between the provisions of this Website Privacy Statement and the Global Privacy Policy, the provisions of this Website Privacy Statement shall prevail for purposes of compliance with the Malaysian Personal Data Protection Act (as may be amended from time to time ("PDPA Act")).',
    'We will post any changes to this Website Privacy Statement on the Website, so we encourage you to check this Website Privacy Statement from time to time. Any personal data collected under this current Website Privacy Statement will be handled in accordance with this Website Privacy Statement. Changes will be effective when you \'accept\' the updated Website Privacy Statement or 30 days after the "Last Updated" date in the revised Website Privacy Statement, whichever comes first. After the changes take effect, all new personal data collected, if any, will be subject to the revised Website Privacy Statement.',
    'In addition to the provisions of this Website Privacy Statement, there may also be specific and additional privacy and data protection provisions that apply to certain sections of this Website, or that apply to you if you are an employee, agent, contractor, or are otherwise employed by a member of the Lendlease Group (for example, provisions relating to your use of technology). Because those specific and additional provisions also relate to your privacy protection, we recommend that you review them wherever they appear. In the event of any inconsistency between the provisions of this Website Privacy Statement and those other specific and additional provisions, the specific and additional provisions will prevail, to the extent that they do not conflict the provisions of the PDPA Act.',
  ],

  // Website Disclaimer
  websiteDisclaimer: [
    'Please read this Disclaimer carefully as this Disclaimer applies to this website under the domain name http://trxresidences.my ("Website"). If you continue to browse and use this Website you are agreeing to comply with and to be bound by the terms set out in this Disclaimer.',
    'The owner of this Website, Lendlease Development Malaysia Sdn Bhd (formerly known as Lend Lease Development Malaysia Sdn Bhd), is referred to in this Disclaimer as "we", "us" or "our". The terms of this Disclaimer and any information you obtain, or have obtained, on or from, this Website, is not intended to form any part of any contract you have entered into, or are entering into, with us.',
    'We may revise this Disclaimer from time to time without notice and such revision will take effect when it is posted on this Website. You should check whether this Disclaimer has been amended since your last visit, by checking the ‘date of publication’ at the bottom of this Disclaimer.',
    { heading: 'Copyright and submitted material' },
    'All materials and information on this Website including without limitation any logo, design, text, information, software, graphic, materials and their arrangement ("Content") are licensed to or owned by us, unless we indicate otherwise. Except where necessary for viewing the Content on the Website or your browser, unless we indicate otherwise, or as permitted under applicable law, you are not authorised to copy, distribute, republish, download, display, post or transmit the Content in any form or by any means including but not limited to electronic, mechanical or otherwise without our prior written permission or the written permission of the copyright owner. You may access and use the Content and this Website for your own personal use, but you are not authorised to use the Content for commercial purposes. Unless expressly permitted otherwise, you are not authorised to do anything to alter, modify or add to the Content.',
    'If you contribute Content to the Website, we may not include that Content or may remove any Content from the Website at any time, for any reason (including, but not limited to, upon receipt of claims or allegations from third parties or authorities relating to such Content or if we are concerned that you may have breached the immediately preceding sentence), or for no reason at all, in our sole and absolute discretion. Any Content contributed by users or comments or materials sent to us through the Website including feedback data, questions, comments and suggestions (collectively "Feedback"), will be deemed to be non-confidential. We may reproduce, use, disclose, exhibit, display, transform, create derivative works and distribute the Content and Feedback to others, without limitation, and use any ideas, concepts, know-how or techniques contained in that Content or Feedback for any purpose whatsoever, including but not limited to developing, manufacturing and marketing products and services incorporating such Content or Feedback.',
    { heading: 'Trade marks' },
    'Any trade marks appearing on this Website are the trade marks of the relevant owners. You are not authorised to use any trade marks that appear on this Website without the written consent of the trade mark owner.',
    { heading: 'Links' },
    'We may provide links on this Website to websites owned, operated or produced by third parties independent of us. However, you should assume that we have no control over and do not monitor these third party websites. We have not verified, make no representations about and cannot accept any liability for these websites. We do not sponsor, endorse or approve the operators of, or any content (including information, products or services) of such websites. Your access to such third party websites may be subject to their own terms of use or disclaimers.',
    'We do not authorise you to create a link to this Website from another website or document without our prior written consent.',
    { heading: 'Privacy' },
    'We treat personal data with respect and integrity. The Website Privacy Statement explains how personal data will be treated as you access and interact with this Website and can be accessed via the ‘Privacy’ link on this Website.',
    { heading: 'User conduct' },
    'You are responsible for all of your activity in connection with accessing the Website. Any fraudulent, abusive, or otherwise illegal activity may be grounds for termination of your access to the Website. You are not authorised to post or transmit, or cause to be posted or transmitted, any communication or solicitation designed or intended to obtain personal data from any Website user.',
    'In accessing this Website, you are not authorised to:',
    { list: [
      'disrupt or interfere with the Website, or any services, system resources, accounts, servers or networks connected to or accessible through this Website or linked websites; disrupt or interfere with any other user\'s enjoyment of this Website or linked websites;',
      'use any robot, spider, other automatic device or manual process to monitor, copy or extract any web pages on the Website, or any of the Content, without our prior written permission;',
      'take any action that imposes an unreasonable or disproportionately large load on the infrastructure of the Website;',
      'reverse engineer, reverse assemble or otherwise attempt to discover source code or other arithmetical formula in respect of the software underlying the infrastructure and processes associated with the Website;',
      'use the Website to violate the security of any computer network, crack passwords or security encryption codes, transfer or store illegal material including material that are deemed threatening or obscene, or engage in any kind of illegal activity;',
      'engage in any kind of illegal, criminal or tortious activity through the use of the Website, including infringement of any third party intellectual property rights (including without limitation copyright, trade marks, patent, trade secrets and confidential information), fraud, child pornography, trafficking in obscene material, violation of applicable export restrictions, drug dealing, gambling, harassment, stalking, spamming, hacking, sending of viruses or other harmful files, or illegal posting of computer passwords or computer code;',
      'attempt to obtain unauthorised access to this Website or parts of this Website that are not opened to public access; or',
      'post or transmit to or via this Website any material that may infringe the intellectual property rights of any third party, or any defamatory, derogatory or offensive material or publication.',
    ] },
    'If we issue you with a password that permits you to access certain parts of this Website, we are entitled to assume – unless there are strong grounds for believing otherwise – that any use of the Website through such access is you or authorised by you, whether in fact authorised or not. You should treat your password as confidential and should not disclose your password to any person, allow anyone else to use your password or use your password for any unauthorised purpose.',
    'You must comply with all applicable local, state, national and international laws and regulations that relate to your use of or activities on this Website. We reserve the right to report potentially criminal activity to appropriate law enforcement agencies.',
    { heading: 'Your Consumer Rights' },
    'Nothing in these Terms is intended to exclude, restrict or modify rights which you may have under any laws (including the Malaysian Consumer Protection Act 1999) which may not be excluded, restricted or modified by agreement ("Your Consumer Rights"). You can find out more about Your Consumer Rights from the Ministry of Domestic Trade, Co-operatives and Consumerism.',
    { heading: 'Limitation of liability' },
    'Subject to Your Consumer Rights, we (including, in this limitation of liability clause, our related corporations\', Lendlease Group\'s, Lendlease Group\'s affiliates and their respective directors, officers, employees, agents and contractors) are not liable to you or any other persons for any losses, damages, liabilities, claims and expenses (including but not limited to legal costs and defence or settlement costs) whatsoever, whether direct or consequential, arising out of or referable to the Content or this Website (or material accessed via this Website), or to access of the Website by you, howsoever caused, whether in contract, tort including negligence, statute or otherwise.',
    { heading: 'Warranties and disclaimers' },
    'The Content and this Website are provided "as is" and "as available". We do not warrant that this Website or the server that operates it is always free from viruses or other corrupted materials or from occasional outages or disruption to service which prevent you from accessing this Website or that the use of this Website will be compatible with the hardware and software you are using to access it. You shall solely bear the entire cost of all necessary servicing, repair or correction of all such hardware and software.',
    'While we take a range of steps to maintain and update the Content and this Website and ensure that they are free from error, parts of the Content and this Website may not be correct, accurate, reliable, complete or up to date from time to time. If you notice any inaccurate, incomplete or out of date Content on the Website, you can help by contacting us as set out on this Website.',
    'We reserve the right to make any change to the Content without notice. We may also make improvements or changes in the products or programs described in the Content or to any concept or any design elements of the product at any time without notice. For example, changes in circumstances after the date of publication may impact upon the accuracy of the Content.',
    'The Content may contain general information about our products and services. Unless expressly stated otherwise, the Content does not:',
    { list: [
      'constitute an offer or inducement to enter into a legally binding contract;',
      'form part of the terms and conditions for our products and services;',
      'purport to provide you with personal financial or investment advice of any kind; or',
      'take account of your particular financial position or requirements.',
    ] },
    'The Website may include information about stocks and their prices. The information made available on stock prices on the Website is provided for convenience only and does not reflect the current or "real time" price of the stock. Images and diagrams on this Website are intended to be a visual aid only and may not necessarily accurately depict the object described.',
    'Your use of this Website including all Content, data or software distributed by, downloaded or accessed from or through this Website is at your own risk. Before taking or refraining from any action in reliance on the Content or this Website, you should make and rely on your own enquiries in relation to, and in evaluation of, the Content including any information, predictions, opinions and statements contained in this Website.',
    { heading: 'Availability of the Website' },
    'The Website is subject to interruption, breakdown, viruses, delays, interception, interference and other errors involving communications networks, computer systems, servers, providers, computer equipment and software. In relation to any device which you use to access the Website, we recommend that you obtain and maintain up-to-date virus, security and intrusion prevention and scanning software which is specifically designed for all devices you use to access the Website.',
    'We reserve the right, without notice and in our sole and absolute discretion, to discontinue, suspend or terminate any service offered by or through this Website as well as this Website at any time. For example, if your server is involved in any attack on any computer system, either with or without your knowledge or complicity, that server may be blocked or its access to the Website may be shut down or restricted while the problem is being investigated or fixed.',
    { heading: 'Indemnity' },
    'You agree to indemnify, defend, hold harmless against us (including our parent company, affiliates, subsidiaries, associate companies, members of the Lendlease Group and Lendlease Group\'s affiliates including those established in the future, as well as the officers, employees, agents, business partners, licensors, and licensees of the above) and keep us (including our parent company, affiliates, subsidiaries, associate companies, members of the Lendlease Group and Lendlease Group\'s affiliates including those established in the future, as well as the officers, employees, agents, licensors, and licensees of the above) indemnified against all claims, damages, actions and proceedings made or brought against us (including our parent company, affiliates, subsidiaries, associate companies, members of the Lendlease Group and Lendlease Group\'s affiliates including those established in the future, as well as the officers, employees, agents, licensors, and licensees of the above) arising from your use of this Website and/or the contents of this Website.',
    { heading: 'Currency' },
    'A reference to "RM" or "Ringgit" throughout this Website is a reference to the legal currency of Malaysia, unless stated otherwise.',
    { heading: 'Applicable law' },
    'The laws of Malaysia apply to this Disclaimer.',
    'Version [v1.0] - Date of Publication [30 Aug 2016]',
  ],

  // Assets
  heroDesktop: "./assets/img/hero-desktop.png",
  heroMobile: "./assets/img/hero-mobile.png",
  geometricPattern: "./assets/svg/geometric-corner.svg",

  // Footer
  footer: {
    links: [
      { label: "THE EXCHANGE TRX", url: "https://www.theexchange.my", color: "red" },
      { label: "ABOUT LENDLEASE", url: "https://www.lendlease.com/my/", color: "blue" },
    ],
    social: [
      { label: "Facebook", url: "https://www.facebook.com/TRXResidences" },
      { label: "Instagram", url: "https://www.instagram.com/trxresidences" },
    ],
  },

  // API — swap endpoint here when confirmed
  apiEndpoint: "https://submit-form.com/pVGPCTieH",
};
