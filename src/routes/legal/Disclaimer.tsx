import { Component } from 'react'
import { Title, Text } from '@gnosis.pm/safe-react-components'
import Page from 'src/components/layout/Page'
import Block from 'src/components/layout/Block'

class Terms extends Component {
  render(): JSX.Element {
    return (
      <Page align="center">
        <Block>
          <Title size="md" strong>
            Disclaimer
          </Title>
          <Title size="sm">To the maximum extent permitted by applicable law:</Title>

          <Text size="md">
            <p>
              Services provided by us will be provided “as is” and “as available” and we do not warrant that it will be
              uninterrupted or error free. Your access and use of our services is entirely at your sole risk and we will
              not be responsible for any actions you take based on our services.
            </p>
            <p>
              We hereby disclaim all warranties, express, statutory or implied (including, without limitation, implied
              warranties of title, non-infringement, merchantability and fitness for a particular purpose) as to the
              results that might be obtained or losses that may result from the use of our services.
            </p>
          </Text>
        </Block>
      </Page>
    )
  }
}

export default Terms
