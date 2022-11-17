const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/bioornal',
  title: 'ACERCA DE MI',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Christian Speziali',
  role: 'Fullstack Developer',
  description:
    'Frontend - Backend',
  resume: 'https://drive.google.com/file/d/10pjJ0epwU2v17bMka8pu9SrjMQtqPcaC/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/christian-speziali-b23269211/',
    github: 'https://github.com/bioornal',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Projecto PI Henry Countries',
    description:
      'Mi primer SPA, en el cual se hace uso de una API externa y se utilizaron tecnologias como React - Redux - Node - Express / Sequelize. Fue el proyecto individual con el cual aprobé mis estudios del bootcamp de Academia Henry',
    stack: ['React', 'Redux', 'Node', 'Express', 'Sequelize', 'PotsgreSQL'],
    sourceCode: 'https://github.com/bioornal/PI-Countries',
    livePreview: 'https://deploy-pi-client-three.vercel.app/',
  },
  {
    name: 'Proyecto Qatar e-commerce',
    description:
      'Mi proyecto Final en Henry, con el cual me gradue. Fui parte de un grupo de 8 personas. Se trata de un sitio relacionado con la compra de productos del mundial Qatar 2022, el cual incluye carrito de compras, pasarela de pago, filtros, reviews, sistema de login, panel de admin, etc',
    stack: ['React', 'Redux', 'Bootstrap', 'React-Hook-form', 'Auth0', 'Node', 'Express', 'Sequelize', 'PotsgreSQL'],
    sourceCode: 'https://github.com/bioornal/Qatar-e-commerce',
    livePreview: 'https://eccomercepf.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'React',
  'Redux',
  'Node JS',
  'PostgreSQL',
  'Express',
  'Sequelize',
  'Auth0',
  'Postman',
  'Trello',
  'Git',
  'Github',
  'Photoshop',
  'Corel Draw'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'spezialichristian@gmail.com',
}

export { header, about, projects, skills, contact }
