import '@fortawesome/fontawesome-svg-core/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GRAY_COLOR } from '../utils/colors'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import styled from 'styled-components'

const FONT_SIZE = '1.7rem'
const FONT_TABLET_SIZE = '2rem'

const FontAwesomeContainer = styled(FontAwesomeIcon)`
  font-size: ${FONT_SIZE};
  margin: 0 0.5rem 0;
  cursor: pointer;
  color: #666666;

  :hover {
    color: ${GRAY_COLOR};
  }

  @media (max-width: 1024px) {
    font-size: 2.8rem;
    margin: 0 0.6rem 0;
    font-size: ${FONT_TABLET_SIZE};
  }

  @media (max-width: 440px) {
    font-size: ${FONT_SIZE};
  }
`

interface FontAwesomeLinkProps {
  readonly icon: IconDefinition
  readonly link: string
}

export default function FontAwesomeLink({ icon, link }: FontAwesomeLinkProps): JSX.Element {
  return (
    <a href={link} target="_blank">
      <FontAwesomeContainer icon={icon} />
    </a>
  )
}
