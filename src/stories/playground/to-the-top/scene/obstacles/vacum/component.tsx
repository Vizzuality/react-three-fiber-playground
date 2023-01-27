import { Attractor } from "@react-three/rapier";

export interface VacumProps {}

function Vacum(props: any) {
  return (
    <Attractor
      type="linear"
      range={5}
      strength={0.1}
      {...props}
    />
  );
}

export default Vacum;
