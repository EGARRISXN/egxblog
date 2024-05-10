import {FaGithub, FaDiscord, FaInstagram, FaLinkedin, FaSpotify, FaXTwitter} from 'react-icons/fa6'

const SocialIcons = () => {
  return (
    <>
      <a href='https://github.com/egarrisxn' target='_blank' rel='noopener noreferrer'>
        <FaGithub />
      </a>
      <a
        href='https://www.linkedin.com/in/ethan-garrison'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaLinkedin />
      </a>
      <a href='https://twitter.com/eg_xo_' target='_blank' rel='noopener noreferrer'>
        <FaXTwitter />
      </a>
      <a href='https://www.instagram.com/eg___xo' target='_blank' rel='noopener noreferrer'>
        <FaInstagram />
      </a>
      <a href='https://open.spotify.com/user/egarrisxn' target='_blank' rel='noopener noreferrer'>
        <FaSpotify />
      </a>
      <a href='https://discord.com/users/eg___xo' target='_blank' rel='noopener noreferrer'>
        <FaDiscord />
      </a>
    </>
  )
}

export default SocialIcons
