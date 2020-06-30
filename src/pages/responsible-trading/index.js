import React from 'react'
import styled from 'styled-components'
import TradingLimits from './_trading-limits'
import { RoleBanner } from './banner'
import { SEO, SectionContainer, Container, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
// import { LinkButton } from 'components/form'
import { Header, Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import NoneEuBackground from 'images/common/responsible-trading-bg.png'
import EuBackground from 'images/common/responsible-trading-eu-bg.png'
import { isEuCountry } from 'common/country-base'

const Hero = styled(Flex)`
    padding: 12rem 0 8rem;
    background-image: url(${(props) => props.background_image});
    background-position: center;
    background-size: cover;
`
const Section = styled(SectionContainer)`
    padding: 0;
`
const HeroHeader = styled(Header)`
    font-size: var(--text-size-xxl);
    text-align: center;
    color: var(--color-white);
    line-height: 1.25;
    margin-bottom: 1.6rem;
`
const HeroText = styled(Text)`
    text-align: center;
    max-width: 79.2rem;
    margin: 0 auto;
    color: var(--color-white);
`
const ResponsibleTrading = () => {
    const HeroBackground = isEuCountry ? EuBackground : NoneEuBackground
    return (
        <Layout>
            <SEO
                title={localize('Secure and responsible online trading guidelines | Deriv')}
                description={localize(
                    'Read our guidelines on secure and responsible trading. Understand the risks involved in online trading and how you can manage them.',
                )}
            />
            <Section>
                <Hero background_image={HeroBackground}>
                    <Container>
                        <Flex direction="column">
                            <HeroHeader>{localize('Secure and responsible trading')}</HeroHeader>
                            <HeroText>{localize(isEuCountry ? '' : '')}</HeroText>
                        </Flex>
                    </Container>
                </Hero>
                <TradingLimits></TradingLimits>
                <RoleBanner />
            </Section>
        </Layout>
    )
}

export default WithIntl()(ResponsibleTrading)
