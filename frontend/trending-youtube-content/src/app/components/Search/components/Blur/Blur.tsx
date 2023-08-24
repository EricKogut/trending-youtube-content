import { useBreakpointValue, IconProps, Icon } from '@chakra-ui/react';

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: -1 })}
      height='700px'
      viewBox='0 0 528 560'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <circle cx='71' cy='61' r='200' fill='#9e5ffc' />
      <circle cx='244' cy='106' r='139' fill='#47b8fc' />
      <circle cy='291' r='139' fill='#5e9ffc' />
      <circle cx='80.5' cy='189.5' r='101.5' fill='#1ae5fc' />
      <circle cx='196.5' cy='317.5' r='101.5' fill='#ec10fc' />
      <circle cx='70.5' cy='458.5' r='101.5' fill='#ca33fc' />
      <circle cx='426.5' cy='-0.5' r='101.5' fill='#d424fc' />
    </Icon>
  );
};
