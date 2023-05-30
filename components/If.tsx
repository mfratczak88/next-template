import { FC, PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  satisifed: boolean;
}
const If: FC<Props> = ({ children, satisifed }) => {
  return satisifed ? <>{children}</> : <></>;
};

export default If;
