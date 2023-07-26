import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import ExperienceItem from '../common/ExperienceItem';

export default function Experience() {
	return (
		<Box
			zIndex={10}
			borderRadius={10}
			backgroundColor={useColorModeValue('whiteAlpha.700', 'blackAlpha.700')}
			m={8}
			p={8}
			id="Experience"
			sx={{ scrollMarginTop: '100px' }}>
			<Heading size={'lg'}>{'<Experience>'}</Heading>
			<Flex
				flexWrap={'wrap'}
				justifyContent={'center'}
				alignItems={'flex-start'}>
				<ExperienceItem
					companyName="Facebook"
					imgUrl="/imgs/fbLogo.png"
					role="FBU Software Engineer Intern"
					year="2020"
					m={8}
					maxWidth={150}
				/>
				<ExperienceItem
					companyName="UF Bio Lab"
					imgUrl="/imgs/ufBioLogo.jpg"
					role="Undergradute Research Assistant"
					year="2020 - 2021"
					m={8}
					maxWidth={150}
				/>
				<ExperienceItem
					companyName="Oculus"
					imgUrl="/imgs/oculusLogo.png"
					role="Software Engineer Intern"
					year="2021"
					m={8}
					maxWidth={150}
				/>

				<ExperienceItem
					companyName="Meta"
					imgUrl="/imgs/metaLogo.png"
					role="Software Engineer"
					year="2022"
					m={8}
					maxWidth={150}
				/>
				<ExperienceItem
					companyName="Commerce Canal"
					imgUrl="/imgs/wrappedCCLogo.png"
					role="Software Engineer"
					year="2023"
					m={8}
					maxWidth={150}
				/>
			</Flex>
		</Box>
	);
}
