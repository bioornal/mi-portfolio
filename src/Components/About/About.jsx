// import GitHubIcon from '@material-ui/icons/GitHub'
// import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio.jsx'
import Photo from '../Photo'
import './About.css'


const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <Photo />
      {name && (
        <h1 className='hola'>
          Hola, me llamo <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>Soy {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} download="CV.pdf">
            <span type='button' className='btn btn--outline'>
              CV
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                {/* <GitHubIcon /> */}
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                {/* <LinkedInIcon /> */}
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
