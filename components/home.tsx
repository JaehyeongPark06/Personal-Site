import { GITHUB_LINK, LINKEDIN_LINK, RESUME_LINK } from '../utils/constants'
import { IconDefinition, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import FontAwesomeLink from '../styled/FontAwesomeLink'
import styled from 'styled-components'

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.8rem;
`
interface FontAwesomeIcons {
  readonly icon: IconDefinition
  readonly link: string
}

export function Identify(): JSX.Element {
  const fontAwesomeIcons: readonly FontAwesomeIcons[] = [
    {
      icon: faGithub,
      link: GITHUB_LINK
    },
    {
      icon: faLinkedin,
      link: LINKEDIN_LINK
    },
    {
      icon: faFileAlt,
      link: RESUME_LINK
    }
  ]

  return (
    <>
      <div className="w-full fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <h1 className="font-semibold text-gray-300 sm:text-title2 lmdl:text-title1 mdl:text-title5">
          Jaehyeong Park
        </h1>
        <h2 className="font-normal text-gray-300 mt-0.25 sm:text-desc3 lmdl:text-desc1">
          High School Student & Web Developer
        </h2>
        <IconContainer>
          {fontAwesomeIcons.map(({ icon, link }) => (
            <FontAwesomeLink key={link} icon={icon} link={link} />
          ))}
        </IconContainer>
      </div>
    </>
  )
}
