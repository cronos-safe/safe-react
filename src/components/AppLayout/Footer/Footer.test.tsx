import Footer from './index'
import { render, fireEvent, screen } from 'src/utils/test-utils'
import { DISCLAIMER_ROUTE } from 'src/routes/routes'

describe('<Footer>', () => {
  it('Should render Footer component', () => {
    const { container } = render(<Footer />)

    const footerNode = container.querySelector('footer')

    expect(footerNode).toBeInTheDocument()
  })

  it('Should show footer links', () => {
    render(<Footer />)

    const gnosisCopyrightNode = screen.getByText(/©\d{4} Cronos/)

    expect(gnosisCopyrightNode).toBeInTheDocument()

    const termsLinkNode = screen.getByText('Terms')
    expect(termsLinkNode).toBeInTheDocument()

    const privacyLinkNode = screen.getByText('Privacy')
    expect(privacyLinkNode).toBeInTheDocument()

    const LicensesLinkNode = screen.getByText('Licenses')
    expect(LicensesLinkNode).toBeInTheDocument()

    const imprintLinkNode = screen.getByText('Imprint')
    expect(imprintLinkNode).toBeInTheDocument()

    const cookiePolicyLinkNode = screen.getByText('Cookie Policy')
    expect(cookiePolicyLinkNode).toBeInTheDocument()

    const preferencesLinkNode = screen.getByText('Preferences')
    expect(preferencesLinkNode).toBeInTheDocument()
  })

  it('Should redirect to Disclaimer page', () => {
    render(<Footer />)

    const privacyLinkNode = screen.getByText('Disclaimer')

    expect(privacyLinkNode).toHaveAttribute('href', DISCLAIMER_ROUTE)
  })

  it('Should redirect to Licenses page in a new tab', () => {
    render(<Footer />)

    const LicensesLinkNode = screen.getByText('Licenses')

    expect(LicensesLinkNode).toHaveAttribute('href', 'https://gnosis-safe.io/licenses')
    expect(LicensesLinkNode).toHaveAttribute('target', '_blank')
  })

  it('Should show the current Safe React version if its defined in environment variables', () => {
    process.env.REACT_APP_APP_VERSION = '1.1.1'

    render(<Footer />)

    const safeReactVersionNode = screen.getByText('v1.1.1')

    expect(safeReactVersionNode).toBeInTheDocument()
    expect(safeReactVersionNode).toHaveAttribute('href', 'https://github.com/gnosis/safe-react/releases')
    expect(safeReactVersionNode).toHaveAttribute('target', '_blank')
  })

  it('should show Versions text if no version of Safe React is defined', () => {
    process.env.REACT_APP_APP_VERSION = undefined

    render(<Footer />)

    const safeReactVersionNode = screen.getByText('Versions')

    expect(safeReactVersionNode).toBeInTheDocument()
    expect(safeReactVersionNode).toHaveAttribute('href', 'https://github.com/gnosis/safe-react/releases')
    expect(safeReactVersionNode).toHaveAttribute('target', '_blank')
  })
})
