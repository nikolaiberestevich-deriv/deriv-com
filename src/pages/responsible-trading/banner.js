import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, Header } from 'components/elements'
import { Flex } from 'components/containers'
import { Button } from 'components/form'
import { localize } from 'components/localization'

const Section = styled.section`
    background-color: var(--color-black-3);
    padding: 3.2rem 0;

    ${Header} {
        padding-bottom: 0.8rem;
    }
    ${Text} {
        max-width: 55.9rem;
    }
`

export const Banner = ({ header, p1, button_text }) => (
    <Section>
        <Flex direction="column" ai="center">
            <Header align="center" as="h3" color="white">
                {header}
            </Header>
            <Text align="center" color="white" pb="3rem">
                {p1}
            </Text>
            <a href="/signup">
                <Button secondary="true">{button_text}</Button>
            </a>
        </Flex>
    </Section>
)

export const RoleBanner = () => (
    <Banner
        header={localize('New to trading?')}
        p1={localize(
            'Use our demo account and learn how to trade by using risk-free virtual funds.',
        )}
        button_text={localize('Create free demo account')}
    />
)

Banner.propTypes = {
    button_text: PropTypes.string,
    header: PropTypes.string,
    p1: PropTypes.string,
}
