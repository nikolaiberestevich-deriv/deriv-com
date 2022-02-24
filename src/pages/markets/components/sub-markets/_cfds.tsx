import React from 'react'
import styled from 'styled-components'
import AvailablePlatforms from '../helper/_available-platforms'
import { ContentWrapper, Descriptions, StyledText } from '../../static/style/_markets-style'
import MarketInstruments from '../sections/_market_instruments'
import type { MarketInstrumentsElement } from 'pages/markets/components/sections/_market_instruments'
import { SectionContainer } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device'
import { DerivStore } from 'store'

type CFDProps = {
    market_content: MarketInstrumentsElement
    market_tab_name?: string
}

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 24px 0 40px;
    }
`

const CFDs = ({ market_content, market_tab_name }: CFDProps) => {
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <StyledSection padding="4rem 0 8rem">
            <ContentWrapper>
                <Descriptions>
                    <StyledText align="center" font_size="14px">
                        {localize(
                            'CFD trading allows you to bet on the price movement of the underlying asset without purchasing it.',
                        )}
                    </StyledText>
                    <StyledText align="center" mt="16px" font_size="14px">
                        {is_eu_country
                            ? localize(
                                  'On Deriv, trading CFDs on leverage lets you pay only a small fraction of the contract’s value and amplify your potential profit, similarly increasing your potential loss.',
                              )
                            : localize(
                                  'On Deriv, trading CFDs with high leverage lets you pay only a small fraction of the contract’s value and amplify your potential profit, similarly increasing your potential loss.',
                              )}
                    </StyledText>
                    {market_tab_name && market_tab_name === 'stock-indices' ? (
                        <AvailablePlatforms dmt5 />
                    ) : (
                        <AvailablePlatforms dmt5 derivx />
                    )}
                </Descriptions>
                <StyledText font_size="14px" weight="bold" mt="4rem">
                    {localize('Instruments available for CFD trading')}
                </StyledText>
                <MarketInstruments market_content={market_content} />
            </ContentWrapper>
        </StyledSection>
    )
}

export default CFDs
