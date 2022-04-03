import styled from 'styled-components';
import { Card } from '../../common-components/Card/Card';
import { Caption } from '../../common-components/Caption/Caption';
import { Description } from '../../common-components/Description/Description';
import { HeadingTwo } from '../../common-components/HeadingTwo/HeadingTwo';
import { ButtonLink } from '../../common-components/ButtonLink/ButtonLink';
import {
	BorderRadiuses,
	Colors,
	Shadows,
	Spaces,
} from '../../shared/DesignTokens';

const InformationGrid = styled(div)`
	display: grid;
	grid-template-columns: 1fr 70px;
	gap: ${Spaces.TWO};
`;

const HeroAvatar = styled.div`
	width: 100%;
	height: 70px;
	box-shadow: ${Shadows.ONE};
	border-radius: ${BorderRadiuses.ONE};
	background-image: url('${(props) => props.src}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export function HeroCard() {
	return (
		<Card>
			<InformationGrid>
				<div>
					<Caption as="div" color={Colors.GRAY_600}>
						Bruce Wayne
					</Caption>
					<div mb={Spaces.ONE}>
						<HeadingTwo>Batman</HeadingTwo>
					</div>
					<Description as="div" color={Colors.GRAY_700}>
						<strong>Universo:</strong> DC Comics
					</Description>
					<Description as="div" color={Colors.GRAY_700}>
						<strong>Nota atual:</strong> 5
					</Description>
				</div>
				<HeroAvatar src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg" />
			</InformationGrid>
			<div >
				<ButtonLink>Ver Mais</ButtonLink>
			</div>
		</Card>
	);
}