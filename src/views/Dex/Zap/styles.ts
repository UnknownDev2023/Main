import { ThemeUIStyleObject } from 'theme-ui'
import { buttonHover } from '../styles'

export const styles: Record<string, ThemeUIStyleObject> = {
  liquidityContainer: {
    width: 'auto',
    height: 'fit-content',
    background: 'white2',
    borderRadius: '0px',
    flexDirection: 'column',
    fontWeight: 600,
    fontSize: '14px',
  },
  dexPanelContainer: {
    position: 'relative',
    width: '100%',
    height: '94px',
    background: 'white3',
    padding: '10px',
    borderRadius: '0px',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  zapActionsContainer: {
    position: 'relative',
    width: '100%',
    marginTop: '20px',
  },
  panelTopContainer: {
    width: '100%',
    height: 'auto',
    justifyContent: 'space-between',
  },

  panelBottomContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },

  panelBottomText: {
    opacity: 0.8,
  },

  swapDirectionText: {
    position: 'absolute',
    left: 0,
    top: 0,
    transform: 'translate(0px, -30px)',
  },

  maxButton: {
    background: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',
    height: '22px',
    padding: '0px 8px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: '600',
    ml: '10px',
    transition: 'all .3s linear',
    '&:active': {
      transform: 'scale(0.9)',
    },
    ':hover': buttonHover,
  },
  primaryFlex: {
    minWidth: 'max-content',
    height: '40px',
    background: 'white4',
    padding: '5px 10px',
    borderRadius: '0px',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all .3s linear',
    '&:active': {
      transform: 'scale(0.9)',
    },
    ':hover': { background: 'navMenuLogo' },
  },

  // Token selected text
  tokenText: {
    fontSize: '14px',
    margin: '0px 7.5px',
    textTransform: 'uppercase',
  },
  distributionPanelContainer: {
    position: 'relative',
    width: '100%',
    background: 'white3',
    padding: '10px',
    borderRadius: '0px',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningMessageContainer: {
    flexDirection: 'column',
    background: 'error',
    borderRadius: '0px',
    marginTop: '15px',
    padding: '15px',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translate(0px, -15px)',
  },
  pooledText: {
    fontSize: '12px',
    lineHeight: '18px',
    justifyContent: 'space-between',
    cursor: 'pointer',
  },
  switchStyles: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(56, 56, 56, 1)',
    height: '20px',
    width: '40px',
    '& div': {
      width: '15px',
      height: '15px',
      marginLeft: '4px',
    },
    'input:checked ~ &': {
      backgroundColor: 'yellow',
    },
  },
}
