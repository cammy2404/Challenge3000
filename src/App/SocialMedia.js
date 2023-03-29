import { justGivingLink, 
  samhLink, 
  instagramLink,
  samhFacebookLink,
  samhTwitterLink
} from "./Content/contentLinks";

function SocialMedia() {

  return (
    <>
      <div style={{textAlign: 'center'}}>
        <h1>Social Media</h1>
        <a href={justGivingLink} target="_blank" rel="noopener noreferrer" className='highlight'>
          <h2>Donation Page</h2>
        </a>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className='highlight'>
          <h2>Instagram</h2>
        </a>

        <h1 style={{paddingTop:'15px'}}>SAMH Social Media</h1>
        <a href={samhLink} target="_blank" rel="noopener noreferrer" className='highlight'>
          <h2>SAMH Website</h2>
        </a>
        <a href={samhFacebookLink} target="_blank" rel="noopener noreferrer" className='highlight'>
          <h2>SAMH Facebook</h2>
        </a>
        <a href={samhTwitterLink} target="_blank" rel="noopener noreferrer" className='highlight'>
          <h2>SAMH Twitter</h2>
        </a>
      </div>
    </>
  )

}

export default SocialMedia;
